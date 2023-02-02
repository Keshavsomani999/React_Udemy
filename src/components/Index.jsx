import React from 'react'
import Heading from "./Heading"
import {add,multiply,subtract,divide} from "./calculator"

export default function Index() {
  return (
    <div>
        <Heading />
        <ul>
          <li>{add(1,2)}</li>
          <li>{multiply(3,5)}</li>
          <li>{subtract(4,7)}</li>
          <li>{divide(4,2)}</li>

        </ul>
    </div>
  )
}
