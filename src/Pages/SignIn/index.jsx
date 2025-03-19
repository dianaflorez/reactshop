import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <Layout>
      <h2 className='font-medium text-xl text-center mb6 w-80'>Welcome</h2>
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>diana@gmail.com</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>******</span>
        </p>
        <Link to='/'>
          <button className='bg-black text-white w-full py-3 mt-4 mb-2'>
            Log In
          </button>
        </Link>
        <div className='text-center'>
          <a className='font-light text-xs underline underline-offset-4' href='/'>
            Forgot password?
          </a>
          <button className='font-light text-xs underline underline-offset-4'>
            Sign Up
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default SignIn