const Error = ({ err }) => {
  return (
    <div className="error">
      <h3>There's been an error! Message: {err}</h3>
    </div>
  );
};

export default Error;
