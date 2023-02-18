import React, { useEffect, useState } from 'react';
import SeeAll from './SeeAll';

const Allexpriencedjob = () => {
    const [edata, setEdata] = useState([])

    useEffect(()=>{
        fetch('https://dream-job-server.vercel.app/expriencedjob')
        .then(res => res.json())
        .then(data => setEdata(data))
    },[])

    return (
        <div>
            <div className='text-center mt-10'><h1 className=' w-3/6  text-sky-800 inline text-4xl my-6 font-extrabold bg-indigo-300 mx-6 px-3 rounded'>All Exprienced Job</h1></div>
            {
                edata.map(data => <SeeAll key={data._id} data={data}></SeeAll>)
            }
        </div>
    );
};

export default Allexpriencedjob;