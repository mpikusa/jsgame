$.Circle = {
  radius: 20,
  x: 50,
  y: 50,
  vx: 10,
  vy: 10,

  update: function() {

    if(this.x + this.radius> $.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if(this.y - this.radius <0) {
      this.vy = -this.vy;
    }

    if(this.y == $.Hitter.ypos - $.Hitter.height && (this.x > $.Hitter.xpos && this.x < $.Hitter.xpos + $.Hitter.length)) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;

  },

  render: function() {
    $.Draw.cir(this.x, this.y, this.radius)
  }


}


$.Hitter = {
  length: 200,
  height: 10,
  xpos: 50,
  ypos: 550,

  update: function() {
    this.xpos = Math.min(Math.max($.mousePos-(this.length/2), 0), $.width-this.length);
  },

  render: function() {
    $.Draw.rect(this.xpos, this.ypos, this.length, 10, $.colors.blue)
  }
}
