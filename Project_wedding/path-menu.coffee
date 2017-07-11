Framer.Defaults.Animation = curve: "spring(90,13,10)"
#创建背景图层
bg = new Layer
    width: 750
    height: 1334
    image: "images/bg.png"
#给背景图层新增一个状态，叫bgBlur
bg.states.add
    bgBlur:
        blur:12

btn = []
#创建四个按钮
for i in [0..3]
    btn[i] = new Layer
        width: 156
        height: 156
        x:297
        y:1136
        image: "images/btn"+i+".png"
    #给每个按钮添加新状态
    btn[i].states.add
        popUp:
            x:297
            y: i*176+428
#创建触发按钮
btnAdd = new Layer
    width: 162
    height: 162
    x:297
    y:1140
    borderRadius: 100
    backgroundColor: '#f75534'
    #给触发按钮增加一个状态叫grey
btnAdd.states.add
    grey:
        backgroundColor: '#AAA'
plus = new Layer
    superLayer: btnAdd
    width: 50
    height: 50
    image: "images/plus.png"
    y: 54
    x: 53
#给加号添加一个状态，叫rotate
plus.states.add
    rotate:
        rotation: 45

    btnAdd.onClick (event, layer) ->

  #点击按钮，触发按钮变灰色，加号旋转，弹出菜单，模糊背景
  btnAdd.onClick (event, layer) ->
    bg.states.next()
    btnAdd.states.next()
    plus.states.next()
    btn[0].states.next()
    btn[1].states.next()
    btn[2].states.next()
    btn[3].states.next()
