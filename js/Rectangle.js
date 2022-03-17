"use strict";

import Figure from "./Figure.js";

export default class Rectangle extends Figure{
    constructor(width,height){
        super("Rectangle");
        this._width = width;
        this._height = height;
    }
    get surfaceSize(){
        return this._width * this._height;
    }
    get circumference(){
        return  (parseInt(this._width) + parseInt(this._height)) * 2;
    }
    get htmlString()
    {
        return `<div class="result">
        <div class="figure rectangle" style="width: ${this._width}px; height: ${this.height}px;"></div>
        <div class="infoBox">
          <h3>${this.name}</h3>
          <dl>
            <dt>Height</dt>
            <dd>${this._height} px</dd>
      
            <dt>Width</dt>
            <dd>${this._width} px</dd>
      
            <dt>Area</dt>
            <dd>${this.surfaceSize} px</dd>
      
            <dt>Circumference</dt>
            <dd>${this.circumference} px</dd>
          </dl>
        </div>
      </div>`;
    }
}