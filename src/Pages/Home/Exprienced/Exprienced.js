import React, { useEffect, useState } from 'react';
import ExpriencedCard from './ExpriencedCard';

const Exprienced = () => {
    const [Ejobs, setEjobs] = useState([])

    useEffect(() => {
        fetch('Expriencedjob.json')
            .then(res => res.json())
            .then(data => setEjobs(data))
    }, [])

    console.log(Ejobs);

    return (
        <div className='mt-10 bg-slate-400 py-5'>
            <h1 className=' w-3/6 text-sky-800 inline text-4xl my-6 font-extrabold bg-indigo-300 mx-6 px-3 rounded'>Exprienced Job</h1>
            <div className='grid grid-cols-1 gap-6 w-2/3 mx-auto my-5'>
                {
                    Ejobs.slice(3).map((ejob, i) => < ExpriencedCard key={i} ejob={ejob}></ExpriencedCard>)
                }
                <button className='btn btn-secondary w-32 mx-auto'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Exprienced;