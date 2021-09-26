import React from 'react';
import CourseHeader from "../courseHeader/courseHeader";
import CoursesBody from "../coursesBody/coursesBody";

const FavCourses = (props) => {
    return (
        <>
            <section className="fav-courses">
                <div className="container">
                    <CourseHeader coursesTitle={props.favCoursesTitle}
                                  coursesBtnTitle={props.coursesBtnTitle}
                    />
                    <CoursesBody courseInfo={props.favCoursesInfo}/>
                </div>
            </section>
        </>
    );
};

export default FavCourses;
