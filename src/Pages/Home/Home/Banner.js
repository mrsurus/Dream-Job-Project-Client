import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='h-[600px] w-full '>
                <div className='h-full bg-no-repeat bg-cover w-full ' style={{ backgroundImage: `url(https://surejob.in/wp-content/uploads/2022/12/best-job-search-websites.jpg)` }}>
                  <div className='bg-black bg-opacity-20 h-full text-white '>
                    <p className=''>this is banner</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;