function hplogo() {
    let logo = document.createElement('img');
    logo.id = 'hplogo_new';
    logo.height = '92';
    logo.width = '272';
    logo.src = '/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
    logo.srcset = '/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x';
    logo.alt = 'Google';
    return logo;
};

document.arrive('#hplogo', {onceOnly: true}, function(element) {
    element.parentNode.replaceChild(hplogo(), element);
});

document.arrive('picture > source', {onceOnly: true}, function(element) {
    element.parentNode.removeChild(element);
});
