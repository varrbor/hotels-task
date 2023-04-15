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
            Usage Premium:{' '}
            <span className="res-premium-occupied">
              {data.premium.occupied}
            </span>{' '}
            (EUR {''}
            <span className="res-premium-profit">{data.premium.profit}</span>)
          </div>
          <div className="mt-2">
            Usage Economy:{' '}
            <span className="res-econom-occupied">{data.econom.occupied}</span>{' '}
            (EUR {''}
            <span className="res-econom-profit">{data.econom.profit}</span>)
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultTable
