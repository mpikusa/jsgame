$.Circle = {
  radius: 20,
  x: 50,
  y: 50,
  vx: 5,
  vy: 5,

  update: function() {

    if(this.x + this.radius> $.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }

    if(this.y - this.radius <0) {
      this.vy = -this.vy;
    }

    if(this.y == $.Hitter.ypos - $.Hitter.height && (this.x > $.Hitter.xpos && this.x < $.Hitter.xpos + $.Hitter.length)) {
      let relativePosition = (this.x - $.Hitter.xpos - ($.Hitter.length/2))/$.Hitter.length;
      let reflection = -2*relativePosition/2;
      $.output.innerHTML = relativePosition + " " + reflection;

      let n = { x: reflection, y: 1};

      let len = Math.sqrt(n.x*n.x + 1);
      console.log("len = " + len);

      console.log("n = " + n.x + ", " + n.y );
      n.x = n.x/len;
      n.y = n.y/len;

      console.log("normalized n = " + n.x + ", " + n.y );
      let c = 2*(n.x * this.vx + n.y*this.vy);

      console.log(c);
      //clean the code

      this.vx = this.vx - (c*n.x);
      this.vy = this.vy - (c*n.y);
      $.output.innerHTML = this.vx + " " + this.vy + " " + this.y  + " " + $.Hitter.ypos;
      //this.vy = -this.vy;
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
