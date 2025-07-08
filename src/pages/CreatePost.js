import { useState } from 'react';
export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Title: ${title}\nContent: ${content}`);
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded px-3 py-2 outline-none transition"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded px-3 py-2 h-40 outline-none transition"
          required
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
          Publish
        </button>
      </form>
    </div>
  );
}