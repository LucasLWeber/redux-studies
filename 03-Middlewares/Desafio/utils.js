export const [AUTH_TOKEN, SET_TOKEN] = ["auth:dogs", "SET_TOKEN"];

export function getLocalStorageItem(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initial;
  }
}
