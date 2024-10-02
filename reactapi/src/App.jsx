import { useState, useEffect } from 'react';
// import axios, {isCancel, AxiosError} from 'axios';
import Card from './component/Card';

function App() {
  const [increament, setIncreament] = useState(3);
  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })

  }, [])

  return (
    <>
    <div className='bg-gray-200'>
      <h1 className="text-3xl font-bold text-center py-6">Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto'>
        {products.map((ele, index) => {
          return (
            <div key={index}>
              <Card ele={ele} />
            </div>
          );
        })}
      </div>

      </div>

    </>

  );
}
export default App;
