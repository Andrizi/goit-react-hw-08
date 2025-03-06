import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div>
      <h2>Find contacts by name:</h2>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
