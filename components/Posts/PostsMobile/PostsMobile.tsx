import React, { useState } from 'react';
import Image from 'next/image';
import s from './PostsMobile.module.scss';
import { posts } from '../../../data/posts';
import { renderSwitch } from '../../../utils/funcs';
import NewBadge from '../../../UI/Mobile/NewBadge/NewBadge';

const PostsMobile = ({ postId, post, setPostId }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.title}>Объявления</div>
      <div className={s.dropdown}>
        <div className={s.dropdown_title_container}>
          <div className={s.dropdown_title}>{post.title}</div>
          {'isNew' in post ? (
            <div className={s.badge}>
              <NewBadge />
            </div>
          ) : null}
        </div>
        <div className={s.dropdown_arrow_container}>
          <div
            className={`${s.dropdown_arrow} ${showDropdown && s.active}`}
            onClick={() => setShowDropdown((s) => !s)}
          >
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
        <div className={s.dropdown_body}>
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
      )}
      <div className={s.text}>{renderSwitch(post!.id)}</div>
    </div>
  );
};

export default PostsMobile;
