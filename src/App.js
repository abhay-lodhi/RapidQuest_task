import './App.css';
import First from './components/First';
import Navbar from './components/Navbar';
import PercentageChart from './components/PercentageChart';
import Second from './components/Second';
import Third from './components/Third';




export default function App() {
  return (
    <div className='bg-[#e9e9eb] flex justify-center  '>
    <div className='md:mt-[4px] md:mb-[10px] md:rounded-[25px] bg-white flex md:flex-row flex-col justify-between p-[5px] md:w-[98vw] w-[100vw] md:min-h-[98vh] min-h-[100vh]'>
      <div className='flex flex-row md:w-[28%] w-[100%]'>
    <div className=" md:w-auto  w-[100%] h-auto  md:relative fixed m:left-0 bottom-0"> <Navbar/></div>
      
    <First/>
      </div>
    
    <Second/>
    <Third/>
   
    
   
    </div>
    </div>
  )
}
