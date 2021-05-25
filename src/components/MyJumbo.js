import React from "react";
import { Button, Jumbotron } from 'react-bootstrap/Button';

export default function MyJumbo() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <Button variant="primary">Learn more</Button>
    </Jumbotron>
  )
}
