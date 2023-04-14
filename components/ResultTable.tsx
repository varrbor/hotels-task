import React from 'react'
type state = {
  occupied: number
  profit: number
}

type record = {
  econom: state
  premium: state
}
type props = {
  data: record
}

const ResultTable: React.FC<props> = (props) => {
  const { data } = props
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5">
        <div className="flex justify-center mt-2">Result</div>
        <div className="flex flex-col  items-center justify-center mt-2">
          <div>
            Usage Premium: {data.premium.occupied} (EUR {''}
            {data.premium.profit})
          </div>
          <div className="mt-2">
            Usage Economy: {data.econom.occupied} (EUR {''}
            {data.econom.profit})
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultTable
