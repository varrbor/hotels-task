import React, { useState } from 'react'
import { getCalculatedData } from '../helpers/getCalculatedData'
import { useFetch } from '../hooks/useFetch'
import ResultTable from '../components/ResultTable'

const App: React.FC = () => {
  const { data, loading } = useFetch()

  interface IRooms {
    econom: number
    premium: number
  }

  const [roomsNumber, setRoomsNumber] = useState<IRooms>({
    econom: 0,
    premium: 0,
  })
  const [calculatedData, setCalculatedData] = useState({
    premium: {
      occupied: 0,
      profit: 0,
    },
    econom: {
      occupied: 0,
      profit: 0,
    },
  })

  const onClickHandler = () => {
    setCalculatedData(
      getCalculatedData(roomsNumber.premium, roomsNumber.econom, data)
    )
  }

  const onRoomsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setRoomsNumber({
      ...roomsNumber,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <label htmlFor="cheese">Enter Free Premium rooms:</label>
          <input
            value={roomsNumber.premium}
            className="input-premium bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="premium"
            type="number"
            onChange={onRoomsChanged}
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <label htmlFor="cheese">Enter Free Econom rooms:</label>
          <input
            value={roomsNumber.econom}
            className="input-econom bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="econom"
            type="number"
            onChange={onRoomsChanged}
          ></input>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          onClick={onClickHandler}
        >
          Calculate
        </button>
      </div>
      {!loading && <ResultTable data={calculatedData} />}
    </div>
  )
}

export default App
