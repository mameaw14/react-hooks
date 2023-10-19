import {useFetch} from "../hooks/useFetch.js";


export const Jokes = () => {
  const jokes = useFetch('https://official-joke-api.appspot.com/random_ten', [])


  return (
    <div>
      <h1>Jokes</h1>
      {jokes.map(joke => (
        <div>
          <h3>{joke.setup}</h3>
          <h2>{joke.punchline}</h2>
          <hr/>
        </div>
      ))}
    </div>)
}