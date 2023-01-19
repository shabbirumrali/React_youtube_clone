import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'

const ChannelDetail = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <Box></Box>
  )
}

export default ChannelDetail