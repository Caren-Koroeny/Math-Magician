import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="displayscreen-count-section">
    <span className="input-screen">
      {total}
      {next}
      {operation}
    </span>

  </div>
);

Display.propTypes = {
  total: PropTypes.number,
  next: PropTypes.string,
  operation: PropTypes.string,
};
Display.defaultProps = {
  total: 0,
  next: null,
  operation: null,
};

export default Display;
