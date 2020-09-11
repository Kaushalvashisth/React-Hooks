import React, { useState, useEffect } from 'react';

export default function App (){
    const [resourceType,setResourceType]=useState('');
    // console.log('rendered');
    const [items,setItems]=useState([])
    useEffect(()=>{ //everything in useEffect runs when the app renders
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
        // console.log('resource type changed');
    },[resourceType]) // whenEver the value in this array changes useEffect will run

    // we use [] empty array when 
    // we want run code in useEffect on 1st render (onMount)
    return (
    <>
        <div>
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('comments')}>comments</button>
            <button onClick={()=>setResourceType('users')}>users</button>
            <button onClick={()=>setResourceType('photos')}>photos</button>
            <button onClick={()=>setResourceType('todos')}>todos</button>
            <h1>{resourceType}: </h1>
            {items.map(i=>{
                if(i.hasOwnProperty('url')){
                    return <div>
                        <img src={i.url} />
                    </div>
                }
                return <pre>{JSON.stringify(i)}</pre>;
            })}
        </div>
    </>
    )
}