const baseAPI = "https://web-dev.dev.kimo.ai"; //this can be made configurable using tools like env cmd for staging and production purpose

const ApiConfig = {
  highlights: baseAPI + "/v1/highlights",
  categories: baseAPI + "/v1/categories",
  activities: baseAPI + "/v1/activities/%d",
};

export default ApiConfig;
