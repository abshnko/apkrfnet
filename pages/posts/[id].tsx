import React, { useEffect, useState } from 'react';
import { posts } from '../../data/posts';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Post = () => {
  const [postId, setPostId] = useState('0');
  const [post, setPost] = useState(posts.find((post) => post.id === postId));
  const router = useRouter();
  const { id } = router.query;
  return <></>;
};

export default Post;
