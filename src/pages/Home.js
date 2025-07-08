import { Link } from 'react-router-dom';
import posts from '../data/posts';
export default function Home() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <div key={post.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm">{post.excerpt}</p>
          <Link to={`/post/${post.id}`} className="text-blue-500 text-sm mt-3 inline-block">Read More</Link>
        </div>
      ))}
    </div>
  );
}