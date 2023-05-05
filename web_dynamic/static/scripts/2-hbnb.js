$(() => {
  let checkedItems = [];
  let checkedStr = '';

  $('input[type="checkbox"]').on('change', () => {
    const itemId = $(this).data('id');
    const itemName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedItems.push({ id: itemId, name: itemName });
    } else {
      checkedItems = checkedItems.filter(item => item.id !== itemId);
    }

    checkedStr = checkedItems.map(item => item.name).join(', ');
    $('div.amenities h4').text(checkedStr);
  });

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    dataType: 'json',
    success: data => {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});

