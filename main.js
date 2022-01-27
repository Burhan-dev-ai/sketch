random.no = Math.floor((Math.random()*array_1.length)+1)
Element_of_array = array_1[random_no]

console.log("random_number");

sketch_variable("random_number");


sketch_to_be_drawn(sketch_variable);

time_counter="0";
timer_check="";
drawn_sketch="";
answer_holder="";
score="0";

function draw() 
{

}

function check_draw()
{

}

function updateCanvas()
{
background_color("white")

}





function setup() 
{
canvas = createCanvas(280, 280);
canvas.center();
background("white");
} 

function preload()
{
classifier(ml5.imageClassifier);
}