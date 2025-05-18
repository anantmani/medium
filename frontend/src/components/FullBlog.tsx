import AppBar from "./AppBar.tsx";
import {Avtar} from "./BlogCard.tsx";

interface Blog{
    id:string,
    title: string,
    content: string,
    published: string,
    author: {
        name: string,
    }
}

function FullBlog({blog}:{blog:Blog}) {

    console.log(blog)
    return (<div>
            <div><AppBar/></div>
        <div className="grid grid-cols-12 mt-10 ml-10">
        <div className="col-span-8 ">
            <div className="text-3xl font-extrabold mt-2 mb-2" >{blog.title}hi</div>
            <div className="text-slate-500 mb-2">Posted on {blog.published}</div>
            <div className="mt-2">{blog.content}</div>
        </div>
            <div className="col-span-4 ">

                <div className="m-2">Author</div>
                <div className="flex">
                    <div className="flex flex-col justify-center m-2 ">
                    <Avtar name={blog.author.name}/>
                    </div>
                <div className="flex  flex-col justify-center m-2">
                <div className="text-xl font-bold ">{blog.author.name}</div>
                <div className="text-slate-500 ">Master of mirth, pirveyor of puns, and the funniest person in ht kingdom</div>
            </div>
            </div>
            </div>

        </div>
        </div>

    )
}

export default FullBlog