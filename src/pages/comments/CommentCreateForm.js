import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import PropTypes from 'prop-types';

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
        {profileImage && (
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
        )}
          <Form.Control
            className={styles.Form}
            placeholder="My comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${btnStyles.Button} d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

CommentCreateForm.propTypes = {
  post: PropTypes.object.isRequired,
  setPost: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
  profileImage: PropTypes.string.isRequired,
  profile_id: PropTypes.number.isRequired,
};

export default CommentCreateForm;