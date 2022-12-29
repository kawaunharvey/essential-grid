import { ReactNode } from 'react'

export type GridProps = GridContainerProps &
    GridItemProps & {
        children?: ReactNode
        className?: string
        container?: boolean
        item?: boolean
    }

export type GridContainerProps = FlexGrid & {
    hide?: boolean
}

export type GridItemProps = FlexGridItem & {
    hide?: boolean
}

export interface FlexGrid {
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
    wrap?: boolean
    reverse?: boolean
    direction?: 'horizontal' | 'vertical'
    align?: 'top' | 'bottom' | 'middle' | 'baseline' | 'stretch'
    gap?: string
}

export interface FlexGridItem {
    flex?: string
    order?: number
    grow?: number
    shrink?: number
    basis?: 0 | 'auto'
    align?: 'auto' | 'top' | 'bottom' | 'middle' | 'stretch' | 'baseline'
}
