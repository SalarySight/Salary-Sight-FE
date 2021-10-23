import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <Link to="/">
      <section className='not-found'>
          <h3 className='page'>Page could not be found, please try again later.</h3>
      </section>
    </Link>
  );
}

export default NotFound;
