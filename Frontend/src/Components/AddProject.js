import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProject } from "../actions/ProjectAction";
import { toast } from "react-toastify";
import { clearError, clearProjectCreated } from "../slices/ProjectSlice";
import { useNavigate } from "react-router-dom";

const AddProjectForm = () => {
  const { loading, isProjectCreation, error } = useSelector(
    (state) => state.projectState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    siteLink: "",
    githubLink: "",
    skills: [{ skill: "" }],
    images: [{ image: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (index, e) => {
    const { value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index].skill = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const handleImageChange = (index, e) => {
    const { value } = e.target;
    const newImages = [...formData.images];
    newImages[index].image = value;
    setFormData({ ...formData, images: newImages });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, { skill: "" }] });
  };

  const addImage = () => {
    setFormData({ ...formData, images: [...formData.images, { image: "" }] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    dispatch(createNewProject(formData));
  };

  useEffect(() => {
    if (isProjectCreation) {
      toast("Product Created Succesfully!", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearProjectCreated()),
      });
      navigate("/project");
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError());
        },
      });
      return;
    }
  }, [isProjectCreation, error, dispatch, navigate]);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="siteLink" className="form-label">
            Site Link
          </label>
          <input
            type="url"
            className="form-control"
            id="siteLink"
            name="siteLink"
            value={formData.siteLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="githubLink" className="form-label">
            GitHub Link
          </label>
          <input
            type="url"
            className="form-control"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Skills</label>
          {formData.skills.map((skill, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={skill.skill}
                onChange={(e) => handleSkillChange(index, e)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={addSkill}
          >
            Add Skill
          </button>
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          {formData.images.map((image, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="url"
                className="form-control"
                value={image.image}
                onChange={(e) => handleImageChange(index, e)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={addImage}
          >
            Add Image
          </button>
        </div>
        {/* <div className="form-group">
          <label>Images</label>

          <div className="custom-file">
            <input
              type="file"
              name="product_images"
              className="custom-file-input"
              id="customFile"
              multiple
              onChange={onImagesChange}
            />

            <label className="custom-file-label" htmlFor="customFile">
              Choose Images
            </label>
          </div>
          {imagesPreview.map((image) => (
            <img
              className="mt-3 mr-2"
              key={image}
              src={image}
              alt={`Image Preview`}
              width="55"
              height="52"
            />
          ))}
        </div> */}
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
