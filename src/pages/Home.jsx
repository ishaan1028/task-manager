import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Task from "../components/Task";

const Home = function () {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name": {
        setName(e.target.value);
        break;
      }
      case "description": {
        setDescription(e.target.value);
        break;
      }
      case "date": {
        setDate(e.target.value);
        break;
      }
      default: {
        return "";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = "pending";
    const id = Date.now().toString();
    setTasks([
      {
        id: id,
        name,
        description,
        date,
        status,
      },
      ...tasks,
    ]);
    alert("task added successfully");
  };

  return (
    <Container>
      <h1>Task manager</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="textarea"
            name="description"
            placeholder="Enter description"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Enter date"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="tasks">
        {tasks?.map((task) => (
          <Task key={task.id} task={task} setTasks={setTasks} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
