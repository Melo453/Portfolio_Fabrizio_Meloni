const config = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    startAt: 0,
    autoplay: 2000,
    breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
});
config.mount();