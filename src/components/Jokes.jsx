import {useEffect, useState} from "react";

const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue)

  useEffect(() => {
    fetch(url).then(async res => {
      const json = await res.json()
      setData(json)
    })
  }, []);

  // console.log('data', data)

  return data
}

export const Jokes = () => {
  const [jokes, setJokes] = useState([])
   useFetch('https://official-joke-api.appspot.com/random_ten')

  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_ten`).then(async res => {
      const json = await res.json()
      setJokes(json)
      console.log(json)
    })
  }, []);

  return (<div><h1>Jokes</h1>

    {jokes.map(joke => (<div><h3>{joke.setup}</h3><h2>{joke.punchline}</h2>
      <hr/>
    </div>))}
  </div>)
}