import { THEME_CHANGE } from '../actions';
import { Theme } from '../constants/Theme';
// initialState
export const theme = Theme.Light;

export default function themeReducer(state = theme, action) {
  switch (action.type) {
    case THEME_CHANGE:
      return action.theme
    default:
      return state;
  }
}
