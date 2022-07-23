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
    url: ` https://cors-anywhere.herokuapp.com/https://dev.to/api/articles/me`,
    method: "get",
    params,
    headers: { "api-key": "Please Enter Dev.to API key here", ...headers },
    data,
  });
};
export const postPosts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://cors-anywhere.herokuapp.com/https://api.medium.com/v1/users/Please enter user ID here/posts`,
    method: "post",
    params,
    headers: {
      Authorization:
        "Bearer Please Enter Medium API key here",
      "Content-Type": "application/json",
      ...headers,
    },
    data: {
      ...data,
    },
  });
};
export const postArticles = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://cors-anywhere.herokuapp.com/https://dev.to/api/articles`,
    method: "post",
    params,
    headers: {
      "Content-Type": "application/json",
      "api-key": "Please Enter Dev.to API key here",
      ...headers,
    },
    data: {
      article: {
        title: "Title",
        body_markdown: "Body",
        published: true,
        tags: "discuss",
        canonical_url: "",
      },
      ...data,
    },
  });
};
export const getLatest = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles/latest`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const getPublications = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: ` https://cors-anywhere.herokuapp.com/https://api.medium.com/v1/users/Please enter your user ID here/publications`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer Please Enter Medium API key here",
      ...headers,
    },
    data,
  });
};
export const getMe1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: ` https://cors-anywhere.herokuapp.com/https://api.medium.com/v1/me`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer Please Enter Medium API key here",
      ...headers,
    },
    data,
  });
};
export const getMe2 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: ` https://cors-anywhere.herokuapp.com/https://dev.to/api/users/me`,
    method: "get",
    params,
    headers: { "api-key": "Please Enter Dev.to API key here", ...headers },
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
