import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ show, handleClose, project }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project && project.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {project && (
          <>
            <p>{project.description}</p>
            <p>Skills:</p>
            <ul>
              {project.skills.map((skill) => (
                <li key={skill._id}>{skill.skill}</li>
              ))}
            </ul>
            <p>Links:</p>
            <ul>
              <li>
                <a href={project.siteLike} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              </li>
              <li>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
