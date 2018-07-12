(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #00BFFF;\r\n    display:block;\r\n    padding: 0.5%;\r\n    text-align: center;\r\n    color: white;\r\n    margin-top:1%;\r\n    \r\n}\r\n\r\n.myimage img{\r\n    margin-top: 4%;\r\n    margin-left: 20%;\r\n    width: 8vw;\r\n    height: 10vh;\r\n}\r\n\r\np{\r\n    margin-left: 25%;\r\n}\r\n\r\n.container{\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <h2>ICE AND FIRE</h2>\n      </div>\n  </div>\n  <div class=\"row\">\n    \n    <div class=\"myimage col-md-4 col-sm-4 col-xs-12\">\n        <img src=\"assets/images/characters.jpg\">\n        <p>Characters</p>\n    </div>\n    <div class=\"myimage col-md-4 col-sm-4 col-xs-4\">\n        <img src=\"assets/images/house.jpg\">\n        <p>Houses</p>\n    </div>\n    <div class=\"myimage col-md-4 col-sm-4 col-xs-4\">\n        <img src=\"assets/images/books.jpg\">\n         <p>Books</p>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-sm-12\">\n        <a [routerLink]=\"['/home']\">View ALL</a>    \n   </div>\n \n</div>\n\n<br/>\n<br/>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewdata.service */ "./src/app/viewdata.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//router module






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                //router module for root method to declare possible routes in the application
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
                    { path: 'view/:url', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] }
                ])
            ],
            //can be accessed across  the application if we write in providers
            providers: [_viewdata_service__WEBPACK_IMPORTED_MODULE_6__["ViewdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-left:7%;\r\n    margin-bottom: 1%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\" *ngIf = 'sortedData'>\n    <div *ngFor=\"let data of sortedData\" class=\"col-md-4 col-sm-6\">\n      <div *ngIf=\"data.url.substring(0,39)==='https://anapioficeandfire.com/api/books'\" class=\"card border-danger\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Book-{{data.name}}</h5>\n          <p class=\"card-text\">Published By: {{data.publisher}}</p>\n          <a [routerLink]=\"['/view',data.url]\" class=\"btn btn-primary\">View Details</a>\n        </div>\n      </div>\n    \n      <div *ngIf=\"data.url.substring(0,44)==='https://anapioficeandfire.com/api/characters'\" class=\"card border-primary\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Character-{{data.name}}</h5>\n          <p class=\"card-text\">Gender: {{data.gender}}</p>\n          <a [routerLink]=\"['/view',data.url]\" class=\"btn btn-primary\">View Details</a>\n        </div>\n    </div>\n    <div *ngIf=\"data.url.substring(0,40)==='https://anapioficeandfire.com/api/houses'\" class=\"card border-success\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{data.name}}</h5>\n          <p class=\"card-text\">Region: {{data.region}}</p>\n          <a [routerLink]=\"['/view',data.url]\" class=\"btn btn-primary\">View Details</a>\n        </div>\n    </div>\n  </div>\n </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//decorator
var HomeComponent = /** @class */ (function () {
    function HomeComponent(viewdataService) {
        this.viewdataService = viewdataService;
        console.log("service Constructor called in Home");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Init implemented in Home");
        this.viewdataService.getAllData().subscribe(function (data) {
            _this.allData = data;
            _this.finalData = _this.allData[0].concat(_this.allData[1], _this.allData[2]);
            _this.reverse = underscore__WEBPACK_IMPORTED_MODULE_2__["sortBy"](_this.finalData, 'name');
            _this.sortedData = _this.reverse.reverse();
            // console.log(this.subst);
            console.log(_this.sortedData);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("OnDestroy implemented in Home");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_viewdata_service__WEBPACK_IMPORTED_MODULE_1__["ViewdataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.myimage img{\r\n   \r\n    width: 20vw;\r\n    height: 18vh;\r\n}\r\n\r\n.myimage1 img{\r\n    width: 16vw;\r\n    height: 24vh;\r\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf ='currentView'>\n     <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <div *ngIf=\"currentView.url.substring(0,39)==='https://anapioficeandfire.com/api/books'\">\n            <p><i>Details of the book-</i><strong>{{currentView.name}}</strong></p>\n             <div class=\"row\">\n                <div class=\"myimage col-md-5 col-sm-6 col-xs-6\">\n                    <img src=\"assets/images/book1.jpg\">\n                </div>\n                <div class=\"col-md-7 col-sm-6 col-xs-6\">\n                  <p><strong>Authors :</strong>{{currentView.authors}}</p>\n                  <p><strong>Publisher :</strong>{{currentView.publisher}}</p>\n                  <p><strong>Country :</strong>{{currentView.country}}</p>\n                  <p><strong>Released On: </strong>{{currentView.released  | date}}</p>\n                </div>\n             </div>\n             <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <p><i>Other Details:</i></p>\n                <p><strong>ISBN-</strong>{{currentView.isbn}}</p>\n                <p><strong>Pages:</strong>{{currentView.numberOfPages}}</p>\n                <p><strong>No. of Characters in this book :</strong>{{currentView.characters.length}}</p>\n                <p><strong>No. of PovCharacters in this book :</strong>{{currentView.povCharacters.length}}</p>\n             </div>\n        </div>\n        <div *ngIf=\"currentView.url.substring(0,44)==='https://anapioficeandfire.com/api/characters'\">\n          <p><i>Details of Character:</i>{{currentView.name}}</p>\n           <div class=\"row\">\n              <div class=\"myimage1 col-md-3 col-sm-6 col-xs-6\">\n                  <img src=\"assets/images/character2.jpg\">\n              </div>\n              <div class=\"col-md-9 col-sm-6 col-xs-6\">\n                <p><strong>Gender :</strong>{{currentView.gender}}</p>\n                <p><strong>Culture :</strong>{{currentView.culture}}</p>\n                <p><strong>Aliases :</strong>{{currentView.aliases}}</p>\n              </div>\n           </div>\n           <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <br>\n              <p><i>Other Details:</i></p>\n              <p>This character is present in <strong>{{currentView.books.length}}</strong> book/s</p> \n              <p *ngIf=\"currentView.tvSeries.length!=undefined && currentView.tvSeries.length>0\">\n                  <strong>Series:</strong> <span *ngFor=\"let series of currentView.tvSeries;let first=first;let last=last\">{{series}}{{last ? '' : ','}}</span>\n              </p>\n              <p><strong>PlayedBy:</strong>{{currentView.playedBy}}</p>\n              <p><strong>povBooks-</strong>{{currentView.povBooks.length}}</p>  \n          </div>\n        </div>\n\n        <div *ngIf=\"currentView.url.substring(0,40)==='https://anapioficeandfire.com/api/houses'\">\n          <p><i>Details of the house- </i><strong>{{currentView.name}}</strong></p>\n           <div class=\"row\">\n              <div class=\"myimage1 col-md-3 col-sm-6 col-xs-6\">\n                  <img src=\"assets/images/house1.jpg\">\n              </div>\n              <div class=\"col-md-9 col-sm-6 col-xs-6\">\n                <p><strong>Region :</strong>{{currentView.region}}</p>\n                <p><strong>CoatofArms :</strong>{{currentView.coatOfArms}}</p>\n                <p><strong>Aliases :</strong>{{currentView.aliases}}</p>\n                <p><strong>words:</strong>{{currentView.words}}</p>\n              </div>\n           </div>\n           <div class=\"col-md-12 col-sm-12 col-xs-12\">\n           <br>\n           <p><i>Other Details:</i></p>\n            <p *ngIf=\"currentView.titles.length!=undefined && currentView.titles.length>0\">\n              <strong>Titles :</strong> <span *ngFor=\"let title of currentView.titles;let first=first;let last=last\">{{title}}{{last ? '' : ','}}</span>\n            </p>\n            <p *ngIf=\"currentView.seats.length!=undefined && currentView.seats.length>0\">\n               <strong> Seats : </strong><span *ngFor=\"let seat of currentView.seats;let first=first;let last=last\">{{seat}}{{last ? '' : ','}}</span>\n            </p>\n            <p *ngIf=\"currentView.ancestralWeapons.length!=undefined && currentView.ancestralWeapons.length>0\">\n              <strong>Ancestral Weapons :</strong> <span *ngFor=\"let weapon of currentView.ancestralWeapons;let first=first;let last=last\">{{weapon}}{{last ? '' : ','}}</span>\n            </p>\n            <p><strong>Overlord:</strong>{{currentView.overlord}}</p>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewdata.service */ "./src/app/viewdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing route related code


var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, viewdataService) {
        this._route = _route;
        this.router = router;
        this.viewdataService = viewdataService;
        console.log("Constructor is called");
    }
    ViewComponent.prototype.ngOnDestroy = function () {
        console.log("OnDestroy implemented in View");
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit called");
        //getting the name from the home
        var url = this._route.snapshot.paramMap.get('url');
        console.log(url);
        //this.viewdataservice.getSingleViewInformation(url);
        this.viewdataService.getSingleViewInformation(url).subscribe(function (data) {
            _this.currentView = data;
            console.log(_this.currentView);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _viewdata_service__WEBPACK_IMPORTED_MODULE_2__["ViewdataService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/viewdata.service.ts":
/*!*************************************!*\
  !*** ./src/app/viewdata.service.ts ***!
  \*************************************/
/*! exports provided: ViewdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdataService", function() { return ViewdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing http client to make the requests


var ViewdataService = /** @class */ (function () {
    function ViewdataService(_http) {
        this._http = _http;
        this.books = 'https://anapioficeandfire.com/api/books';
        this.houses = 'https://anapioficeandfire.com/api/houses';
        this.characters = 'https://anapioficeandfire.com/api/characters';
        console.log("service constructor is called");
    }
    //ExceptionHandler
    ViewdataService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    ViewdataService.prototype.getBooks = function () {
        var books = this._http.get(this.books);
        console.log(books);
        return books;
    };
    ViewdataService.prototype.getHouses = function () {
        var houses = this._http.get(this.houses);
        return houses;
    };
    ViewdataService.prototype.getCharacters = function () {
        var characters = this._http.get(this.characters);
        return characters;
    };
    ViewdataService.prototype.getAllData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this._http.get(this.books), this._http.get(this.characters), this._http.get(this.houses));
    };
    //method to get details of single card
    ViewdataService.prototype.getSingleViewInformation = function (url) {
        var details = this._http.get(url);
        console.log(details + "Details");
        return details;
    };
    ViewdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ViewdataService);
    return ViewdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user1\api-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map