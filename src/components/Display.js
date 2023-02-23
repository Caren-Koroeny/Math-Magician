import PropTypes from 'prop-types';

const Display = ({ total, operation, next }) => (
  <div className="displayscreen-count-section">
    <span className="input-screen">
      {total}
      {operation}
      {next}
    </span>

  </div>
);

Display.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};
Display.defaultProps = {
  total: 0,
  operation: null,
  next: null,
};

export default Display;
