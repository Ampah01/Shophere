import Header from "./Component/Header/Header"
import MainHeader from "./Component/Header/MainHeader"

function App() {

  return (
    <div className="bg-white min-h-screen min-w-min ">
      <MainHeader className="md:hidden"/>
      <Header />
      <hr />
    </div>
  )
}

export default App
