import React, { useEffect, useState } from "react";
import { posts } from "../../data/posts";
import s from "./Posts.module.scss";
import type { NextPage } from "next";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Post_1 from "../../components/Posts/Post_1/Post_1";
import Post_2 from "../../components/Posts/Post_2/Post_2";

const Posts: NextPage = () => {
  const [postId, setPostId] = useState(8);
  const [post, setPost] = useState(posts.find((post) => post.id === postId));

  useEffect(() => {
    setPost(posts.find((post) => post.id === postId));
  }, [postId]);

  const renderSwitch = (id: number) => {
    switch (id) {
      case 0:
        return <Post_1 />;
      case 1:
        return <Post_2 />;
      case 0:
        return null;
      case 0:
        return null;
      case 0:
        return null;
      case 0:
        return null;
      case 0:
        return null;
      case 0:
        return null;
      case 0:
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        exit="out"
      >
        <div className={s.container}>
          <div className={s.left_side}>
            <div className={s.posts_title}>Объявления</div>
            <div className={s.all_posts}>
              {posts
                .slice(0)
                .reverse()
                .map((post) => {
                  return (
                    <div
                      key={post.id}
                      className={`${s.post} ${
                        post.id === postId ? s.active_post : ""
                      }`}
                      onClick={() => setPostId(post.id)}
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
            <div className={s.post_title}>{post!.title}</div>
            <div className={s.post_date_container}>
              <div className={s.post_date}>{post!.date}</div>
            </div>
            <div className={s.post_content}>{renderSwitch(post!.id)}</div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Posts;
