import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { GET } from '../../../../Utilities/RequestObjects';

const Reports = () => {
    const {data,isLoading} = useQuery({ 
        queryKey: ['report'], 
        queryFn: ()=>GET('/report') 
    })

    if(isLoading){
        return <span>Loading...</span>
    }
    return (
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Emails</h2>
	<div className="flex flex-col overflow-x-auto text-xs">
		<div className="flex text-left dark:bg-gray-700">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" name="All" className="w-3 h-3 rounded-sm accent-violet-400" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">Sender</div>
			<div className="flex-1 px-2 py-3 sm:p-3">Message</div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
		</div>

    	{
            data?.data.map(v=><div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
			<div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
			</div>
			<div className="w-32 px-2 py-3 sm:p-3">
				<p>{v?.senderName}</p>
			</div>
			<div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                {v?.report}
            </div>
			<div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
				<p>{v?.time}</p>
			</div>
		    </div>  
           )
        }
				
	</div>
</div>
    );
};

export default Reports;