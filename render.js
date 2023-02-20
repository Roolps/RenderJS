// Styling to render (Pure CSS syntax)
const styling = Object.freeze({
    "initial": {
        "h1": {
            "font-size": "20px",
            "font-weight": "700",
            "color": "red"
        },
        ".test-btn": {
            "font-size": "10px",
            "display": "block",
            "background-color": "orange",
            "width": "50px",
            "height": "30px"
        }
    },
    "animations": {
        ".animation": {
            "background-color": "red"
        }
    },
    "listeners": {
        ".test-btn": {
            "mouseenter": { "animations": [".animation"] },
            "mouseleave": { "initial": [".test-btn"] },
            "click": { "animations": [".animation"] }
        }
    }
});

initial();

// Initial style and listener render
function initial() {
    Object.keys(styling["initial"]).forEach(key => { style("initial")(key) });
}

// Renders style..
function style(type) { return key => { Object.keys(styling[type][key]).forEach(node => { document.querySelectorAll(key).forEach(elem => { elem.style[node] = styling[type][key][node] }) }) } };

// Set listeners
Object.keys(styling["listeners"]).forEach(key => { Object.keys(styling["listeners"][key]).forEach(listen => { document.querySelectorAll(key).forEach(elem => { Object.keys(styling["listeners"][key][listen]).forEach(type => { styling["listeners"][key][listen][type].forEach(group => elem.addEventListener(listen, () => style(type)(group))) }) }) }) });
