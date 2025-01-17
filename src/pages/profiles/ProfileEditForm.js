import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Buttons.module.css";
import appStyles from "../../App.module.css";
import styles from "../../styles/ProfileEditForm.module.css";

const ProfileEditForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profileData, setProfileData] = useState({
        name: "",
        description: "",
        image: "",
    });
    const { name, description, image } = profileData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const { data } = await axiosReq.get(`/profiles/${id}`);
                    const { name, description, image } = data;
                    setProfileData({ name, description, image });
                } catch (err) {
                    // console.log(err);
                    history.push("/");
                }
            } else {
                history.push("/");
            }
        };

        handleMount();
    }, [currentUser, history, id]);

    const handleChange = (event) => {
        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
            }));
            history.goBack();
        } catch (err) {
            // console.log(err);
            setErrors(err.response?.data);
        }
    };

    const textFields = (
        <>
            <Form.Group className={styles.FieldsContainer}>
                <Form.Label>About me</Form.Label>
                <Form.Control
                    as="textarea"
                    value={description}
                    onChange={handleChange}
                    name="description"
                    rows={7}
                />
            </Form.Group>
            <div className={styles.ButtonsContainer}>
                {errors?.description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Delete}`}
                    onClick={() => history.goBack()}>
                    cancel
                </Button>
                <Button className={btnStyles.Button} type="submit">
                    save
                </Button>
            </div>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Row className="mb-4">
                    <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
                        <Container className="text-center">
                            <h1 className={appStyles.Heading}>
                                Update your Profile
                            </h1>
                            <div className="py-2">
                                Fill in or change the details below to update
                                your profile. If you would like to change your
                                profile picture, click on 'Change Image' then
                                click 'Save'.
                            </div>
                        </Container>
                    </Col>
                </Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container className={appStyles.Content}>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image src={image} fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className={`${btnStyles.Button} btn my-auto`}
                                    htmlFor="image-upload">
                                    Change image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                className="d-none"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfileData({
                                            ...profileData,
                                            image: URL.createObjectURL(
                                                e.target.files[0]
                                            ),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col
                    md={5}
                    lg={6}
                    className="d-none d-md-block p-0 p-md-2 text-center">
                    <Container
                        className={`${appStyles.Content} h-100 d-flex flex-column`}>
                        {textFields}
                    </Container>
                </Col>
            </Row>
        </Form>
    );
};

export default ProfileEditForm;
