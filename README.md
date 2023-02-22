# RenderJS
Easily render static CSS using a JSON object

A very simple JS script used to inject CSS into a page. Could be used as browser extension if you wanted to add custom styling to a webpage.

All of the styling is stored in the styling constant.
----------------------------------------------------
STYLING OBJECT CONFIGURATION<br><br>
INITIAL : Any default state styling is defined inside the 'initial' part which will be rendered on the page load.<br><br>
ANIMATIONS : Any additional styling states you want to be accessed with listeners.<br><br>
LISTENERS : Any listeners you want to be generated. To achieve a :hover you can use "mouseenter" and apply the animation on an element, and then use "mouseleave" and apply the initial.
