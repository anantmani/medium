import {useBlogById} from "../hooks";
import {useParams} from 'react-router-dom'
import FullBlog from "../components/FullBlog.tsx";

function Blog() {
    const {id} = useParams();
    const {loading, blog} = useBlogById({id: id || ""}
    );


    if (loading || !blog) {
        return (<div>loading...</div>)
    }

    return (
        <div>
            <FullBlog blog={blog}></FullBlog>
        </div>)
}

export default Blog;