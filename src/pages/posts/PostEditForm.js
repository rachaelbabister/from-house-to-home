import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import { axiosReq } from "../../api/axiosDefaults";

function PostEditForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        image: "",
        category: "",
    });
    const { title, content, image, category } = postData;

    const [categories, setCategories] = useState([]);

    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, content, image, category, is_owner } = data;

                is_owner
                    ? setPostData({ title, content, image, category })
                    : history.push("/");
            } catch (err) {
                console.error(err);
            }
        };

        handleMount();
    }, [history, id]);

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "https://home-api-58bb6b7692c8.herokuapp.com/category/"
                );
                const data = await response.json();
                if (Array.isArray(data.results)) {
                    setCategories(data.results);
                }
            } catch (err) {
                console.error("Failed to fetch categories", err);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }
        formData.append("category", category);

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control
                    as="select"
                    name="category"
                    value={category}
                    onChange={handleChange}>
                    <option value="">Select a Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Button
                className={`${btnStyles.Button} ${btnStyles.Delete}`}
                onClick={() => history.goBack()}>
                cancel
            </Button>
            <Button className={`${btnStyles.Button}`} type="submit">
                save
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                        <Form.Group className="text-center">
                            <figure>
                                <Image
                                    className={appStyles.Image}
                                    src={image}
                                />
                            </figure>
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} btn`}
                                    htmlFor="image-upload">
                                    Change image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                                className="d-none" // Hide the Bootstrap default file input
                            />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>
                        {textFields}
                    </Container>
                </Col>
            </Row>
        </Form>
    );
}

export default PostEditForm;
