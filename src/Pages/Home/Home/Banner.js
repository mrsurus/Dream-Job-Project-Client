import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({handleClickFindJob}) => {
  return (
    <div>
      <div className="hero md:h-[500px] h-64px " style={{ backgroundImage: `url("https://media.istockphoto.com/id/1349094945/photo/human-using-a-computer-laptop-for-searching-for-job-and-fill-out-personal-data-on-job-website.jpg?b=1&s=170667a&w=0&k=20&c=p_SRXAc7KnjTOB803Xap7irCB8xgiAey1SerMMFj-x8=")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">Find Your Next Dream Job</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='postjob'><button className="btn btn-secondary mx-10 mb-5">Post a Job</button></Link>
            <button onClick={handleClickFindJob} className="btn btn-success mx-10">Find a Job</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;