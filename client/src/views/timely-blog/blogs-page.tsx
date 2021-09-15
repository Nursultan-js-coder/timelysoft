import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import SinglePost from "./single-post";
import "./posts.css";
import { saveItem } from "../../store/requests/item";
import AppForm from "../../components/forms/Form";
import { StoreType } from "../../store/store";
import { connect, useDispatch } from "react-redux";
import { fetchItems } from "../../store/requests/item";
const postFields = [
  {
    name: "name",
    placeholder: "enter name ...",
    type: "text",
  },
];

const BlogsPage: React.FC<any> = (props) => {
  const [show, setShow] = useState(false);
  const { posts } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems);
  }, []);
  return (
    <div className="blog-page">
      <Button
        variant="success"
        style={{
          backgroundColor: "#A6FF87",
          width: 200,
          height: 60,
          fontSize: "27px",
          fontWeight: 600,
          color: "#5F5D66",
        }}
        className="mb-3"
        onClick={() => setShow(!show)}
      >
        Create Post
      </Button>
      {show && (
        <AppForm
          title="New Post"
          fields={postFields}
          action={saveItem}
          setModalShow={setShow}
        />
      )}
      {posts.map((post, index) => {
        return <SinglePost post={post} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: StoreType) => ({
  posts: state.item.entities,
});
export default connect(mapStateToProps)(BlogsPage);
