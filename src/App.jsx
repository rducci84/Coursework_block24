import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
    {()=>{console.log("puppy id: ", puppy.id)}}
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          style={{ cursor: 'pointer' }}
        >
          {puppy.name}
        </p>
      ))}


      {featPupId && (
        <div className="featPupId">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><strong>Age:</strong> {featuredPup.age}</li>
            <li><strong>Email:</strong> {featuredPup.email}</li>
            <li><strong>Owner ID:</strong> {featuredPup.ownerId}</li>
            <li><strong>Is Cute:</strong> {featuredPup.isCute ? 'Yes' : 'No'}</li>
            
          </ul>
        </div>
      )}

    </div>
  );
}

export default App
