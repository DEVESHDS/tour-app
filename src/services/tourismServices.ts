import ApiConfig from "@/utils/apiConfig";
import { api } from "@/utils/api";

export const fetchHighlights = () => {
  return api.get(ApiConfig.highlights);
};

export const fetchCategories = () => {
  return api.get(ApiConfig.categories);
};

export const fetchActivities = () => {
  return api.get(ApiConfig.activities);
};
