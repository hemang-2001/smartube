import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
    return (
        <Stack direction= 'row' flexWrap="Wrap" justifyContent="start" gap={2}>
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