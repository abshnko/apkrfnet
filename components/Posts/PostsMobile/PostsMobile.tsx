import React, { useState } from 'react';
import Image from 'next/image';
import s from './PostsMobile.module.scss';
import { posts } from '../../../data/posts';
import { renderSwitch } from '../../../utils/funcs';
import NewBadge from '../../UI/NewBadge/NewBadge';
import { AnimatePresence, motion } from 'framer-motion';

const PostsMobile = ({ postId, post, setPostId }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={s.container} onClick={() => setShowDropdown(false)}>
      {/* <div className={s.title}>Объявления</div> */}
      <div
        className={s.dropdown}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown((s) => !s);
        }}
      >
        <div className={s.dropdown_title_container}>
          <div className={s.dropdown_title}>{post.title}</div>
          {'isNew' in post ? (
            <div className={s.badge}>
              <NewBadge />
            </div>
          ) : null}
        </div>
        <div className={s.dropdown_arrow_container}>
          <div className={`${s.dropdown_arrow} ${showDropdown && s.active}`}>
            <Image
              onClick={() => {}}
              src="/images/right_chevron.svg"
              alt="down_chevron"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {showDropdown && (
        <AnimatePresence>
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
            exit={{ opacity: 0 }}
            style={{ width: 'inherit' }}
          >
            <div
              key={post.id}
              className={s.dropdown_body}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={s.dropdown_container}>
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
                        onClick={() => {
                          setPostId(post.id);
                          setShowDropdown(false);
                        }}
                      >
                        <div className={s.title}>{post.title}</div>
                        <div className={s.date_container}>
                          <div className={s.date}>{post.date}</div>
                          {'isNew' in post ? <NewBadge /> : null}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: [-50, 50, 0],
        }}
        transition={{
          duration: 0.25,
        }}
        // exit={{ opacity: 0 }}
      >
        <div>
          <div key={post.id} className={s.text}>
            {renderSwitch(post!.id)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostsMobile;
