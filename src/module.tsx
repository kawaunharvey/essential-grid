import React from 'react'
import { GridContainer, GridItem } from "./styles"
import { GridProps } from "./types"

export const Grid = ({ children, container, justify, align, direction, wrap, spacing }: GridProps ) => {
        return container ? 
        <GridContainer {...{ justify, align, direction, wrap, spacing }}>{children}</GridContainer> :
        <GridItem {...{ justify, align }}>{children}</GridItem>
}