import './Results.css';

const Results = ({ filterPosts }) => {
  return (
    <div className='results'>
      <h3>{filterPosts.length} Results</h3>
    </div>
  );
}

export default Results;
