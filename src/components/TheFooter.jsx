//Import style and component
import React from "react";
import "../App.css";

export const TheFooter = () => {
  return (
    //View of the footer
    <div className="TheFooter">
      <h1 className="text-title-footer">Movielist</h1>
      <div className="ContainerColumn">
        <div className="column-footer">
          <p>ABOUT ME</p>
          <a href="#" className="linked">
            Documentation
          </a>
          <a href="#" className="linked">
            Login
          </a>
          <a href="#" className="linked">
            Register
          </a>
        </div>
        <div className="column-footer">
          <p>OVERVIEW</p>
          <a href="#" className="linked">
            Movies
          </a>
          <a href="#" className="linked">
            Popular
          </a>
          <a href="#" className="linked">
            Genre
          </a>
        </div>
        <div className="column-footer">
          <p>COMPANY</p>
          <a href="#" className="linked">
            Premium
          </a>
          <a href="#" className="linked">
            Promotions
          </a>
        </div>
        <div className="column-footer">
          <p>SOCIAL</p>
          <a href="#" className="linked">
            Facebook
          </a>
          <a href="#" className="linked">
            Twitter
          </a>
          <a href="#" className="linked">
            Instagram
          </a>
          <a href="#" className="linked">
            Linkedln
          </a>
        </div>
      </div>
    </div>
  );
};
