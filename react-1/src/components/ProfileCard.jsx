import React from 'react'

function ProfileCard({name, imageUrl, description}) {
  return (
    <div>
        <img src={imageUrl} alt="picture loaded" />
        <h3>Name: {name}</h3>
        <p>Description: {description}</p>
    </div>
  )
}

export default ProfileCard