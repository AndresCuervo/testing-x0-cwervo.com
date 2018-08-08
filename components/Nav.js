import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { Link } from 'react-router-relative-link'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const Nav = () => (
<nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        {
            [ "work", "about", "contact", "words" ].map(word =>
                <li><Link to={"/" + word }>{word[0].toUpperCase() + word.slice(1)}</Link></li>
            )
        }
    </ul>
</nav>
)

export default Nav
