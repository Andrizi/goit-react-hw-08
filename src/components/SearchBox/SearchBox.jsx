import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilters, setNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilters) || "";

  const handleFilterSearch = (event) =>
    dispatch(setNameFilter(event.target.value));

  return (
    <div>
      <h2>Find contacts by name:</h2>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterSearch}
      />
    </div>
  );
}
