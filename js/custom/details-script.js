$(document).ready(function () {
    debugger;
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    if (id) {
        $.getJSON('../../data/data.json', (data) => {
            $.each(data.logoDesign, (i, logo) => {
                if (logo.id == id) {
                    $('.type').append(logo.type);
                    $('.item-name').append(logo.name);
                    document.querySelector('.design-image').src = logo.image;
                    $('.short-description').append(logo.shortDescription);
                    $('.heading').append(logo.heading);
                    $('.description').append(logo.description);
                    $('.category').append(logo.category);
                    $('.date').append(logo.date);
                    $('.tags').append(logo.tags);
                }
            });
        });
    }
});
