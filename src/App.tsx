import React from "react";
import "./App.css";
import meme from "./download (6).jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Asmi Chinauriya Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>This is a header</h1>;
            <img src={meme} alt="some meme I found" />
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>{" "}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
