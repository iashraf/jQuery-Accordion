jQuery Accordion Plugin
=========

Developed using jQuery 1.8.3

Required HTML:
```HTML
<div id="accordion">

	<div class="accordion_item">

		<div class="accordion_header">
			<b>Heading 1</b>
		</div><!-- .accordion_header -->

		<div class="accordion_content">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam, eveniet numquam, animi laudantium aut.
		</div><!-- .accordion_content -->

	</div><!-- .accordion_item -->

	<div class="accordion_item">

		<div class="accordion_header">
			<b>Heading 2</b>
		</div><!-- .accordion_header -->

		<div class="accordion_content">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quam, eveniet numquam, animi laudantium aut.
		</div><!-- .accordion_content -->

	</div><!-- .accordion_item -->

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
	defaultPane: 1 // will open the first pane by default
});
```