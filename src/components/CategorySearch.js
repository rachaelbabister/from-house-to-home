import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import appStyles from "../App.module.css"
import styles from "../styles/PostsPage.module.css"

const CategorySearch = ({ setFilter, mobile }) => {
    const [category, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://home-api-58bb6b7692c8.herokuapp.com/category/');
                const data = await response.json();
                setCategories(data.results || []);
            } catch (err) {
                // Console.log(err);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Container className={`${appStyles.Content} mb-3 ${mobile ? "p-1 text-center" : ""}`}>
            <Row className="d-flex align-items-center justify-content-center justify-content-md-start">
                <Col xs="auto" className="d-flex align-items-center">
                    <Form.Label className={`${styles.CategorySearch} me- mb-0`}>Search by Category:</Form.Label>
                </Col>
                <Col xs={12} md="auto">
                    <Form.Group controlId="categorySelect" className="mb-0">
                        <Form.Control
                    as="select"
                    onChange={(e) => setFilter(e.target.value)}
                    defaultValue=""
                >
                    <option value="">All Categories</option>
                    {category.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                    ))}
                </Form.Control>
                </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default CategorySearch;