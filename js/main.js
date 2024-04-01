//document.body.innerHTML = "This is some content";

var lineBar = new ProgressBar.Line("#line-container", {
    strokeWidth: 3,
    trailWidth: 0.5,
    from: { color: "#FF9900" },
    to: { color: "#00FF99" },
    text: {
        value: '0',
        className: 'progress-text',
        style: {
            color: 'black',
            position: 'absolute',
            top: '-30px',
            padding: 0,
            margin: 0,
            transform: null
        }
    },
    step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.setText(Math.round(shape.value() * 100) + ' %');
    }
});

lineBar.animate(0.84, {
    duration: 4000
});

var circleBar = new ProgressBar.Circle("#circle-container", {

    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 5,
    easing: 'bounce',
    strokeWidth: 2,
    from: { color: '#FFEA82', a: 1, width: 1 },
    to: { color: '#ED6A5A', a: 10, width: 5 },
    text: {
        value: '0',
        className: 'progress-text',
        style: {
            color: 'black',
            position: 'absolute',
            top: '45%',
            left: '42%',
            padding: 0,
            margin: 0,
            transform: null
        }
    },
    step: (state, shape) => {
        shape.path.setAttribute("stroke", state.color);
        shape.path.setAttribute("stroke-width", state.width);
        shape.setText(Math.round(shape.value() * 100) + ' %');
    }
});

circleBar.animate(0.75, {
    duration: 3000
});

var svgBar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
});

svgBar.set(0);
svgBar.animate(1.0); // Number from 0.0 to 1.0