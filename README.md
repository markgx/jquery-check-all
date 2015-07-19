# jQuery Check All

http://markgx.github.io/jquery-check-all

A jQuery plugin which allows you to quickly add check all/uncheck all functionality to your forms or tables.

## Download / Fork

Source is available on [GitHub](https://github.com/markgx/jquery-check-all).

## Setup

Include jQuery and the script somewhere on your page.

```html
<script src="jquery.js"></script>
<script src="jquery-check-all.js"></script>
```

You'll have markup which contains your checkboxes, for example:

```html
<table>
  <thead>
    <tr>
      <td><input id="check-all" type="checkbox"></td>
      <td></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="checkbox" value="1"></td>
      <td>option 1</td>
    </tr>
    <tr>
      <td><input type="checkbox" value="2"></td>
      <td>option 2</td>
    </tr>
    <tr>
      <td><input type="checkbox" value="3"></td>
      <td>option 3</td>
    </tr>
  </tbody>
</table>
```

Call the `checkAll()` function on your "check all" checkbox to initialize the plugin.

```html
<script>
  $(document).ready(function() {
    $('#check-all').checkAll();
  });
</script>
```

## Options

The plugin can be supplied with an options object to further filter which checkboxes you want to group.

```js
var options = { container: $('#table'), showIndeterminate: true };
$('#check-all-box').checkAll(options);
```

Alternatively, options may be supplied via data attributes. Note that options passed via the options object will override any options specified via data attributes.

```html
<input id="check-all" type="checkbox" data-show-indeterminate="true">
```

Available options:

- container: A selector string or jQuery object of the element which contains the children checkboxes. Defaults to `document`.
- childCheckboxes: A selector string or jQuery object of the children checkboxes. Defaults to `input[type=checkbox]`. _Note_: if you supply this option, make sure what you're passing are checkboxes.
- showIndeterminate: a boolean which specifies whether to display the check all checkbox in the indeterminate state if a subset of the children checkboxes are selected.

## Requirements

- jQuery 1.7+/2.0+

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).
