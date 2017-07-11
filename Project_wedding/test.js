var layerA, layerB, layerC;

layerA = new Layer({
  width: 80,
  height: 80,
  backgroundColor: "#7ed6ff",
  borderRadius: "4px"
});

layerA.animate({
  properties: {
    y: 600
  }
});

layerB = new Layer({
  width: 80,
  height: 80,
  x: 100,
  backgroundColor: "#26b4f6",
  borderRadius: "4px"
});

layerB.animate({
  properties: {
    y: 300,
    rotationZ: 360
  },
  time: 2
});

layerC = new Layer({
  width: 80,
  height: 80,
  x: 200,
  backgroundColor: "#0079c6",
  borderRadius: "4px"
});

layerC.animate({
  properties: {
    y: 300
  },
  time: 3,
  curve: "cubic-bezier"
});
