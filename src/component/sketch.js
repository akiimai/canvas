export default function sketch(p) {
    const paths = [];
    let currentPath = [];

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        p.createCanvas(props.width, props.height);
        p.background(255);

        p.setup = () => {
            p.createCanvas(props.width, props.height);
            p.background(255);
        }

        const colorInput = props.color;
        const weight = props.weight;
        const clear = document.getElementById('clear');

        p.draw = () => {
            p.noFill();
            if (p.mouseIsPressed) {
                if (props.chuMove === false) {
                    const point = {
                        x: p.mouseX,
                        y: p.mouseY,
                        color: colorInput,
                        weight: weight
                    };
                    currentPath.push(point);
                } else if (props.chuMove === true) {
                    const point = {
                        x: p.mouseX,
                        y: p.mouseY,
                        color: "#FFF",
                        weight: 0
                    };
                    currentPath.push(point);
                }
            };

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
};
