import { HANDLE_LOGGED, HANDLE_SUBMIT } from './types';

const initialState = {
  isAuthorized: false,
  isSubmit: false
}

const authorizedReducer = (state = initialState, action) => {
  const { type } = action;

  switch(type) {

    case HANDLE_LOGGED: {
      return {
        ...state,
        isSubmit: false,
        isAuthorized: !state['isAuthorized']
      };
    }
    
    case HANDLE_SUBMIT: {
      return {
        ...state,
        isSubmit: true
      };
    }

    default: {
      return state;
    }
  }
}

export { initialState, authorizedReducer }