import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Category } from '../Category';



export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} path={`/pet/${category.id}`} {...photo} />)}
    </ul>
  )
}

