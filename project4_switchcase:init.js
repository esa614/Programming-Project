{\rtf1\ansi\ansicpg1252\cocoartf1187\cocoasubrtf400
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red38\green38\blue38;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
function look() \{\
 var desc = ""\
 switch(currLoc) \{\
  case 1: desc = "1. You are standing in a dark cave and you see many torches dimly lit. You hear slithering, you do not like  this. \\n";\
		break;\
  case 2: desc = "2. \\n You enter the cave to the north. You instantly feel a rush of cold air but upon investigation you realize it is just an empty room. \\n";\
		break;\
  case 3: desc = "3. \\n You follow snakes through a small corridor and find yourself in a dead-end.\\n";\
		\cf2 \expnd0\expndtw0\kerning0
break;\
  \cf2 \expnd0\expndtw0\kerning0
case 4: desc = "4. \\n You pull a lever on the wall and a rock formation unveils a room south of where you started. There is a giant boulder ahead of you. \\n";\
		\cf2 \expnd0\expndtw0\kerning0
break;\
  \cf2 \expnd0\expndtw0\kerning0
// case 4: desc = "text1";\
		// break;\
  // case 5: desc = "text2";\
		\cf2 \expnd0\expndtw0\kerning0
// break;\
  \cf2 \expnd0\expndtw0\kerning0
default: desc = "You cannot go that way!"\
  \}\
  playerScoreBox();\
  desc = desc+ "\\n"\
  dispMsg(desc);\
 \}\
 \
 function navigationError() \{\
   dispMsg("You cannot go that way!")\
\}\
 </script>\
</head>\
<body onload="init();">\
  <p style="font-size: 50px; color:Red"> <strong> Hidden Cave </strong> </p>\
\
	<img src="http://i.imgur.com/UMKFGWv.png?1" />\
\
	<br> Score:<input type = "text"\
		id = "txtScore"\
		name="txtScore"> </br>\
\
 <p> <textarea rows="10" cols="50" id="txtAnswer">  </textarea> </p>\
\
 <!-- DO NOT HARDCODE TEXT! <body onload="some function";> -->\
\
<p>  <input type="button"\
		value="North"\
		onclick="btnNorth_click();" />\
\
	<input type="button"\
		value="East"\
		onclick="btnEast_click();" />\
\
	<input type="button"\
		value="South"\
		onclick="btnSouth_click();" />\
\
	<input type="button"\
		value="West"\
		onclick="btnWest_click();" /> </p>\
\
	<input type = "text"\
		id = "txtCommand"\
		name="txtCommand">\
\
<p> Problem? Click <a href="mailto:eric.anderson4@marist.edu"> Here </a> </p>\
\
<p> Need to validate? Click <a href="http://validator.w3.org/#validate_by_input"> Here </a> </p>\
\
</body>\
</html>\
		}