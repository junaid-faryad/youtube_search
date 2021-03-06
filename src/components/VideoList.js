import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	const VideoItems = props.videos.map((video) => {
		return( 
			<VideoListItem
			onVideoSelect = {props.onVideoSelect} 
			key={video.etag}
			video={video} />
		);
	});
	return(
		<ul className="col-sm-4 list-group">
			{VideoItems}
		</ul>
	);
};

export default VideoList;