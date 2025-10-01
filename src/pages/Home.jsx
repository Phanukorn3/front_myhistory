import Nav from '../components/Navbar.jsx'
import ButtonUpload from '../components/ButtonUpload.jsx'

export default function Home() {
    return(
        <>
            <div className='fixed inset-x-0 top-0'>
                <Nav />
            </div>
            <div className='flex justify-center fixed inset-x-0 bottom-0 z-40 m-4'>
                {/* <ButtonUpload onClick={() => setPage('upload')} /> */}
            </div>
        </>
    )
}