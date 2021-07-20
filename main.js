"use strict";

function calc(main)
{
    const km = 1;
    for (let i = km; i <= 190; i++) {
        main.innerText += `${i}km/h: ${Math.round(i * 0.62 * 100) / 100}mph\n`;
    }
}

function draw()
{
    document.write("<div id=\"main\"></div>");
    const main = document.getElementById("main");
    calc(main);
}

window.onload = function()
{
    draw();
}
