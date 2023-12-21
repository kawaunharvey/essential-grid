import React from 'react'
import { Grid } from './module'
import styled from 'styled-components'
import type { GridProps } from './types'

const StoryGrid = styled(Grid)`
  max-width: 960px;
  max-height: 80vh;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 275px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  font-size: 2rem;
`

export default {
  title: 'Essential/Grid',
  component: Grid,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

type StoryProps = {
  count?: number
  grid: GridProps
}

const Story = ({ count, grid }: StoryProps) => (
  <Container>
    <StoryGrid {...grid} container>
      {Array(count)
        .fill(null)
        .map((b, i) => (
          <Grid key={i}>
            <Box>{i + 1}</Box>
          </Grid>
        ))}
    </StoryGrid>
  </Container>
)

const Template = (args: any) => <Story {...args} />

export const HorizontalGrid = Template.bind({})
HorizontalGrid.args = {
  count: 8,
  grid: {
    gap: '2rem',
    wrap: false,
  },
}

export const VerticalGrid = Template.bind({})
VerticalGrid.args = {
  count: 12,
  grid: {
    direction: 'vertical',
    gap: '2rem',
  },
}
