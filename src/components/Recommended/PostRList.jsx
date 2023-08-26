import React from 'react';

function PostRList() {
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //     axios.get("/posts")
    //         .then(response => setList(response.data))
    //         .catch(error => console.log(error));
    // }, []);

    return (
        <div className='text-[rgba(0,0,0,.7)] w-full rounded-[15px] shadow-lg text-[13px] bg-white py-5 px-4 mt-5 me-2'>
            <h2 className='text-[16px] font-bold'>Recommended Posts</h2>
            <p className='text-blue-500 hover:underline w-fit cursor-pointer mb-1'>View more</p>
            <hr className='bg-gray-300 mb-3'/>
            <div className='flex items-start gap-2 my-2'>
                <img src="temp_user.jpg" alt="user profile"  className='w-[35px] h-[35px] rounded-[50%]'/> 
                <div>
                    <h3 className='font-bold'>Nome</h3>
                    <p>What can i do bro, i just feel like so happy to be u...</p> 
                </div>
            </div>     
            <div className='flex items-start gap-2'>
                <img src="temp_user.jpg" alt="user profile"  className='w-[35px] h-[35px] rounded-[50%]'/> 
                <div>
                    <h3 className='font-bold'>Meno </h3>
                    <p>What can i do bro, i just feel like ...</p> 
                </div>
            </div>     
            
        </div>
    );
}

export default PostRList;