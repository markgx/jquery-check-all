# jQuery Check All

https://github.com/blueimp/jQuery-File-Upload

Quickly add check all/uncheck all functionality to your forms or tables.

## Setup
Include the script in your <head> tag. Call the $('#your-all-checkbox').checkAll() function to initialize the plugin.

```
<head>
  <script type="text/javascript" src="jquery-check-all.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {
      $('#check-all-box').checkAll();
    });
  </script>
</head>
```

## Options
The plugin can be supplied with an options object for further customization.

```
var options = { container: $('#table') };
$('#check-all-box').checkAll(options);
```

Available options:

- container: A selector string or jQuery object of the element which contains the children checkboxes. Defaults to `document`.
- childCheckboxes: A selector string or jQuery object of the children checkboxes. Defaults to `input[type=checkbox]`.

## Requirements
- jQuery 1.7+

## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).
