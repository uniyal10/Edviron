import { useState, useEffect } from "react"
const DateComponent: React.FC = () => {
  const date: Date = new Date()
  const [dateTime, setDateTime] = useState<Date>(date)
  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <>
      <div className="date">
        <div className="time">
          <div className="t" id="hour">
            {date.getHours()}
          </div>
          <div className="t" id="minutes">
            {date.getMinutes()}
          </div>
          <div className="t" id="day">
            {date.getHours() >= 12 ? "PM" : "AM"}
          </div>
          {/* <div className="t" id="day">
            {date.getSeconds()}
          </div> */}
        </div>
        <div className="date_string">
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </div>
      </div>
    </>
  )
}

export default DateComponent
