/*
 * adamin_number_replace
 *
 *
 * Copyright (c) 2012 Adam L.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var adaminNumReplace = {
    init: function(el, config) {
      this.config = $.extend({}, $.fn.adaminNumReplace.defaults, config);

      this.el = el;
      this.$el = $(el);

      this.updateHTML();
    },

    updateHTML: function() {

      var self = this;

      var originalText = this.$el.html();

      var cleanTextValues = this.cleanText( originalText );

      var createdImages = $('img', this.$el);

      this.$el.
        html(function(i, text){
          return cleanTextValues[0];
        }).
        addClass(cleanTextValues[1])
        ;

      // add imgClass if config is set
      if (this.config.margin) {
        $('img', this.$el).css({
          'margin': this.config.margin
        });
      }

      // add imgClass if config is set
      if (this.config.imgClass) {
        $('img', this.$el).addClass(this.config.imgClass);
      }

      // add inline display if config is set
      if (this.config.inline) {
        $('img', this.$el).css({
          'display': 'inline'
        });
      }

      // add text into element
      $('<span>', {
        text: cleanTextValues[1]
      })
        // Nicolas Gallagher IR Technique
        .css({
          'font': '0/0 a',
          'text-shadow': 'none',
          'color': 'transparent'
        })
        .appendTo(this.$el);
    },

    cleanText: function( text ) {
      
      var textArray, imgText;

      // remove all non numbers, commas or periods
      var cleanText = text.replace(/[^\d\$.,!+-\:\#\%\?\/\*]/g, "");

      // convert text to array
      textArray = text.split('');

      // convert array to image tags
      for (var i = 0; i < textArray.length; i++) {

        switch (textArray[i]) {
          case ",":
            textArray[i] = 'comma';
            break;
          case ".":
            textArray[i] = 'period';
            break;
          case "!":
            textArray[i] = 'exclamation';
            break;
          case "+":
            textArray[i] = 'plus';
            break;
          case "-":
            textArray[i] = 'dash';
            break;
          case "+":
            textArray[i] = 'dollar';
            break;
          case ":":
            textArray[i] = 'colon';
            break;
          case "#":
            textArray[i] = 'hash';
            break;
          case "#":
            textArray[i] = 'percent';
            break;
          case "?":
            textArray[i] = 'question';
            break;
          case "/":
            textArray[i] = 'slash';
            break;
          case "*":
            textArray[i] = 'star';
            break;
          default:
            textArray[i] = textArray[i];
        }


        textArray[i] = '<img src="' + this.config.path + this.config.prefix + textArray[i] + this.config.suffix + '" alt="' + textArray[i] + '">';
      }

      // join image tags back into string
      imgText = textArray.join('');
      
      // pass complete text back to updateHTML
      return [imgText, cleanText];

    }

  };

  // Collection method.
  $.fn.adaminNumReplace = function(config) {
    var obj = Object.create(adaminNumReplace);
    return this.each(function() {
      obj.init(this, config);
    });
  };

  // Set defaults
  $.fn.adaminNumReplace.defaults = {
    path: '../images/small/',
    prefix: '',
    suffix: '.png',
    margin: '',
    imgClass: '',
    inline: false
  };


}(jQuery));
