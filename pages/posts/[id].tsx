import React from "react";
import s from "./Post.module.scss";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div className={s.container}>POST # {id}</div>;
};

export default Post;
