"use strict";
export default class Figure{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
}