
export default function NavBar(){
    
    return(
        <nav className="bg-amber-100">
            <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-4">
                <img src = 'images/logo3.png' className = "h-14 mr-3"/>

                <div className="w-full md:w-auto md:block" id = "navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border
                  md:flex-row md:space-x-10 md:mt-0 
                    md:border-0">
                        <li>
                            Search
                        </li>
                        <li>
                            About
                        </li>
                    </ul>                
                </div>

                <div>
                    <button className="btn bg-green-900 py-2 px-6 rounded-lg text-white">
                        Log In
                    </button>
                </div>

            </div>
        </nav>
    )
}