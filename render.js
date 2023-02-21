// Styling to render (Pure CSS syntax)
const styling = Object.freeze({
    "initial": {
        "body": {
            "font-family": "arial"
        },
        "p": {
            "font-size": "12px"
        },
        ".btn": {
            "padding": "10px 20px",
            "margin-right": "10px",
            "font-size": "15px",
            "font-weight": "600",
            "border": "4px #8a3063 solid",
            "color": "#8a3063",
            "cursor": "pointer",
            "background-color": "transparent",
            "border-radius": "5px"
        },
        ".btn-1": {
            "color": "#8a3063",
            "background-color": "transparent"
        },
        ".row-flex": {
            "display": "flex",
            "flex-direction": "row",
            "align-items": "center",
            "margin-bottom": "10px",
            "width": "400px"
        },
        ".block": {
            "width": "30px",
            "height": "30px",
            "background-color": "pink",
            "margin": "0 0 0 auto"
        },
        ".block-1": {
            "background-color": "pink"
        }
    },
    "transitions": {
        ".btn": [
            "background-color .5s",
            "color .5s"
        ],
        ".block": [
            "background-color .5s"
        ]
    },
    "animations": {
        ".btn-1": {
            "background-color": "#8a3063",
            "color": "#fff"
        },
        ".block-1": {
            "background-color": "#8a3063"
        },
        ".block-2": {
            "background-color": "#8a3063"
        }
    },
    "listeners": {
        ".btn-1": {
            "mouseenter": { "animations": [".btn-1"] },
            "mouseleave": { "initial": [".btn"] }
        },
        ".btn-2": {
            "mouseenter": { "animations": [".block-1"] },
            "mouseleave": { "initial": [".block-1"] }
        },
        ".btn-3": {
            "mouseenter": { "animations": [".block-2"] }
        }
    }
});

initial();

// Initial style and listener render
function initial() { Object.keys(styling["initial"]).forEach(key => { style("initial")(key) }) }

// Renders style..
function style(type) { return key => { Object.keys(styling[type][key]).forEach(node => { document.querySelectorAll(key).forEach(elem => { elem.style[node] = styling[type][key][node] }) }) } };

// Set listeners
Object.keys(styling["listeners"]).forEach(key => { Object.keys(styling["listeners"][key]).forEach(listen => { document.querySelectorAll(key).forEach(elem => { Object.keys(styling["listeners"][key][listen]).forEach(type => { styling["listeners"][key][listen][type].forEach(group => elem.addEventListener(listen, () => style(type)(group))) }) }) }) });
