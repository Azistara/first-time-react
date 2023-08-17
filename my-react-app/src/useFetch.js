import { useState, useEffect } from "react";

{/* Custom Hooks */}


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal:abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to fetch data for this resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          //Catch the errors.
          if(err.name === 'AbortError'){
            console.log('The fetch operation was aborted');
          } else {
            setIsPending(false);
            setError("" + err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]); //UseEffect watch for state changes.

  return { data, isPending, error }
};

export default useFetch;