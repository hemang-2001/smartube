import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();


  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>

        <div
        style={{
          background:
          'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          zIndex: 10,
          height: '300px',
        }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />

           </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
        </Box>
      </Box>
      );
};

export default ChannelDetail;