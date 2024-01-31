import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostItem from './components/PostItem.jsx'

function App() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [page, setpage] = useState(1);

  async function fetchData(){
    try{
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${page}`);
      let data = await res.json();
      console.log("I am data:", data);
      setposts(data)
    }
    catch(err){
      console.log("I am err:",err);
    }
  }

  useEffect(()=>{
    fetchData();
  }, [page]);


  function precbtnFunc(){
    if(page>1){
    setpage((cbf)=>cbf-1);
    }
  }
  function nextbtnFunc(){
    setpage((cbf)=>cbf+1);
  }

  return (
    <>
    <button onClick={precbtnFunc}>Prev</button><span>{page}</span><button onClick={nextbtnFunc}>Next</button>
      <PostItem listData={posts}/>
    </>
  )
}

export default App
