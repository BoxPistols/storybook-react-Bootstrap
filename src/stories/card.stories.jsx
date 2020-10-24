
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardStyle = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  )
}
const storyFunction = () => {
  return (
    <React.Fragment>
      <CardStyle />
    </React.Fragment>
  )
}
storiesOf('UI Components', module).add('CardStyle', storyFunction, {
})
