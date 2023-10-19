import {useState} from "react";

const useTextDecryption = (data, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

// TODO: rotate index every interval
// TODO: generate random text (hint: need another hook)

  return [data[currentIndex], '']
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