const ENDPOINT = "https://www.googleapis.com/youtube/v3/videos"
const KEY = "AIzaSyAVJP8VsXZ-0yHiCLNZ5lOl8y_c7ZSdHEg";
const chart = "mostPopular";
const results = 20;

let finalURL = `${ENDPOINT}?key=${KEY}&part=snippet,statistics&chart=${chart}&maxResults=${results}`;

export default finalURL;