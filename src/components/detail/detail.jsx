import React ,{Component , Fragment} from "react";
import "./detail.css"
import imgMaghale from "../../assets/img/img-maghale.png";

const Detail = () => {

    return (
        <>
            <div className={"container mt-3 Image"}>
            <img src={imgMaghale} className={"container mt-3"} alt={".."} />
            </div>
            <h1 className={"Title"}> عنوان اصلی مقاله</h1>
            <div className={"container mt-3 Info"}>
            <span className={"Author"}>سینا رضایی</span>
            <span className={"Date"}>دیروز</span>
            </div>
            <h3 className={"Topic"}>این مقاله درباره این است که</h3>
            <p className={"Desc container mt-3"}>هر مقاله با هدف رساندن یک پیام نوشته می‌شود. ممکن است نتیجه‌گیری در پایان مقاله و پس از بهره‌گیری از دلایل مختلف، آورده شود. ممکن است نویسنده پیام مقاله را در ابتدا بیاورد و سپس به استدلال بپردازد. حتی ممکن است نویسنده زیر فشار سانسور، با زبردستی منظور خود را در لابلای پاراگراف‌های مطلب بگنجاند. اما به هر صورت مقاله باید دارای نتیجه‌گیری باشد. تفاوت مهم مقاله و یادداشت در همین جاست. زیرا لزوماً در یادداشت نتیجه‌گیری خاصی وجود ندارد بلکه بیشتر تذکر و یادآوری یک موضوع مد نظر است</p>


        </>


    );

}

export default Detail;