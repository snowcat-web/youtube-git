import React, {useState, useEffect} from "react";
import YTSearch from "../components/YoutubeSearch";
import VideoBody from "../components/Video/VideoBody";
import Navigation from "../components/Navigation";


const API_KEY = "AIzaSyB-YiVwk4DoZ-K4NjLcayTWYG7OGZZ9DxE";

const Home = () => {
    const placeholder = "wizeline";
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [favoriteVideos, setFavoriteVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState(placeholder);    

    useEffect(() => {
        fetchResource(searchTerm);
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
        setVideos([]);
        setSearchTerm(value);
        setSelectedVideo(null);
        await fetchResource(value)
    };

    const addFavorite = (favorite) => {
        const favVideos = localStorage.getItem("favVideos");
        if(favVideos!=null){
            setFavoriteVideos(JSON.stringify(favVideos));
            console.log("prueba: ", favoriteVideos);
        }
        const index = favoriteVideos.indexOf(favorite);
        if (index === -1) {
            const favVideos = [favorite, ...favoriteVideos];
            setFavoriteVideos(favVideos);
            localStorage.setItem("favVideos", JSON.stringify(favVideos));
            console.log("home:", favVideos);
        }
    }

    return (
        <div>
            <Navigation onSearchChange={handleSearchChange}
                        placeholder = {placeholder} />
            <div className="content">
                <VideoBody onVideoSelect={selected => setSelectedVideo(selected)}
                           videos={videos}
                           videoSelected={selectedVideo}
                           addFavorite={addFavorite}
                           section={'home'}
                />
            </div>
        </div>
    );
};

export default Home;