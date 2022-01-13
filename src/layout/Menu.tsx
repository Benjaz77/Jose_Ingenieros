import { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import {
  useTranslate,
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  ReduxState,
} from 'react-admin'

import cursos from '../cursos'
import SubMenu from './SubMenu'
// import SubMenu from './SubMenu';
// import { AppState } from '../types';

type MenuName = 'menuCatalog' | 'menuSales' | 'menuCustomers'

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  })
  const translate = useTranslate()
  const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen)
  // useSelector((state: AppState) => state.theme); // force rerender on theme change
  const classes = useStyles()

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }))
  }

  return (
    <div
      className={classnames(classes.root, {
        [classes.open]: open,
        [classes.closed]: !open,
      })}
    >
      {' '}
      <DashboardMenuItem />
      {/* @ts-ignore */}
      <SubMenu
        handleToggle={() => handleToggle('menuCatalog')}
        isOpen={state.menuCatalog}
        name="Cursos"
        icon={<cursos.icon />}
        dense={dense}
      >
        {/* @ts-ignore */}
        <MenuItemLink
          to={{
            pathname: '/products',
            state: { _scrollToTop: true },
          }}
          primaryText={translate(`Algebra`, {
            smart_count: 2,
          })}
          leftIcon={<cursos.icon />}
          dense={dense}
        />
      </SubMenu>
      {/* @ts-ignore */}
      <MenuItemLink
        to={'/cursos'}
        primaryText={translate(`cursos`, {
          smart_count: 2,
        })}
        leftIcon={<cursos.icon />}
        dense={dense}
      />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  open: {
    width: 200,
  },
  closed: {
    width: 55,
  },
}))

export default Menu
