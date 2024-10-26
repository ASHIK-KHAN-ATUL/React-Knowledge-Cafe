import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }




  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-6'>
        <Blogs handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
