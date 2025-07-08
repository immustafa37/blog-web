import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">ReactBlog</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
        <Link to="/create" className="text-gray-600 hover:text-blue-500">Create Post</Link>
      </div>
    </nav>
  );
}