import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "/src/redux/filtersSlice.js";
import { selectNameFilter } from "/src/redux/filtersSlice.js";
import "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="search-box">
      <label htmlFor="searchField">Find contacts by name</label>
      <input
        type="text"
        id="searchField"
        value={filter}
        onChange={handleFilterChange}
        className="input"
      />
    </div>
  );
};

export default SearchBox;
