# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "é»‘æ¿æŠ¥"
	twitter: ""
	description: ""


#èƒŒæ™¯
bg= new Layer
	width: 750
	height: 1334
	image: "money.png"
#æ˜¨æ—¥æ”¶ç›Š
receipts= new Layer
   html: 0
   x: 110
   y: 230
   width:500
   height: 130
   backgroundColor: "transparent"
   style:
       fontSize:"140px"
       fontWeight:"300"
       textAlign:"center"
       lineHeight:"130px"
#æ€»é‡‘é¢
jine= new Layer
   html: 9999
   x: 80
   y: 410
   width:200
   height: 90
   backgroundColor: "transparent"
   style:
       fontSize:"40px"
       fontWeight:"300"
       textAlign:"center"
       lineHeight:"130px"
#nianhua
#æ€»é‡‘é¢
nian= new Layer
   html: 100
   x: 450
   y: 410
   width:200
   height: 90
   backgroundColor: "transparent"
   style:
       fontSize:"40px"
       fontWeight:"300"
       textAlign:"center"
       lineHeight:"130px"

#å®šä¹‰å˜é‡èµ·å§‹å€¼å’Œæœ€ç»ˆå€¼
receiptsStart = 0
receiptsMax = 100
#è®©æ˜¨æ—¥æ”¶ç›ŠåŠ¨èµ·æ¥
#moneyCount = ( ) ->
#	if receiptsStart < receiptsMax
#		Utils.delay receiptsStart * 0.1,->
#			showNumber = Utils.round(receiptsStart,2)
#			receipts.html = showNumber.toFixed(2)
#			receiptsStart = receiptsStart+receiptsMax/1289
#			moneyCount( )
#bg.onTap (event,layer) ->
#	moneyCount()
#åŒæ—¶å®šä¹‰ä¸¤ä¸ª
start = [0,9999,100]
maxium = [86941,9999999,999954]
#ä¸¤ä¸ªåŒæ—¶åŠ¨
moneyCount = (i,counLayer) ->
	if start[i] < maxium[i]
		Utils.delay start[i]*0.000001,->
			showNumber = Utils.round(start[i],2)
			counLayer.html = showNumber.toFixed(2)
			start[i] = start[i]+maxium[i]/1283
			moneyCount(i,counLayer)

bg.onTap (event,layer) ->
	moneyCount(0,receipts)
	moneyCount(1,jine)
	moneyCount(2,nian)
Framer.Info =
	author: "guoyiwen"
	title:"fajiazhifu"
	description:"fajiazhifushenqi"
