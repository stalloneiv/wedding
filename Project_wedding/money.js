var bg, jine, maxium, moneyCount, nian, receipts, receiptsMax, receiptsStart, start;

Framer.Info = {
  title: "",
  author: "é»‘æ¿æŠ¥",
  twitter: "",
  description: ""
};

bg = new Layer({
  width: 750,
  height: 1334,
  image: "money.png"
});

receipts = new Layer({
  html: 0,
  x: 110,
  y: 230,
  width: 500,
  height: 130,
  backgroundColor: "transparent",
  style: {
    fontSize: "140px",
    fontWeight: "300",
    textAlign: "center",
    lineHeight: "130px"
  }
});

jine = new Layer({
  html: 9999,
  x: 80,
  y: 410,
  width: 200,
  height: 90,
  backgroundColor: "transparent",
  style: {
    fontSize: "40px",
    fontWeight: "300",
    textAlign: "center",
    lineHeight: "130px"
  }
});

nian = new Layer({
  html: 100,
  x: 450,
  y: 410,
  width: 200,
  height: 90,
  backgroundColor: "transparent",
  style: {
    fontSize: "40px",
    fontWeight: "300",
    textAlign: "center",
    lineHeight: "130px"
  }
});

receiptsStart = 0;

receiptsMax = 100;

start = [0, 9999, 100];

maxium = [86941, 9999999, 999954];

moneyCount = function(i, counLayer) {
  if (start[i] < maxium[i]) {
    return Utils.delay(start[i] * 0.000001, function() {
      var showNumber;
      showNumber = Utils.round(start[i], 2);
      counLayer.html = showNumber.toFixed(2);
      start[i] = start[i] + maxium[i] / 1283;
      return moneyCount(i, counLayer);
    });
  }
};

bg.onTap(function(event, layer) {
  moneyCount(0, receipts);
  moneyCount(1, jine);
  return moneyCount(2, nian);
});

Framer.Info = {
  author: "guoyiwen",
  title: "fajiazhifu",
  description: "fajiazhifushenqi"
};
