import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead =  ( id , time) => {
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmark
    // console.log('Remove bokkmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id )
    setBookmarks(remainingBookmarks);
  }



  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-6'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks readingTime={readingTime}  bookmarks={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
