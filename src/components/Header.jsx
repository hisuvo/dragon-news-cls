import moment from 'moment'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <div className='my-8'>
        <div className='flex justify-center items-center'>
            <img src={logo} alt="" />
        </div>
        <h2 className='text-gray-500 text-center mb-2 mt-4'>Journalism Without Fear or Favour</h2>
        <p className='text-center text-lg font-medium'> {moment().format("dddd, MMMM Do YYYY")} </p>
    </div>
  )
}

export default Header