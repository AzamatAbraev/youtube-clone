import clickbate from "../../assets/images/clickbate.jpg";


import "./SimilarVideos.css";

const SimilarVideos = () => {
  return (
    <div className="video-similar">
      <div className="video-rec-card">
        <div className="video-rec-image">
          <img className="video-rec-img" src={clickbate} alt="Clickbate" />
        </div>
        <div className="video-rec-content">
          <h3 className="video-rec-title">
            🔥🔥 BARÇA 5-1 VIKTORIA PLZEN, LEWY STUNS WITH FIRST HAT-TRICK | UN
            DIA DE PARTIT (EPISODE 2) 🔥🔥
          </h3>
          <p className="video-rec-channel">FC Barcelona</p>
          <div className="video-rec-stats">
            <p>443K Views</p>
            <p>22 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarVideos;
