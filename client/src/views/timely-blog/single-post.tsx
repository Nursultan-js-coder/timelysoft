import React from "react";

const SinglePost = ({ post }) => {
  return (
    <div>
      <article className="article">
        <header className="article__header"></header>
        <main className="article__content">
          <h2>{post.name}</h2>
        </main>
        <footer className="article__actions"></footer>
      </article>
    </div>
  );
};

export default SinglePost;
