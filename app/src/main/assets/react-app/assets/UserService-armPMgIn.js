import { v as instance } from "./index-RBnW6nvi.js";
class UserService {
  async getCountByRole() {
    const response = await instance.get("/user/count_by_role");
    return response.data;
  }
  async getAllUsers() {
    const response = await instance.get("/user/all");
    return response.data;
  }
  async getUser({ userId }) {
    const response = await instance.get("/user/".concat(userId));
    return response.data;
  }
  async deleteUser({ userId }) {
    const response = await instance.delete("/user/".concat(userId));
    return response.data;
  }
  async createUser(data) {
    const response = await instance.post("/user/create", data);
    return response.data;
  }
  async updateUser({ userId, data }) {
    const response = await instance.put("/user/".concat(userId), data);
    return response.data;
  }
  async updateUserProfile(data) {
    const response = await instance.put("/user/profile", data);
    return response.data;
  }
}
const UserService$1 = new UserService();
export {
  UserService$1 as U
};
//# sourceMappingURL=UserService-armPMgIn.js.map
