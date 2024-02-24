/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Heading from './components/Heading.jsx'
import Transaction from './components/Transaction.jsx'
import {mockTransactions} from './mockData.js'
import { Grid } from '@mui/material'
import Revenue from './components/Revenue.jsx'


function App() {
  const [data, setData] = useState(mockTransactions);

  return (
    <>
    <Grid>
      <Grid margin='10px'>
       
          <Heading />
       
      </Grid>
      <Grid margin='5px' >
        <Sidebar data={data}/>
      </Grid>
      <Grid margin='5px'>
        <Transaction data={data}/>
      </Grid>
      <Grid margin='5px'>
        <Revenue data={data}/>
      </Grid>
    </Grid>
    </>
  )
}

export default App
