import themeReducer, { theme } from './Theme';

import { combineReducers } from 'redux';

export const initialState = {
  theme: theme,
}


const rootReducer = combineReducers({
  theme: themeReducer,
})

export default rootReducer;
