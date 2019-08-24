import { useEffect, useState } from "react";
const apiUrl = "https://api.hnpwa.com/v0";

export const buildUrl = {
  listItem: function(type, page) {
    return `${apiUrl}/${type}.json?page=${page}`;
  },
  item: function(id) {
    return `${apiUrl}/item/${id}.json`;
  }
};
export const apiService = {
  getData: async url => {
    const response = await fetch(url);
    const items = await response.json();
    return items;
  }
};

export default function useApi(url) {
  // State
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Api
  async function fetchData() {
    setIsLoading(true);
    const result = await apiService.getData(url);
    setData(result);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [data, isLoading];
}
