import VideoFullCard from "../components/card/VideoFullCard";
import SimilarVideos from "../components/recommendations/SimilarVideos";
import "./Video.css";

const VideoPage = () => {
  return (
    <section>
      <div className="container-fluid">
        <h1>Video Page</h1>
        <div className="video-main row">
          <div className="main-video col-8 mt-5">
            <VideoFullCard />
          </div>
          <div className="similar-videos col-4 mt-5">
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
            <SimilarVideos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
