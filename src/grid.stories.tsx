import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './module';
import styled from 'styled-components'

type GridProps = Omit<ComponentMeta<typeof Grid>, 'ref' | 'theme' | 'as' | 'forwardedAs'>


const Box = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export default {
  title: 'Essential/Grid',
  component: Grid,
  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as GridProps;

const Template:ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} container>
    { Array(6).fill(null).map((b,i) => <Grid key={i}><Box>{i+1}</Box></Grid>) }
  </Grid>
)

export const HorizontalGrid = Template.bind({});
HorizontalGrid.args = {
  justify: 'space-between',
}

export const VerticalGrid = Template.bind({});
VerticalGrid.args = {
  direction: 'column',
}


// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Grid } from './module';

// export default {
//   title: 'Essential/Grid',
//   component: Grid,
//   parameters: {
//     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'fullscreen',
//   },
// } as ComponentMeta<typeof Grid>;

// const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Jane Doe',
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
