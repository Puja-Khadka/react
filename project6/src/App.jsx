import Index from "./component"
import useCustomhook from "./customhook"


function App() {
  const [data,loading]=useCustomhook("https://api.thecatapi.com/v1/images/search?limit=5")
   if(loading)return <h1>loading....</h1>
  return (
    <>
    <Index/>
    <div className="flex flex-wrap justtify-center ml-10 ">
      {data.map((cat)=>
        (<img className="w-100 h-60 " src={cat.url} alt="cat"/>))}
        </div>
    </>
  )
}

export default App
