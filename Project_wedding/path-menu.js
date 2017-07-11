var bg, btn, btnAdd, i, j, plus;

Framer.Defaults.Animation = {
  curve: "spring(90,13,10)"
};

bg = new Layer({
  width: 750,
  height: 1334,
  image: "images/bg.png"
});

bg.states.add({
  bgBlur: {
    blur: 12
  }
});

btn = [];

for (i = j = 0; j <= 3; i = ++j) {
  btn[i] = new Layer({
    width: 156,
    height: 156,
    x: 297,
    y: 1136,
    image: "images/btn" + i + ".png"
  });
  btn[i].states.add({
    popUp: {
      x: 297,
      y: i * 176 + 428
    }
  });
}

btnAdd = new Layer({
  width: 162,
  height: 162,
  x: 297,
  y: 1140,
  borderRadius: 100,
  backgroundColor: '#f75534'
});

btnAdd.states.add({
  grey: {
    backgroundColor: '#AAA'
  }
});

plus = new Layer({
  superLayer: btnAdd,
  width: 50,
  height: 50,
  image: "images/plus.png",
  y: 54,
  x: 53
});

plus.states.add({
  rotate: {
    rotation: 45
  }
}, btnAdd.onClick(function(event, layer) {}));

btnAdd.onClick(function(event, layer) {
  bg.states.next();
  btnAdd.states.next();
  plus.states.next();
  btn[0].states.next();
  btn[1].states.next();
  btn[2].states.next();
  return btn[3].states.next();
});
