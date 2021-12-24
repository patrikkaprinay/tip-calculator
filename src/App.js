import './App.css'
import Calculator from './components/Calculator'
import Logo from './components/Logo'

function App() {
  return (
    <div className="w-screen h-screen bg-grayish-cyan-middle font-space-mono">
      <div className="w-full h-full md:h-5/6 flex flex-col items-center justify-center gap-10 md:gap-24 p-3 lg:p-0">
        <Logo />
        <Calculator />
      </div>
    </div>
  )
}

export default App
