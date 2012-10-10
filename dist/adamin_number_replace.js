/*! Adamin Number Replace - v0.1.0 - 2012-10-10
* Copyright (c) 2012 Adam L.; Licensed MIT, GPL */

(function(window, document, $, undefined) {

  var Plugin = function(elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    this.metadata = this.$elem.data('adamin-options');
  };

  Plugin.prototype = {
    defaults: {
      path: '../images/small/',
      prefix: '',
      suffix: '.png',
      margin: '',
      imgClass: '',
      inline: false
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.updateHTML();

      return this;
    },
    updateHTML: function() {
      var self = this;

      var originalText = this.$elem.html();

      var cleanTextValues = this.cleanText( originalText );

      var createdImages = $('img', this.$elem);

      this.$elem.
        html(function(i, text){
          return cleanTextValues[0];
        }).
        addClass(cleanTextValues[1])
        ;

      // add imgClass if config is set
      if (this.config.margin) {
        $('img', this.$elem).css({
          'margin': this.config.margin
        });
      }

      // add imgClass if config is set
      if (this.config.imgClass) {
        $('img', this.$elem).addClass(this.config.imgClass);
      }

      // add inline display if config is set
      if (this.config.inline) {
        $('img', this.$elem).css({
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
        .appendTo(this.$elem);
    },

    cleanText: function( text ) {
      
      var textArray, imgText;

      // remove all non numbers, commas or periods
      var cleanText = text.replace(/[^\d\$\.\,\!\+\-\#\%\:\?\*]/gi, "");

      // convert text to array
      textArray = cleanText.split('');

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

  Plugin.defaults = Plugin.prototype.defaults;

  $.fn.adaminNumReplace = function(options) {
    return this.each(function() {
      new Plugin(this, options).init();
    });
  };

  window.Plugin = Plugin;

}(window, document, jQuery));
