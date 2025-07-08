import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">ReactBlog</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-500 transition">Home</Link>
        <Link to="/create" className="text-gray-600 hover:text-blue-500 transition">Create Post</Link>
      </div>
    </nav>
  );
}