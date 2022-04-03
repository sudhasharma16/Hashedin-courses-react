import React from 'react'
import { useFetch } from '../../CustomHooks/useFetch'
import CourseItem from '../CourseItem/CourseItem';

const url = "http://localhost:3001/products";

const CourseList: React.FC = () => {
  const {courses} = useFetch(url);
  console.log(courses);
  return (
    <>
      <div>
      {courses.map((course) => {
          console.log(course);
          const {id, title,  description, author, tags, price, discountedPrice} = course;
          return (
            <CourseItem key={id} id={id} title ={title} description={description} author={author} tags={tags} price={price} discountedPrice={discountedPrice}/>
          );
        })}
      </div>
    </>
  )
}

export default CourseList
