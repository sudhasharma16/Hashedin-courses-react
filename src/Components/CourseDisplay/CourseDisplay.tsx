import React, {useEffect, useState} from 'react'
import courseTh from "../../assets/courseTh.png";
import Header from '../Header/Header';
import "./courseDisplayStyle.css"
import {Link, useParams} from 'react-router-dom'
import { useFetch } from '../../CustomHooks/useFetch';
import { Product } from '../../models/Product';
import { idText } from 'typescript';

const url = "http://localhost:3001/products";

const CourseDisplay: React.FC = () => {
  const id = useParams().id;

  const [courses, setCourses] = useState<Product[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch(url);
      const courses: Product[] = await response.json();
      setCourses(courses);
    }

    getCourses();
  }, [])

  const singleCourse = courses.find(course => {
    const currCourseId = course.id.toString();
    return currCourseId == id;
  })

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
            <h4 className="courseDisplayheading4"><strong>{singleCourse != undefined? singleCourse.title: "undefined"}</strong></h4>
            <h6 className="courseDisplayheading6">{singleCourse != undefined? singleCourse.title: "undefined"}</h6>
            {/* <h6>{{this.currentCourse.title}}</h6> */}
            <p className="courseDisplayPara">{singleCourse != undefined? singleCourse.author: "undefined"}</p>
            {/* <p>{{this.currentCourse.author}}</p> */}
            {
              singleCourse != undefined?
              singleCourse.tags.map((tag) => {
                return <span style={{backgroundColor: "black",
                                     color: "white",
                                     padding: "1%",
                                     marginRight: "1%",
                                     borderRadius: "4%"
                                    }}>{tag}
                        </span>
              }):
              "undefined"
            }
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
        <p>{singleCourse != undefined? singleCourse.description: "undefined"}</p>
        <p>{singleCourse != undefined? singleCourse.description: "undefined"}</p>
        <p>{singleCourse != undefined? singleCourse.description: "undefined"}</p>
    </div>

    <div className="courseThumbnail">
        <div><img className="courseDisplayImage" src={courseTh} /></div>
        <div>
            <div className="container">
                <div className="row courseDisplayRow">
                    <h3 className='courseDisplarH3'>₹{singleCourse != undefined? singleCourse.discountedPrice: "undefined"}</h3>
                </div>
                <div className="row courseDisplayRow">
                    <small><del>₹{singleCourse != undefined? singleCourse.price: "undefined"}</del></small>
                </div>
                <div className="row courseDisplayRow"  >
                    <p style = {{
                      color: "red",
                      padding: "2% 0 0 1%"
                    }}>
                    <span style={{fontSize: "larger"}}>8 hours</span> left for this price</p>
                </div>
                <div className="row courseDisplayRow">
                  <div className="col">
                    <button className="btn btn-block courseDisplaybtn-cart">Add to cart</button></div>
                  <div className="col">
                    <button className="btn btn-block courseDisplaybtn-wishlist">Add to wishlist</button></div>
                </div>
            </div>
    </div>
</div>
</div>
    </div>
  )
}

export default CourseDisplay

