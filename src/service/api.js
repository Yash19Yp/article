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
    url: `https://dev.to/api/articles/me`,
    method: "get",
    params,
    headers: { "api-key": "Fq23mfYKewnXT6wXoAcR26mJ", ...headers },
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
    url: `https://api.medium.com/v1/users/1c328e6d786d4f06a1f6810221322ce0bdd590aaf04361857b0b0bd3a0e9613de/posts`,
    method: "post",
    params,
    headers: {
      Authorization:
        "Bearer 2bb3834b7f254e0d7d051bfe5893a62afb275c4bc6227af1ab134a484b8304232",
      "Content-Type": "application/json",
      ...headers,
    },
    data: {
      title: "Liverpool FC",
      contentFormat: "html",
      content: "<h1>Liverpool FC</h1><p>You’ll never walk alone.</p>",
      canonicalUrl: "http://jamietalbot.com/posts/liverpool-fc",
      tags: "football",
      publishStatus: "public",
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
    url: `https://dev.to/api/articles`,
    method: "post",
    params,
    headers: {
      "Content-Type": "application/json",
      "api-key": "Fq23mfYKewnXT6wXoAcR26mJ",
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
    params: { per_page: "3", ...params },
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
    url: `https://api.medium.com/v1/users/1c328e6d786d4f06a1f6810221322ce0bdd590aaf04361857b0b0bd3a0e9613de/publications`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer 2bb3834b7f254e0d7d051bfe5893a62afb275c4bc6227af1ab134a484b8304232",
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
    url: `https://api.medium.com/v1/me`,
    method: "get",
    params,
    headers,
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
