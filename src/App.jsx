import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='max-w-6xl mx-auto mt-5 text-center'>
      <h1 className='mb-5 text-3xl'>Coffee House</h1>
      
      <div className='grid grid-cols-2 gap-10 mb-10'>
      {
        coffees.map((coffee,idx)=><CoffeeCard
        key={idx}
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
      }
      </div>
      
      
      
      <Link to="/add" ><button className='btn btn-secondary'>ADD COFFEE</button></Link>
    </div>
  )
}

export default App
