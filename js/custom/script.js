var sectionArray = ["all", "logo-design", "post-design", "packaging-design", "3d-product-design", "banner-design", "print-design", "illustration", "flyer-design"];
var categoryArray = ["", "Logo Design", "Post Design", "Packaging Design", "3D Product Design", "Banner Design", "Print Design", "Illustration", "Flyer Design"];

(async () => {
    $.getJSON('../../data/data.json', (data) => {
        sectionArray.forEach(x => {
            $('#designs-section').append(`
                <section class="home-tow-gallery pt-80 pb-20" id=${x}>
                   <div class="row" id="design-list"></div>
                </section>
            `);
        });

        $.each(data.portfolioDesign, (i, design) => {
            categoryArray.forEach(x => {
                sectionArray.forEach(y => {
                    x = y;        
                });
            });
            $('#design-list').append(`
                <div class="col-1-5">
                    <a class="design-clicked" onclick="getDesignDetails(${design.id})">
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
        });
    });
})();

getDesignDetails = (id) => {
    $.getJSON('../../data/data.json', (data) => {
        $.each(data.portfolioDesign, (i, design) => {
            if (design.id == id) {
                window.location.href = `design-details.html?id=${encodeURIComponent(design.id)}`;
            }
        });
    });
};