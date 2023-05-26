import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/post";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
import "../App.css";
import { TheFooter } from "../components/TheFooter";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.jpg";
import slide3 from "../img/slide3.jpg";


function Posts() {
  // dispatch -> to change the global state in redux
  const dispatch = useDispatch();

  // useSelector -> to access the global state (redux)
  const { posts } = useSelector((state) => state.post);
  const { isLoggedIn} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts)

  

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* Slide 1 */}
          <div className="container-slide1">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
            <p>
              Doctor Strange, with the help of mystical allies both old and new,
              traverses the mind-bending and dangerous alternate realities of
              the Multiverse to confront a mysterious new adversary.
            </p>
            <button className="bt-watch">
              <div className="icon-play">
                <AiFillPlayCircle />
              </div>
              <p>Watch Trailer</p>
            </button>
          </div>
          <img src={slide1} class="d-block w-100" />
        </div>
        <div className="carousel-item">
          {/* Slide 2 */}
          <div className="container-slide2">
            <h1>Black Panther: Wakanda Forever</h1>
            <p>
              Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to
              protect their nation from intervening world powers in the wake of
              King T’Challa’s death. As the Wakandans strive to embrace their
              next chapter, the heroes must band together with the help of War
              Dog Nakia and Everett Ross and forge a new path for the kingdom of
              Wakanda.
            </p>
            <button className="bt-watch">
              <div className="icon-play">
                <AiFillPlayCircle />
              </div>
              <p>Watch Trailer</p>
            </button>
          </div>
          <img src={slide2} class="d-block w-100" />
        </div>
        <div className="carousel-item">
          {/* Slide 3 */}
          <div className="container-slide3">
            <h1>John Wick: Chapter 4</h1>
            <p>
              With the price on his head ever increasing, John Wick uncovers a
              path to defeating The High Table. But before he can earn his
              freedom, Wick must face off against a new enemy with powerful
              alliances across the globe and forces that turn old friends into
              foes.
            </p>
            <button className="bt-watch">
              <div className="icon-play">
                <AiFillPlayCircle />
              </div>
              <p>Watch Trailer</p>
            </button>
          </div>
          <img src={slide3} class="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {isLoggedIn ? (
        <h2 className="welcome-text">Welcome to movie list :)</h2>
      ) : (
        <h2 className="welcome-text">
          Hi Guest, please login first to see the details movie :(
        </h2>
      )}
      <div className="Movie-container">
        {posts?.length > 0 &&
          posts.map((post,i) => (
          <Link to={`posts/${post.id}`} style={{ textDecoration: "none" }}>
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">
              <p>{post.title}</p>
            </div>
            <img
              className="Movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}/${post.poster_path}`}
              width="300"
            />
            <div className="Movie-rate">
              {`Rate : ${post.vote_average}`}
              <MdOutlineStarRate
                className=""
                style={{ fontSize: "25px", color: "yellow" }}
              />
            </div>
            <div className="container-watch-card">
              <button className="bt-watch-card">
                <div className="icon-play">
                  <AiFillPlayCircle />
                </div>
                <p>Watch Trailer</p>
              </button>
            </div>
          </div>
          </Link>
          ))}
    </div>
    <TheFooter/>
    </div>
    
   
  );
}

export default Posts;
