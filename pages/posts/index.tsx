import React, { useState } from "react";
import { posts } from "../../data/posts";
import s from "./Posts.module.scss";
import type { NextPage } from "next";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";

const Posts: NextPage = () => {
  const [postId, setPostId] = useState(0);
  return (
    <>
      <Navbar />
      <div className={s.container}>
        <div className={s.left_side}>
          <div className={s.posts_title}>Объявления</div>
          <div className={s.all_posts}>
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  onClick={() => setPostId(post.id)}
                  className={s.post}
                >
                  <div className={s.title}>{post.title}</div>
                  <div className={s.date}>{post.date}</div>
                </div>
              );
            })}
          </div>

          <div className={s.arrow}>
            <Image
              src="/images/right_chevron.svg"
              alt="right_chevron"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className={s.right_side}>
          <div className={s.post_title}>
            {posts.find((post) => post.id === postId)?.title}
          </div>
          <div className={s.post_content}>
            {posts.find((post) => post.id === postId)?.text}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
