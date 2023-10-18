import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar.jsx";
import {Jokes} from "../components/Jokes.jsx";

const IMG_COUNT = 10
const MIN_S = 1
export const HomePage = () => {
  const [images, setImages] = useState([])
  const [count, setCount] = useState(1)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [transitionDuration, setTransitionDuration] = useState(1)


  useEffect(() => {
    let duration = transitionDuration
    if (transitionDuration < MIN_S) duration = 1
    const interval = setInterval(() => {
      // console.log('transition', duration)
      setCurrentIdx(prevCurrentIdx => (prevCurrentIdx + 1) % IMG_COUNT)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [transitionDuration])

  useEffect(() => {
    fetch(`https://shibe.online/api/shibes?count=${IMG_COUNT}`).then(async result => {
      const json = await result.json()
      setImages(json)
    })
  }, [])

  return (
    <>
      <Navbar/>
      <h1>Welcome to my homepage</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      {/*  TODO: Cover Images Slide */}
      <div>
        <img src={images[currentIdx]} height={250}/>
      </div>
      <input value={transitionDuration} onChange={(e) => setTransitionDuration(e.target.value)}/>
    {/*  TODO: fetch posts and display */}
      <Jokes />

    </>
  )
}
