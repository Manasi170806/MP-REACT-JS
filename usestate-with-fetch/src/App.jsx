import React, { useState, useEffect } from "react";
import "./App.css";

function FetchDataComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Something went wrong while fetching data.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="message loading">⏳ Loading posts...</div>;
  if (error) return <div className="message error">❌ {error}</div>;

  return (
    <div className="container">
      <h1 className="title">📚 Blog Posts</h1>
      <div className="post-list">
        {data.map((post) => (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchDataComponent;
