import axios from "axios";
export default axios.create({
  baseURL: "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e",
  headers: {
    "Content-type": "application/json"
  }
});