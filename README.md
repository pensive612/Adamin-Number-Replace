# Adamin Number Replace

A jQuery plugin to replace numbers with images.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/pensive612/Adamin-Number-Replace/master/dist/adamin_number_replace.min.js
[max]: https://raw.github.com/pensive612/Adamin-Number-Replace/master/dist/adamin_number_replace.js

In your web page:

(shown is all of the options you can modify)

```html
<script src="jquery.js"></script>
<script src="dist/adamin_number_replace.min.js"></script>
<script>
jQuery(function($) {
  $('element').adaminNumReplace({
    path: 'path/to/images/', // you will want to set this one
    prefix: '', // add a prefix to the filename
    suffix: '', // add a suffix or change extension
    margin: '0px -4px', // adjust kerning with positive or negative margins
    imgClass: 'class-name', // set a class on each image
  });
});
</script>
```

## Documentation
This is a jQuery plugin to replace numbers in a ```<div>``` or container with corresponding images. 

This is only for particular use cases, and of course I'd recommend doing any of your styling with CSS techniques instead.  But alas, I ran into a situation where custom number images were required.  And I'm sure if you're reading this, you might be in a similar situation.

Use the above code and feel free to remove any configuration options you don't need.  Odds are you will need to set the path.  But the rest have sensible defaults.  A list of defaults is available in the Examples section.

If you are concerned with SEO.  The plugin will insert the number back into the element and implement [Nicolas Gallagher's Image Replacement CSS technique][IR] to hide the text.

[ir]: http://nicolasgallagher.com/another-css-image-replacement-technique/

The only setup you will require is the naming of the images.  All should contain the number in the name, and be consistent.

ie.  1.png, 2.png etc...  

In addition to numbers, the plugin currently supports the following names:

- comma
- period
- exclamation
- plus
- dash
- dollar
- colon
- hash
- percent
- question
- slash
- star

Also, keep in mind that this will parse all text in the container, so try to limit the container to just the numbers you want to replace.  Whether that be a ```div``` or ```span``` etc...

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Adam L.  
Licensed under the MIT, GPL licenses.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

