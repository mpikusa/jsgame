"use strict";

$.Draw = {
    clear: function() {
        $.ctx.clearRect(0, 0, $.width, $.height);
    },

    rect: function(x, y, w, h, col) {
        $.ctx.beginPath();
        $.ctx.rect(x, y, w, h);
        $.ctx.fillStyle = col;
        $.ctx.fill();
    },

    cir: function(x, y, radius) {
      $.ctx.beginPath();
      $.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      $.ctx.fillStyle = 'green';
      $.ctx.fill();
      $.ctx.lineWidth = 5;
      $.ctx.strokeStyle = '#003300';
      $.ctx.stroke();
    }
};
