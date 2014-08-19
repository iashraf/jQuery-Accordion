jQuery Accordion Plugin
=========

Developed using jQuery 1.8.3

Required HTML:
```HTML
<div id="accordion">

	<div class="accordion_item">

		<div class="accordion_header">
			Heading 1
		</div>

		<div class="accordion_content">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam, eveniet numquam, animi laudantium aut.
		</div>

	</div>

	<div class="accordion_item">

		<div class="accordion_header">
			Heading 2
		</div>

		<div class="accordion_content">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam, eveniet numquam, animi laudantium aut.
		</div>

	</div>

</div><!-- #accordion -->
```

JavaScript:
```JavaScript
$("#accordion").accordion();
```

With options:
```JavaScript
$("#accordion").accordion({
	speed: 250, // animation speed (in msecs)
	defaultPane: 1 // will open the pane 1 by default
});
```

License
=========

This plugin is free and unemcumbered software released into the public domain. For more information, see the included UNLICENSE file.