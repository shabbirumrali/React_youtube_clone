import { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {
        setVideos(data.items)
        console.log(data.items)
      })
      .catch(error => {})
  }, [selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: 'column ', md: 'row'}}}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' varient="body2" sx={{mt: 1.5, color: '#fff'}}>
          copyright 2022 shabbir umrali 
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight= 'bold' mb={2} sx={{ color: 'white' }}>
          { selectedCategory } <span style={{ color: '#f31503'}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed