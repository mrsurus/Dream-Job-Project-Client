import React, { useEffect, useState } from 'react';
import BdcompanyCard from './BdcompanyCard';

const Bestit = () => {
    const [company, setCompany] = useState([])

    useEffect(() => {
        fetch('Companydata.json')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])

    const bdcompanies = company.bdcompany
    const worldcompanies = company.worldcompany
    return (
        <div className='w-3/4 mx-auto'>

            <div>
                <h1 className='text-xl font-bold  mt-10 text-center '>Top 3 IT companies in the World</h1>
                <div className='grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-16 my-8 mx-auto justify-aroun '>
                    {
                        worldcompanies?.map((company, i) =>
                            <BdcompanyCard key={i} company={company}>
                            </BdcompanyCard>)
                    }
                </div>
            </div>
            <div >
                <h1 className='text-xl font-bold  mt-8 text-center '>Top 3 IT companies in Bangladesh</h1>
                <div className='grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-16 my-8 mx-auto justify-aroun '>
                    {
                        bdcompanies?.map((company, i) =>
                            <BdcompanyCard key={i} company={company}>
                            </BdcompanyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bestit;