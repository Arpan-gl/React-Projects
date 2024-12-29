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
        <img src={data.avatar_url} alt="" width={300} height={400} />
    </>
  )
}

export default Github;

export const githubInfo = async ()=>{
    const res = await fetch("https://api.github.com/users/arpan-gl");
    return res.json();
}