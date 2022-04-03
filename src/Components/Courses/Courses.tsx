import React from 'react'
import Header from '../Header/Header'
import Filters from "../../Components/Filtres/Filters"
import Search from '../Search/Search'
import CourseList from '../CourseList/CourseList'
import Cart from '../Cart/Cart'

const Courses: React.FC = () =>  {
  const value = "Discover latest courses on React"
  return (
    <>
    <div className="container">
    <Header heading={value}/>
    <div className="card" style={{padding: "2%"}}>
        <div className="row">
            <div className="col-4">
                All Courses
            </div>
            <div className="col">
                {/* <app-filters (notify)="parentMethod($event)"></app-filters> */}
                <Filters/>
            </div>
            <div className="col">
                {/* x<app-search (notify)="searchMethod($event)"></app-search> */}
                <Search />
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                {/* <app-course-list [filterType]="filterValue" [searchValue]="searchFieldValue"></app-course-list> */}
                <CourseList />
            </div>
        
            <div className="col">
                <Cart />
            </div>
        </div>
        
    </div>
  </div>

    </>
  )
}

export default Courses

