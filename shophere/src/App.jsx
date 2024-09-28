import Header from "./Component/Header/Header"
import MainHeader from "./Component/Header/MainHeader"

function App() {

  return (
    <div className="bg-slate-100 min-h-screen w-full">
      <MainHeader className="md:hidden"/>
      <Header />
    </div>
  )
}

export default App
