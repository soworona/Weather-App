import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const  [notification, setNotification] = useState(0);

  useEffect(() => {
    if(notification > 0) {
      document.title = "You have " + notification + " notifications"
    }
  })

  return (
    <div className="App">
      <button onClick={()=> {setNotification (notification + 1 )}}>Send Notification</button>
    </div>
  )
}

export default App
