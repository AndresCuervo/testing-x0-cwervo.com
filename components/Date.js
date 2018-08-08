import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { Link } from 'react-router-relative-link'

const DateHelper = styled.span`
    font-size: 1.2em;
    text-decoration: underline;
`

const Date = props => (
    <DateHelper>{props.children}</DateHelper>
)

export default Date
