import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import postStyles from "../../styles/PostsPage.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";

function ProfilePage() {
    const [query, setQuery] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const setProfileData = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{profile?.posts_count}</div>
                            <div className={styles.ProfileInfo}>posts</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.followers_count}</div>
                            <div className={styles.ProfileInfo}>followers</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.following_count}</div>
                            <div className={styles.ProfileInfo}>following</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {currentUser &&
                        !is_owner &&
                        (profile?.following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Unfollow}`}
                                onClick={() => {}}>
                                unfollow
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Follow}`}
                                onClick={() => {}}>
                                follow
                            </Button>
                        ))}
                </Col>
                {profile?.content && (
                    <Col className="p-3">{profile.content}</Col>
                )}
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <p className="text-center">Profile owner's posts</p>
        </>
    );

    const SearchBar = (
        <>
            <Row>
                <Col className="p-0" md={8}>
                    <i className={`fas fa-search ${postStyles.SearchIcon}`} />
                    <Form
                        className={postStyles.SearchBar}
                        onSubmit={(event) => event.preventDefault()}>
                        <Form.Control
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            type="text"
                            className="mr-sm-2"
                            placeholder="Search posts"
                        />
                    </Form>
                </Col>
                <Col className="pt-2 text-center text-md-right" md={4}>
                    <NavLink
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                        to="/posts/create">
                        <i className="fa-solid fa-square-plus"></i>New Post
                    </NavLink>
                </Col>
            </Row>
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-2 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Container className={`mb-3 ${appStyles.Content}`}>
                    <Container className="pt-3 pb-1">
                        {hasLoaded ? (
                            <>
                                {mainProfile}
                            </>
                        ) : (
                            <Asset spinner />
                        )}
                    </Container>
                </Container>

                <Container className={`mb-3 ${appStyles.Content}`}>
                    <Container className="pt-3 pb-1">
                        {SearchBar}
                    </Container>
                </Container>
               
                <Container className={`pb-4 ${appStyles.Content}`}>
                    {hasLoaded ? (
                        <>
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default ProfilePage;
