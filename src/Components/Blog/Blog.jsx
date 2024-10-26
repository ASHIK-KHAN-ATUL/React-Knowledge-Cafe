import PropTypes from 'prop-types';
import {FaBookmark  } from 'react-icons/fa';

const Blog = ({blog , handleBookmarks ,handleMarkAsRead}) => {
    const {id ,title , cover , author_img, author , posted_date , reading_time, hashtags } = blog;
    return (
        <div className='flex flex-col gap-4 mb-20'>

            <img
                className="w-full h-80 object-cover rounded-lg" src={cover} 
                alt={`Cover picture of the title ${title}`}  
            />

            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p className='text-base font-medium text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                
                <div className='flex gap-3 items-center'> 
                    <p className='text-xl font-medium text-gray-500'>{reading_time} min read </p> 
                    <button onClick={() => handleBookmarks(blog)} className='text-red-600 text-2xl'><FaBookmark> </FaBookmark></button>                  
                </div>
            </div>

            <h2 className='text-4xl font-bold'>{title}</h2>

            <p>
                {
                    hashtags.map(hash => <span key={hash}> <a href=''> {hash} </a> </span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(id ,reading_time)} className='text-blue-800 text-xl font-medium flex items-start'><u>Mark as Read</u> </button>
        </div>
    );
};
 
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}


export default Blog;