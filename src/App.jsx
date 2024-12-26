import { useEffect, useState } from 'react';
import { getPosts } from './Api/Script';
import PostCard from './Components/PostCard';
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <>
      {
        data ? (
          data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
        ) : (
          <p>No Data</p>
        )
      }
    </>
  );
}  


export default App;
