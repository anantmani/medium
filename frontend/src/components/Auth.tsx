import {Link} from "react-router-dom";
import type {SigninInput} from "@invisibleana/medium-common";
import {useState} from "react";
import {BACKEND_URL} from "../../config.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Auth({type}: {type: "signin"|"signup"}) {
    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<SigninInput>({
        name: "",
        password: "",
        username: ""
    });

    async function sendRequest() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signin'?'signin':'signup'}`, postInputs)
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs")

    }
    return (
        <div className="  h-screen  flex flex-col justify-center">
            <div className = " flex justify-center">
                <div className=" w-80">
                    <div className="mb-6">
                    <div className=" text-3xl font-bold">
                        Create an Account
                    </div>
                    <div className="text-slate-400">
                        {type === "signup" ? "Already have an account?" : "Create an account"}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Signup" : "Login"}
                        </Link>
                    </div>
                    </div>
                    <div>
                        {type === "signup" ? <LablelledInput lable="Name" placeholder="Anant..."
                                        onChange={(e) => setPostInputs({...postInputs, name: e.target.value})}/> : null}
                        <LablelledInput lable="email" placeholder="anant@xyz.com"
                                        onChange={(e) => setPostInputs({...postInputs, username: e.target.value})}/>
                        <LablelledInput lable="password" placeholder="12324" type="password"
                                        onChange={(e) => setPostInputs({...postInputs, password: e.target.value})}/>
                    </div>
                    <button type="button"
                            onClick={() => sendRequest()}
                            className="mt-4 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        {type === "signin" ? "Signin" : "Signup"}
                    </button>

                </div>


            </div>
        </div>
    )
}

interface LablelledInputType {
    lable: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LablelledInput({lable, placeholder, onChange, type}: LablelledInputType) {
    return (<div className="mb-3">
        <label className="block mb-1 text-sm font-medium text-gray-900">{lable}</label>
    <input type={type||"text"} id="first_name"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           placeholder={placeholder} onChange={onChange} />
</div>)
}

export default Auth;