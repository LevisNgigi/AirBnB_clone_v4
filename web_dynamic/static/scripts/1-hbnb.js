$(document).ready(() => {
    $('input[type="checkbox"]').change(() => {
        const amenities = [];
        $('input[type="checkbox"]:checked').each(() => {
            const amenityID = $(this).data('id');
            const amenityName = $(this).data('name');
            amenities.push({
                'id': amenityID,
                'name': amenityName
            });
        });

        const list = amenities.map((amenity) => {
            return amenity.name;
        }).join(', ');

        $('div.amenities h4').text(list);
    });
});
