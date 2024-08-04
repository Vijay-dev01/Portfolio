import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    loading: false,
    projects: [],
  },
  reducers: {
    projectsRequest(state, action) {
      state.loading = true;
    },
    projectsSuccess(state, action) {
      state.loading = false;
      state.projects = action.payload.project;
    },
    projectsFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = projectsSlice;

export const { projectsRequest, projectsSuccess, projectsFail } = actions;

export default reducer;
