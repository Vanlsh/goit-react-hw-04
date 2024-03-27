import Form from "../Form/Form";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearch }) => {
  return (
    <header className={css.search}>
      <Form handleSearch={handleSearch} />
    </header>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};
export default SearchBar;
