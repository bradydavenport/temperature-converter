import React from "react";
import { Button, Form } from 'react-bootstrap';
import './Converter.scss'

const Converter = () => {

  return (
    <>
      <Form>
        <Form.Group>
          Fahrenheit
        </Form.Group>
        <Form.Group>
          Celsius
        </Form.Group>
        <Form.Group>
          Kelvin
        </Form.Group>
      </Form>
    </>
  )
}

export default Converter;