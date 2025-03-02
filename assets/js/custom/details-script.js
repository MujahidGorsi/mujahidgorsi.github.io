$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    if (id) {
        $.getJSON('../../assets/data/data.json', (data) => {
            $.each(data.portfolioDesign, (i, design) => {
                if (i == id) {
                    $('.type').append(design.type);
                    $('.item-name').append(design.name);
                    document.querySelector('.design-image').src = design.detailImage;
                    $('.short-description').append(design.shortDescription);
                    $('.heading').append(design.heading);
                    $('.description').append(design.description);
                    $('.category').append(design.category);
                    $('.date').append(design.date);
                    $('.tags').append(design.tags);
                }
            });
        });
    }
});