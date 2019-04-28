function drawLoop(offset)
{
    stroke(255);
	noFill();

	beginShape();

	for (let i = 0; i < TWO_PI; i += 0.1)
	{
        let perlin_x = map(cos(i), -1, 1, 0, currentNoise);
        let perlin_y = map(sin(i), -1, 1, 0, currentNoise);

		let perlin_rad = map(noise(perlin_x + 10 * offset, perlin_y + 10 * offset), 0, 1, 100, 200);

		let x = perlin_rad * cos(i);
		let y = perlin_rad * sin(i);

		vertex(x, y);
	}

	endShape(CLOSE);
}