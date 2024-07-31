import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUpInForm.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
    useRedirect("loggedIn");
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Container className={styles.Container}>
            <Row className={`my-auto`}>
                <Col className="my-auto py-2 p-md-2 mx-auto" md={8}>
                    <Container className={`${appStyles.Content} p-4`}>
                        <h2 className={styles.Header}>Create your account</h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label className="sr-only">
                                    Username
                                </Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.username?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group className="mb-3" controlId="password1">
                                <Form.Label className="sr-only">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="password"
                                    placeholder="Password"
                                    name="password1"
                                    value={password1}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password1?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Form.Group className="mb-3" controlId="password2">
                                <Form.Label className="sr-only">
                                    Confirm Password
                                </Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={password2}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password2?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Wide}`}
                                type="submit">
                                Sign up
                            </Button>
                            {errors.non_field_errors?.map((message, idx) => (
                                <Alert
                                    variant="warning"
                                    className="mt-3"
                                    key={idx}>
                                    {message}
                                </Alert>
                            ))}
                        </Form>
                    </Container>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signin">
                            Already have an account? <span>Sign in</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;
