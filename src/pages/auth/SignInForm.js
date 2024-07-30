import React, { useState } from "react";
import axios from "axios";

import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUpInForm.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "/dj-rest-auth/login/",
                signInData
            );
            setCurrentUser(data.user);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container className={styles.Container}>
            <Row className={`my-auto`}>
                <Col className="my-auto py-2 p-md-2 mx-auto" md={8}>
                    <Container className={`${appStyles.Content} p-4 `}>
                        <h1 className={styles.Header}>Sign In</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label className="sr-only">
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    className={styles.Input}
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.username?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label className="sr-only">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className={styles.Input}
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password?.map((message, idx) => (
                                <Alert key={idx} variant="warning">
                                    {message}
                                </Alert>
                            ))}
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Wide}`}
                                type="submit">
                                Sign in
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                                <Alert
                                    key={idx}
                                    variant="warning"
                                    className="mt-3">
                                    {message}
                                </Alert>
                            ))}
                        </Form>
                    </Container>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signup">
                            Need to register an account?{" "}
                            <span>Sign up here.</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default SignInForm;
