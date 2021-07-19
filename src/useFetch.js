import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("coudn't fetch results from the database");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
  return { data, isPending, error };
};
export default useFetch;
