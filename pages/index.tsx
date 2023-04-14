import React, { useState } from 'react'
import { getCalculatedData } from '../helpers/getCalculatedData'

function App() {
  const users = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209]
  const [roomsNumber, setRoomsNumber] = useState({
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
      getCalculatedData(roomsNumber.premium, roomsNumber.econom, users)
    )
  }

  const onRoomsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setRoomsNumber({
      ...roomsNumber,
      [e.target.name]: Number(e.target.value),
    })
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <label htmlFor="cheese">Enter Free Premium rooms:</label>
          <input
            value={roomsNumber.premium}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="premium"
            type="number"
            onChange={onRoomsChanged}
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <label htmlFor="cheese">Enter Free Econom rooms:</label>
          <input
            value={roomsNumber.econom}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="mt-5">
        <div className="flex  justify-center mt-2">Result</div>
        <div className="flex flex-col  items-center justify-center mt-2">
          <div>
            Usage Premium: {calculatedData.premium.occupied} (EUR
            {calculatedData.premium.profit})
          </div>
          <div className=" mt-2">
            Usage Economy: {calculatedData.econom.occupied} (EUR
            {calculatedData.econom.profit})
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
