import React, { useEffect, useState } from 'react';
import SeeAll from './SeeAll';

const Allfresherjob = () => {
    const [fdata, setFata] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/fresherjob')
        .then(res => res.json())
        .then(data => setFata(data))
    },[])

    
    return (
        <div className=''>
            <div className='text-center mt-10'><h1 className=' w-3/6  text-sky-800 inline text-4xl my-6 font-extrabold bg-indigo-300 mx-6 px-3 rounded'>All Freshers Job</h1></div>
            {
                fdata.map(data => <SeeAll key={data._id} data={data}></SeeAll>)
            }
        </div>
    );
};

export default Allfresherjob;