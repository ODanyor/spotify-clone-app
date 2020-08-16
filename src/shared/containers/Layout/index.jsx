import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from 'shared/hooks'
import { Box, Flex, Image, Button } from '@chakra-ui/core'
import { removeAuthToken } from 'shared/utils/authToken'
import * as types from 'shared/constants/types'
import logo from 'shared/assets/logo.png'

function SwitchButtons({ user, dispatch }) {
  const logOut = () => {
    dispatch({ type: types.SET_USER, payload: null })
    dispatch({ type: types.SET_UNAUTHENTICATED })
    removeAuthToken()
  }

  return user && <Button onClick={logOut}>Log out</Button>
}

function Navbar(props) {
  return (
    <Box height='76px' bg='gray.700' shadow='0 1px 10px 1px #1DB954'>
      <Flex
        margin='0 auto'
        padding='0 1rem'
        maxWidth='900px'
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
      >
        <Link to='/'>
          <Image alt='spotify-logo' src={logo} size='55px' />
        </Link>
        <Flex alignItems='center' justifyContent='space-evenly'>
          <SwitchButtons {...props} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default function Index({ children }) {
  const [{ user }, dispatch] = useStateValue()

  return (
    <Box>
      <Navbar user={user} dispatch={dispatch} />
      <Box maxWidth='900px' margin='auto'>
        {children}
      </Box>
    </Box>
  )
}
