import { useState, useEffect, useCallback } from 'react';

export const useFetch= (url: string) => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch(url);
    const courses = await response.json();
    setCourses(courses);
  }

  useEffect(() => {
    getCourses();
  }, [url]);


  return { courses };
};