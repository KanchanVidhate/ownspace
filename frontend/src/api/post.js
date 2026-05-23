import axios from "axios";

const API = "http://localhost:8000/api/posts";

// CREATE POST
export const createPost = async (data) => {
  return axios.post(`${API}/create`, data, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

// GET MY POSTS
export const getMyPosts = async () => {
  return axios.get(`${API}/my-posts`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

// GET ALL POSTS
export const getAllPosts = async () => {
  return axios.get(API);
};