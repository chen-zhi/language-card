import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name='fruits' active={activeItem === 'fruits'} onClick={this.handleItemClick} />
        <Menu.Item name='vegetables' active={activeItem === 'vegetables'} onClick={this.handleItemClick} />
        <Menu.Item name='countries' active={activeItem === 'countries'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
