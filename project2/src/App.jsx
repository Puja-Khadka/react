import Card from "./Components/card.jsx";
import Student from "./Components/student.jsx";


function App() {


  return (
    <>
      <h1 className="bg-amber-950 text-white inline-block m-5">Tailwind test</h1>
     <Card username="Cat" />
     <Card username="beautiful cat"/>
    <Student name="Radha" age="23"/>
    <Student name="sita" age="23"/>
    </>
  )
}

export default App
