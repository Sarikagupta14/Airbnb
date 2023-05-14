import './App.css';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './Components/data'
import Navbar from './Components/Navbar';
function App() {

  const cards = data.map(item=>{

  
  return (
    
    <Card
    key={item.id}
    {...item}/>



    // img={item.image}
    // rating={item.rating}
    // reviewCount={item.reviewCount}
    // location={item.location}
    // title={item.title}
    // price={item.price}
    // openSlot={item.openSlot}/>
   
    
  );
})
return(
  <div className='container'>
    <Navbar/>
    <Hero/>
    <section className='card--list'>
    {cards}
    </section>
   
  </div>
)
}

export default App;
