import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DeleteModal from "./DeleteModal";

const Task = ({ task, setTasks }) => {
  const { name, description, date, status, id } = task;
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
    setShowModal(false);
    alert("Deleted task successfully");
  };

  const handleDeleteModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleStatus = (id) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          return { ...t, status: "completed" };
        }
        return t;
      })
    );
  };

  return (
    <div className="taskDiv">
      <h1 className="name">id: {id} </h1>
      <h1 className="name">Name: {name} </h1>
      <p className="desc">Description: {description}</p>
      <p className="date">Due Date{date}</p>
      <p className="status">Status: {status}</p>
      <Button onClick={() => handleStatus(id)}>mark completed</Button>
      <Button>edit</Button>
      <Button onClick={() => handleDeleteModal(id)}>delete</Button>
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        deleteId={deleteId}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Task;
