import React from 'react'
import { Appear } from 'mdx-deck'

export default ({ children }) => (
  <ul style={{textAlign: 'left'}}>
    <Appear>
      { children }
    </Appear>
  </ul>
)
