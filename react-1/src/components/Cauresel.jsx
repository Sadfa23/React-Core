import React from 'react'
import ProfileCard from './ProfileCard'

function Cauresel() {
  return (
    <div
    className='flex space-x-0.5'
    >
        <ProfileCard
        imageUrl={"https://images.pexels.com/photos/9502009/pexels-photo-9502009.jpeg"}
        name={"Lebron James"}
        description={"All time great basket ball player"}
        />
        <ProfileCard
        imageUrl={"https://images.pexels.com/photos/9502009/pexels-photo-9502009.jpeg"}
        name={"John atkins"}
        description={"All time great cricket ball player"}
        />
        <ProfileCard
        imageUrl={"https://images.pexels.com/photos/9502009/pexels-photo-9502009.jpeg"}
        name={"Lilly Paul"}
        description={"All time great tennis ball player"}
        />
    </div>
  )
}

export default Cauresel