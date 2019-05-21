import Api from "@/service/Api.js";

export default {
  sendMoney(credentials) {
    return Api.post("sendMoney", credentials);
  }
};
