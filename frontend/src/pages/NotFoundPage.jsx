import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <h1 className="text-center">
        Page Not Found <FaExclamationTriangle style={{ color: 'red' }} />
      </h1>
    </>
  );
};

export default NotFoundPage;
