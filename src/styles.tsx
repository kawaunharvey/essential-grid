import styled, { css } from 'styled-components'
import type { GridContainerProps, GridItemProps } from './types'

export const GridContainer = styled.div<GridContainerProps>`
    display: flex;

    ${({ align }) =>
        align &&
        css`
            align-items: ${align};
        `}
    ${({ justify }) =>
        justify &&
        css`
            justify-content: ${justify};
        `}

    ${({ direction, reverse }) => {
        if (direction === 'vertical') {
            return css`
                flex-direction: ${reverse ? 'column-reverse' : 'column'};
                height: auto;
            `
        } else {
            return css`
                flex-direction: ${reverse ? 'row-reverse' : 'row'};
            `
        }
    }}

    ${({ wrap, reverse }) => {
        if (wrap === true) {
            return css`
                flex-wrap: ${reverse ? 'wrap-reverse' : 'wrap'};
            `
        } else if (wrap === false) {
            return css`
                flex-wrap: nowrap;
            `
        }
    }}

    ${({ gap }) =>
        gap &&
        css`
            row-gap: ${gap};
            column-gap: ${gap};
        `}  
`

export const GridItem = styled.div<GridItemProps>`
    flex: 0;
`