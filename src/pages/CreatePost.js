import { useState } from 'react';
export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Title: ${title}\nContent: ${content}`);
  };
  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}