import React, { useState } from 'react';
import Bestit from '../BestIt/Bestit';
import Exprienced from '../Exprienced/Exprienced';
import Fresher from '../Fresher/Fresher';
import Banner from './Banner';

const Home = () => {
    const [id, setId] = useState('')

    const handleClickFindJob = () =>{
        setId('section')
        const element = document.getElementById('section')
        if(element){
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <div>
           <Banner handleClickFindJob= {handleClickFindJob}></Banner>
           <Fresher id={id} ></Fresher>
           <Exprienced  ></Exprienced>
           <Bestit ></Bestit>
        </div>
    );
};

export default Home;