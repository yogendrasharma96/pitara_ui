const Login=()=>{
    return <div className="">
        <div className="flex px-0">
            <h3 className="p-3">Username</h3>
            <input className="h-6 m-3 border-slate-900 border border-solid rounded-lg"></input>
            </div>
            <div className="flex px-0">
            <h3 className="py-3 px-3">Password</h3>
            <input  type="password" className="h-6 m-3 border-slate-900 border border-solid rounded-lg"></input>
            </div>
            <div className="flex flex-col-reverse">
                <button className="bg-green-400 rounded-md px-3 m-4">Login</button>
            </div>
        
    </div>
}

export default Login;