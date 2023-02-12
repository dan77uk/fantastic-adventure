import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useDataFetching(dataSource) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(dataSource);
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    }

    fetchData();
  }, [dataSource]);

  return [loading, error, data];
}
