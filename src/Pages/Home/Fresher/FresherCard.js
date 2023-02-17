import React from 'react';

const FresherCard = ({ fjob }) => {
    const { pname, location, logo, company } = fjob
    return (
        <div>
            <div className=' rounded grid grid-cols-3 bg-cyan-400 px-5 py-5'>
                <div className=' col-span-2 '>
                    <p className='text-2xl font-bold'>{pname}</p>

                    <div className='flex flex-wrap gri mt-4'>
                        <div className='flex'>
                            <img className='w-8' src={logo} alt="" />
                            <p className='ml-3 font-extrabold text-blue-900'>{company}</p>
                        </div>
                        <p className='ml-12 text-gray-600  '>{location}</p>
                    </div>
                </div>
                <div className='text-end col-span-1 md:my-auto '>
                    <button className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FresherCard;