const progressbar = document.querySelector('#progress');

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
)