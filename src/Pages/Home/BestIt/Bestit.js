import React, { useEffect } from 'react';

const Bestit = () => {

    useEffect(()=>{
        fetch('Companydata.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
    return (
        <div>
            This is best it section
        </div>
    );
};

export default Bestit;