import './Error.css';

const Error = ({ error }) => {
  return (
    <div className='error'>
      <h3>Looks like there's been a problem!</h3>
      <h4>Message: {error}</h4>
    </div>
  );
}

export default Error;
