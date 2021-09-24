import React from 'react';
import CourseHeader from "./courseHeader/courseHeader";
import CoursesBody from "./coursesBody/coursesBody";

const Courses = (props) => {
    return (
        <>
            <section className="courses">
                <div className="container">
                    <CourseHeader coursesTitle={props.coursesTitle}
                                  coursesBtnTitle={props.coursesBtnTitle}
                    />
                    <CoursesBody courseInfo={props.courseInfo}/>
                </div>
            </section>
        </>
    );
};

export default Courses;
