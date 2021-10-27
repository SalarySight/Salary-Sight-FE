import './Results.css';

const Results = ({ data }) => {
  return (
    <div className='results'>
      {data && data.length > 1 ? <h3>{data.length} Results</h3> : <h3>{data.length} Result</h3>}
    </div>
  );
}

export default Results;
