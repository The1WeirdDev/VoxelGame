class Client {
  static Start() {
    setTimeout(Client.UpdateGameLoop, 1000 / 60);
  }

  static UpdateGameLoop() {
    Display.PrepareDisplay();

    Display.PostUpdateDisplay();
  }
}