import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {

  if(!videos?.length) return  <Typography variant="h5" color="white" justifyContent="center" alignItems="center" >loading...</Typography> 

  return (
    <Stack direction={ direction || "row" } flexWrap="wrap" justifyContent="start" gap={2} >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos