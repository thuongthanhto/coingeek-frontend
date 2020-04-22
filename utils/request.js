import axios from "axios";
export const HOST = "https://api.staging.coingeek.staging-itoassistcom.co.uk";
export const TOKEN_GET = "966b8533e5596a8d296baeb96bf3e6";
export const TOKEN_POST = "896d7e96460eebd27050669f9452c9";
export const TOKEN_UPLOAD = "0f01dbcc0a71507ea99cebd199a30e";
const username = "admin";
const password = "386Kv8cFsSTf4rVk";

export const getFetch = ({ endpoint }) =>
  axios.get(HOST + endpoint, {}).then((res) => res.data);

export const postFetch = (endpoint, body) =>
  axios
    .post(`${HOST}${endpoint}?token=${TOKEN_GET}`, body, {
      headers: {
        Authorization: "Basic YWRtaW46Mzg2S3Y4Y0ZzU1RmNHJWaw==",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => res.data);

export const postWithTokenPost = (endpoint, body) =>
  axios
    .post(`${HOST}${endpoint}?token=${TOKEN_POST}`, body, {
      headers: {
        Authorization: "Basic YWRtaW46Mzg2S3Y4Y0ZzU1RmNHJWaw==",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((res) => res.data);

export const postUpload = (endpoint, formData) =>
  axios
    .post(`${HOST}${endpoint}?token=${TOKEN_UPLOAD}`, formData, {
      headers: {
        Authorization: "Basic YWRtaW46Mzg2S3Y4Y0ZzU1RmNHJWaw==",
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
