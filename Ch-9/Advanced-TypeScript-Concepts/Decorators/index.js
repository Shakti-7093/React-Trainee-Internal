var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function logClass(target) {
    var original = target;
    function constructor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Instantiating ".concat(original.name, " with arguments: ").concat(JSON.stringify(args)));
        var instance = new (original.bind.apply(original, __spreadArray([void 0], args, false)))();
        return instance;
    }
    constructor.prototype = original.prototype;
    return constructor;
}
// @logClass
var NameClass = /** @class */ (function () {
    function NameClass(name) {
        this.name = name;
        console.log("ExampleClass instantiated with name: ".concat(name));
    }
    return NameClass;
}());
var exampleInstance = new NameClass("Sample");
