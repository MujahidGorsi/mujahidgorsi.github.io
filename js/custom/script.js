(async () => {
    $.getJSON('../../data/data.json', (data) => {
        $.each(data.logoDesign, (i, design) => {
            $('#logo-design-list').append(`
                <div class="col-1-5">
                    <a class="logo-clicked" onclick="getLogoDesignDetails(${design.id})">
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

getLogoDesignDetails = (id) => {
    $.getJSON('../../data/data.json', (data) => {
        $.each(data.logoDesign, (i, design) => {
            if (design.id == id) {
                window.location.href = "logo-design-details.html?id=" + encodeURIComponent(design.id);
            }
        });
    });
};