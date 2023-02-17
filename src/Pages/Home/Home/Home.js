import React from 'react';
import Bestit from '../BestIt/Bestit';
import Exprienced from '../Exprienced/Exprienced';
import Fresher from '../Fresher/Fresher';
import Banner from './Banner';

const Home = () => {

    return (
        <div>
           <Banner></Banner>
           <Fresher ></Fresher>
           <Exprienced ></Exprienced>
           <Bestit ></Bestit>
        </div>
    );
};

export default Home;