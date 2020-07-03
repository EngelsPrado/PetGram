import React from 'react'
import {graphql} from 'react-apollo'
import {gql} from 'apollo-boost'
import { Query } from 'react-apollo'
import {PhotoCard} from './../components/PhotoCard/index'
import {ListOfPhotoCardsComponent} from './../components/ListOfPhotoCards/index'

const GET_SINGLE_PHOTO= gql`
query getPhotos($categoryId:ID) {
  photos(categoryId:$categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp= ({ loading, error, data }) => {
    const { photos = [] } = data
    console.log(photos)

    if(loading) return <p>...Loading</p>

    if(error) return <p>ERROR</p>

    return (
        photos && photos.map((photo) => <PhotoCard key={photo.id} {...photo}/>
      
    ))
}


export const ListOfPhotoCardWithQuery = ({ categoryId }) => (
    <Query query={GET_SINGLE_PHOTO} variables={{ categoryId }}>
      {
       renderProp
      }
    </Query>
  )