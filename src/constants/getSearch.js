const ENDPOINT = "https://www.googleapis.com/youtube/v3/search";
const KEY = "AIzaSyAVJP8VsXZ-0yHiCLNZ5lOl8y_c7ZSdHEg";
const channelType = "any";
const results = 20;
const order = "title";

let finalSearchResult = `${ENDPOINT}?key=${KEY}&channelType=${channelType}&maxResults=${results}&order=${order}`

export default finalSearchResult;