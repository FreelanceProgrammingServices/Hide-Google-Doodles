document.arrive('.doodle', {onceOnly: true}, function(element) {
    let logo = document.createElement('img');
    logo.alt = 'Google';

    let image = element.firstChild.firstChild;

    if (image.width == '120') {
        logo.src = '/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
        logo.height = '44';
        logo.width = '120';
    } else {
        logo.src = '/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
        logo.height = '30';
        logo.width = '92';
    }

    let params = (new URL(location.href)).searchParams;
    let hlValue = params.get('hl');

    let link = document.createElement('a');
    link.href = '/webhp' + (hlValue == null ? '' : '?hl=' + hlValue);
    link.title = 'Google';
    link.appendChild(logo);

    let logo_default = document.createElement('div');
    logo.id = element.id;
    element.classList.forEach(function(c) {
        logo_default.classList.add(c);
    });
    logo_default.appendChild(link);

    element.parentNode.replaceChild(logo_default, element);
});
