import {useEffect, useRef, useState} from "react";

function randomString(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

const useRandomText = (text) => {
  const [index, setIndex] = useState(1)
  const [randomText, setRandomText] = useState(randomString(text.length - 1))
  const indexRef = useRef(1)

  useEffect(() => {
    setIndex(1)
    indexRef.current = 1
    const interval = setInterval(() => {
      setIndex(prev => prev + 1)
      indexRef.current = Math.min(indexRef.current + 1, text.length)
      setRandomText(randomString(text.length - indexRef.current))
    }, 50)

    return () => clearInterval(interval)
  }, [text]);

  return [text.slice(0, index), randomText]
}
const useTextDecryption = (data, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, randomText] = useRandomText(data[currentIndex])

  useEffect(() => {
    const length = data.length
    const timeout = setTimeout(() => {
      setCurrentIndex(prevState => (prevState + 1) % length)
    }, interval)
    return () => clearTimeout(timeout)
  }, [currentIndex]);

  return [text, randomText]
}

export const ChallengePage = () => {
  const data = [
    "encrypt access tokens",
    "share encrypted data",
    "encrypt credit cards",
  ];
  const [text, randomText] = useTextDecryption(data);
  return (
    <div>
      <h1>
        {text}{randomText}
      < /h1>
    </div>
  )
}