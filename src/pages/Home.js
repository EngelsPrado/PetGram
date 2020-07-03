import { ListOfCategories } from './../components/ListOfCategories/index'
import React,{Fragment} from 'react'
import {ListOfPhotoCardWithQuery} from './../container/ListOfPhotoCardsWithQuery'
import { Layout } from '../components/Layout'
 const HomePage=({id})=>{

   return(

    <Fragment>
         <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'></Layout>
         <ListOfCategories />
         <ListOfPhotoCardWithQuery categoryId={id}/>
      </Fragment>

   )

}

export const Home=React.memo(HomePage,(prevProps,props)=>{
   return prevProps.categoryId==props.categoryId
})