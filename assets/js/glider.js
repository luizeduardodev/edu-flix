const config = {
    type: "slider",
    perView: 5,
    keyboard: true,
    animationDuration: 500,

    breakpoints: {
        768: {
            perView: 4
        },
        425: {
            perView: 2
        },
        375: {
            perView: 2
        },
        320: {
            perView: 1
        }
    }
};

new Glide(".glide", config).mount();
