test('with container set', function() {
  var containerSelector = '#group1';

  $('#all').checkAll({ container: containerSelector });

  // check
  $('#all').trigger('click');
  equal($('input[type=checkbox]:checked', containerSelector).length, $('input[type=checkbox]', containerSelector).length);

  equal(false, $('#lonely-checkbox').is(':checked'));

  // uncheck
  $('#all').trigger('click');
  equal(0, $('input[type=checkbox]:checked', containerSelector).length);
});

test('with childCheckboxes set', function() {
  var childSelector = '.group1'

  $('#all').checkAll({ childCheckboxes: childSelector });

  // check
  $('#all').trigger('click');
  equal($(childSelector).length, $(childSelector + ':checked').length);

  equal(false, $('#lonely-checkbox').is(':checked'));

  // uncheck
  $('#all').trigger('click');
  equal(0, $('input[type=checkbox]:checked', '#group1').length);
});

test('check all box checks/unchecks when children are selected/deselected', function() {
  $('#all').checkAll({ container: $('#group1') });

  $('#child1').trigger('click');
  equal(false, $('#all').is(':checked'));
  $('#child2').trigger('click');
  equal(true, $('#all').is(':checked'));
  $('#child2').trigger('click');
  equal(false, $('#all').is(':checked'));
});

test('indeterminate state is correctly set/unset', function() {
  $('#all').checkAll({ container: $('#group1'), showIndeterminate: true });

  equal(false, $('#all').prop('indeterminate'));
  $('#child1').trigger('click');
  equal(true, $('#all').prop('indeterminate'));
  $('#child2').trigger('click');
  equal(false, $('#all').prop('indeterminate'));
  $('#child2').trigger('click');
  equal(true, $('#all').prop('indeterminate'));
  $('#child1').trigger('click');
  equal(false, $('#all').prop('indeterminate'));
});
