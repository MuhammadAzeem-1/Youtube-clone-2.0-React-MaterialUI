import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};

// import axios from "axios";

// const BASIC_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASIC_URL}/${url}, options`);
//   console.log(data);

//   return data;
// };

// const response = await fetch(`${BASIC_URL}/${url}, options`);
// const data = await response.json();
