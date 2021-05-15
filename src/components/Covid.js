import React, { useEffect, useState } from 'react'
import './Covid.css'

const Covid = () => {
  const [data, setData] = useState([])
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json')
      const data = await res.json()
      setData(data.statewise)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCovidData()
  }, [])
  return (
    <>
      <section>
        <h1>🔴Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        {data.map((state) => {
          return (
            <div key={state.state} id={state.state}>
              <h1 className="heading">{state.state}</h1>
              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>OUR</span> STATE
                    </p>
                    <p className="card_total card_small">{state.state}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>TOTAL</span> RECOVERED
                    </p>
                    <p className="card_total card_small">{state.recovered}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>TOTAL</span> CONFIRMED
                    </p>
                    <p className="card_total card_small">{state.confirmed}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>TOTAL</span> DEATHS
                    </p>
                    <p className="card_total card_small">{state.deaths}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>TOTAL</span> ACTIVE
                    </p>
                    <p className="card_total card_small">{state.active}</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card_main">
                  <div className="card_inner">
                    <p className="card_name">
                      <span>LAST</span> UPDATED
                    </p>
                    <p className="card_total card_small">
                      {state.lastupdatedtime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Covid
