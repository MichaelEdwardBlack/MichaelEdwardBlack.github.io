import { THEME_CHANGE } from '../actions';

// initialState
export const theme = "light";

export default function themeReducer(state = theme, action) {
  switch (action.type) {
    case THEME_CHANGE:
      return action.theme
    default:
      return state;
  }
}
