import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${BASE_URL}/posts`, postData);
  return response.data;
};

export const updatePost = async (id, postData) => {
  const response = await axios.put(`${BASE_URL}/posts/${id}`, postData);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${BASE_URL}/posts/${id}`);
  return response.data;
};