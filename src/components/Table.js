import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Table = () => {
    const [whistleData, setWhistleData] = useState(null);
    
    useEffect(() => {
        fetchResult();
    },[])

    const fetchResult = async () => {
        const result =  await axios.get('https://ukdiononline.com/api/getReportswba');
        if(!result){
            return
        }
        setWhistleData(result.data.data); 
        console.log(result.data.data)    
    }


    return (
        <div className="col-lg-9 mx-auto">
            <h4 className="my-4">WhistleBlower Table</h4>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Report</th>
                        <th scope="col">What we can do seperately</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        whistleData && whistleData.map((item, index) => (
                            <tr key={`whistle${index+1}`}>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.offender}</td>
                                <td>{item.report}</td>
                                <td>{item.extra}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Table;