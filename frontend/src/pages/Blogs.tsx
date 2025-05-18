import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar.tsx";
import {Link} from "react-router-dom";
import {useBlog} from "../hooks";

function Blogs() {

    const {loading, blogs} = useBlog()
    console.log(blogs)
    if (loading || !blogs || blogs.length === 0) {
        return (<div>Loading...</div>)
    }

    return (
        <div>
            <AppBar></AppBar>
            <div className="flex flex-col justify-center items-center ">
                <div className="mt-4 w-3/4 ">
                    {
                        blogs.map((blog) => (
                                <div className="m-2">
                                    <Link to={`/blog/${blog.id}`}>
                                        <BlogCard
                                            author={blog.author.name || "Anant"}
                                            published={blog.published}
                                            title={blog.title}
                                            content={blog.content}
                                        />
                                    </Link>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>)
}

export default Blogs;