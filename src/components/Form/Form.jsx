import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Form.module.css";

const Form = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query.length) return;

    handleSearch(query);
    setValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="Find.."
        name="search"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
};
Form.propTypes = {
  handleSearch: PropTypes.func,
};

export default Form;
