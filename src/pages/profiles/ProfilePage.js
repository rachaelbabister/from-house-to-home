import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";
import NoResults from "../../assets/search.webp";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import postStyles from "../../styles/PostsPage.module.css";

import PopularProfiles from "./PopularProfiles";
import Post from "../posts/Post";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useProfileData,
    useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { fetchMoreData } from "../../utils/utils";

function ProfilePage() {
    const [query, setQuery] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);
    const [profilePosts, setProfilePosts] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const { id } = useParams();

    const { setProfileData, handleFollow, handleUnfollow } =
        useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}`),
                        axiosReq.get(
                            `/posts/?owner__profile=${id}&search=${query}`
                        ),
                    ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };
        fetchData();
    }, [id, query, setProfileData]);

    const mainProfile = (
        <>
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
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
                    {profile?.description && (
                        <Row className="px-3 justify-content-center">
                            <Col className="text-center">
                                <h3 className={styles.ProfileHeaders}>
                                    About me
                                </h3>
                                <div className={styles.ProfileInfo}>
                                    {profile?.description}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Col>

                <Col lg={3} className="text-lg-right">
                    {currentUser &&
                        !is_owner &&
                        (profile?.following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.UnFollow}`}
                                onClick={() => handleUnfollow(profile)}>
                                unfollow
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Follow}`}
                                onClick={() => handleFollow(profile)}>
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
            <hr />
            <p className="text-center">{profile?.owner}'s posts</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post
                            key={post.id}
                            {...post}
                            setPosts={setProfilePosts}
                        />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResults}
                    message={`No results found, ${profile?.owner} hasn't posted yet`}
                />
            )}
        </>
    );

    const loggedInSearchBar = (
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
                        className={`${styles.NavLink} ${btnStyles.AddNew}`}
                        activeClassName={styles.Active}
                        to="/posts/create">
                        <i
                            className={`fa-solid fa-square-plus ${btnStyles.AddNewIcon}`}></i>
                        New Post
                    </NavLink>
                </Col>
            </Row>
        </>
    );

    const loggedOutSearchBar = (
        <>
            <Row>
                <Col className="p-0" lg={12}>
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
            </Row>
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-2 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Container className={`mb-3 ${appStyles.Content}`}>
                    <Container className="pt-3 pb-1">
                        {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
                    </Container>
                </Container>

                <Container className={`mb-3 ${appStyles.Content}`}>
                    <Container className="pt-3 pb-1">
                        {currentUser ? loggedInSearchBar : loggedOutSearchBar}
                    </Container>
                </Container>

                <Container className={`pb-4 ${appStyles.Content}`}>
                    {hasLoaded ? <>{mainProfilePosts}</> : <Asset spinner />}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default ProfilePage;
