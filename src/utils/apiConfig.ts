const baseAPI = process.env.NEXT_PUBLIC_BASE_URL;

const ApiConfig = {
  highlights: baseAPI + "/v1/highlights",
  categories: baseAPI + "/v1/categories",
  activities: baseAPI + "/v1/activities/%d",
};

export default ApiConfig;
