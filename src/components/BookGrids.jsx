import PropTypes from 'prop-types';
export default function BookGrids({ children }) {
  return <div>{children}</div>;
}

BookGrids.propTypes = {
  children: PropTypes.node,
};
