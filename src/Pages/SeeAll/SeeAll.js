import React from 'react';
import { Link } from 'react-router-dom';
import FresherCard from '../Home/Fresher/FresherCard';

const SeeAll = ({data}) => {
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div>
           <FresherCard fjob={data}></FresherCard>
        </div>
        </div>
    );
};

export default SeeAll;