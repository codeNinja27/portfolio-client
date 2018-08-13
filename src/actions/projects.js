import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';
export const fetchProjectRequest = () => ({
  type: FETCH_PROJECT_REQUEST
});

export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS  ';
export const fetchProjectSuccess = projects => ({
  type: FETCH_PROJECT_SUCCESS,
  projects
});

export const FETCH_PROJECT_ERROR = 'FETCH_PROJECT_ERROR';
export const fetchProjectError = error => ({
  type: FETCH_PROJECT_ERROR,
  error
});

export const fetchProject = () => (dispatch, getState) => {
  dispatch(fetchProjectRequest());
  fetch(`${API_BASE_URL}/projects`, {
    method: 'GET',
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(project => {
      dispatch(fetchProjectSuccess(project));
    })
    .catch(error => {
      dispatch(fetchProjectError(error));
    });
};
