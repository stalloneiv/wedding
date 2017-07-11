var button, buttonOriginX, textLabel;

new BackgroundLayer({
  backgroundColor: "#2C77CC"
});

Framer.Defaults.Animation = {
  curve: "ease-in",
  time: .5
};

button = new Layer({
  width: 500,
  height: 150,
  backgroundColor: "#FFF",
  borderRadius: 20,
  shadowY: 2,
  shadowBlur: 5,
  shadowColor: "rgba(0,0,0, .5)"
});

button.center();

buttonOriginX = button.x;

textLabel = new Layer({
  width: 500,
  height: 150,
  backgroundColor: null,
  html: "pass",
  superLayer: button
});

textLabel.states.add({
  stateB: {
    X: 10,
    Y: 1000,
    width: 500,
    height: 150,
    backgroundColor: null,
    html: "passd",
    superLayer: button
  }
});

textLabel.style.color = "#2C77CC";

textLabel.style.fontSize = "40px";

textLabel.style.fontFamily = "Avenir";

textLabel.style.fontWeight = "500";

textLabel.style.letterSpacing = ".1em";

textLabel.style.textTransform = "uppercase";

textLabel.style.lineHeight = "150px";

textLabel.style.textAlign = "center";

button.on(Events.Click, function(event, layer) {
  textLabel.stateSwitch("stateB");
  textLabel.style.color = "#2C77CC";
  textLabel.style.fontSize = "20px";
  return textLabel.style.textAlign = "top";
});
