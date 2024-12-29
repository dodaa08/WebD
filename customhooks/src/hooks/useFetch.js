import { useState, useEffect } from "react";

export function useFetch(url, reFetch) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
    
  async function fetchR() {
    const response = await fetch(url);
    const json = await response.json(); // Await the response
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchR();
  }, [url]);

  useEffect(()=>{
    setInterval(fetchR, reFetch*1000);  // clear Interval fix it
  })

  return { post: data, loading }; // Return data in the expected format
}
