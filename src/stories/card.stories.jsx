
import React from 'react'
import { storiesOf } from '@storybook/react'
import CardStyle from '../components/Card'

const storyFunction = () => {
  return (
    <React.Fragment>
      <CardStyle />
    </React.Fragment>
  )
}
storiesOf('UI Components', module).add('CardStyle', storyFunction, {
})
