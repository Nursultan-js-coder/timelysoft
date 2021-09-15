import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail: React.FC<any> = (props) => {
  const { id } = useParams<any>();
  return (
    <div className="blog-page">
      <h2> blog detail page :{id}</h2>
    </div>
  );
};

export default BlogDetail;
