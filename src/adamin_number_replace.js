/*
 * adamin_number_replace
 *
 *
 * Copyright (c) 2012 Adam L.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  var adaminNumReplace = {
    init: function(el) {
      this.path = '../images/mission-numbers-sm/';

      this.el = el;
      this.$el = $(el);

      this.updateHTML();
    },

    updateHTML: function() {

      var self = this;

      this.$el.html(function(i, text){
        self.cleanText( text );
      });
    },

    cleanText: function( text ) {
      // remove all non numbers, commas or periods
      text = text.replace(/[^\d.,!+]/g, "");

      var textArray = text.split('');

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

        textArray[i] = '<img src="' + this.path + textArray[i] + '-sm.png" alt="' + textArray[i] + '">';
      }

      var imgText = textArray.join('');
      
      this.$el.html(imgText).addClass(text);

    }

  };

  // Collection method.
  $.fn.adaminNumReplace = function() {
    var obj = Object.create(adaminNumReplace);
    return this.each(function() {
      obj.init(this);
    });
  };


}(jQuery));
