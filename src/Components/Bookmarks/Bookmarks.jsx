import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {


    return (
        <div className="md:w-1/3 gap-3 flex flex-col ml-3">
            <h2 className="text-3xl text-center font-bold bg-green-50 rounded-xl p-5">Bookmarked Blogs: {bookmarks.length} </h2>

            <div className="bg-red-50 p-5 rounded-xl">
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}

export default Bookmarks;