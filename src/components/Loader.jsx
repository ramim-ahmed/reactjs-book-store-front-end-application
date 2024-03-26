import { HashLoader } from 'react-spinners';
import PropTypes from 'prop-types';
export default function Loader({ title }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <HashLoader size={80} color="#36d7b7" />
        {title && <p className="text-2xl font-bold mt-4 text-center">{title}</p>}
      </div>
    </div>
  );
}

Loader.propTypes = {
  title: PropTypes.string,
};
