"use strict";
import Figure from './Figure.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';

const form = {
    changeSelect(e) {
        if(e === "circle"){
            form.inputElementsWithLabel("RADIUS", "radius");
        }else if(e === "rectangle"){
            form.inputElementsWithLabel("WIDTH", "width");
            form.inputElementsWithLabel("HEIGHT", "height");
        }else if(e === "square"){
            form.inputElementsWithLabel("WIDTH", "width");
        }else{
            console.log("nothing selected");
        }
    },
    init() {
        //console.log('Form init!');
        document.getElementById("select").addEventListener("change", function(event){ //enters when enter is pressed in the input field
            document.getElementById("otherInputs").innerHTML = "";
            form.changeSelect(document.getElementById("select").value);
        });
        document.getElementById("form").addEventListener("submit", function(event){
            event.preventDefault();
            form.submitForm(document.getElementById("select").value);
        });
    },
    inputElementsWithLabel(label, id) {
        document.getElementById("otherInputs").innerHTML += `<label>
        ${label}
        <input id="${id}" type="number">
      </label>`;
    },
    submitForm(e) {
        if(e === "circle"){
            const circle = new Circle(document.getElementById("radius").value);
            document.getElementById("results").innerHTML += circle.htmlString;
        }else if(e === "rectangle"){
            const rectangle = new Rectangle(document.getElementById("width").value, document.getElementById("height").value);
            document.getElementById("results").innerHTML += rectangle.htmlString;
        }else if(e === "square"){
            const square = new Square(document.getElementById("width").value);
            document.getElementById("results").innerHTML += square.htmlString;
        }else{
            console.log("nothing selected");
        }
        //document.getElementById("results").innerHTML += e.htmlstring();
    }
};

form.init();