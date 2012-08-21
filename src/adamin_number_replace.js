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

      var newImages = $('img', this.$el);

      this.$el.html(function(i, text){
        return self.cleanText( text );
      });

      $('img', this.$el).css({
        'margin': this.config.margin
      });

      if (this.config.imgClass) {
        $('img', this.$el).addClass(this.config.imgClass);
      }

    },

    cleanText: function( text ) {
      // remove all non numbers, commas or periods
      text = text.replace(/[^\d.,!+]/g, "");

      // add class of number for verification
      this.$el.addClass(text);

      var textArray, imgText;

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
          default:
            textArray[i] = textArray[i];
        }

        textArray[i] = '<img src="' + this.config.path + this.config.prefix + textArray[i] + this.config.suffix + '" alt="' + textArray[i] + '">';
      }

      // join image tags back into string
      imgText = textArray.join('');
      
      // pass complete text back to updateHTML
      return imgText;

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
    margin: '0px',
    imgClass: ''
  };


}(jQuery));
