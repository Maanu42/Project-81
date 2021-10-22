canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "silver";
ctx.lineWidth= 3;
ctx.rect(0,143,700,400)
ctx.stroke();
//Blue
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=5;
ctx.arc(150,300,100,0,360);
ctx.stroke();

//yellow
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth=5;
ctx.arc(250,400,100,0,360)
ctx.stroke();
//black
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=5;
ctx.arc(350,300,100,0,360)
ctx.stroke();
//Green
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth=5;
ctx.arc(450,400,100,0,360)
ctx.stroke();

//Red
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth=5;
ctx.arc(550,300,100,0,360)
ctx.stroke();

//trying
ctx.beginPath();
ctx.strokeStyle="pink";
ctx.lineWidth= 5;
ctx.arc(250,200,40,0,2*Math.PI)