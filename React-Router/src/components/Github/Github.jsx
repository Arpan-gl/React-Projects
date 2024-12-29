import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/arpan-gl")
    //     .then((res)=> res.json())
    //     .then((res)=>setData(res))
    // },[])
  return (
    <>
        <div className='bg-gray-600 text-center text-2xl font-medium p-2 text-slate-200'>Github Owner : {data.name}</div>
        <div className='grid md:grid-cols-2 gap-4 p-4 bg-slate-200 items-center justify-items-center w-3/4 mx-auto'>
          <img src={data.avatar_url} alt="" width={300} height={400} />
          <div className='flex flex-col justify-center gap-4'>
            <div className='text-xl font-semibold'>Github login : {data.login}</div>
            <div className='text-xl font-semibold'>Github url : {data.html_url}</div>
            <div className='text-xl font-semibold'>Github Followers : {data.followers}</div>
            <div className='text-xl font-semibold'>Github Following : {data.following}</div>
        </div>
      </div>
    </>
  )
}

export default Github;

export const githubInfo = async ()=>{
    const res = await fetch("https://api.github.com/users/arpan-gl");
    return res.json();
}