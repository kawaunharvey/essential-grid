import React from 'react'
import { GridContainer, GridItem } from './styles'
import { GridProps } from './types'

export const Grid = ({ container, item, ...props }: GridProps) => {
  return container ? <GridContainer {...props} /> : <GridItem {...props} />
}
