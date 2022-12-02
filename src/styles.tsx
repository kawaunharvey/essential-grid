import styled, { css } from "styled-components";
import type { GridContainerProps, GridItemProps } from "./types";


export const GridContainer = styled.div<GridContainerProps>`
    display: flex;
    width: 100%;
    height: 100%;

    ${({align}) => align && css`align-items: ${align};`}
    ${ ({justify}) => justify && css`justify-content: ${justify};` }
    ${({direction}) => direction && css`flex-direction: ${direction};`}
    ${({direction}) => direction === 'column' && css`height: auto;`}
    ${({wrap}) => wrap && css`flex-wrap: ${wrap};`}
`;



export const GridItem = styled.div<GridItemProps>`
    flex: 0;
`;


// export const Grid = styled.div<FlexGrid & GridProps>`
//     display: flex;

//     ${({ gutter }) => gutter && css`
//         padding-left: ${ gutter/2 }px;
//         padding-right: ${ gutter/2 }px;
//     `}

//     ${({ container }) => item && css`
        
//     `}

//     ${({ item }) => item && css`
        
//     `}

    
// `;


// export const Grid = styled.div.attrs<GridProps>(({ container, className }) => ({
//   className: [
//     container ? "grid__Grid-container" : "grid__Grid-item",
//     className,
//   ].join(" "),
// }))<GridProps>`
//   box-sizing: border-box;

//   ${({ hide }) =>
//     hide &&
//     css`
//       display: none;
//     `};

//   ${({ container }) =>
//     container &&
//     css<GridProps>`
//       display: flex;
//       width: 100%;
//       flex-wrap: wrap;
//       ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
//       ${({ justifyContent }) =>
//         justifyContent && `justify-content: ${justifyContent};`}

//         > .grid__Grid-item {
//         ${({ gutter }) =>
//           gutter &&
//           css`
//             padding-left: ${gutter / 2}px;
//             padding-right: ${gutter / 2}px;
//             &:first-child {
//               padding-left: 0;
//             }
//             &:last-child {
//               padding-right: 0;
//             }
//           `}
//       }
//     `}

//   ${({ item }) =>
//     item &&
//     css<GridProps>`
//       ${({order}) => order && `order: ${order};`}
//       width: 100%;
//       ${({ flex }) => flex && `flex: ${flex};`}
//       ${({ expand }) =>
//         expand &&
//         css<GridProps>`
//           flex-grow: 1;
//         `}
//         ${({ shrink }) =>
//         shrink &&
//         css<GridProps>`
//           flex-shrink: 1;
//         `}
//     `};
// `;