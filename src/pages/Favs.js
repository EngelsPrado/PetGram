import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/GetFavorities'

import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)