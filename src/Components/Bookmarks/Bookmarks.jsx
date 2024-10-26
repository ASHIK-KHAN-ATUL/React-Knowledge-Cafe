import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {


    return (
        <div className="md:w-1/3 gap-3 flex flex-col ml-3">

            <div>
                <h3 className="text-3xl text-center font-semibold bg-red-50 p-5">Reading Time: {readingTime} </h3>
            </div>

            <h2 className="text-3xl text-center font-bold bg-green-50 rounded-xl p-5">Bookmarked Blogs: {bookmarks.length} </h2>

            <div className="bg-red-50 p-5 rounded-xl">
            {
                bookmarks.map((bookmark , idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.num
}

export default Bookmarks;