'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'http://localhost:9000/blog';

export default function PetsGrid() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response);
    });
  }, []);
  console.log(post);
  if (!post) return null;

  return (
    <div>
      <h1></h1>
      <p>{}</p>
    </div>
  );
}
