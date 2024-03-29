"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SwitchDemoComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var common_2 = require("@angular/common");
var SwitchDemoComponent = /** @class */ (function () {
    function SwitchDemoComponent() {
        this.day = new Date().getDay();
    }
    SwitchDemoComponent.prototype.ngOnInit = function () {
    };
    SwitchDemoComponent = __decorate([
        core_1.Component({
            selector: 'app-switch-demo',
            standalone: true,
            imports: [common_2.NgSwitch, common_1.CommonModule],
            templateUrl: './switch-demo.component.html',
            styleUrls: ['./switch-demo.component.css']
        })
    ], SwitchDemoComponent);
    return SwitchDemoComponent;
}());
exports.SwitchDemoComponent = SwitchDemoComponent;
