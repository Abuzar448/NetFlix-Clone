import React, { useEffect, useState } from "react";
import "./Player.css";
import backIcon from "../../assets/assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([{
    name:'',
    key:'',
    published_at:'',
    type:'',
  }]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODcxMzhmNTM2MTA4ODZiY2IyZmQ3NGIzNzJmMWQzNCIsIm5iZiI6MTc1MzMzNzE4MS4yMTI5OTk4LCJzdWIiOiI2ODgxY2Q1ZDQ5OTNmMjQ5NjgyNDViNjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nb901oi0nAzv8MSUBis1P5kzltbaQyiRkD6_Q3e_MBY",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={backIcon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
