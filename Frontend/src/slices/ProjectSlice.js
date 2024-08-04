import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    loading: false,
    project: {},
    isProjectCreation: false,
  },
  reducers: {
    projectRequest(state, action) {
      state.loading = true;
    },
    projectSuccess(state, action) {
      state.loading = false;
      state.project = action.payload.project;
    },
    projectFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearError(state, action) {
      return{ ...state,
       error: null
      }
   },
    newProjectRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    newProjectSuccess(state, action) {
      return {
        ...state,
        loading: false,
        project: action.payload.project,
        isProjectCreated: true,
      };
    },
    newProjectFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isProjectCreated: false,
      };
    },
    clearProjectCreated(state, action) {
      return {
        ...state,
        isProjectCreated: false,
      };
    },
  },
});

const { actions, reducer } = projectSlice;

export const {
  projectRequest,
  projectSuccess,
  projectFail,
  newProjectRequest,
  newProjectSuccess,
  newProjectFail,
  clearProjectCreated,
  clearError,
} = actions;

export default reducer;
