var headerItems = [
    { id: 0, linkId: "all", name: "All" },
    { id: 1, linkId: "logo-design", name: "Logo Design" },
    // { id: 2, linkId: "post-design", name: "post Design" },
    { id: 3, linkId: "packaging-design", name: "Packaging Design" },
    { id: 4, linkId: "3d-product-design", name: "3d Product Design" },
    { id: 5, linkId: "banner-design", name: "Banner Design" },
    { id: 6, linkId: "print-design", name: "Print Pesign" },
    // { id: 7, linkId: "illustration", name: "Illustration" },
    { id: 8, linkId: "flyer-design", name: "Flyer Design" },
];

$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children();
    for (var i = $elems.length; i >= 0; i--) {
        $(this).append($elems[Math.random() * i | 0]);
    }
    return this;
}

$.each(headerItems, (i, x) => {
    $('.nav-items').append(`<li><a href="#${x.linkId}" onclick="showHideSection(${i}, '${x.linkId}')">${x.name}</a></li>`);
    $('#designs-section').append(`
        <section class="home-tow-gallery pt-80 pb-20 d-none" id=${x.linkId}>
           <div class="row" id="design-list"></div>
        </section>
    `);
});

$.getJSON('../../assets/data/data.json', (data) => {
    $.each(data.portfolioDesign, (i, design) => {
        if (design.linkId !== "all") {
            this.renderDesigns(i, design.linkId, design);
        }
        this.renderDesigns(i, "all", design);
    });
    showHideSection(0, 'all');
    $('#all #design-list').randomize();
});

renderDesigns = (id, sectionId, design) => {
    $(`#${sectionId} #design-list`).append(`
        <div class="col-1-5 ${design.linkId}" id="${design.linkId}-${id}">
            <a class="design-clicked" onclick="getDesignDetails(${id})">
                <figure class="gallery-image-home mb-30">
                    <img class="img" src="${design.image}"/>
                    <figcaption>
                        <span class="design-type">${design.type}</span>
                        <h4 class="design-item-name">${design.shortName}</h4>
                    </figcaption>
                </figure>
            </a>
        </div>
    `);
}

showHideSection = (id, linkId) => {
    $.each(headerItems, (i, item) => {
        if (i != id) {
            $(`#designs-section, #${item.linkId}`).addClass('d-none');
        }
    });
    $(`#designs-section, #${linkId}`).removeClass('d-none');
}

getDesignDetails = (id) => {
    $.getJSON('../../assets/data/data.json', (data) => {
        $.each(data.portfolioDesign, (i, design) => {
            if (i == id) {
                window.location.href = `design-details.html?id=${encodeURIComponent(id)}`;
            }
        });
    });
};