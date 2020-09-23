import React, {useState, useEffect} from "react";
import YTSearch from "../components/YoutubeSearch";
import VideoBody from "../components/Video/VideoBody";
import Navigation from "../components/Navigation";


const API_KEY = "AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [favoriteVideos, setFavoriteVideos] = useState([]);

    useEffect(() => {
        fetchResource("kittens");
    }, []);

    const fetchResource = async (item) => {
        await YTSearch(
            {key: API_KEY, term: item},
            (data) => {
                setVideos(data);
            }
        );
    };

    const handleSearchChange = async (value) => {
        await fetchResource(value)
    };

    const addFavorite = (favorite) => {
        const index = favoriteVideos.indexOf(favorite);
        if (index === -1) {
            const favVideos = [favorite, ...favoriteVideos];
            setFavoriteVideos(favVideos);
            localStorage.setItem("favVideos", favVideos.join(";"));
        }
    }

    return (
        <div>
            <Navigation onSearchChange={handleSearchChange}/>
            <div className="content">
                <VideoBody onVideoSelect={selected => setSelectedVideo(selected)}
                           videos={videos}
                           videoSelected={selectedVideo}
                           addFavorite={addFavorite}
                />
            </div>
        </div>
    );
};

export default Home;