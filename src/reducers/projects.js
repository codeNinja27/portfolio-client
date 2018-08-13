import {
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_ERROR
} from '../actions/projects';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        data: action.projects,
        loading: false,
        error: null
      });
    case FETCH_PROJECT_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default: return state;
  }
}
