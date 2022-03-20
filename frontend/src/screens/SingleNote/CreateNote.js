import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesAction";
import Loading from "../../components/Header/Loading";
import Error from "../../components/Header/Error";
import ReactMarkdown from "react-markdown";
import "./Createnote.css";
function CreateNote({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Note">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <Error variant="danger">{error}</Error>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>{" "}
            <br />
            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="content">
              <Form.Label className="h">Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Note Preview</Accordion.Header>
                  <Accordion.Body>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
            <br />
            {loading && <Loading size={50} />}
            <Button
              type="submit"
              variant="primary"
              className="nb"
              style={{ backgroundColor: "black" }}
            >
              Create Note
            </Button>
            <Button className="nb" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
            <Link to="/mynotes">
              <Button
                variant="primary"
                className="nb"
                style={{ backgroundColor: "black" }}
              >
                Cancel
              </Button>
            </Link>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;
