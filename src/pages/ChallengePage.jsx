import {useEffect, useState} from "react";
import generateText from '../utils/generateText'

const useTextDecryption = (data, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentIndex(index => {
        if ((index + 1) === 3) return 0
        return index + 1
      });
    }, (interval));
    return () => clearInterval(intervalRef);
  }, [interval])

  return [data[currentIndex]]
}

export const ChallengePage = () => {
  const data = [
    "encrypt access tokens",
    "share encrypted data",
    "encrypt credit cards",
  ];
  const [text] = useTextDecryption(data);
  const [renderText, setRenderText] = useState("")
  const [renderLastText, setRenderLastText] = useState("")
  useEffect(() => {
    function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
    }
    async function render(input) {
      for (let i = 0;i < input.length;i++) {
        await timeout(50)
        setRenderText(prev => prev + input[i])
        setRenderLastText(generateText(input.length - 1 - i))
      }
    }
    setRenderText("")
    render(text)
  }, [text])
  
  return (
    <div>

      <h1>{renderText} {renderLastText}</h1>
    </div>
  )
}