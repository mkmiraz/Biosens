
let observer_1 = document.querySelector("#observer_1");
const observer01 = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                document.getElementById('text_up_1').style.transform = "translateX(0rem)";
                document.getElementById('bottom_btn_1').style.transform = "scale(1)";
                document.getElementById('banner_image_1').style.transform = "scale(1)";
            }else {
                document.getElementById('text_up_1').style.transform = "translateX(99rem)";
                document.getElementById('bottom_btn_1').style.transform = "scale(0)";
                document.getElementById('banner_image_1').style.transform = "scale(0)";
            }
        })

},{
    threshold: 1,
});
observer01.observe(observer_1);



let observer_2 = document.querySelector("#observer_2");
const observer02 = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                document.getElementById('text_up_2').style.transform = "translateX(0rem)";                
                document.getElementById('bottom_btn_2').style.transform = "scale(1)";
                document.getElementById('banner_image_2').style.transform = "scale(1)";

            }else {
                document.getElementById('text_up_2').style.transform = "translateX(99rem)";                
                document.getElementById('bottom_btn_2').style.transform = "scale(0)";
                document.getElementById('banner_image_2').style.transform = "scale(0)";
            }
        })

},{
    threshold: 1,
});
observer02.observe(observer_2);



let observer_3 = document.querySelector("#observer_3");
const observer03 = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                document.getElementById('text_up_3').style.transform = "translateX(0rem)";                
                document.getElementById('bottom_btn_3').style.transform = "scale(1)";
                document.getElementById('banner_image_3').style.transform = "scale(1)";
            }else {
                document.getElementById('text_up_3').style.transform = "translateX(99rem)";               
                document.getElementById('bottom_btn_3').style.transform = "scale(0)";
                document.getElementById('banner_image_3').style.transform = "scale(0)";
            }
        })

},{
    threshold: 1,
});
observer03.observe(observer_3);



let observer_4 = document.querySelector("#observer_4");
const observer04 = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                document.getElementById('text_up_4').style.transform = "translateX(0rem)";                
                document.getElementById('bottom_btn_4').style.transform = "scale(1)";
                document.getElementById('banner_image_4').style.transform = "scale(1)";
            }else {
                document.getElementById('text_up_4').style.transform = "translateX(99rem)";               
                document.getElementById('bottom_btn_4').style.transform = "scale(0)";
                document.getElementById('banner_image_4').style.transform = "scale(0)";
            }
        })

},{
    threshold: 1,
});
observer04.observe(observer_4);


