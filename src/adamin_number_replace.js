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

      this.$el.html(function(i, text){
        return self.cleanText( text );
      });
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

        textArray[i] = '<img src="' + this.config.path + textArray[i] + '-sm.png" alt="' + textArray[i] + '">';
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

  $.fn.adaminNumReplace.defaults = {
    path: '../images/mission-numbers-sm/',
    kerning: '-3px'
  };


}(jQuery));
