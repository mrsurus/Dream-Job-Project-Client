import React, { useEffect, useState } from 'react';
import FresherCard from './FresherCard';

const Fresher = () => {
    const [fjobs, setFjobs] = useState([])

    useEffect(() => {
        fetch('Fresherjob.json')
            .then(res => res.json())
            .then(data => setFjobs(data))
    }, [])

    console.log(fjobs);

    return (
        <div className='mt-10'>
            <h1 className=' w-3/6 text-sky-800 inline text-4xl my-6 font-extrabold bg-indigo-300 mx-6 px-3 rounded'>Freshers Job</h1>
            <div className='grid grid-cols-1 gap-6 w-2/3 mx-auto my-5'>
                {
                    fjobs.slice(3).map((fjob, i) => < FresherCard key={i} fjob={fjob}></FresherCard>)
                }
                <button className='btn btn-secondary w-32 mx-auto'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Fresher;