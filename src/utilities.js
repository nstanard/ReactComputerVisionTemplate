export function drawRect(detections, canvas) {
    const count = detections.length;

    for (let index = 0; index < count; index++) {
        // get prediction data
        const prediction = detections[index];
        const [x, y, width, height] = prediction.bbox;
        const text = prediction.class;

        // set styling
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        canvas.strokeStyle = color;
        canvas.font = '18px Arial';
        canvas.fillStyle = color;

        // draw rectangle
        canvas.beginPath();
        canvas.fillText(text, x, y);
        canvas.rect(x, y, width, height);
        canvas.stroke();
    }
};
