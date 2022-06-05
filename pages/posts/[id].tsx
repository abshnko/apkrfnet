import React, { useEffect, useState } from "react";
import { posts } from "../../data/posts";
import s from "./Post.module.scss";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Post = () => {
  const [postId, setPostId] = useState(0);
  const [post, setPost] = useState(posts.find((post) => post.id === postId));
  const router = useRouter();
  const { id } = router.query;
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
              {posts.map((post) => {
                return (
                  <Link
                    href={`/posts/${post.id.toString()}`}
                    key={post.id}
                    passHref
                  >
                    <div
                      className={`${s.post} ${
                        post.id === postId ? s.active_post : ""
                      }`}
                      onClick={() => setPostId(post.id)}
                    >
                      <>
                        <div className={s.title}>{post.title}</div>
                        <div className={s.date}>{post.date}</div>
                      </>
                    </div>
                  </Link>
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
            {/* <div className={s.post_content}>{post!.text}</div> */}
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Post;
