import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))
    
      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(164,58,148,1) 0%, rgba(155,23,167,1) 35%, rgba(255,0,121,1) 100%)',
        zIndex: 10, height: '300px' }} />
        <ChannelCard marginTop="-93px" channelDetail={channelDetail} />
      </Box>
      <Box display='flex' p="2">
        <Box sx={{mr: { sm: '100px' }}} />
          <Videos marginRight="" videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail