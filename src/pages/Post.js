import { useParams } from 'react-router-dom';
import posts from '../data/posts';
export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div className="p-6 text-center">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-800">{post.title}</h1>
      <p className="text-gray-700 leading-7 text-lg">{post.content}</p>
    </div>
  );
}