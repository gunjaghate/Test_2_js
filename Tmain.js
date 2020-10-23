var last_pos_x, last_pos_y;
color = "red";
width_line = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70 ;
new_height = screen.height - 300 ; 
if(width<992)
{
    canvas.width = new_width ;
    canvas.height = new_height ;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart" , my_touchstart)

function my_touchstart(e)
{
    console.log("inside" + "my_touchstart()");
    last_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , my_touchmove);

function my_touchmove(e)
{
    console.log("inside my_touchmove");

    current_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.moveTo(last_pos_x , last_pos_y);
    ctx.lineTo(current_pos_x , current_pos_y);
    ctx.stroke();

    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;
}

