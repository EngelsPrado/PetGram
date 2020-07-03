import React, { Fragment, useContext } from 'react'
import { Context } from '../Contex'
import { SubmitButton } from '../components/submitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <h1>User</h1>
    {/* le mandamos el children por parametro */}
    <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
  </Fragment>
}