import React, { useState, useEffect } from 'react'
import './Vaccine.css'
const Vaccine = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('122001')
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()
  today = dd + '-' + mm + '-' + yyyy
  const getVaccineByPincode = async () => {
    try {
      const res = await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${search}&date=${today}`,
      )
      const data = await res.json()
      setData(data.sessions)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getVaccineByPincode()
  }, [search])

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter your pincode here..."
        />
      </div>
      {!data ? (
        <h3 className="warning">No Vaccine Slot in Your Area</h3>
      ) : (
        <div className="Vaccine">
          <h3>
            Total Slots Available -{' '}
            <span className="warning">{data.length}</span>
          </h3>
          {data.map((vaccine) => {
            if (vaccine.available_capacity != '0') {
              return (
                <div key={vaccine.center_id} className="Vaccine_body">
                  <div className="left">
                    <h1 className="name">
                      <span>Place - </span>
                      {vaccine.name}
                    </h1>
                    <h3 className="address">
                      <span>Address - </span>
                      {vaccine.address}
                    </h3>
                    <h3>
                      <span>{vaccine.fee_type} - </span>₹{vaccine.fee}
                    </h3>
                    <h3 className="age">
                      <span>Minimum age - </span>
                      {vaccine.min_age_limit}
                    </h3>
                    <h3 className="dose">
                      <span>Vaccine - </span>
                      {vaccine.vaccine}
                    </h3>
                  </div>
                  <div className="right">
                    <h3 className="timing">
                      <span>From - </span>
                      {vaccine.from}
                    </h3>
                    <h3 className="timing">
                      <span>To - </span>
                      {vaccine.to}
                    </h3>
                    <h3 className="available">
                      <span>Available Capacity - </span>
                      {vaccine.available_capacity}
                    </h3>
                    <h3 className="available">
                      <span>Available Dose 1 - </span>
                      {vaccine.available_capacity_dose1}
                    </h3>
                    <h3 className="available">
                      <span>Available Dose 2 - </span>
                      {vaccine.available_capacity_dose2}
                    </h3>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={vaccine.center_id} className="Vaccine_body">
                  <div className="left">
                    <h1 className="name">
                      <span>Place - </span>
                      {vaccine.name}
                    </h1>
                    <h3 className="address">
                      <span>Address - </span>
                      {vaccine.address}
                    </h3>
                    <h3>
                      <span>{vaccine.fee_type} - </span>₹{vaccine.fee}
                    </h3>
                    <h3 className="age">
                      <span>Minimum age - </span>
                      {vaccine.min_age_limit}
                    </h3>
                    <h3 className="dose">
                      <span>Vaccine - </span>
                      {vaccine.vaccine}
                    </h3>
                  </div>
                  <div className="right">
                    <h3 className="timing">
                      <span>From - </span>
                      {vaccine.from}
                    </h3>
                    <h3 className="timing">
                      <span>To - </span>
                      {vaccine.to}
                    </h3>
                    <h3 className="warning">Vaccine Currently Not Available</h3>
                  </div>
                </div>
              )
            }
          })}
        </div>
      )}
    </>
  )
}

export default Vaccine
