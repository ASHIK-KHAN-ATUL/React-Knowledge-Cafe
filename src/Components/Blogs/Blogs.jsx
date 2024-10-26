import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks , handleMarkAsRead}) => {

    const [blogs , setBlogs] = useState([]);

    useEffect( () => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])

    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-4xl">Blogs : {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func, 
    handleMarkAsRead: PropTypes.func
}

export default Blogs;