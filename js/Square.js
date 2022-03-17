"use strict";

import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle{
    constructor(size){
        super(size,size);
        this._size = size;
    }
}