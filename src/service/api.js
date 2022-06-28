import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getMe = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/users/me`,
    method: "get",
    params,
    headers: { "api-key": "Fq23mfYKewnXT6wXoAcR26mJ", ...headers },
    data,
  });
};
export const getArticles = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles/${path?.id}`,
    method: "get",
    params,
    headers: { "Content-Type": "text/plain", ...headers },
    data: {
      article: {
        body_markdown:
          "---ntitle:A sample article about...npublished:falsen---n...",
      },
      ...data,
    },
  });
};
export const getArticles1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles`,
    method: "get",
    params: { per_page: "6", ...params },
    headers,
    data,
  });
};
