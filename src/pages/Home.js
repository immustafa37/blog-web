import { Link } from 'react-router-dom';
import posts from '../data/posts';
export default function Home() {
  return (
    <div className="home-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`} className="read-more">Read More →</Link>
        </div>
      ))}
    </div>
  );
}