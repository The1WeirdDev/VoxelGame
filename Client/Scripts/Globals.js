class Globals {
  static game_name = "Voxel Game";
  static game_version = "0.0.1";

  static canvas = null;
  static gl = null;

  static SupportsWebGL() {
    return (Globals.gl != null);
  }

  static Init() {
    if (Globals.canvas == null) {
      Globals.canvas = document.getElementById("game_canvas");
      Globals.gl = Globals.canvas.getContext("webgl2", {
        premultipliedAlpha: true,
        antialias: false
      });
    }
  }
}