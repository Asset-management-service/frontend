import axios from 'axios';
import { setToken } from './auth';

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
  ? `${process.env.REACT_APP_BACKEND_BASE_URL}/api/comments`
  : '/api/comments';

export const createComment = async (content, postId, parentId) => {
  setToken();
  const { data } = await axios.post(baseUrl, {
    content,
    parentId,
    postId,
  });
  return data;
};

export const deleteComment = async (commentId) => {
  setToken();
  const { data } = await axios.delete(`${baseUrl}/${commentId}`);
  return data;
};

export const editComment = async (content, commentId) => {
  setToken();
  const { data } = await axios.patch(
    baseUrl,
    {
      content,
      commentId,
    },
    {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
  );
  return data;
};
