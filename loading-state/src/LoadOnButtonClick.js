import {useEffect, useState} from 'react'

function LoadOnButtonClick() {
  const [data, setData] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)

  function getNextData() {
    const number = [2, 3, 4, 5, 6]
    const color = ["green", "red", "blue", "yellow", "teal"]
    const things = ["bottles", "balls", "pieces", "cars", "people"]
    const randomIndex = Math.floor(Math.random() * number.length);

    return number[randomIndex] + " " + color[randomIndex] + " " + things[randomIndex]
  }

  function handleButtonClicked() {
    setButtonClicked(true)
    setIsLoading(true)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setButtonClicked(false)
      setTimeout(() => {
        const fetchedData = getNextData()

        setData(data + fetchedData + " ")
        setIsLoading(false)
      }, 600)
    }
    fetchData()
  }, [buttonClicked])



  return (
    <div className="LoadOnButtonClick">
        <button onClick={handleButtonClicked}>Load more data</button>
        <div>{isLoading ? "LOADING" : "LOADED"}</div>
        <div>{data}</div>
    </div>
  )
}

export default LoadOnButtonClick;
