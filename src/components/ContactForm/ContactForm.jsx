import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "/src/redux/contactsSlice.js";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: uuidv4(),
            name: values.name,
            number: values.number,
          };
          dispatch(addContact(newContact));
          resetForm();
        }}
      >
        <Form className={styles.formContainer}>
          <label htmlFor="nameField" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="nameField"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor="phoneField" className={styles.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="phoneField"
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
