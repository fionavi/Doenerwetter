"use strict";
// Quelle: https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L11_Advanced/Asteroids/Vector.ts
//         von Autor Jirka Dell'Oro-Friedl
var DoenerTest;
(function (DoenerTest) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    DoenerTest.Vector = Vector;
})(DoenerTest || (DoenerTest = {}));
//# sourceMappingURL=Vector.js.map