webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".car-img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n    height: 100%;\n}\n\n.color-btn-holder{\n    text-align:center;\n    width:60%;\n    height:auto;\n    margin:auto;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack : center;\n        -ms-flex-pack : center;\n            justify-content : center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center\n}\n\n.color-btn{\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    margin: 1%;\n    outline: none;\n}\n\n.color-btn-active{\n    outline: none;\n    border-radius: 50%;\n    height: 35px;\n    width: 35px;\n    margin: 1%;\n}\n\n.rating-progress > p{\n    margin: 1% 0%;\n}\n\n.progress-bar{\n    background-color: lightgoldenrodyellow;\n    width: 90%;\n    height: 15px;\n    border-radius: 10px;\n}\n\n@-webkit-keyframes progressing-bar{\n    from {width: 0%;}\n}\n\n@keyframes progressing-bar{\n    from {width: 0%;}\n}\n\n.progress-bar > div {\n    background-color: orange;\n    height: 100%;\n    border-radius: 10px;\n    /* animation-name: progressing-bar; */\n    /* animation-duration: 3s; */\n}\n\n.gauge{\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    border: 20px solid orange;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border-bottom: 20px solid transparent;\n    border-right: 20px solid transparent;\n    display: inline-block;\n}\n\n@-webkit-keyframes meter-needle{\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\n}\n\n@keyframes meter-needle{\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg) }\n}\n\n.needle {\n    width: 120px;\n    /* height: 50%; */\n    -o-object-fit: fill;\n       object-fit: fill;\n    /* background-color: black; */\n    position: absolute;\n    /* -webkit-transform: rotate(0deg); */\n    /* transform: rotate(90deg); */\n    display: inline-block;\n    top: 104px;\n    left: 0px;\n    /* -webkit-transform-origin: bottom; */\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n    /* animation-name: meter-needle; */\n    /* animation-duration: 3s; */\n}\n\n.cars-showcase{\n    width: 100px;\n    height:auto;\n    padding: 1% 0% 0% 0%;\n    margin: 1%;\n    border: 1px solid gainsboro;\n    border-radius: 2%;\n}\n\n.cars-showcase-active{\n    border: 5px solid gray;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"display:flex\">\n  \n    <!-- Styles Section -->\n    <div style=\"width:50%;height:60vh;margin:0%;\">\n      <h2>Styles</h2>\n  \n      <div style=\"text-align:center;width:90%;height:60%;margin:auto;\">\n        <img [src]=\"selectedCar.styles[selectedCarColorIndex].carColorImg\" alt=\"\" class=\"car-img\">\n      </div>\n      <div class=\"color-btn-holder\">\n        <button *ngFor=\"let style of selectedCar.styles;let i = index\" [style.background-color]=\"style.color\" (click)=\"carColorChange(i)\"\n          class=\"color-btn\" [class.color-btn-active]=\"selectedCarColorIndex===i\"></button>\n      </div>\n      <div style=\"width:90%;text-align:center;margin:auto;\">\n        <p style=\"text-align:center\">{{selectedCar.styles[selectedCarColorIndex].colorName}}</p>\n      </div>\n      <div style=\"width:90%;text-align:center;margin:auto;\">\n        <p style=\"text-align:center;color:gray;\">\n          Vehicle images are guides only and may not refect exact specification of the car model.\n        </p>\n      </div>\n    </div>\n  \n    <!-- Rating Section -->\n    <div style=\"width:50%;height:60vh;margin:0%;\">\n      <h2>Ratings</h2>\n      <div style=\"display:flex;width:100%;height:60%;\">\n        <div style=\"width:60%;height:100%;\" class=\"rating-progress\">\n          <p>Critic's Rating</p>\n          <div class=\"progress-bar\">\n            <div [@slideInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_width : selectedCar.rating['critic'] + '%' }}\"  [style.width]=\"selectedCar.rating['performance'] + '%'\"></div>\n            <!-- <span>{{selectedCar.rating['critic']}}</span> -->\n          </div>\n  \n  \n          <p>Performance</p>\n          <div class=\"progress-bar\">\n            <div  [@slideInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_width : selectedCar.rating['performance'] + '%' }}\"></div>\n          </div>\n          <!-- <p style=\"display:inline-block\">{{selectedCar.rating['performance']}}</p> -->\n  \n          <p>Interior</p>\n          <div class=\"progress-bar\">\n            <div  [@slideInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_width : selectedCar.rating['interior'] + '%' }}\" ></div>\n          </div>\n          <!-- <p style=\"display:inline-block\">{{selectedCar.rating['interior']}}</p> -->\n  \n          <p>Safety</p>\n          <div class=\"progress-bar\">\n            <div  [@slideInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_width : selectedCar.rating['safety'] + '%' }}\"></div>\n          </div>\n          <!-- <p style=\"display:inline-block\">{{selectedCar.rating['safety']}}</p> -->\n  \n          <p>Reliability</p>\n          <div class=\"progress-bar\">\n            <div  [@slideInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_width : selectedCar.rating['reliability'] + '%' }}\"></div>\n          </div>\n          <!-- <p style=\"display:inline-block\">{{selectedCar.rating['reliability']}}</p> -->\n  \n        </div>\n        <div style=\"width:40%;height:100%;margin:auto;position:relative;\">\n          <div class=\"gauge\">\n          </div>\n          <img src=\"../assets/icon-meter.png\" class=\"needle\"  [@needleInProgress]=\"{value : isAnimate ? 'close' : 'open', params : { progress_angle : selectedCar.rating['overall']*1.8}}\">\n          <!-- [style.transform]=\"'rotate(' + selectedCar.rating['overall']*1.8 + 'deg)'\" -->\n            \n          <div style=\"    width: 250px;position: absolute;top: 60%;\">\n              <div style=\"text-align:center;font-size: 46px;\">\n                  {{selectedCar.rating['overall']}}\n              </div>\n      \n              <div style=\"text-align:center\">\n                  Overall Rating\n              </div>\n          </div>\n          \n        </div>\n       \n      </div>\n  \n      <div style=\"display:flex;width:100%;justify-content:center;\">\n        <div class=\"cars-showcase\" *ngFor=\"let car of data;let i = index\"  [class.cars-showcase-active]=\"selectedCarIndex===i\" (click)=\"selectCar(i)\">\n            <img [src]=\"car.styles[0]?.carColorImg\" alt=\"\" style=\"width:100%;object-fit:contain;\">\n            <div style=\"background-color:deepskyblue;width:100%;\">\n              <p style=\"text-align:center;margin:0%;\">{{car.name}}</p>\n            </div>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.selectedCar = null;
        this.selectedCarIndex = -1;
        this.selectedCarColorIndex = -1;
        this.isAnimate = false;
        this.data = [
            {
                styles: [
                    {
                        color: 'blue',
                        carColorImg: '../assets/blue.jpg',
                        colorName: 'Blue Teal'
                    },
                    {
                        color: 'grey',
                        carColorImg: '../assets/grey.jpg',
                        colorName: 'Grey Hound'
                    },
                    {
                        color: 'red',
                        carColorImg: '../assets/red.jpg',
                        colorName: 'Red Velvet'
                    },
                    {
                        color: 'silver',
                        carColorImg: '../assets/silver.jpg',
                        colorName: 'Silver Metallica'
                    }
                ],
                rating: {
                    critic: 87,
                    performance: 97,
                    interior: 88,
                    safety: 90,
                    reliability: 92,
                    overall: 100
                },
                name: "Swift"
            },
            {
                styles: [
                    {
                        color: 'grey',
                        carColorImg: '../assets/grey.jpg',
                        colorName: 'Grey Hound'
                    },
                    {
                        color: 'blue',
                        carColorImg: '../assets/blue.jpg',
                        colorName: 'Blue Teal'
                    },
                    {
                        color: 'red',
                        carColorImg: '../assets/red.jpg',
                        colorName: 'Red Velvet'
                    },
                    {
                        color: 'silver',
                        carColorImg: '../assets/silver.jpg',
                        colorName: 'Silver Metallica'
                    }
                ],
                rating: {
                    critic: 87,
                    performance: 97,
                    interior: 88,
                    safety: 90,
                    reliability: 92,
                    overall: 80
                },
                name: "Swift XS"
            },
            {
                styles: [
                    {
                        color: 'red',
                        carColorImg: '../assets/red.jpg',
                        colorName: 'Red Velvet'
                    },
                    {
                        color: 'silver',
                        carColorImg: '../assets/silver.jpg',
                        colorName: 'Silver Metallica'
                    }
                ],
                rating: {
                    critic: 50,
                    performance: 97,
                    interior: 96,
                    safety: 80,
                    reliability: 85,
                    overall: 90
                },
                name: "Swift L"
            },
            {
                styles: [
                    {
                        color: 'blue',
                        carColorImg: '../assets/blue.jpg',
                        colorName: 'Blue Teal'
                    },
                    {
                        color: 'grey',
                        carColorImg: '../assets/grey.jpg',
                        colorName: 'Grey Hound'
                    },
                    {
                        color: 'red',
                        carColorImg: '../assets/red.jpg',
                        colorName: 'Red Velvet'
                    },
                ],
                rating: {
                    critic: 95,
                    performance: 97,
                    interior: 88,
                    safety: 90,
                    reliability: 92,
                    overall: 90
                },
                name: "Swift VXI"
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.data.length > 0) {
            this.selectedCar = this.data[0];
            this.selectedCarIndex = 0;
            this.selectedCarColorIndex = 0;
            // this.isAnimate = !this.isAnimate;
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.isAnimate = true;
    };
    AppComponent.prototype.carColorChange = function (index) {
        this.selectedCarColorIndex = index;
    };
    AppComponent.prototype.selectCar = function (index) {
        var _this = this;
        console.log(index);
        this.isAnimate = false;
        // this.isAnimate = false;
        this.selectedCar = this.data[index];
        this.selectedCarIndex = index;
        this.selectedCarColorIndex = 0;
        console.log(this.data[index]);
        setInterval(function () {
            _this.isAnimate = true;
        }, 1);
        // this.isAnimate = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideInProgress', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        width: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        width: '{{progress_width}}',
                    }), { params: { progress_width: 0 } }),
                    // transition('* => *',animate(3000)),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => close', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1500)]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('close => open', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(0)])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('needleInProgress', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'rotate(0deg)'
                        // backgroundColor : 'red'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'rotate({{progress_angle}}deg)',
                    }), { params: { progress_angle: 0 } }),
                    // transition('* => *',animate(3000)),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('open => close', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1500)]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('close => open', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(0)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map