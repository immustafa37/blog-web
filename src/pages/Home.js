import { Link } from 'react-router-dom';
import posts from '../data/posts';
export default function Home() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map(post => (
        <div key={post.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
          <Link to={`/post/${post.id}`} className="mt-4 inline-block text-blue-600 hover:underline text-sm">Read More →</Link>
        </div>
      ))}
    </div>
  );
}