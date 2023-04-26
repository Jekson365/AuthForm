import { useState } from 'react'
import './styles/index.scss'
import { useForm } from 'react-hook-form'

type NewUser = {
  username: string,
  email: string,
  password: string,
  rPassword: string
}


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data: NewUser) => {
    console.log(data)
  }

  if (errors) {
    console.log(errors.name?.message)
  }


  return (
    <>
      <form
        onSubmit={handleSubmit((data) => onSubmit({ username: data.name, email: data.email, password: data.passowrd, repeatPassword: data.rPassword }))}
      >
        <h1>Registration</h1>
        <div className="input-group pos-rel">
          <div className="errorM">{errors.username?.message}</div>
          <label htmlFor="name">Username</label>
          <input
            {...register("username", {
              required: "username is required",
              minLength: 3,
              maxLength: 12,
            })}
            type="text" name='username' placeholder='name' className='inputfield' />
        </div>
        <div className="input-group pos-rel">
            <div className="errorM">{errors.email?.message}</div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "email is required",
              pattern: /^\S+@\S+$/i,
            })}
            type="email" name='email' placeholder='email' className='inputfield' />
        </div>
        <div className="input-group pos-rel">
            <div className="errorM">{errors.password?.message}</div>
          <label htmlFor="name">password</label>
          <input
            {...register("password", {
              required: "password is required",
              minLength: 3,
              maxLength: 12
            })}
            type="password" name='password' placeholder='password' className='inputfield' />
        </div>
        <div className="input-group pos-rel">
            <div className="errorM">{errors.repeatPassword?.message}</div>
          <label htmlFor="rpassword">Repeat password</label>
          <input
            {...register("repeatPassword", {
              required: "password is required",
            })}
            type="password" name='repeatPassword' placeholder='repeat password' className='inputfield' />
        </div>
        <input type="submit" className='submit' />
      </form>
    </>
  )
}

export default App
