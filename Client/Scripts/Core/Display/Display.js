class Display {
  static PrepareDisplay() {
    var canvas = Globals.canvas;
    var gl = Globals.gl;

    //if (canvas.width != innerWidth || canvas.height != innerHeight)
    //  Shaders.should_generate_projection_matrix = true;
    gl.clearColor(0, 0, 0, 1);

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    gl.enable(gl.BLEND);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.clearColor(0, 0.5, 1, 1);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  static PostUpdateDisplay() {
    var gl = Globals.gl;
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);
    gl.disable(gl.DEPTH_TEST);
  }
  static getAspectRatio() {
    return Globals.canvas.width / Globals.canvas.height;
  }

  static getAspectRatio2() {
    return Globals.canvas.height / Globals.canvas.width;
  }
}
