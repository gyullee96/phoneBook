import { useState } from 'react'
import './App.css'
import { Grid, TextField } from '@mui/material'
import ContactForm from './components/ContactForm'
import ContactToggle from './components/ConatactToggle'
import SearchBar from './components/SearchBar'


function App() {

  return (
    <div className='App'>
      <h1>Phone Book</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContactToggle />
          <SearchBar />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
