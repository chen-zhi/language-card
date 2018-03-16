import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import image from './001-fruit.png'

const WordCard = () => (
  <Card style={{width: "250px", textAlign: "center"}}>
    <Image src={image} style={{width: "70%", margin:"15px auto", background: "transparent"}}/>
    <Card.Content>
      <Card.Header>
        水果
      </Card.Header>
      <Card.Meta>
        <span>
          fruit
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
            <Button basic color="red">Hard</Button>
            <Button basic color="green">Easy</Button>
        </div>
      </Card.Content>
  </Card>
)

export default WordCard