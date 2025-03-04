import { useState } from 'react'
import Nav from '../../Navbar/nav.jsx'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='h-100vh w-100% p-0 m-0'>
                <Nav />
            </div>

        </>
    )
}

export default Home
