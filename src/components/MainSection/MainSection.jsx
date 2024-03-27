import css from "./MainSection.module.css";
import PropTypes from "prop-types";

const MainSection = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

MainSection.propTypes = {
  children: PropTypes.node,
};
export default MainSection;
