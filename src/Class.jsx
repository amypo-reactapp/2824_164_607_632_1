import React,{useState} from 'react'
const Class=()=>{
        const [count, setCount] = useState(0); // Initialize count to 0
      
        const handleIncrement = () => {
          setCount(count + 1); // Increment count by 1
        };
      
        return (
          <div>
            <button onClick={handleIncrement}>Increment Counter: {count}</button>
          </div>
        );
      };
export default Class

