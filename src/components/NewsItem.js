import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card border-3 border-dark my-3">
        <div style={{ display: "flex", position: "absolute", right: "0" }}>
          <span className="badge rounded bg-danger">{source}</span>
        </div>

        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.pikpng.com/pngl/b/106-1069399_iam-add-group1-sorry-no-image-available-clipart.png"
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 45) : title} </h5>
          <p className="card-text">
            {description ? description.slice(0, 88) : description}
          </p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>

          <a href={newsUrl} target="_black" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
