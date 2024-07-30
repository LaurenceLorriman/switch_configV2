import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Card, Image } from "react-bootstrap";

import "../styles/custom.css"; // Ensure your custom styles are included

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login/authenticate",
        { username, password }
      );
      console.log(response.data);
      onLoginSuccess(); // Call onLoginSuccess on successful login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Image
        src="/images/ravenlogo.png"
        alt="90SU Raven Logo"
        className="m-auto"
      />

      <Card
        className="justify-content-center align-items-center"
        style={{
          maxWidth: "400px",
          backgroundColor: "#212529",
          borderColor: "#343a40",
          minWidth: "25vw",
        }}
      >
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <Form className="w-75" onSubmit={handleLogin}>
          <Form.Group className="form-floating mb-3">
            <Form.Control
              type="text"
              id="floatingInput"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-100"
            />
            <Form.Label htmlFor="floatingInput">Username</Form.Label>
          </Form.Group>

          <Form.Group className="form-floating mb-3">
            <Form.Control
              type="password"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label htmlFor="floatingPassword">Password</Form.Label>
          </Form.Group>

          <Form.Check
            type="checkbox"
            id="flexCheckDefault"
            label="Remember me"
            className="text-light text-start my-3"
          />

          <Button className="w-100 py-2" type="submit">
            Sign in
          </Button>
          <p className="mt-5 mb-3 text-light">
            &copy; Ministry Of Defence - 90SU Raven
          </p>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
