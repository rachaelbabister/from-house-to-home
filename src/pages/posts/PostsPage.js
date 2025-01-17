import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import CategorySearch from "../../components/CategorySearch";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/search.webp";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularProfiles from "../profiles/PopularProfiles";

function PostsPage({ message = "" }) {
    const currentUser = useCurrentUser();
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");

    const loggedInSearchBar = (
        <>
            <Row>
                <Col className="p-0" md={8}>
                    <i className={`fas fa-search ${styles.SearchIcon}`} />
                    <Form
                        className={styles.SearchBar}
                        onSubmit={(event) => event.preventDefault()}>
                        <Form.Control
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            type="text"
                            className="mr-sm-2"
                            placeholder="Search posts"
                        />
                    </Form>
                    {pathname !== "/feed" && pathname !== "/likes" && (
                        <CategorySearch setFilter={setFilter} />
                    )}
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
                    <i className={`fas fa-search ${styles.SearchIcon}`} />
                    <Form
                        className={styles.SearchBar}
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

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const params = new URLSearchParams();
                if (filter) params.append("category", filter);
                if (query) params.append("search", query);

                let endpoint = "/posts/";
                if (pathname === "/feed") {
                    endpoint = "followed-posts/";
                } else if (pathname === "/likes") {
                    endpoint = "liked-posts/";
                }

                const { data } = await axiosReq.get(`${endpoint}?${params.toString()}`);
                setPosts({ ...data, results: data.results || [] });
                setHasLoaded(true);
            } catch (err) {
                // console.error(err);
                setHasLoaded(true);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <Row className="h-100">
            <Col lg={12}>
                <h1 className={`text-center ${appStyles.Heading}`}>For your Home Inspiration</h1>
            </Col>
            <Col className="py-2 p-0 p-md-2" lg={8}>
                <Container className={`mb-3 ${appStyles.Content}`}>
                    <Container className="pt-3 pb-1">
                        {currentUser ? loggedInSearchBar : loggedOutSearchBar}
                    </Container>
                </Container>

                {hasLoaded ? (
                    <>
                        {posts.results.length ? (
                            <InfiniteScroll
                                dataLength={posts.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!posts.next}
                                next={() => fetchMoreData(posts, setPosts)}>
                                {posts.results.map((post) => (
                                    <Post
                                        key={post.id}
                                        {...post}
                                        setPosts={setPosts}
                                    />
                                ))}
                            </InfiniteScroll>
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default PostsPage;
