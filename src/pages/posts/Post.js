import React from "react";
import {
    Card,
    Media,
    Row,
    Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../../styles/Post.module.css";
import Avatar from "../../components/Avatar";
import ToolTip from "../../components/ToolTip";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Post = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        comments_count,
        likes_count,
        like_id,
        title,
        content,
        image,
        updated_on,
        category_name,
        postPage,
        setPosts,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { post: id });
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count + 1,
                              like_id: data.id,
                          }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setPosts((prevPosts) => ({
                ...prevPosts,
                results: prevPosts.results.map((post) => {
                    return post.id === id
                        ? {
                              ...post,
                              likes_count: post.likes_count - 1,
                              like_id: null,
                          }
                        : post;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className={`d-flex align-items-center ${styles.DateTime}`}>
                        <span>{updated_on}</span>
                        {is_owner && postPage && "..."}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img
                    className={styles.CardImage}
                    src={image}
                    alt={title}
                />
            </Link>
            <Card.Body>
                {title && (
                    <Card.Title className={`text-center ${styles.CardTitle}`}>{title}</Card.Title>
                )}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.Divider}></div>
                <Row>
                    <Col md={4}>
                        {category_name && (
                            <Card.Text className="text-muted">
                                Category: {category_name}
                            </Card.Text>
                        )}
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <div className={styles.PostBar}>
                            {is_owner ? (
                                <ToolTip
                                    id="tt-own"
                                    title="You can't like your own post"
                                    placement="top">
                                    <i className="far fa-heart" />
                                </ToolTip>
                            ) : like_id ? (
                                <span onClick={handleUnlike}>
                                    <i
                                        className={`fas fa-heart ${styles.Icon}`}
                                    />
                                </span>
                            ) : currentUser ? (
                                <span onClick={handleLike}>
                                    <i
                                        className={`far fa-heart ${styles.IconOutline}`}
                                    />
                                </span>
                            ) : (
                                <ToolTip
                                    id="tt-signin"
                                    title="Sign in to like posts">
                                    <i className="far fa-heart" />
                                </ToolTip>
                            )}
                            {likes_count}
                            <Link to={`/posts/${id}`}>
                                <i
                                    className={`far fa-comment-dots ${styles.IconOutline}`}
                                />
                            </Link>
                            {comments_count}
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Post;
