import AppBar from "../components/AppBar.tsx";
import {useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../../config.ts";
import {useNavigate} from "react-router-dom";

function Publish(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
const handleClick = async ()=>{
   const  blogInput = {
        title,
        content: description,
    }
    const res = await axios.post(`${BACKEND_URL}/api/v1/blog/`, blogInput,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
   navigate(`/blog/${res.data.id}`)
}
    return <div>
        <AppBar></AppBar>
        <div className="w-7/9 m-10">
            <label htmlFor="message"
                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-black mx-auto w-fit">Title</label>
            <textarea id="message" rows={1}
                      className="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                      placeholder="Enter the Title of your Post"
            onChange={(e)=>{
                setTitle(e.target.value);
            }}></textarea>

            <label htmlFor="message"
                   className="block mb-2 text-lg font-medium text-gray-900 dark:text-black mx-auto w-fit">Body</label>
            <textarea id="message" rows={6}
                      className="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mx-auto"
                      placeholder="Enter the Body of the post"
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            ></textarea>
            <button type="button"
                    className=" ml-20 mt-20 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                    " onClick={()=>handleClick()}>Submit
            </button>

        </div>


    </div>
}

export default Publish