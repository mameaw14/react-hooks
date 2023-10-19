import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar.jsx";
import {useFetch} from "../hooks/useFetch.js";
import {Jokes} from "../components/Jokes.jsx";

const COVER_COUNT = 10
const MIN_DURATION = 1

export const HomePage = () => {
  const [count, setCount] = useState(0)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [transitionDuration, setTransitionDuration] = useState(1) // unit second
  const coverImages = useFetch(`https://shibe.online/api/shibes?count=${COVER_COUNT}`, [])

  useEffect(() => {
    const duration = transitionDuration < MIN_DURATION ? MIN_DURATION : transitionDuration
    const interval = setInterval(() => {
      setCurrentIdx(prevCurrentIdx => (prevCurrentIdx + 1) % COVER_COUNT)
    }, duration * 1000)

    return () => {
      console.log('cleanup')
      clearInterval(interval)
    }
  }, [transitionDuration]);

  return (<>
      <Navbar/>
      <h1>Welcome to my homepage</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => {
        setCount(count + 1)
      }}>increase
      </button>
      {/*  TODO: Cover Images */}
      <div>
        <img height={320} src={coverImages[currentIdx]}/>
      </div>
      <input value={transitionDuration} onChange={(e) => {
        setTransitionDuration(e.target.value)
      }}/>
      <Jokes/>
    </>)
}
