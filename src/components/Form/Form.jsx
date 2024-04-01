import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import css from "./Form.module.css";

const Form = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    handleSearch(query);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={css.input}
          placeholder="Search images and photos"
          name="search"
          autoFocus
        />
      </form>
    </>
  );
};
Form.propTypes = {
  handleSearch: PropTypes.func,
};

export default Form;
