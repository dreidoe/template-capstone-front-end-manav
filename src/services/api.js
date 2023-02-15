import ky from "ky";

const BASE_URL = "http://localhost:3000/users";

export default {
  createUser() {
    return ky.get(`${BASE_URL}/users`).json();
  },

  show(username, password) {
    return ky.get(`${BASE_URL}/${username}/${password}`).json();
  },
};
