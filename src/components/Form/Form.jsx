import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Form.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Please, enter the text", { position: "bottom-center" });

const Form = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query.length) {
      notify();
      return;
    }

    handleSearch(query);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
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
          value={value}
          onChange={handleChange}
          autoFocus
        />
      </form>
      <Toaster />
    </>
  );
};
Form.propTypes = {
  handleSearch: PropTypes.func,
};

export default Form;
