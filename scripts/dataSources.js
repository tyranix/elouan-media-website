"use strict";
function DataSources(){
	this.youtubeChannelVideos = async function () {
        var res = await apiManager.call("www.googleapis.com/youtube/v3/search", {
            urlParams: {
                key: 'AIzaSyBE0Z6KyM_EKvPrOYvO5ZhNnZUYQaTgJsU',
                channelId: 'UCRepo8RQ2j97XAHaLz24eVg',
                part: 'snippet,id',
                order: 'date',
                maxResults: 50
            }
        });
        if (!res.ok) {
            console.warn("hmmmmmm", res);
            return false;
        }
        var items = res.data.items;
        var videos = items.map(item => {
            if(item.snippet.liveBroadcastContent != "none"){
                return false;
            }
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                date: new Date(item.snippet.publishedAt),
                thumbnails: item.snippet.thumbnails,
            }
        });
        console.log("videos", videos);
        return videos;
    };
}