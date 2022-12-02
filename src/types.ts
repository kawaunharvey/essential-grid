import { ReactNode } from "react";

export type GridContainerProps = {
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  spacing?: number;
}

export type GridItemProps = {
  flex?: number;
}

export type GridProps = GridContainerProps & GridItemProps & {
  children?: ReactNode;
  container?: boolean;
  item?: boolean;
}

export interface FlexGrid {
    justifyContent?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    flex?: string;
    expand?: boolean;
    shrink?: boolean;
    gutter?: number;
    hide?: boolean;
    column?: "row-reverse" | "column" | "column-reverse" | "row";
    order?: number;
  };
  
//   export type ViewportGrid = {
//     [key in keyof Breakpoints]?: FlexGridProps;
//   };
  
// export type GridProps = {
//     container?: boolean;
//     item?: boolean;
//     className?: string;
//     children?: React.ReactNode;
// } & FlexGrid;