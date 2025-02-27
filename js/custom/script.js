(async () => {
    $.getJSON('../../data/data.json', (data) => {
        $.each(data.logoDesign, (i, x) => {
            $('.type').append(x.type);
        });
    });
})();
