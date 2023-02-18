import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FresherCard from './FresherCard';

const Fresher = ({id}) => {
    const [fjobs, setFjobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/fresherjob')
            .then(res => res.json())
            .then(data => setFjobs(data))
    }, [])

    console.log(fjobs);

    return (
        <div id={id} className='mt-10'>
            <h1 className=' w-3/6 text-sky-800 inline text-4xl my-6 font-extrabold bg-indigo-300 mx-6 px-3 rounded'>Freshers Job</h1>
            <div className='grid grid-cols-1 gap-6 w-2/3 mx-auto my-5'>
                {
                    fjobs.slice(3).map((fjob, i) => < FresherCard key={i} fjob={fjob}></FresherCard>)
                }
               <div className='w-32 mx-auto'> <Link to='/allfresherjob'><button className='btn btn-secondary  text-center'>See All Jobs</button></Link>
            </div></div>
        </div>
    );
};

export default Fresher;