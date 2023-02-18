import axios from 'axios';

const BASE_URL = 'https://post-feedback-api.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function postFeedback(req) {
  await instance.post(`/feedback`, req);
}

export async function getFeedback() {
  const { data } = await instance.get(`/feedback`);
  return data;
}
