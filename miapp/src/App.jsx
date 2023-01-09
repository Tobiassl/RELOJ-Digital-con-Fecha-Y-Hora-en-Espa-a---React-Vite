import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
const [time, setTime] = useState(new Date());

useEffect(() => {
const interval = setInterval(() => {
setTime(new Date());
}, 1000);
return () => clearInterval(interval);
}, []);

return (
<body>

  <div className='container'>
<h1 className='titulo'>Fecha & Hora Actual En España</h1>  
<h2 className='hora'>{time.toLocaleDateString('es-ES')} - {time.toLocaleTimeString('es-ES')}</h2> 
</div> 

</body>  

);  
}  
export default App;