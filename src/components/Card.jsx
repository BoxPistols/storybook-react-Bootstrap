import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'

const CardStyle = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>1-Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>2-Special Title Treatment</CardTitle>
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

export default CardStyle
