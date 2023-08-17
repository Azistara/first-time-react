import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Oops!</h2>
            <p>This page was not found.</p>
            <Link to="/">Return Home</Link>
        </div>
     );
}
 
export default NotFound;