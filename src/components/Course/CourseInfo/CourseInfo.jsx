import React from "react";

const CourseInfo = (props) => {
  return (
    <>
      <div className="info">
        <h5 className="mt-4 info-title">{props.courseData.courseName}</h5>
        <p className="mt-2 info-des">
          {props.courseData.description}
        </p>
        <h5 className="mt-4 info-title">چرا باید از این دوره استفاده بکنم؟</h5>
        <p className="mt-2 info-des">
          داخل دوره ما به مسائلی مثل اینکه پایتون رو چه کسی ساخت و یا در چه سالی
          ایجاد شد و مسائلی این چنینی نمیپردازیم،شما دارید هزینه میکنید و وقت
          میزارید که پایتون یادبگیرید نه اینکه بدونید پایتون رو کی ساخت.
        </p>
        <h5 className="mt-4 info-title">پیش نیاز های این دوره</h5>
        <p className="mt-2 info-des">
          این دوره برای افرادی که هیچ گونه اشنایی با برنامه نویسی ندارن و همچمین
          افراد متوسط و افرادی که پایتون رو به صورت پیشرفته دنبال می کنند قابل
          استفاده می باشد.
        </p>
      </div>
    </>
  );
};

export default CourseInfo;
