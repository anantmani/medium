function Signin(){
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 p-4">Visible at all screen sizes</div>
            <div className="bg-green-500 p-4 hidden md:block">Hidden at md screens</div>
        </div>

    )
}
export default Signin