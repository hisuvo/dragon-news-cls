
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Latestnews } from './Latestnews'
import Navbar from './Navbar'
import LeftNavLayout from '../Layout/LeftNavLayout'
import RightNavLayout from '../Layout/RightNavLayout'
const Home = () => {
  return (
    <div className='font-poppins'>
        <header>
            <Header/>
            <section className='w-11/12 mx-auto'>
                <Latestnews/>
            </section>
            <nav className='w-11/12 mx-auto my-8'>
                <Navbar/>
            </nav>
        </header>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-3'>
            <aside className='left col-span-3'>
                <LeftNavLayout/>
            </aside>
            <section className='col-span-6'>
                <Outlet/>
            </section>
            <aside className='col-span-3'>
                <RightNavLayout/>
            </aside>
        </main>
        <footer></footer>
    </div>
  )
}

export default Home