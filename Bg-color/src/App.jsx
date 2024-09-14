import { useState } from "react"


function App() {
  const [color, setColor] = useState("#9feddc")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-red-700 font-semibold shadow-lg"
          style={{backgorundColor: "red"}}>Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-green-700 font-semibold shadow-lg"
          style={{backgorundColor: "white"}}>Green</button>
          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-yellow-700 font-semibold shadow-lg"
          style={{backgorundColor: "yellow"}}>Yellow</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-blue-700 font-semibold shadow-lg"
          style={{backgorundColor: "Blue"}}>Blue</button>
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-black-700 font-semibold shadow-lg"
          style={{backgorundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
