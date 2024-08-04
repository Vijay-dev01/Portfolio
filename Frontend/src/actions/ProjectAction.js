import axios from "axios";
import { projectFail, projectRequest, projectSuccess, newProjectRequest, newProjectSuccess, newProjectFail } from "../slices/ProjectSlice";
import { projectsFail, projectsRequest, projectsSuccess } from "../slices/ProjectsSlice";

export const getProject = id => async (dispatch) => {
  try {
    dispatch(projectRequest());
    const { data } = await axios.get(`/api/v1/project/${id}`);
    dispatch(projectSuccess(data));
  } catch (error) {
    dispatch(projectFail(error.response.data.message))
  }
};


export const getProjects = () => async (dispatch) => {
  try {
    dispatch(projectsRequest());
    const { data } = await axios.get("/api/v1/projects");
    dispatch(projectsSuccess(data));
  } catch (error) {
    dispatch(projectsFail(error.response.data.message))
  }
};

export const createNewProject  =  projectData => async (dispatch) => {

  try {  
      dispatch(newProjectRequest()) 
      const { data }  =  await axios.post(`/api/v1/admin/project/new`, projectData);
      dispatch(newProjectSuccess(data))
  } catch (error) {
      //handle error
      dispatch(newProjectFail(error.response.data.message))
  }
  
}