import React, { useState } from "react";

import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import MoreDropdown from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
import ConfirmDelete from "../../components/ConfirmDelete";

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_on,
        content,
        id,
        setPost,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false); // Manage modal state
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setPost((prevPost) => ({
                results: [
                    {
                        ...prevPost.results[0],
                        comments_count: prevPost.results[0].comments_count - 1,
                    },
                ],
            }));

            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.filter(
                    (comment) => comment.id !== id
                ),
            }));
            setShowConfirm(false); // Close modal after deletion
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <>
            <hr />
            <Media>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <Media.Body className="align-self-center ml-2">
                    <span className={styles.Owner}>{owner}</span>
                    <span className={styles.Date}>{updated_on}</span>
                    {showEditForm ? (
                        <CommentEditForm
                            id={id}
                            profile_id={profile_id}
                            content={content}
                            profileImage={profile_image}
                            setComments={setComments}
                            setShowEditForm={setShowEditForm}
                        />
                    ) : (
                        <p>{content}</p>
                    )}
                </Media.Body>
                {is_owner && !showEditForm && (
                    <>
                        <MoreDropdown
                            handleEdit={() => setShowEditForm(true)}
                            handleDelete={() => setShowConfirm(true)} // Trigger modal
                        />
                        <ConfirmDelete
                            show={showConfirm}
                            onHide={() => setShowConfirm(false)}
                            onConfirm={handleDelete}
                            title="Deleting Comment"
                            body="Are you sure you want to delete this comment?"
                        />
                    </>
                )}
            </Media>
        </>
    );
};

export default Comment;