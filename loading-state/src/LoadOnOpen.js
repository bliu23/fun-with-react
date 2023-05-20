import {useEffect, useState} from 'react'

function LoadOnOpen() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        const fetchedData = "Hello, world!"

        setData(fetchedData)
        setIsLoading(false)
      }, 1000)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="LoadOnOpen">
        <div>LOADING</div>
      </div>
    )
  }
  return (
    <div className="LoadOnOpen">
      <div>{data}</div>
    </div>
  );
}

export default LoadOnOpen;
