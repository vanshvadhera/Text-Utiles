import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Alerts(props) {
  return (
        props.alert && <Alert variant={'success'}>
          <strong>{props.alert?.type}</strong> {props.alert?.msg}
        </Alert>
     
  )
}
