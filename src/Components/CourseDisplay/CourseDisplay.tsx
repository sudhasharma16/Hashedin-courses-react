import React from 'react'
import courseTh from "../../assets/courseTh.png";
import Header from '../Header/Header';
import "./courseDisplayStyle.css"

const CourseDisplay: React.FC = () => {
  const heading: string = "Discover latest courses on React"
  return (
    <div>
      <div className="container">
      <Header heading={heading}/>
</div>
<div className="top-container" style={{position: "relative"}}>
    <div className="card courseTop">
        <div className="col-md-6">
            {/* <h4><strong>{{this.currentCourse.title}}</strong></h4> */}
            <h4 className="heading4"><strong>Title</strong></h4>
            <h6 className="heading6">title</h6>
            {/* <h6>{{this.currentCourse.title}}</h6> */}
            <p>author</p>
            {/* <p>{{this.currentCourse.author}}</p> */}
            <span>
            <span style={{
              backgroundColor: "white",
              color: "black",
              padding: "1%",
              marginRight: "1%",
              borderRadius: "4%"
            }}>tag1</span>
            <span style={{
              backgroundColor: "white",
              color: "black",
              padding: "1%",
              marginRight: "1%",
              borderRadius: "4%"
            }}>tag2</span>
            </span>
            {/* <span *ngFor="let tag of currentCourse.tags">
                <span style="background-color: white; color: black; padding: 1%; margin-right: 1%; border-radius: 4%;">{{tag}}</span>
            </span> */}
        </div>
    </div>
    <div className="courseBottom" style={{
          height: "350px",
          backgroundColor: "white",
          }}>
        <h4><strong>Course Details</strong></h4><br />
        <p>description</p>
        <p>description</p>
        <p>description</p>
    </div>

    <div className="courseThumbnail">
        <div><img className="courseImage" src={courseTh} /></div>
        <div>
            <div className="container">
                <div className="row">
                    <h3>₹200</h3>
                </div>
                <div className="row">
                    <small><del>₹300</del></small>
                </div>
                <div className="row" >
                    <p style = {{
                      color: "red",
                      padding: "2% 0 0 1%"
                    }}>
                    <span style={{fontSize: "larger"}}>8 hours</span> left for this price</p>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-block btn-cart">Add to cart</button></div>
                  <div className="col">
                    <button className="btn btn-block btn-wishlist">Add to wishlist</button></div>
                </div>
            </div>
    </div>
</div>
</div>
    </div>
  )
}

export default CourseDisplay

