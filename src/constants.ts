import { config } from "./config";

export const messages = {
  APP_SERVER_ERROR: "Oops, something went wrong!",
  NOT_FOUND: `Not Found. Try using /api/${config.API_VERSION} to access the api resource`,
  RESOURCE_NOT_FOUND: "No resource(s) found",
  ACCESS_DENIED: "Access denied! ❌",
  SUCCESS_LOGIN: "Succesful Login! 😊",
  SUCCESS_LOGOUT: "Succesful Logout! 🛫",
  INVALID_TOKEN: "Invalid token",
  EMPTY_TOKEN: "Refresh token unavailable",
  USER_NOT_FOUND: "It was not possible to retrieve user data",
  EXISTING_EMAIL: "User with given email already exist",
  ACCOUNT_CREATED: "Account registered sucessfully",
};
