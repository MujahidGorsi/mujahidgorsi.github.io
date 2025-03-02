var sectionIdArray = ["all", "logo-design", "post-design", "packaging-design", "3d-product-design", "banner-design", "print-design", "illustration", "flyer-design"];

(async () => {
    $.fn.randomize = function (selector) {
        var $elems = selector ? $(this).find(selector) : $(this).children();
        for (var i = $elems.length; i >= 0; i--) {
            $(this).append($elems[Math.random() * i | 0]);
        }

        return this;
    }

    $.getJSON('../../assets/data/data.json', (data) => {
        sectionIdArray.forEach(x => {
            $('#designs-section').append(`
                <section class="home-tow-gallery pt-80 pb-20" id=${x}>
                   <div class="row" id="design-list"></div>
                </section>
            `);
        });

        $.each(data.portfolioDesign, (i, design) => {
            if (design.linkId !== "all") {
                this.renderDesigns(i, design.linkId, design);
            }
            this.renderDesigns(i, "all", design);
        });

        $('#all #design-list').randomize();
    });
})();

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

getDesignDetails = (id) => {
    console.log(`id clicked --- ${id}`)
    $.getJSON('../../assets/data/data.json', (data) => {
        $.each(data.portfolioDesign, (i, design) => {
            if (id == id) {
                window.location.href = `design-details.html?id=${encodeURIComponent(id)}`;
            }
        });
    });
};