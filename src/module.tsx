import React from 'react'
import { GridContainer, GridItem } from './styles'
import { GridProps } from './types'

export const Grid = (props: GridProps) => {
    return props.container ? (
        <GridContainer {...props}>{props.children}</GridContainer>
    ) : (
        <GridItem {...props}>{props.children}</GridItem>
    )
}
