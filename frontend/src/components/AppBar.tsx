import {Avtar} from "./BlogCard.tsx";
import {Link} from "react-router-dom";

function AppBar() {
    return (<div className="border-b flex justify-between">
        <div> Medium</div>


        <div className="p-2">
            <Link to = '/publish'>
            <button type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish
            </button>
            </Link>
            <Avtar name={"Peter"}></Avtar></div>
    </div>)
}

export default AppBar;