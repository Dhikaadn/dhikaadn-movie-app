//Import library and others
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../redux/actions/post";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
import { TheFooter } from "../components/TheFooter";
import "../App.css";

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
  <div className="Details">
  {/* View of details component */}
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item-detail active">
          <div className="container-slide-detail">
            <h1>{postDetails?.title}</h1>
            <p>{postDetails?.overview}</p>
            <div className="Movie-rate">
              <MdOutlineStarRate
                className=""
                style={{ fontSize: "25px", color: "yellow" }}
              />
              {postDetails?.vote_average}
            </div>
            <button className="bt-watch-detail">
              <div className="icon-play">
                <AiFillPlayCircle />
              </div>
              <p>Watch Trailer</p>
            </button>
          </div>
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${postDetails?.poster_path}`}
            className="d-block w-100"
          />
        </div>
      </div>
    </div>
  <TheFooter />
  </div>  
  );
}

export default PostDetails;
