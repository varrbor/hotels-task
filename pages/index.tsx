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
    <div className="container">
      <div className="inputs">
        <div className="rooms">
          <label htmlFor="cheese">Free Premium rooms:</label>
          <input
            value={roomsNumber.premium}
            name="premium"
            type="number"
            onChange={onRoomsChanged}
          ></input>
        </div>
        <div className="rooms">
          <label htmlFor="cheese">Free Economy rooms:</label>
          <input
            value={roomsNumber.econom}
            name="econom"
            type="number"
            onChange={onRoomsChanged}
          ></input>
        </div>
        <button onClick={onClickHandler}>Calculate</button>
      </div>
      <div className="roomsUsage">
        <div>
          Usage Premium: {calculatedData.premium.occupied} (EUR{' '}
          {calculatedData.premium.profit})
        </div>
        <div>
          Usage Economy: {calculatedData.econom.occupied} (EUR{' '}
          {calculatedData.econom.profit})
        </div>
      </div>
    </div>
  )
}

export default App
