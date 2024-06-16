/*const progressbar = document.querySelector('#progress');

progressbar.style.transformOrigin = '0% 50%';

progressbar.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        fill: 'forwards',
        timeline: new ScrollTimeline({
            //this specifies the source to be the root of the document
            source: document.documentElement,
        })
    }
)*/

// const images = document.querySelectorAll('.conatiner-box');
// images.forEach((image) => {
//     image.animate(
//         [
//             { opacity:0, clipPath: 'inset(45% 20% 45% 20%)', offset:0 },
//             { opacity: 1, clipPath: 'inset(0)', offset:0.5 }
//         ], 
//         {
//             fill: 'both',
//             timeline: new ViewTimeline({
//                 subject: image,
//                 axis: 'block',
//             })
//         }
//     )
// })