import React from "react";
import styles from "../../styles/Post.module.css";
// import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import ToolTip from "../../components/ToolTip";

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
        postPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_on}</span>
                        {is_owner && postPage && "..."}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/posts/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && (
                    <Card.Title className="text-center">{title}</Card.Title>
                )}
                {content && <Card.Text>{content}</Card.Text>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <ToolTip id="tt-own" title="You can't like your own post">
                            <i className="far fa-heart" />
                        </ToolTip>
                    ) : like_id ? (
                        <span onClick={() => {}}>
                            <i className={`fas fa-heart ${styles.Icon}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={() => {}}>
                            <i
                                className={`far fa-heart ${styles.IconOutline}`}
                            />
                        </span>
                    ) : (
                        <ToolTip id="tt-signin" title="Sign in to like posts">
                            <i className="far fa-heart" />
                        </ToolTip>
                    )}
                    {likes_count}
                    <Link to={`/posts/${id}`}>
                        <i className={`far fa-comment-dots ${styles.IconOutline}`} />
                    </Link>
                    {comments_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Post;
