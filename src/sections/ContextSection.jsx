import React,{useState} from 'react'
import FormComponent from '../components/FormComponent'
import ChartComponent from '../components/ChartComponent'

function ContextSection() {
  const [data, setData] = useState({
    homeValue:1000,
    downPayment:0,
    loanAmount:0,
    interestRate:2,
    tenure:5,
  });
  return (
    <main className='bg-black mt-5 min-h-[80vh] flex flex-col gap-5 md:flex-row md:gap-2 p-5 rounded-2xl text-slate-950'>
        <FormComponent data={data} setData={setData} />
        <ChartComponent info={data} />
    </main>
  )
}

export default ContextSection