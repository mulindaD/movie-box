import { useState, useEffect } from 'react';

const useFetch = (url, dependencyUrl = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(dependencyUrl || url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })

    return () => abortCont.abort();
  }, [url, dependencyUrl])

  return { data, isPending, error }
}

export default useFetch;