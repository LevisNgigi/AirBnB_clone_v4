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
});

