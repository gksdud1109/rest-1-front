"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PostDto } from "@/type/post";
import { fetchApi } from "@/lib/client";

export default function Home() {

  const [posts, setPosts] = useState<PostDto[]>([]);

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    fetchApi(`/api/v1/posts`).then(data => {
        setPosts(data);
      });
  },[]);

  return (
    
    <div className="flex flex-col gap-9">  
      <h1>글 목록</h1>
      {posts.length===0 && <div>Loading...</div>}
      {posts.length >0 && (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
            {post.id} : {post.title}
            </Link>
          </li>
          
        ))}
      </ul>
      )}
    </div>
  );
}