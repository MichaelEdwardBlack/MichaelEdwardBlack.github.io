
export const THEME_CHANGE = 'THEME_CHANGE';
export function changeTheme(theme) {
  return {
    type: THEME_CHANGE,
    theme
  }
}
