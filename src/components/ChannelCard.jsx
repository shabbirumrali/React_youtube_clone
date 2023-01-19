import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', margin: 'auto' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
        textAlign: 'center', color: '#fff' }}>
          <CardMedia
            alt={channelDetail?.snippet.title}
            sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3'}} 
            image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} />
            <Typography varient="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
            </Typography>
            {channelDetail?.statistics?.subscribeCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscribeCount).toLocaleString()} Subscriber
              </Typography>
            )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard