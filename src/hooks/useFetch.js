import {useEffect, useState} from "react";

export const useFetch = (url, initialValue = null) => {
  const [result, setResult] = useState(initialValue)

  useEffect(() => {
    fetch(url).then(async res => {
      const json = await res.json()
      setResult(json)
    })

  }, []);

  return result
}
