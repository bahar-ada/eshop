import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertBootStrap = () => {
  return (
    <>
    {[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant) => (
      <Alert key={variant} variant='primary'>
        This is a {variant} alert—check it out!
      </Alert>
    ))}
  </>
  )
}

export default AlertBootStrap