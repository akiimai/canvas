export default function sketch(p) {
    const paths = [];
    let currentPath = [];

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        const colorInput = props.color;
        const weight = props.weight;
        const clear = document.getElementById('clear');

        p.createCanvas(props.width, props.height);
        p.background(255);

        p.setup = () => {
            p.createCanvas(props.width, props.height);
            p.background(255);
        }

        p.draw = () => {
            p.noFill();
            if (p.mouseIsPressed) {
                const point = {
                    x: p.mouseX,
                    y: p.mouseY,
                    color: colorInput,
                    weight: weight
                };
                currentPath.push(point);
            }

            paths.forEach(path => {
                p.beginShape();
                path.forEach(point => {
                    p.stroke(point.color);
                    p.strokeWeight(point.weight);
                    p.vertex(point.x, point.y);
                });
                p.endShape();
            });
        }

        p.mousePressed = function () {
            currentPath = [];
            paths.push(currentPath);
        }

        clear.addEventListener('click', () => {
            paths.splice(0);
            p.background(255);
        });

    };
}
