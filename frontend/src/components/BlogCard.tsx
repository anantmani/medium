
interface BlogCardTypes {
    author:string,
    published:string,
    title:string,
    content:string
}
function BlogCard({author, published, title, content}: BlogCardTypes)
{
return (<div>
<div className="flex ">
   <Avtar name={author}/>
    <div className="ml-1 ">{author}</div>
    <div className="flex flex-col justify-center ml-1">
    <Circle/>
    </div>
    <div className="text-slate-400 ml-1">
        {published}</div>
</div>
    <div className="font-bold text-xl mt-2 mb-2">
        {title}
    </div>
    <div className="">
        {content.slice(0,200)+'....'}
    </div>
    <div className="mt-7 text-slate-400">{`${Math.ceil(content.length/100)} mins read`}<div/>
</div>
    <div className="mt-7 bg-slate-200 h-1"></div>
</div>)
    }

    function  Avtar({name}:{name:string})
{
    return (<div
        className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>)
}
function Circle(){
    return (<div
        className="relative inline-flex items-center justify-center w-1 h-1 overflow-hidden bg-slate-400 rounded-full dark:bg-slate-400">

    </div>)
}
export default BlogCard;
export {Avtar};