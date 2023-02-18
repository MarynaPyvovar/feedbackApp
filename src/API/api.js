import axios from 'axios';

const BASE_URL = 'https://post-feedback-api.onrender.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function postFeedback(req) {
  await instance.post(`/feedback`, req);
}