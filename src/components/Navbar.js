import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const NavBar = ({ location }) => {
  const activeItem = (navPath) => {
    return navPath === location.pathname;
  }

  return (
    <div>
      <Menu pointing>
        <Link to='/'>
          <Menu.Item name='home' active={activeItem('/')} />
        </Link>
        <Menu.Menu position='right'>
          <Link to='/'>
            <Menu.Item name="Karin's Beer - React Assessment" />
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default withRouter(NavBar);