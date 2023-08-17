import { Link } from 'react-router-dom';

{/* Component */}


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Little 🦊 Blog</h1>
        <div className="links">
          <Link to="/">Home </Link>
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            Create Post
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar