import React, {ChangeEvent, useState} from "react"
import data from '../data/universities.json'
export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [filterPrograms, setFilterPrograms] = useState(data);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearch(val);
        filterProgs(val);
    }

    const filterProgs = (search: string) => {
        const progs = data.filter((prog: {program: string;tuition: number}) => 
        (prog.program.toLowerCase().includes(search.toLowerCase())))
        setFilterPrograms(progs);
    }
    return (
        <>
        
        <div className="flex justify-center h-2/5">
            <div className = "bg-white w-full flex justify-center h-2/5  p-11">
                <div className="border-4 bg-gray-300 flex py-4 px-4 rounded-full m-10">
                    <form className="flex items-center" >
                        <label className="sr-only">Search</label>
                        <input className="px-2 w-80 h-7 rounded-l-full" value={search} onChange={handleInput}></input>
                        <button className="px-4 bg-orange-300 h-7 m-3 rounded-r-full">Search</button>
                    </form>
                </div>  
            </div>
        </div>
        <h1 className="text-4xl px-4 m-4 flex justify-center">Search Results</h1>
        <div className="flex justify-center h-screen bg-gray-300">
            <div className="bg-gray-400 flex justify-center">
               <ul className="bg-gray-300">
                {filterPrograms.map(
                    (prog) => (
                        <div className="flex justify-center">
                            <li>{prog.program} - {prog.tuition}</li>
                        </div>
                        
                    )
                    
                )}
                
                </ul> 
                
            </div>
            
        </div>
        
        </>
            
        
    )
}
