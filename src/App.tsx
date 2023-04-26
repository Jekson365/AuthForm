import { useState } from 'react'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  console.log(errors)
  return (
    <>
    <form>
      
    </form>
    </>
  )
}

export default App
