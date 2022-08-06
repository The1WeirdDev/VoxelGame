Globals.Init();

if (Globals.SupportsWebGL() == false) {
  const error = "Webgl not Supported cant start game.";
  alert(error);
} else {
  Client.Start();
}