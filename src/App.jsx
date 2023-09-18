import { useState } from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <ChakraProvider>
      <Navbar/>
  )
}

export default App
