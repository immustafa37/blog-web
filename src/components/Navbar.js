import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">ReactBlog</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
      </div>
    </nav>
  );
}