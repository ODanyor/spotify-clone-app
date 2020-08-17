import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Text } from '@chakra-ui/core'
import { Header } from 'shared/components'
import { Content } from 'shared/containers'
import { useStateValue } from 'shared/hooks'
import { useGetData } from 'shared/hooks'
import url from 'shared/constants/urls'
import * as type from 'shared/constants/types'

export default function Index() {
  const { category, playlist_id } = useParams()
  const [{ playlists, playlist }, dispatch] = useStateValue()

  // Setting up the playlist according to the plastlists
  // Made to avoid extra API requests
  useGetData(url.playlist(playlist_id), !playlists.length, type.SET_PLAYLIST)
  useEffect(() => {
    if (playlists.length) {
      const foundPlaylists = playlists.find(
        (playlists) =>
          playlists.href.split('categories/')[1].split('/')[0] === category
      )
      const foundPlaylist = foundPlaylists.items.find(
        (playlist) => playlist.id === playlist_id
      )
      dispatch({ type: type.SET_PLAYLIST, payload: foundPlaylist })
    }

    // eslint-disable-next-line
  }, [])

  return (
    <Content>
      <Text fontSize='3xl' fontWeight='900'>
        Playlist
      </Text>
      <Header
        item={
          playlist && {
            icons: [{ url: playlist.images[0].url }],
            name: playlist.name,
            id: playlist.id,
          }
        }
      />
    </Content>
  )
}
