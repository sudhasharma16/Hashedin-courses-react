import React from 'react'
import { useFetch } from '../../CustomHooks/useFetch'
import CourseItem from '../CourseItem/CourseItem';

const url = "http://localhost:3001/products";

const CourseList: React.FC = () => {
  const {courses} = useFetch(url);

  

  // const sortByPrice = (order: string) => {
  //   if(order == "Asc") {
  //     setCourses([...courses].sort((a: any,b: any) => {
  //       return a.price - b.price;
  //     }))
  //   }

  //   else {
  //     setCourses([...courses].sort((a: any,b: any) => {
  //       return b.price - a.price;
  //     }))
  //   }

  // }
  console.log(courses);
  return (
    <>
      <div>
      {courses.map((course) => {
          console.log(course);
          const {id, title,  description, author, tags, price, discountedPrice} = course;
          return (
            <CourseItem key={id} course={course}/>
          );
        })}
      </div>
    </>
  )
}

export default CourseList
