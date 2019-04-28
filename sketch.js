let currentNoise = 1;
let dt = 0;
let maxLoops = 30;

function setup()
{
	createCanvas(600, 600);

	countSlider = createSlider(1, 50, 30, 1);
	countSlider.position(50, 10);
	noiseSlider = createSlider(0, 5, 2, 0.05);
	noiseSlider.position(50, 40);
	speedSlider = createSlider(0, 1, 0.1, 0.01);
	speedSlider.position(50, 70);
}

function draw()
{
	background(0);

	text('Count', 10, 25);
	text('Noise', 10, 55);
	text('Speed', 10, 85);

	text(countSlider.value(), countSlider.width + 60, 25);
	text(noiseSlider.value(), noiseSlider.width + 60, 55);
	text(speedSlider.value(), speedSlider.width + 60, 85);

	translate(width / 2, height / 2);

	let maxNoise = noiseSlider.value();
	currentNoise = map(sin(dt), -1, 1, 0, maxNoise);

	maxLoops = countSlider.value();
	for (let i = 1; i <= maxLoops; i++)
		drawLoop(i);

	dt += speedSlider.value();
}