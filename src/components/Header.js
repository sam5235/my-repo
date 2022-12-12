import PropTypes from "prop-types";
import '.././style.css';
import { useLocation } from "react-router-dom";
import Buttons from "./Buttons";
const Header = ({ title, setShowTask, showTask }) => {
  const location = useLocation();

  return (
    <header>
      <div className="header">
        <div>
          <h1>{title}</h1>
        </div>
        <div style={{"display":"flex","alignItems" : "center"}}>
          {location.pathname === "/" && (
              <Buttons
                setShowTask={setShowTask}
                color={showTask ? "red" : "green"}
                text={showTask ? "close" : "add"}
              />
          )}
        </div>
      </div>
     
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
