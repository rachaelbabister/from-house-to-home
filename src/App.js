import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";

import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UserNameForm";
import UserPasswordForm from "./pages/profiles/UserPassword";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";

    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Main}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <PostsPage message="No results found. Please adjust the search keyword" />
                        )}
                    />
                    <Route
                        exact
                        path="/feed"
                        render={() => (
                            <PostsPage
                                message="No results found. Try following a user or adjust the search keyword"
                                filter={`owner__followed__owner__profile=${profile_id}&`}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/likes"
                        render={() => (
                            <PostsPage
                                message="No results found. Try liking a post or adjust the search keyword"
                                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                            />
                        )}
                    />
                    <Route exact path="/signin" render={() => <SignInForm />} />
                    <Route exact path="/signup" render={() => <SignUpForm />} />
                    <Route
                        exact
                        path="/posts/create"
                        render={() => <PostCreateForm />}
                    />
                    <Route
                        exact
                        path="/posts/:id"
                        render={() => <PostPage />}
                    />
                    <Route
                        exact
                        path="/posts/:id/edit"
                        render={() => <PostEditForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id"
                        render={() => <ProfilePage />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit/username"
                        render={() => <UsernameForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit/password"
                        render={() => <UserPasswordForm />}
                    />
                    <Route
                        exact
                        path="/profiles/:id/edit"
                        render={() => <ProfileEditForm />}
                    />
                    <Route
                        exact
                        render={() => <h1>Page Not Found</h1>}
                    />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
