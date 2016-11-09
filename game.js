"use strict";

var $ = {};

$.width = 1000;
$.height = 600;
$.mousePos = $.width/2
$.colors = {
    yellow: 'rgba(255, 255, 155, 1)',
    orange: 'rgba(255, 77, 77, 1)',
    pink: 'rgba(255, 128, 255, 1)',
    green: 'rgba(129, 255, 226, 1)',
    blue: 'rgba(94, 0, 244, 1)'
};

$.init = function () {
    $.canvas = document.getElementsByTagName('canvas')[0];
    $.canvas.width = $.width;
    $.canvas.height = $.height;


    $.ctx = $.canvas.getContext('2d');

    $.canvas.onmousemove = $.updateMousePosition

    $.loop();
};

$.updateMousePosition = function(evt) {
  var pos = getMousePos($.canvas, evt)
  $.mousePos = pos.x;

}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

$.loop = function () {
    $.render();
    $.update();

    window.requestAnimationFrame($.loop);
};

$.update = function () {
  $.Circle.update()
  $.Hitter.update();
};

$.render = function () {
    $.Draw.clear();
    $.Hitter.render();
    $.Circle.render()
};

$.entities = [];
$.entities.push($.Circle)

window.addEventListener('load', $.init, false);
