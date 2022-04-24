import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/posts`
  : '/api/posts';

export const getRecentPosts = async (category, page = 0) => {
  const { data } = await axios.get(
    `${baseUrl}/recent?categoryName=${category}&page=${page}`,
  );
  return data;
};

export const getPost = async (id) => {
  setToken();
  const { data } = await axios.get(`${baseUrl}/${id}`);
  return data;
};

export const createPost = async (newPost) => {
  const { title, content, category, imageFiles } = newPost;
  const formData = new FormData();
  formData.append('categoryName', category);
  formData.append('content', content);
  formData.append('title', title);
  if (imageFiles.length != 0) {
    imageFiles.forEach((file) => formData.append('imageFiles', file.image));
  }
  setToken();
  const { data } = await axios.post(baseUrl, formData);
  return data;
};

export const editPost = async (post) => {
  const { title, content, postId, imageFiles, saveImageUrl } = post;
  const formData = new FormData();
  formData.append('postId', postId);
  formData.append('title', title);
  formData.append('content', content);
  if (saveImageUrl.length != 0) {
    saveImageUrl.forEach((image) =>
      formData.append('saveImageUrl', image.image),
    );
  }
  if (imageFiles.length != 0) {
    imageFiles.forEach((file) => formData.append('imageFiles', file.image));
  }
  setToken();
  const { data } = await axios.patch(baseUrl, formData);
  return data;
};

export const deletePost = async (postId) => {
  setToken();
  const { data } = await axios.delete(`${baseUrl}/${postId}`);
  return data;
};

export const likePost = (postId) => {
  setToken();
  axios.post(`${baseUrl}/${postId}/likes`);
};

export const scrapPost = async (postId) => {
  setToken();
  const { data } = await axios.post(`${baseUrl}/${postId}/scrap`);
  return data;
};
