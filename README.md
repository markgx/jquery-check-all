# jQuery Check All

http://markgx.net/jquery-check-all

A jQuery plugin which allows you to quickly add check all/uncheck all functionality to your forms or tables.

## Download / Fork

Source is available on [GitHub](https://github.com/markgx/jquery-check-all).

## Setup

Include jQuery and the script somewhere on your page.

```
<script src="jquery.js"></script>
<script src="jquery-check-all.js"></script>
```

You'll have markup which contains your checkboxes, for example:

```
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

```
<script>
  $(document).ready(function() {
    $('#check-all').checkAll();
  });
</script>
```

## Options

The plugin can be supplied with an options object to further filter which checkboxes you want to group.

```
var options = { container: $('#table') };
$('#check-all-box').checkAll(options);
```

Available options:

- container: A selector string or jQuery object of the element which contains the children checkboxes. Defaults to `document`.
- childCheckboxes: A selector string or jQuery object of the children checkboxes. Defaults to `input[type=checkbox]`. _Note_: if you supply this option, make sure what you're passing are checkboxes.

## Requirements

- jQuery 1.7+

## License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).
