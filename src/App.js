import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";

function App() {

    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Main}>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route path="/signin" render={() => <SignInForm />} />
                    <Route path="/signup" render={() => <SignUpForm />} />
                    <Route path="*" render={() => <h1>Page Not Found</h1>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
