import React, { useEffect, useState } from 'react';
import { posts } from '../../data/posts';
import s from './Posts.module.scss';
import type { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MainLayout from '../../components/MainLayout';
import { renderSwitch } from '../../utils/funcs';
import PostsMobile from '../../components/Posts/PostsMobile/PostsMobile';

const Posts: NextPage = () => {
  const [postId, setPostId] = useState('10');
  const [post, setPost] = useState(posts.find((post) => post.id === postId));
  const [postContentElement, setPostContentElement] = useState<any>(null);
  const [_document, setDocument] = useState<any>(null);

  useEffect(() => {
    setPost(posts.find((post) => post.id === postId));
    if (postContentElement) {
      postContentElement!.scrollTop = 0;
      postContentElement!.scrollLeft = 0;
    }
  }, [postId]);

  useEffect(() => {
    setDocument(document);
  }, []);

  useEffect(() => {
    if (_document) {
      setPostContentElement(_document.getElementById('postContent'));
    }
  }, [_document]);

  return (
    <>
      <MainLayout title="Объявления | АПКРФ НЕТ">
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
                          post.id === postId ? s.active_post : ''
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

            <div className={s.right_side} id="postContent">
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
                key={post!.title}
              >
                <div className={s.post_title}>{post!.title}</div>
                <div className={s.post_date_container}>
                  <div className={s.post_date}>{post!.date}</div>
                </div>
                <div className={s.post_content}>{renderSwitch(post!.id)}</div>
              </motion.div>
            </div>
          </div>
          <PostsMobile postId={postId} post={post} setPostId={setPostId} />
        </motion.div>
      </MainLayout>
    </>
  );
};

export default Posts;
