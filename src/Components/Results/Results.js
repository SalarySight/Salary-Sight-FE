import './Results.css';

const Results = ({ filterPosts }) => {
  return (
    <div className='results'>
      {filterPosts.length > 1 ? <h3>{filterPosts.length} Results</h3> : <h3>{filterPosts.length} Result</h3>}
    </div>
  );
}

export default Results;
