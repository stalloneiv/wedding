# Create a background
new BackgroundLayer backgroundColor: "#2C77CC"
# Set default animation curve and time
Framer.Defaults.Animation =
    curve: "ease-in"
    time: .5

# Create a button
button = new Layer
    width: 500
    height: 150
    backgroundColor: "#FFF"
    borderRadius: 20
    shadowY: 2
    shadowBlur: 5
    shadowColor: "rgba(0,0,0, .5)"
button.center()
buttonOriginX = button.x
# Create text label for button
textLabel = new Layer
    width: 500
    height: 150
    backgroundColor: null
    html: "Submit"
    superLayer: button


# Style text
textLabel.style.color = "#2C77CC"
textLabel.style.fontSize = "40px"
textLabel.style.fontFamily = "Avenir"
textLabel.style.fontWeight = "500"
textLabel.style.letterSpacing = ".1em"
textLabel.style.textTransform = "uppercase"
textLabel.style.lineHeight = "150px"
textLabel.style.textAlign = "center"

# Create hidden layer
hiddenLayer = new Layer
    width: 30
    height: 230
    backgroundColor: null

hiddenLayer.center()


# Create loading circle
loadCircle = new Layer
    width: 30
    height: 30
    borderRadius: "50%"
    backgroundColor: "white"
    superLayer: hiddenLayer

hideTextLabel = new Animation
    layer: textLabel
    properties:
        opacity: 0
    time: .3
toCircle = new Animation
    layer: button
    properties:
        width: button.height
        borderRadius: button.height / 2
        x: buttonOriginX + 175
        shadowY: 0
        shadowBlur: 0
  showTextLabel = new Animation
    layer: textLabel
    properties:
        opacity: 1

  # Create loading circle
loadCircle = new Layer
    width: 30
    height: 30
    borderRadius: "50%"
    backgroundColor: "white"
    opacity: 0
    superLayer: hiddenLayer
showLoad = new Animation
    layer: loadCircle
    properties:
        opacity: 1
    time: .1
spinLoad = new Animation
    layer: hiddenLayer
    properties:
        rotation: 360
    time: 1.2
hideLoad = new Animation
    layer: loadCircle
    properties:
        opacity: 0
    time: .1
  toRectangle = new Animation
    layer: button
    properties:
        width: 250
        x: buttonOriginX + 125
        borderRadius: 0

spinLoad.on Events.AnimationEnd, ->
    # update properties
    button.backgroundColor = "#1ECD97"
    textLabel.opacity = 0
    textLabel.html = "✓"
    textLabel.style.letterSpacing = "0px"
    textLabel.style.color = "white"
    textLabel.style.fontSize = "80px"
    textLabel.style.textAlign = "center"
    textLabel.y = -100
    hideLoad.start()
    toRectangle.start()
    showTextLabel.start()
    moveTextLabel.start()
  moveTextLabel = new Animation
    layer: textLabel
    properties:
        y: 0
    delay: .1
    curve: "spring(300,10,0)"
  # Animate on click
button.once Events.Click, ->
    hideTextLabel.start()
    toCircle.start()
# Chain animations
toCircle.on Events.AnimationEnd, ->
    showTextLabel.start()
    showLoad.start()
showLoad.on Events.AnimationEnd, ->
    spinLoad.start()
button.on "change:width", ->
    textLabel.width = button.width
hiddenLayer.on "change:rotation", ->
    percentage = Utils.modulate hiddenLayer.rotation, [0,360], [0, 100]
    textLabel.html = Utils.round percentage, 0
