import { useEffect, useState } from 'react'

const Calculator = () => {
  const [error, setError] = useState('')
  const [amount, setAmount] = useState('')
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState('')
  const [tipperson, setTipperson] = useState('0.00')
  const [total, setTotal] = useState('0.00')

  const checkPeople = (text) => {
    if (text === '0' || text === '') {
      setError("Can't be zero")
      setPeople(0)
    } else {
      setError('')
      if (isNaN(parseFloat(text))) {
        setPeople(0)
      } else {
        setPeople(parseFloat(text))
      }
    }
  }

  const changeBill = (text) => {
    setAmount(text)
  }

  const toTwoDecimals = (number) => {
    return number.toFixed(2)
  }

  useEffect(() => {
    const calculate = () => {
      if (
        amount !== '' &&
        tip !== '' &&
        people !== '' &&
        amount !== 0 &&
        typeof amount !== String &&
        people !== 0 &&
        !isNaN(tip)
      ) {
        let newTipperson = (parseFloat(amount) * (tip / 100)) / people
        let newTotalPerson = (parseFloat(amount) * (tip / 100 + 1)) / people

        setTipperson(toTwoDecimals(newTipperson))
        setTotal(toTwoDecimals(newTotalPerson))
      }
    }
    calculate()
  }, [amount, tip, people])

  const resetCalculator = () => {
    setAmount('')
    setTip(0)
    setPeople('')
    document.querySelector('#tipAmount').value = ''
    setTipperson('0.00')
    setTotal('0.00')
  }

  return (
    <div className="bg-white w-full lg:w-[870px] rounded-2xl p-12 min-w-[396px]">
      <div className="flex items-center flex-col md:flex-row gap-12 h-full">
        <div className="flex items-center justify-center flex-col w:full md:w-1/2">
          <div className="w-full flex flex-col gap-6 font-bold">
            <div className="flex flex-col text-grayish-cyan-darkest gap-2 dollarBefore text-sm">
              <p>Bill</p>
              <input
                type="text"
                onChange={(e) => changeBill(e.target.value)}
                value={amount}
                autoFocus
                className="w-full bg-grayish-cyan-middle/50 focus:outline-strong-cyan
                  outline-none px-3 py-1.5 rounded-md text-right relative text-dark-cyan/80 font-bold text-xl outline-offset-0"
              />
              {/* <input
                onChange={(e) => changeBill(e.target.value)}
                value={amount}
                type="number"
                className="bg-grayish-cyan-middle/50 focus:outline-strong-cyan outline-none px-3 py-1.5 rounded-md text-right relative text-dark-cyan/80 font-bold text-xl outline-offset-0"
              /> */}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-grayish-cyan-darkest text-sm">Select Tip %</p>
              <div className="grid grid-cols-3 grid-rows-2 text-white gap-3 font-bold">
                <div
                  onClick={() => setTip(5)}
                  className={`bg-dark-cyan text-center ${
                    tip === 5 ? '!bg-strong-cyan hover:!bg-strong-cyan/70' : ''
                  } py-2 text-xl rounded-md hover:bg-strong-cyan/50 hover:text-dark-cyan transition duration-150 cursor-pointer`}
                >
                  5%
                </div>
                <div
                  onClick={() => setTip(10)}
                  className={`bg-dark-cyan text-center ${
                    tip === 10 ? '!bg-strong-cyan hover:!bg-strong-cyan/70' : ''
                  } py-2 text-xl rounded-md hover:bg-strong-cyan/50 hover:text-dark-cyan transition duration-150 cursor-pointer`}
                >
                  10%
                </div>
                <div
                  onClick={() => setTip(15)}
                  className={`bg-dark-cyan text-center ${
                    tip === 15 ? '!bg-strong-cyan hover:!bg-strong-cyan/70' : ''
                  } py-2 text-xl rounded-md hover:bg-strong-cyan/50 hover:text-dark-cyan transition duration-150 cursor-pointer`}
                >
                  15%
                </div>
                <div
                  onClick={() => setTip(25)}
                  className={`bg-dark-cyan text-center ${
                    tip === 25 ? '!bg-strong-cyan hover:!bg-strong-cyan/70' : ''
                  } py-2 text-xl rounded-md hover:bg-strong-cyan/50 hover:text-dark-cyan transition duration-150 cursor-pointer`}
                >
                  25%
                </div>
                <div
                  onClick={() => setTip(50)}
                  className={`bg-dark-cyan text-center ${
                    tip === 50 ? '!bg-strong-cyan hover:!bg-strong-cyan/70' : ''
                  } py-2 text-xl rounded-md hover:bg-strong-cyan/50 hover:text-dark-cyan transition duration-150 cursor-pointer`}
                >
                  50%
                </div>
                <input
                  type="text"
                  id="tipAmount"
                  onClick={(e) => setTip(parseInt(e.target.value))}
                  onChange={(e) => setTip(parseInt(e.target.value))}
                  placeholder="Custom"
                  className="bg-grayish-cyan-middle/50 p-2 text-xl rounded-md transition duration-150 text-dark-cyan font-bold text-right focus:outline-strong-cyan outline-none outline-offset-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <p className="text-grayish-cyan-darkest">Number of People</p>
                <p className="text-red-700/80">{error}</p>
              </div>
              <div className="w-full personBefore">
                <input
                  type="text"
                  onChange={(e) => checkPeople(e.target.value)}
                  value={people}
                  className={`w-full bg-grayish-cyan-middle/50 ${
                    error ? 'outline-red-600' : 'focus:outline-strong-cyan'
                  } outline-none px-3 py-1.5 rounded-md text-right relative text-dark-cyan/80 font-bold text-xl outline-offset-0`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full md:w-1/2 h-full">
          <div className="w-full h-full bg-dark-cyan text-white rounded-lg py-5 px-9 flex flex-col justify-between">
            <div className="flex flex-col gap-7 my-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Tip Amount</p>
                  <p className="text-sm text-grayish-cyan-darker">/ person</p>
                </div>
                <div>
                  <p className="text-5xl text-strong-cyan flex items-center justify-center font-bold">
                    <span className="text-4xl">$</span>
                    {tipperson}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Total</p>
                  <p className="text-sm text-grayish-cyan-darker">/ person</p>
                </div>
                <div>
                  <p className="text-5xl text-strong-cyan flex items-center justify-center font-bold">
                    <span className="text-4xl">$</span>
                    {total}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => resetCalculator()}
                className={`${
                  tip === 0 && amount === '' && people === ''
                    ? 'opacity-30'
                    : 'hover:bg-grayish-cyan-middle !cursor-pointer'
                } bg-strong-cyan w-full py-2 text-dark-cyan rounded-md uppercase font-bold transition duration-150 cursor-default`}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
