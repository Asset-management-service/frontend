import axios from 'axios';
export const getRecentPosts = async (category) => {
  const response = await axios.get('/api/posts/recent', {
    params: { categoryName: '자유게시판' },
  });
  return response.data;
};

export const getPost = async (id) => {
  const { data } = await axios.get(`/api/posts/${id}`);
  return data;
};
