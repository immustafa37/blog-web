import { useParams } from 'react-router-dom';
import posts from '../data/posts';
export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div className="not-found">Post not found</div>;

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}