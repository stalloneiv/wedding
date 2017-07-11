var flipHeart, handle, leftHouse, rightHouse, showLove, showLoveNames, start, startSecond;

rightHouse = new Layer({
  x: Align.center(100),
  y: Align.center(),
  height: 362,
  image: "images/heart-right.png"
});

leftHouse = new Layer({
  x: Align.center(-100),
  y: Align.center(),
  height: 362,
  image: "images/heart-left.png"
});

flipHeart = new Layer({
  x: Align.center(100),
  y: Align.center(),
  height: 362,
  originX: 0,
  image: "images/heart-right.png"
});

flipHeart.states.add({
  middle: {
    rotationY: -90,
    brightness: 140
  },
  over: {
    rotationY: -180,
    brightness: 93
  }
});

flipHeart.states.animationOptions = {
  time: 0.4,
  curve: "linear"
};

showLoveNames = new Layer({
  x: 0,
  y: 0,
  width: 1980,
  height: 160,
  html: "eleven and fennec一共在一起",
  style: {
    textAlign: "center",
    fontSize: "80px",
    lineHeight: "160px"
  }
});

showLove = new Layer({
  x: 0,
  y: 730,
  width: 1980,
  height: 160,
  html: "love",
  style: {
    textAlign: "center",
    fontSize: "100px",
    lineHeight: "160px"
  }
});

start = new Date(2005, 10, 1);

startSecond = start.getTime() / 1000;

handle = function() {
  var diffDay, diffHour, diffMinute, diffSecond, now, nowSecond;
  flipHeart.states["switch"]("middle");
  Utils.delay(0.4, function() {
    return flipHeart.states["switch"]("over");
  });
  Utils.delay(0.9, function() {
    return flipHeart.states.switchInstant("default");
  });
  now = new Date();
  nowSecond = now.getTime() / 1000;
  diffDay = parseInt((nowSecond - startSecond) / 3600 / 24);
  diffHour = parseInt((nowSecond - startSecond) / 3600 % 24);
  diffMinute = parseInt((nowSecond - startSecond) / 60 % 60);
  diffSecond = parseInt((nowSecond - startSecond) % 60);
  return showLove.html = diffDay + "天" + diffHour + "小时" + diffMinute + "分" + diffSecond + "秒";
};

handle();

Utils.interval(1, function() {
  return handle();
});
