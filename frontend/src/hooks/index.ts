import {useState, useEffect} from "react";
import axios from "axios";
import {BACKEND_URL} from "../../config.ts";


interface Blog {
    id: string,
    title: string,
    content: string,
    published: string,
    author: {
        name: string,
    }
}

function useBlogById({id}: { id: string }) {
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            setBlog(res.data);
            setLoading(false);
        })

    }, [id])
    return {loading, blog}
}

function useBlog() {
    const [blogs, setBlog] = useState<Blog[]>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            console.log(res.data.content)
            setBlog(res.data.content);
            setLoading(false);
        })

    }, [])
    return {loading, blogs}
}

export {useBlog, useBlogById}