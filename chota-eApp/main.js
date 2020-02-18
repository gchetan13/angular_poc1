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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-screens.ts":
/*!********************************!*\
  !*** ./src/app/all-screens.ts ***!
  \********************************/
/*! exports provided: SCREENS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREENS", function() { return SCREENS; });
var SCREENS = [
    { id: "getting-started", name: 'Getting Started' },
    { id: "proposed-insured", name: 'Proposed Insured' },
    { id: "existing-applied", name: 'Existing and Applied for Insurance' },
    { id: "premium", name: 'Premium' }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/screens.component */ "./src/app/screens/screens.component.ts");




var routes = [
    {
        path: 'screens',
        component: _screens_screens_component__WEBPACK_IMPORTED_MODULE_3__["ScreensComponent"]
    },
    {
        path: '',
        redirectTo: '/screens',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-screens></app-screens>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chota-eApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _screens_screens_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/screens.component */ "./src/app/screens/screens.component.ts");
/* harmony import */ var _screens_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/getting-started/getting-started.component */ "./src/app/screens/getting-started/getting-started.component.ts");
/* harmony import */ var _screens_proposed_insured_proposed_insured_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/proposed-insured/proposed-insured.component */ "./src/app/screens/proposed-insured/proposed-insured.component.ts");
/* harmony import */ var _screens_owner_owner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/owner/owner.component */ "./src/app/screens/owner/owner.component.ts");
/* harmony import */ var _screens_existing_applied_existing_applied_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/existing-applied/existing-applied.component */ "./src/app/screens/existing-applied/existing-applied.component.ts");
/* harmony import */ var _screens_premium_premium_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/premium/premium.component */ "./src/app/screens/premium/premium.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./only-number.directive */ "./src/app/only-number.directive.ts");
/* harmony import */ var _services_screen_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/screen-service.service */ "./src/app/services/screen-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _screens_screens_component__WEBPACK_IMPORTED_MODULE_6__["ScreensComponent"],
                _screens_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_7__["GettingStartedComponent"],
                _screens_proposed_insured_proposed_insured_component__WEBPACK_IMPORTED_MODULE_8__["ProposedInsuredComponent"],
                _screens_owner_owner_component__WEBPACK_IMPORTED_MODULE_9__["OwnerComponent"],
                _screens_existing_applied_existing_applied_component__WEBPACK_IMPORTED_MODULE_10__["ExistingAppliedComponent"],
                _screens_premium_premium_component__WEBPACK_IMPORTED_MODULE_11__["PremiumComponent"],
                _only_number_directive__WEBPACK_IMPORTED_MODULE_14__["OnlyNumberDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_12__["TextMaskModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"], _services_screen_service_service__WEBPACK_IMPORTED_MODULE_15__["ScreenServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/only-number.directive.ts":
/*!******************************************!*\
  !*** ./src/app/only-number.directive.ts ***!
  \******************************************/
/*! exports provided: OnlyNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function() { return OnlyNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlyNumberDirective = /** @class */ (function () {
    function OnlyNumberDirective(_el) {
        this._el = _el;
    }
    OnlyNumberDirective.prototype.onInputChange = function (event) {
        var initialValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
        if (initialValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onInputChange", null);
    OnlyNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOnlyNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/screen.ts":
/*!***************************!*\
  !*** ./src/app/screen.ts ***!
  \***************************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
var Screen = /** @class */ (function () {
    function Screen(id, name) {
        this.id = id;
        this.name = name;
    }
    return Screen;
}());



/***/ }),

/***/ "./src/app/screens/all-attributes.ts":
/*!*******************************************!*\
  !*** ./src/app/screens/all-attributes.ts ***!
  \*******************************************/
/*! exports provided: attributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
var attributes = [
    { name: 'Application_CRDA', value: '' },
    { name: 'appcompletedinUS', value: '' },
    { name: 'ownerOtherThanPI', value: '' },
    { name: 'product', value: '' },
    { name: 'niprNum', value: '' },
    { name: 'preAmount', value: '' },
    { name: 'faceAmount', value: '' },
    { name: 'illustrationPDF', value: '' },
    { name: 'premiumMode', value: '' },
    { name: 'lumpsum', value: '' },
    { name: 'singlePremium', value: '' },
    { name: 'prefix', value: '' },
    { name: 'firstName', value: '' },
    { name: 'middleName', value: '' },
    { name: 'lastName', value: '' },
    { name: 'permanentAddress', value: '' },
    { name: 'dateofBirth', value: '' },
    { name: 'ssn', value: '' },
    { name: 'a_InforceNAppliedfor', value: '' },
    { name: 'a_OffPaymtInd_PINS', value: '' },
    { name: 'a_OwnSoldTransLifeInd', value: '' },
    { name: 'premium_payors', value: '' },
    { name: 'paymentMode', value: '' },
];


/***/ }),

/***/ "./src/app/screens/css/all-screens.css":
/*!*********************************************!*\
  !*** ./src/app/screens/css/all-screens.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n    color: #595959; \r\n    font-size: 1.8em;\r\n    FONT-FAMILY: Arial;\r\n    FONT-WEIGHT: bold;\r\n    margin-top: 4px;\r\n    padding: 3px;\r\n    vertical-align: top;\r\n    text-align: left;\r\n  }\r\n  .mandatory{\r\n  color: #D3222A;\r\n  font-size: .9em;\r\n  FONT-WEIGHT: normal;\r\n  FONT-FAMILY: Arial, Verdana, Helvetica;\r\n  }\r\n  :host {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 24px;\r\n  }\r\n  label {\r\n    display: block;\r\n    width: 25em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n    text-align: right;\r\n    margin-bottom: 18px;\r\n  }\r\n  input[type=text] select{\r\n    height: 1em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n    margin-left: 2px;\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    display: inline-block;\r\n  }\r\n  input[type=date]{\r\n    height: 1em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n    margin-left: 22px;\r\n    margin-top: 2px;\r\n    margin-bottom: 17px;\r\n    display: inline-block;\r\n  }\r\n  .pages{\r\n    margin-top: 13px;\r\n    width: 1500%;\r\n    height: 96%;\r\n    /* margin: 10px auto 10px auto; */\r\n    background-color: #e6f7f8;\r\n    opacity: 0.9;\r\n    border-radius: 15px;\r\n    text-align: left;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 4px;\r\n    padding-right: 10px;\r\n  }\r\n  .radioQue{\r\n    display: block;\r\n    width: 25em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    margin-bottom: 18px; \r\n  }\r\n  .alert{\r\n    margin-left: 196px;\r\n    width: 424px;\r\n    margin-top: -19px;\r\n    color: #a94442;\r\n  }\r\n  .previousButton {\r\n    border: 1px solid #aaaeb3;\r\n    margin-left: 213px;\r\n    background: #00465A;\r\n    background: -o-linear-gradient(top, #00465A, #00465A);\r\n    padding: 7px 20px;\r\n    border-radius: .6em;\r\n    box-shadow: rgba(0, 0, 0, 1) 0 0px 0;\r\n    color: white;\r\n    font-size: 16px;\r\n    font-family: Arial;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n  }\r\n  .nextButton {\r\n    border: 1px solid #aaaeb3;\r\n    margin-left: 21px;\r\n    margin-right: -175px;\r\n    background: #00465A;\r\n    background: -o-linear-gradient(top, #00465A, #00465A);\r\n    padding: 7px 20px;\r\n    border-radius: .6em;\r\n    box-shadow: rgba(0, 0, 0, 1) 0 0px 0;\r\n    color: white;\r\n    font-size: 16px;\r\n    font-family: Arial;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n  }\r\n  .errormessages{\r\n    position: absolute;\r\n/*     border: 1px;\r\n    border-top-color: initial;\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    border-right-color: initial;\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-bottom-color: initial;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-left-color: initial;\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-image-source: initial;\r\n    border-image-slice: initial;\r\n    border-image-width: initial;\r\n    border-image-outset: initial;\r\n    border-image-repeat: initial; */\r\n    padding-top: 15px;\r\n    padding-right: 22px;\r\n    padding-bottom: 15px;\r\n    padding-left: 3px;\r\n    margin: 0px;\r\n    left: auto;\r\n    right: 3px;\r\n    top: 55px;\r\n    bottom: 1px;\r\n    color: red;\r\n    height: 404.323px;\r\n    z-index: 0;\r\n    width: 210px;\r\n    visibility: visible;\r\n  }\r\n  .ownerErrorMessages{\r\n    position: relative;\r\n    padding-top: 0px;\r\n    padding-right: 22px;\r\n    padding-bottom: 15px;\r\n    padding-left: 3px;\r\n    margin: 0px;\r\n    left: 766px;\r\n    right: -31px;\r\n    top: -435px;\r\n    bottom: 1px;\r\n    color: red;\r\n    height: 281px;\r\n    z-index: 0;\r\n    width: 210px;\r\n    visibility: visible;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9jc3MvYWxsLXNjcmVlbnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0VBQ0EsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixZQUFZO0lBRVosbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFNbkIscURBQXFEO0lBQ3JELGlCQUFpQjtJQUdqQixtQkFBbUI7SUFHbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFNbkIscURBQXFEO0lBQ3JELGlCQUFpQjtJQUdqQixtQkFBbUI7SUFHbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRSxrQkFBa0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWlCbUM7SUFDL0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2Nzcy9hbGwtc2NyZWVucy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjNTk1OTU5OyBcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBGT05ULUZBTUlMWTogQXJpYWw7XHJcbiAgICBGT05ULVdFSUdIVDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAubWFuZGF0b3J5e1xyXG4gIGNvbG9yOiAjRDMyMjJBO1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBGT05ULVdFSUdIVDogbm9ybWFsO1xyXG4gIEZPTlQtRkFNSUxZOiBBcmlhbCwgVmVyZGFuYSwgSGVsdmV0aWNhO1xyXG4gIH1cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHNlbGVjdHtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPWRhdGVde1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnBhZ2Vze1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgIHdpZHRoOiAxNTAwJTtcclxuICAgIGhlaWdodDogOTYlO1xyXG4gICAgLyogbWFyZ2luOiAxMHB4IGF1dG8gMTBweCBhdXRvOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmODtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLnJhZGlvUXVle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjVlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4OyBcclxuICB9XHJcbiAgLmFsZXJ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5NnB4O1xyXG4gICAgd2lkdGg6IDQyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICB9XHJcbiAgLnByZXZpb3VzQnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFlYjM7XHJcbiAgICBtYXJnaW4tbGVmdDogMjEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NjVBO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMDA0NjVBKSxcclxuICB0bygjMDA0NjVBKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwMDQ2NUEsICMwMDQ2NUEpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMDA0NjVBLCAjMDA0NjVBKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjMDA0NjVBLCAjMDA0NjVBKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMwMDQ2NUEsICMwMDQ2NUEpO1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IC44ZW07XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNmVtO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDEpIDAgMHB4IDA7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMSkgMCAwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMSkgMCAwcHggMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLm5leHRCdXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWViMztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NjVBO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjMDA0NjVBKSxcclxuICB0bygjMDA0NjVBKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwMDQ2NUEsICMwMDQ2NUEpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMDA0NjVBLCAjMDA0NjVBKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjMDA0NjVBLCAjMDA0NjVBKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMwMDQ2NUEsICMwMDQ2NUEpO1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IC44ZW07XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNmVtO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDEpIDAgMHB4IDA7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMSkgMCAwcHggMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMSkgMCAwcHggMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9ybWVzc2FnZXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8qICAgICBib3JkZXI6IDFweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGluaXRpYWw7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaW5pdGlhbDtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGluaXRpYWw7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGluaXRpYWw7XHJcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IGluaXRpYWw7XHJcbiAgICBib3JkZXItaW1hZ2Utd2lkdGg6IGluaXRpYWw7XHJcbiAgICBib3JkZXItaW1hZ2Utb3V0c2V0OiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDogaW5pdGlhbDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogM3B4O1xyXG4gICAgdG9wOiA1NXB4O1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiA0MDQuMzIzcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLm93bmVyRXJyb3JNZXNzYWdlc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbGVmdDogNzY2cHg7XHJcbiAgICByaWdodDogLTMxcHg7XHJcbiAgICB0b3A6IC00MzVweDtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMjgxcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/screens/existing-applied/existing-applied.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/screens/existing-applied/existing-applied.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\">\n    <div class=\"heading\">Existing Applied</div>\n    <div class=\"mandatory\">* Fields marked with an asterisk are required</div>\n  <form [formGroup]=\"existingOrApplied\" #existingOrAppliedForm=\"ngForm\">\n    <div [hidden]=\"existingOrAppliedForm.submitted\">\n        <label class=\"radioQue\">\n            Does the Proposed Insured have any existing or applied for life insurance or annuities with this or any other company?*\n            <br>\n            <input type=\"radio\" name=\"a_InforceNAppliedfor\" formControlName=\"a_InforceNAppliedfor\" value=\"Yes\">Yes\n            <input type=\"radio\" name=\"a_InforceNAppliedfor\" formControlName=\"a_InforceNAppliedfor\" value=\"No\">No\n            <div *ngIf=\"existingOrApplied.controls['a_InforceNAppliedfor'].invalid &&\n            (existingOrApplied.controls['a_InforceNAppliedfor'].dirty || existingOrApplied.controls['a_InforceNAppliedfor'].touched)\"\n              class=\"alert\">\n              <div *ngIf=\"existingOrApplied.controls['a_InforceNAppliedfor'].errors.required\">\n                Answer to Proposed Insured have any existing or applied for life insurance or annuities is required.\n              </div>\n            </div>\n          </label>\n          <label class=\"radioQue\">\n              Has the Proposed Insured been offered any fee,payment,or incentive in connection with the purchase of this insurance policy?*\n              <br>\n              <input type=\"radio\" name=\"a_OffPaymtInd_PINS\" formControlName=\"a_OffPaymtInd_PINS\" value=\"Yes\">Yes\n              <input type=\"radio\" name=\"a_OffPaymtInd_PINS\" formControlName=\"a_OffPaymtInd_PINS\" value=\"No\">No\n              <div *ngIf=\"existingOrApplied.controls['a_OffPaymtInd_PINS'].invalid &&\n              (existingOrApplied.controls['a_OffPaymtInd_PINS'].dirty || existingOrApplied.controls['a_OffPaymtInd_PINS'].touched)\"\n                class=\"alert\">\n                <div *ngIf=\"existingOrApplied.controls['a_OffPaymtInd_PINS'].errors.required\">\n                  Answer to Proposed Insured been offered any fee,payment,or incentive in connection with the purchase of this insurance is required.\n                </div>\n              </div>\n            </label>\n            <label class=\"radioQue\">\n                Have you ever sold or transferred a life insurance policy to a life settlement company, other secondary market provider, or any other person?*\n                <br>\n                <input type=\"radio\" name=\"a_OwnSoldTransLifeInd\" formControlName=\"a_OwnSoldTransLifeInd\" value=\"Yes\">Yes\n                <input type=\"radio\" name=\"a_OwnSoldTransLifeInd\" formControlName=\"a_OwnSoldTransLifeInd\" value=\"No\">No\n                <div *ngIf=\"existingOrApplied.controls['a_OwnSoldTransLifeInd'].invalid &&\n                (existingOrApplied.controls['a_OwnSoldTransLifeInd'].dirty || existingOrApplied.controls['a_OwnSoldTransLifeInd'].touched)\"\n                  class=\"alert\">\n                  <div *ngIf=\"existingOrApplied.controls['a_OwnSoldTransLifeInd'].errors.required\">\n                    Answer to sold or transferred a life insurance policy to a life settlement company, other secondary market provider, or any other person is required.\n                  </div>\n                </div>\n              </label>\n      <!-- <button type=\"submit\">Submit</button> -->\n      <button type=\"button\" class=\"previousButton\" (click)=\"onPrev()\">Previous</button>\n      <button type=\"button\" class=\"nextButton\" (click)=\"onNext()\">Next</button>\n    </div>\n  </form>\n</div>\n<div class=\"errormessages\">\n  <ul>{{existingAppliedErrors.a_InforceNAppliedfor}}</ul>\n  <ul>{{existingAppliedErrors.a_OffPaymtInd_PINS}}</ul>\n  <ul>{{existingAppliedErrors.a_OwnSoldTransLifeInd}}</ul>\n</div>\n<!-- <div *ngIf=\"existingOrAppliedForm.invalid\">invalid form</div>\n<div *ngIf=\"existingOrAppliedForm.submitted\">\n  <p>You have submitted getting started screen with values</p>\n  {{existingOrApplied.value | json}}\n</div> -->"

/***/ }),

/***/ "./src/app/screens/existing-applied/existing-applied.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/existing-applied/existing-applied.component.ts ***!
  \************************************************************************/
/*! exports provided: ExistingAppliedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingAppliedComponent", function() { return ExistingAppliedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screen-service.service */ "./src/app/services/screen-service.service.ts");





var ExistingAppliedComponent = /** @class */ (function () {
    function ExistingAppliedComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prefixes = ["commander", "Doctor", "Mr.", "Ms", "Mrs.", "General"];
        this.validationMessages = {
            "a_InforceNAppliedfor": "Answer to Proposed Insured have any existing or applied for life insurance or annuities is required.",
            "a_OffPaymtInd_PINS": "Answer to Proposed Insured been offered any fee,payment,or incentive in connection with the purchase of this insurance is required.",
            "a_OwnSoldTransLifeInd": "Answer to sold or transferred a life insurance policy to a life settlement company, other secondary market provider, or any other person is required."
        };
        this.existingAppliedErrors = {
            "a_InforceNAppliedfor": "",
            "a_OffPaymtInd_PINS": "",
            "a_OwnSoldTransLifeInd": ""
        };
    }
    ExistingAppliedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.existingOrApplied = this.fb.group({
            a_InforceNAppliedfor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            a_OffPaymtInd_PINS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            a_OwnSoldTransLifeInd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getDetails(this.existingOrApplied);
        var observable = this.service.getexistingAppliedServerError();
        var observer = {
            next: function (x) { _this.existingAppliedErrors = x; }
        };
        observable.subscribe(observer);
    };
    ExistingAppliedComponent.prototype.saveDetails = function () {
        event.preventDefault();
        /*   console.log('Using JSON ');
          console.log(JSON.stringify(this.existingOrApplied.value));
          Object.keys(this.existingOrApplied.controls).forEach(key => {
            let value = this.existingOrApplied.get(key).value;
            attributes.forEach(function (data) {
              if (data.name == key) {
                //console.log(key+' '+value);
                data.value = value;
                console.log('attributes value  ' + data.value);
              }
            });
          }) */
        this.service.postExistingApplied(JSON.parse(JSON.stringify(this.existingOrApplied.value))).subscribe();
        this.logValidationError(this.existingOrApplied);
    };
    ExistingAppliedComponent.prototype.getDetails = function (propInsured) {
        var _this = this;
        /*   let existingOrAppliedMap = new Map();
          Object.keys(propInsured.controls).forEach(key => {
            //let  value = this.gettingStarted.get(key).value;
            attributes.forEach(function (data) {
              if (data.name == key) {
                //console.log(data.name + ' ' + data.value);
                existingOrAppliedMap.set(data.name, data.value);
              }
            });
          })
          this.existingOrApplied.patchValue({
            a_InforceNAppliedfor: existingOrAppliedMap.get("a_InforceNAppliedfor"),
            a_OffPaymtInd_PINS: existingOrAppliedMap.get("a_OffPaymtInd_PINS"),
            a_OwnSoldTransLifeInd: existingOrAppliedMap.get("a_OwnSoldTransLifeInd")
          }) */
        var observable = this.service.getExistingApplied();
        var observer = {
            next: function (x) {
                _this.existingOrApplied.patchValue({
                    a_InforceNAppliedfor: x.a_InforceNAppliedfor,
                    a_OffPaymtInd_PINS: x.a_OffPaymtInd_PINS,
                    a_OwnSoldTransLifeInd: x.a_OwnSoldTransLifeInd
                });
            }
        };
        observable.subscribe(observer);
    };
    ExistingAppliedComponent.prototype.onNext = function () {
        this.nextScreen.emit('premium');
    };
    ExistingAppliedComponent.prototype.onPrev = function () {
        var value = "existing-applied";
        if (this.isOwner) {
            value = "owner";
        }
        else {
            value = "proposed-insured";
        }
        this.nextScreen.emit(value);
    };
    ExistingAppliedComponent.prototype.logValidationError = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractcontrol = group.get(key);
            _this.existingAppliedErrors[key] = '';
            if (abstractcontrol && !abstractcontrol.valid) {
                _this.existingAppliedErrors[key] = _this.validationMessages[key];
            }
        });
        this.service.postexistingAppliedServerError(JSON.parse(JSON.stringify(this.existingAppliedErrors))).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExistingAppliedComponent.prototype, "nextScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isOwner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExistingAppliedComponent.prototype, "isOwner", void 0);
    ExistingAppliedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-existing-applied',
            template: __webpack_require__(/*! ./existing-applied.component.html */ "./src/app/screens/existing-applied/existing-applied.component.html"),
            styles: [__webpack_require__(/*! ../css/all-screens.css */ "./src/app/screens/css/all-screens.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__["ScreenServiceService"]])
    ], ExistingAppliedComponent);
    return ExistingAppliedComponent;
}());



/***/ }),

/***/ "./src/app/screens/getting-started/getting-started.component.html":
/*!************************************************************************!*\
  !*** ./src/app/screens/getting-started/getting-started.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\">\n  <div class=\"heading\">Getting Started</div>\n  <div class=\"mandatory\">* Fields marked with an asterisk are required</div><br>\n  <form [formGroup]=\"gettingStarted\" #gettingStartedForm=\"ngForm\">\n    <div [hidden]=\"gettingStartedForm.submitted\">\n      <label for=\"Application_CRDA\">\n        Application CRDA:<span style=\"color: red; font-weight: bold;vertical-align: top\" class=\"mandatory\">*</span>\n        <input id=\"Application_CRDA\" #AppCRDA [textMask]=\"{mask:maskAppCRDA,guide:true,keepCharPositions:true}\"\n          type=\"text\" (blur)=\"validateGettingStarted(AppCRDA.value)\" formControlName=\"Application_CRDA\">\n        <!--<div *ngIf=\"gettingStarted.controls['Application_CRDA'].invalid &&\n        (gettingStarted.controls['Application_CRDA'].dirty || gettingStarted.controls['Application_CRDA'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['Application_CRDA'].errors.required\">\n            Application CRDA is missing.\n          </div>\n        </div> -->\n        <div class=\"alert\">{{formerrors}}</div>\n      </label>\n\n      <label class=\"radioQue\">\n        Is this application being completed in the United States?*\n        <br>\n        <input type=\"radio\" name=\"appcompletedinUS\" formControlName=\"appcompletedinUS\" value=\"Yes\">Yes\n        <input type=\"radio\" name=\"appcompletedinUS\" formControlName=\"appcompletedinUS\" value=\"No\">No\n        <div *ngIf=\"gettingStarted.controls['appcompletedinUS'].invalid &&\n        (gettingStarted.controls['appcompletedinUS'].dirty || gettingStarted.controls['appcompletedinUS'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['appcompletedinUS'].errors.required\">\n            Answer to Application completed in the United States is missing.\n          </div>\n        </div>\n      </label>\n\n      <label class=\"radioQue\">\n        Will the Owner of the Policy be someone other than the Proposed Insured?*\n        <br>\n        <input #showOwnVal type=\"radio\" name=\"ownerOtherThanPI\" formControlName=\"ownerOtherThanPI\"\n          (change)=\"showHideOwner(showOwnVal.value)\" value=\"Yes\">Yes\n        <input #hideOwnVal type=\"radio\" name=\"ownerOtherThanPI\" formControlName=\"ownerOtherThanPI\"\n          (change)=\"showHideOwner(hideOwnVal.value)\" value=\"No\">No\n        <div *ngIf=\"gettingStarted.controls['ownerOtherThanPI'].invalid &&\n        (gettingStarted.controls['ownerOtherThanPI'].dirty || gettingStarted.controls['ownerOtherThanPI'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['ownerOtherThanPI'].errors.required\">\n            Answer to Owner of the Policy be someone other than the Proposed Insured is missing.\n          </div>\n        </div>\n      </label>\n\n      <label>\n        Product:*\n        <select formControlName=\"product\">\n          <option>BrightHouse Smartcare</option>\n        </select>\n        <div *ngIf=\"gettingStarted.controls['product'].invalid &&\n        (gettingStarted.controls['product'].dirty || gettingStarted.controls['product'].touched)\" class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['product'].errors.required\">\n            Product is missing.\n          </div>\n        </div>\n      </label>\n\n      <label>\n        Premium Mode:*\n        <select formControlName=\"premiumMode\">\n          <option *ngFor=\"let premiumMode of premiumModes\" [value]=\"premiumMode\">{{premiumMode}}</option>\n        </select>\n        <div *ngIf=\"gettingStarted.controls['premiumMode'].invalid &&\n        (gettingStarted.controls['premiumMode'].dirty || gettingStarted.controls['premiumMode'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['premiumMode'].errors.required\">\n            Premium Mode is missing.\n          </div>\n        </div>\n      </label>\n\n      <label>\n        NIPR Number:*\n        <input type=\"text\" formControlName=\"niprNum\" appOnlyNumber>\n        <div *ngIf=\"gettingStarted.controls['niprNum'].invalid &&\n         (gettingStarted.controls['niprNum'].dirty || gettingStarted.controls['niprNum'].touched)\" class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['niprNum'].errors.required\">\n            NIPR is missing.\n          </div>\n        </div>\n      </label>\n      <label>\n        Premium Amount:\n        <input type=\"text\" #premAmt formControlName=\"preAmount\" appOnlyNumber (blur)=\"formateCurrency(premAmt)\">\n      </label>\n      <label>\n        Face Amount:\n        <input type=\"text\" #faceAmt formControlName=\"faceAmount\" appOnlyNumber (blur)=\"formateCurrency(faceAmt)\">\n      </label>\n      <label class=\"radioQue\">\n        Is there an Illustration PDF attached with the Application Packet?*\n        <br>\n        <input type=\"radio\" name=\"illustrationPDF\" formControlName=\"illustrationPDF\" (change)=\"showHideAmount($event)\"\n          value=\"Yes\">Yes\n        <input type=\"radio\" name=\"illustrationPDF\" formControlName=\"illustrationPDF\" (change)=\"showHideAmount($event)\"\n          value=\"No\">No\n        <div *ngIf=\"gettingStarted.controls['illustrationPDF'].invalid &&\n        (gettingStarted.controls['illustrationPDF'].dirty || gettingStarted.controls['illustrationPDF'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['illustrationPDF'].errors.required\">\n            Answer to Is there an Illustration PDF attached with the Application Packet is missing.\n          </div>\n        </div>\n      </label>\n      <label for=\"lumpsum\"\n        [style.display]=\"gettingStarted.controls['illustrationPDF'].value == 'Yes' ? 'block' : 'none' \">\n        Planned First Year Lump Sum:*\n        <input id=\"lumpsum\" appOnlyNumber type=\"text\" #lumpsum formControlName=\"lumpsum\"\n          (blur)=\"formateCurrency(lumpsum)\">\n        <div *ngIf=\"gettingStarted.controls['lumpsum']?.invalid &&\n        (gettingStarted.controls['lumpsum'].dirty || gettingStarted.controls['lumpsum'].touched)\" class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['lumpsum'].errors.required\">\n            Planned First Year Lump Sum Amount is missing.\n          </div>\n        </div>\n      </label>\n      <label for=\"singlePremium\"\n        [style.display]=\"gettingStarted.controls['illustrationPDF'].value == 'Yes' ? 'block' : 'none' \">\n        Planned Single Premium:*\n        <input id=\"singlePremium\" #singlePrem appOnlyNumber type=\"text\" formControlName=\"singlePremium\"\n          (blur)=\"formateCurrency(singlePrem)\">\n        <div *ngIf=\"gettingStarted.controls['singlePremium']?.invalid &&\n        (gettingStarted.controls['singlePremium'].dirty || gettingStarted.controls['singlePremium'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"gettingStarted.controls['singlePremium'].errors.required\">\n            Planned Single Premium Amount is missing.\n          </div>\n        </div>\n      </label>\n\n    </div>\n    <!-- <button type=\"button\" class=\"\" (click)=\"saveDetails()\">Submit</button> -->\n    <button type=\"button\" class=\"nextButton\" (click)=\"onNext()\">Next</button>\n  </form>\n</div>\n<div class=\"errormessages\">\n  <ul>{{gettingstartedErrors.Application_CRDA}}</ul>\n  <ul>{{gettingstartedErrors.appcompletedinUS}}</ul>\n  <ul>{{gettingstartedErrors.ownerOtherThanPI}}</ul>\n  <ul>{{gettingstartedErrors.product}}</ul>\n  <ul>{{gettingstartedErrors.niprNum}}</ul>\n  <ul>{{gettingstartedErrors.illustrationPDF}}</ul>\n  <ul>{{gettingstartedErrors.premiumMode}}</ul>\n  <ul>{{gettingstartedErrors.lumpsum}}</ul>\n  <ul>{{gettingstartedErrors.singlePremium}}</ul>\n</div>\n<!--<div *ngIf=\"gettingStartedForm.invalid\">invalid form</div>\n<div *ngIf=\"gettingStartedForm.submitted\">\n  <p>You have submitted getting started screen with values</p>\n  {{gettingStarted.value | json}}\n</div> -->"

/***/ }),

/***/ "./src/app/screens/getting-started/getting-started.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/screens/getting-started/getting-started.component.ts ***!
  \**********************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/screen-service.service */ "./src/app/services/screen-service.service.ts");






var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent(fb, currency, service) {
        this.fb = fb;
        this.currency = currency;
        this.service = service;
        this.PIotherThanOwn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.premiumModes = ["Single Payment", "Annual", "Semi-Annual", "Quarterely", "Monthly"];
        this.maskAppCRDA = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /[0-3]/, /\d/, '-', /[0-5]/, /\d/, '-', /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, 'C01'];
        this.validationMessages = {
            'Application_CRDA': 'Application CRDA is missing',
            'appcompletedinUS': 'Answer to Application completed in the United States is missing.',
            'ownerOtherThanPI': 'Answer to Owner of the Policy be someone other than the Proposed Insured is missing.',
            'product': 'Product is missing.',
            'niprNum': 'NIPR is missing.',
            'illustrationPDF': 'Answer to Is there an Illustration PDF attached with the Application Packet is missing.',
            'premiumMode': 'Premium Mode is missing.',
            'lumpsum': 'Planned First Year Lump Sum Amount is missing.',
            'singlePremium': 'Planned Single Premium Amount is missing.'
        };
        this.gettingstartedErrors = {
            'Application_CRDA': '',
            'appcompletedinUS': '',
            'ownerOtherThanPI': '',
            'product': '',
            'niprNum': '',
            'illustrationPDF': '',
            'premiumMode': '',
            'lumpsum': '',
            'singlePremium': ''
        };
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gettingStarted = this.fb.group({
            Application_CRDA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            appcompletedinUS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ownerOtherThanPI: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            niprNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            preAmount: [''],
            faceAmount: [''],
            illustrationPDF: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            premiumMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lumpsum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            singlePremium: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.gettingStarted.get("Application_CRDA").valueChanges.subscribe(function (data) { _this.validateGettingStarted(data); });
        //this.validateGettingStarted(data);
        /*     this.gettingStarted.valueChanges.subscribe(() => {
              this.logValidationError(this.gettingStarted);
            }) */
        this.getDetails(this.gettingStarted);
        //this.logValidationError(this.gettingStarted);
        this.gettingStarted.get("illustrationPDF").valueChanges.subscribe(function (data) {
            if (data != "Yes") {
                _this.gettingStarted.removeControl('singlePremium');
                _this.gettingStarted.removeControl('lumpsum');
            }
            else {
                _this.gettingStarted.addControl('singlePremium', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                _this.gettingStarted.addControl('lumpsum', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            }
        });
        var observable = this.service.getGettingStartedServerError();
        var observer = {
            next: function (x) { _this.gettingstartedErrors = x; }
        };
        observable.subscribe(observer);
    };
    GettingStartedComponent.prototype.showHideOwner = function (value) {
        this.PIotherThanOwn.emit(value);
    };
    GettingStartedComponent.prototype.validateGettingStarted = function (data) {
        if (data == "") {
            this.formerrors = "Application CRDA is missing.";
        }
        /*     else if (data.includes("_")) {
              data = "";
              this.formerrors = "Application CRDA is missing.";
            } */
        else {
            this.formerrors = "";
        }
    };
    GettingStartedComponent.prototype.showHideAmount = function (event) {
        if (event.target.value == "Yes") {
            this.gettingStarted.addControl('lumpsum', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.gettingStarted.addControl('singlePremium', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            //  this.gettingStarted.controls['lumpsum'].reset();
            // this.gettingStarted.controls['singlePremium'].reset();
        }
        else {
            this.gettingStarted.removeControl('lumpsum');
            this.gettingStarted.removeControl('singlePremium');
        }
    };
    GettingStartedComponent.prototype.formateCurrency = function (event) {
        var formctrlname = event.getAttribute("formControlName");
        var amount = parseInt(event.value.replace(/[^0-9.-]+/g, ""));
        switch (formctrlname) {
            case "preAmount": {
                this.gettingStarted.patchValue({
                    preAmount: this.currency.transform(amount, 'USD')
                });
                break;
            }
            case "faceAmount": {
                this.gettingStarted.patchValue({
                    faceAmount: this.currency.transform(amount, 'USD')
                });
                break;
            }
            case "lumpsum": {
                this.gettingStarted.patchValue({
                    lumpsum: this.currency.transform(amount, 'USD')
                });
                break;
            }
            case "singlePremium": {
                this.gettingStarted.patchValue({
                    singlePremium: this.currency.transform(amount, 'USD')
                });
                break;
            }
        }
    };
    GettingStartedComponent.prototype.saveDetails = function () {
        //event.preventDefault();
        /*     console.log(JSON.stringify(this.gettingStarted.value));
            Object.keys(this.gettingStarted.controls).forEach(key =>{
              let  value = this.gettingStarted.get(key).value;
                attributes.forEach(function(data){
                  if(data.name == key){
                    //console.log(key+' '+value);
                    data.value = value;
                    //console.log('attributes value  '+data.value);
                  }
                });
              })
               */
        // const gettingstartedObservable = of(JSON.stringify(this.gettingStarted.value));
        //  console.log('getting started value  '+JSON.parse(JSON.stringify(this.gettingStarted.value)));
        this.service.postGettingStarted(JSON.parse(JSON.stringify(this.gettingStarted.value))).subscribe();
        //  console.log('getting started value '+JSON.stringify(this.gettingStarted.get('illustrationPDF').value));
        /*      if(this.gettingStarted.get('illustrationPDF').value != "Yes"){
               
               this.gettingStarted.removeControl('singlePremium');
               this.gettingStarted.removeControl('lumpsum');
              console.log('control removed');
              } */
        this.logValidationError(this.gettingStarted);
    };
    GettingStartedComponent.prototype.getDetails = function (gettStarted) {
        var _this = this;
        /*    let gettingstartedMap = new Map();
           Object.keys(gettStarted.controls).forEach(key =>{
             //let  value = this.gettingStarted.get(key).value;
               attributes.forEach(function(data){
                 if(data.name == key){
                   //console.log(data.name+' '+data.value);
                   gettingstartedMap.set(data.name,data.value);
                 }
               });
             })
             this.gettingStarted.patchValue({
               Application_CRDA : gettingstartedMap.get("Application_CRDA"),
               appcompletedinUS : gettingstartedMap.get("appcompletedinUS"),
               ownerOtherThanPI : gettingstartedMap.get("ownerOtherThanPI"),
               product : gettingstartedMap.get("product"),
               premiumMode : gettingstartedMap.get("premiumMode"),
               niprNum : gettingstartedMap.get("niprNum"),
               preAmount : gettingstartedMap.get("preAmount"),
               faceAmount : gettingstartedMap.get("faceAmount"),
               illustrationPDF : gettingstartedMap.get("illustrationPDF"),
               singlePremium : gettingstartedMap.get("singlePremium"),
               lumpsum : gettingstartedMap.get("lumpsum")
             }) */
        //this.service.getGettingStarted().forEach(data=>{console.log(data)});
        var observable = this.service.getGettingStarted();
        var observer = {
            next: function (x) {
                _this.gettingStarted.patchValue({
                    Application_CRDA: x.Application_CRDA,
                    appcompletedinUS: x.appcompletedinUS,
                    ownerOtherThanPI: x.ownerOtherThanPI,
                    product: x.product,
                    premiumMode: x.premiumMode,
                    niprNum: x.niprNum,
                    preAmount: x.preAmount,
                    faceAmount: x.faceAmount,
                    illustrationPDF: x.illustrationPDF,
                    lumpsum: x.lumpsum,
                    singlePremium: x.singlePremium
                });
                _this.showHideOwner(x.ownerOtherThanPI);
            }
        };
        observable.subscribe(observer);
    };
    GettingStartedComponent.prototype.onNext = function () {
        var value = "proposed-insured";
        this.nextScreen.emit(value);
    };
    GettingStartedComponent.prototype.logValidationError = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractcontrol = group.get(key);
            _this.gettingstartedErrors[key] = '';
            if (abstractcontrol && !abstractcontrol.valid) {
                _this.gettingstartedErrors[key] = _this.validationMessages[key];
            }
        });
        if (group.get('illustrationPDF').value != "Yes") {
            this.gettingstartedErrors.lumpsum = "";
            this.gettingstartedErrors.singlePremium = "";
        }
        this.service.postGettingStartedServerError(JSON.parse(JSON.stringify(this.gettingstartedErrors))).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GettingStartedComponent.prototype, "selectedScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GettingStartedComponent.prototype, "PIotherThanOwn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GettingStartedComponent.prototype, "nextScreen", void 0);
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! ./getting-started.component.html */ "./src/app/screens/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ../css/all-screens.css */ "./src/app/screens/css/all-screens.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_4__["ScreenServiceService"]])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/screens/owner/owner.component.html":
/*!****************************************************!*\
  !*** ./src/app/screens/owner/owner.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\">\n    <div class=\"heading\">Owner</div>\n    <div class=\"mandatory\">* Fields marked with an asterisk are required</div>\n  <form [formGroup]=\"owner\" #ownerForm=\"ngForm\">\n    <div formArrayName=\"owners\">\n      <button (click)=\"addOwner()\" [disabled]=\"ownersArray.length>4\">Add</button>\n      <div *ngFor=\"let ctrl of ownersArray.controls; let i=index\">\n        <div [formGroupName]=\"i\">\n          <label>\n            Prefix:\n            <select formControlName=\"prefix\">\n              <option *ngFor=\"let prefix of prefixes\" [value]=\"prefix\">{{prefix}}</option>\n            </select>\n\n          </label>\n          <label>\n            First Name:*\n            <input type=\"text\" formControlName=\"firstName\" [id]=\"'firstName'+i\">\n\n            <div *ngIf=\"ctrl.get('firstName').invalid &&\n                 (ctrl.get('firstName').dirty || ctrl.get('firstName').touched)\" class=\"alert\">\n              <div *ngIf=\"ctrl.get('firstName').errors.required\"></div>\n              First Name {{i+1}} is required.\n            </div>\n          </label>\n          <label>\n            Middle Name:\n            <input type=\"text\" formControlName=\"middleName\" maxlength=\"1\">\n          </label>\n          <label>\n            Last Name:*\n            <input type=\"text\" formControlName=\"lastName\">\n\n            <div *ngIf=\"ctrl.get('lastName').invalid &&\n          (ctrl.get('lastName').dirty || ctrl.get('lastName').touched)\" class=\"alert\">\n              <div *ngIf=\"ctrl.get('lastName').errors.required\">\n                Last Name {{i+1}} is required.\n              </div>\n            </div>\n          </label>\n          <label>\n            Permanent Address:*\n            <input type=\"text\" formControlName=\"permanentAddress\">\n\n            <div *ngIf=\"ctrl.get('permanentAddress').invalid &&\n    (ctrl.get('permanentAddress').dirty || ctrl.get('permanentAddress').touched)\" class=\"alert\">\n              <div *ngIf=\"ctrl.get('permanentAddress').errors.required\">\n                Permanent Address {{i+1}} is required.\n              </div>\n            </div>\n          </label>\n          <label>\n            Date Of Birth:*\n            <input type=\"date\" #dob formControlName=\"dateofBirth\" (keyup)=\"validatedate(dob.value)\">\n            <div *ngIf=\"ctrl.get('dateofBirth').invalid &&\n      (ctrl.get('dateofBirth').dirty || ctrl.get('dateofBirth').touched)\" class=\"alert\">\n              <div *ngIf=\"ctrl.get('dateofBirth').errors.required\">\n                Date of birth {{i+1}} is required.\n              </div>\n              \n            </div>\n            <div class=\"alert\" >{{invalidDate}}</div>\n          </label>\n\n          <label>\n            Social Security Number:*\n            <input type=\"text\" formControlName=\"ssn\">\n            <div *ngIf=\"ctrl.get('ssn').invalid &&\n      (ctrl.get('ssn').dirty || ctrl.get('ssn').touched)\" class=\"alert\">\n              <div *ngIf=\"ctrl.get('ssn').errors.required\">\n                SSN {{i+1}} is required.\n              </div>\n            </div>\n          </label>\n\n          <button (click)=\"removeOwner(i,ctrl.get('id').value)\" [disabled]=\"(owner.get('owners').length)==1\">Delete</button>\n        </div>\n\n\n      </div>\n      <!-- <button type=\"submit\">Submit</button> -->\n      <button type=\"button\" class=\"previousButton\" (click)=\"onPrev()\">Previous</button>\n      <button type=\"button\" class=\"nextButton\" (click)=\"onNext()\">Next</button>\n    </div>\n  </form>\n</div>\n<div class=\"ownerErrorMessages\" *ngFor=\"let error of ownerErrorsArray\">\n<ul>{{error.firstName}}</ul>\n<ul>{{error.lastName}}</ul>\n<ul>{{error.permanentAddress}}</ul>\n<ul>{{error.dateofBirth}}</ul>\n<ul>{{error.ssn}}</ul>\n</div>\n<!--<div *ngIf=\"ownerForm.submitted\">\n  <p>You have submitted Owner screen with values</p>\n  {{owner.value | json}}\n</div>-->"

/***/ }),

/***/ "./src/app/screens/owner/owner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/screens/owner/owner.component.ts ***!
  \**************************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _all_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-attributes */ "./src/app/screens/all-attributes.ts");
/* harmony import */ var src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/screen-service.service */ "./src/app/services/screen-service.service.ts");






//import {all-screens} from '../css';
var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.prevScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prefixes = ["commander", "Doctor", "Mr.", "Ms", "Mrs.", "General"];
        this.validationMessages = {
            "firstName": "First Name",
            "lastName": "Last Name",
            "permanentAddress": "Permanent Address",
            "dateofBirth": "Date of birth",
            "ssn": "SSN"
        };
        this.errorMessages = {
            "firstName": "First Name",
            "lastName": "Last Name",
            "permanentAddress": "Permanent Address",
            "dateofBirth": "Date of birth",
            "ssn": "SSN"
        };
        this.ownerErrorsArray = [];
    }
    OwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //(<FormArray>this.owner.get("owners")).at(0).valueChanges.subscribe(data => this.validatedate(data));
        //this.validateOwnerForm();
        //  this.owner = this.ownerGroup();
        this.owner = this.fb.group({
            owners: this.fb.array([
                this.ownerGroup()
            ])
        });
        this.index = 1;
        this.getDetails(this.owner);
        this.ownerErrorsArray = [];
        var observable = this.service.getownerServerError();
        var observer = {
            next: function (x) { _this.ownerErrorsArray = x; }
        };
        observable.subscribe(observer);
    };
    OwnerComponent.prototype.ownerGroup = function () {
        return this.fb.group({
            prefix: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permanentAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateofBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ssn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id: ['']
        });
    };
    OwnerComponent.prototype.getOwnerCount = function () {
        var ownercount = 0;
        _all_attributes__WEBPACK_IMPORTED_MODULE_3__["attributes"].forEach(function (data) {
            if (data.name.substring(0, 12) == 'prefix_owner') {
                ownercount++;
            }
        });
        return ownercount;
    };
    OwnerComponent.prototype.saveDetails = function () {
        var _this = this;
        event.preventDefault();
        /* console.log('Using JSON ');
        console.log(JSON.stringify(this.owner.value));
          let owners = (<FormArray>this.owner.get('owners'));
          let index =0;
        let ownercount =this.getOwnerCount();
        for( let owner of owners.controls ){
      
            Object.keys(owner.value).forEach(key => {
          let value = (<FormGroup>owner).get(key).value;
      
           if(index>=ownercount){
          attributes.push(new attribute(key+'_owner_'+index,value));
           }
           else{
             attributes.forEach(data=>{
              if(data.name==key+'_owner_'+index){
                data.value = value;
              }
             })
           }
      
        })
        index++;
        }
       */
        //console.log('owner value  '+JSON.stringify(this.ownersArray.value));
        //this.service.postOwner(JSON.parse(JSON.stringify(this.ownersArray.value))).subscribe();
        var owners = this.owner.get('owners');
        var _loop_1 = function (owner) {
            if (owner.get("id").value == '') {
                var observable_1 = this_1.service.postOwner(owner.value);
                var observer = {
                    next: function (x) {
                        var error = _this.ownerErrors();
                        error.id = x.id;
                        owner.get("id").setValue(x.id);
                        _this.service.postOwnerServerError(JSON.parse(JSON.stringify(error))).subscribe();
                        _this.logValidationError(owner, _this.index, x.id);
                    }
                };
                observable_1.subscribe(observer);
                //this.service.postOwner(owner.value).subscribe(data =>{console.log(JSON.stringify(data))});
            }
            else {
                this_1.service.putOwner(owner.value, owner.get("id").value).subscribe();
                this_1.logValidationError(owner, this_1.index, owner.get("id").value);
            }
        };
        var this_1 = this;
        //let observable = new Observable<JSON>();
        // subscription : Subscription;
        for (var _i = 0, _a = owners.controls; _i < _a.length; _i++) {
            var owner = _a[_i];
            _loop_1(owner);
        }
        //this.logValidationError(owners);
    };
    OwnerComponent.prototype.getDetails = function (ownerGroupParam) {
        var _this = this;
        var ownerGroupMap = new Map();
        var ownerCount = this.getOwnerCount();
        var ownerArray = this.fb.array([]);
        // console.log('owner length '+this.ownersArray.length); 
        var ownerMap = new Map();
        /* if(ownerCount!=0){
          for(let i=0;i<ownerCount;i++){
            //let  value = this.gettingStarted.get(key).value;
            //let ownerGroup =  <FormGroup>(<FormArray>this.owner.get('owners')).controls[i];
            
            let localOwnerGroup = this.ownerGroup();
            Object.keys(localOwnerGroup.controls).forEach(key => {
              attributes.forEach(function(data){
                if(data.name == key+'_owner_'+i){
                  ownerMap.set(data.name,data.value);
                  switch(key){
                    case "prefix" : {localOwnerGroup.patchValue({prefix : data.value}); break;}
                    case "firstName" : {localOwnerGroup.patchValue({firstName : data.value}); break;}
                    case "middleName" : {localOwnerGroup.patchValue({middleName : data.value}); break;}
                    case "lastName" : {localOwnerGroup.patchValue({lastName : data.value}); break;}
                    case "permanentAddress" : {localOwnerGroup.patchValue({permanentAddress : data.value}); break;}
                    case "dateofBirth" : {localOwnerGroup.patchValue({dateofBirth : data.value}); break;}
                    case "ssn" : {localOwnerGroup.patchValue({ssn : data.value}); break;}
                  }
                }
              })
            })
            
            ownerArray.insert(i,localOwnerGroup);
        
           
          }
        this.owner = this.fb.group({
          owners :   ownerArray
        });
        }
         */ var observable = this.service.getOwner();
        var observer = {
            next: function (x) {
                // console.log('length in obeserver ' + JSON.stringify(x.length));
                var lengthowner = JSON.stringify(x.length);
                x.forEach(function (element) {
                    var localOwnerGroup = _this.ownerGroup();
                    localOwnerGroup.patchValue({
                        prefix: element.prefix,
                        firstName: element.firstName,
                        middleName: element.middleName,
                        lastName: element.lastName,
                        permanentAddress: element.permanentAddress,
                        dateofBirth: element.dateofBirth,
                        ssn: element.ssn,
                        id: element.id
                    });
                    //console.log('owner in get '+JSON.stringify( localOwnerGroup.value));
                    ownerArray.push(localOwnerGroup);
                });
                if (JSON.stringify(x.length) == "0")
                    ownerArray.push(_this.ownerGroup());
                _this.owner = _this.fb.group({
                    owners: ownerArray
                });
                /*         this.owner.patchValue({
                          prefix: x.prefix,
                          firstName: x.firstName,
                          middleName: x.middleName,
                          lastName: x.lastName,
                          permanentAddress: x.permanentAddress,
                          dateofBirth: x.dateofBirth,
                          ssn: x.ssn
                        }) */
            }
        };
        observable.subscribe(observer);
    };
    Object.defineProperty(OwnerComponent.prototype, "ownersArray", {
        get: function () {
            return this.owner.controls['owners'];
        },
        enumerable: true,
        configurable: true
    });
    OwnerComponent.prototype.addOwner = function () {
        this.owner.get('owners').push(this.ownerGroup());
        // this.service.postOwner(JSON.parse(JSON.stringify(this.ownerGroup().value))).subscribe();
    };
    OwnerComponent.prototype.removeOwner = function (location, index) {
        this.ownersArray.removeAt(location);
        var index1 = _all_attributes__WEBPACK_IMPORTED_MODULE_3__["attributes"].findIndex(function (attribute) { return (attribute.name.substr(-2, 2) == "_" + index); });
        // delete all attributes for deleted block
        _all_attributes__WEBPACK_IMPORTED_MODULE_3__["attributes"].splice(index1, 7);
        if (index1 > 0 && index1 != _all_attributes__WEBPACK_IMPORTED_MODULE_3__["attributes"].length) {
            _all_attributes__WEBPACK_IMPORTED_MODULE_3__["attributes"].forEach(function (data) {
                if (data.name.substr(-2, 2) == "_" + (index + 1)) {
                    data.name = data.name.substr(-(data.name.length), data.name.length - 1) + index;
                }
            });
        }
        this.service.deleteOwner(index).subscribe();
        this.service.deleteOwnerServerError(index).subscribe();
    };
    OwnerComponent.prototype.validatedate = function (date) {
        //console.log(this.ownersArray.at(index).get("dateofBirth").value);
        var year = parseInt(date.split("-")[0]);
        if (year < 1900 || year > 2099) {
            // console.log('Please enter a valid date')
            this.invalidDate = "Please enter a valid date";
        }
        else {
            this.invalidDate = "";
        }
    };
    OwnerComponent.prototype.onPrev = function () {
        var value = "proposed-insured";
        this.prevScreen.emit(value);
    };
    OwnerComponent.prototype.onNext = function () {
        var value = "existing-applied";
        this.nextScreen.emit(value);
    };
    OwnerComponent.prototype.ownerErrors = function () {
        var errors = {
            "firstName": "",
            "lastName": "",
            "permanentAddress": "",
            "dateofBirth": "",
            "ssn": "",
            "id": ""
        };
        return errors;
    };
    ;
    OwnerComponent.prototype.logValidationError = function (owner, index, id) {
        var _this = this;
        Object.keys(owner.controls).forEach(function (key) {
            var abstractcontrol = owner.get(key);
            _this.errorMessages[key] = '';
            if (abstractcontrol && !abstractcontrol.valid) {
                _this.errorMessages[key] = _this.validationMessages[key] + ' ' + index + ' is required';
                // console.log(this.ownerErrors[key]);
                // this.ownersErrors.push(this.validationMessages[key]+' '+index+' is required');
            }
        });
        this.service.putOwnerServerError(JSON.parse(JSON.stringify(this.errorMessages)), parseInt(owner.get("id").value)).subscribe();
        this.index++;
        //console.log('put server success')
        // this.ownerErrors.id = owner.get("id").value; 
        //this.ownersErrors.push(this.ownerErrors);
        /*     if(this.ownerErrors.id == '')
            this.service.postOwnerServerError(JSON.parse(JSON.stringify(this.ownerErrors))).subscribe();
            else
            this.service.putOwnerServerError(JSON.parse(JSON.stringify(this.ownerErrors)),parseInt(this.ownerErrors.id)).subscribe();
         */
        //console.log(this.ownersErrors);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OwnerComponent.prototype, "prevScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OwnerComponent.prototype, "nextScreen", void 0);
    OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/screens/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ../css/all-screens.css */ "./src/app/screens/css/all-screens.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_4__["ScreenServiceService"]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/screens/premium/premium.component.html":
/*!********************************************************!*\
  !*** ./src/app/screens/premium/premium.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\">\n    <div class=\"heading\">Premium</div>\n    <div class=\"mandatory\">* Fields marked with an asterisk are required</div>\n  <form [formGroup]=\"premium\" #premiumForm=\"ngForm\">\n    <div [hidden]=\"premiumForm.submitted\">\n      <label>\n        Payor Details:\n      </label>\n      <label>\n        Premium Payor:*\n        <select formControlName=\"premium_payors\">\n          <option *ngFor=\"let payor of premium_payors\" [value]=\"payor\">{{payor}}</option>\n        </select>\n        <div *ngIf=\"premium.controls['premium_payors'].invalid &&\n            (premium.controls['premium_payors'].dirty || premium.controls['premium_payors'].touched)\" class=\"alert\">\n          <div *ngIf=\"premium.controls['premium_payors'].errors.required\">\n            Premium Payor is missing.\n          </div>\n        </div>\n      </label>\n      <label>\n        Payment Mode:*\n        <select formControlName=\"paymentMode\">\n          <option *ngFor=\"let paymentMode of paymentModes\" [value]=\"paymentMode\">{{paymentMode}}</option>\n        </select>\n     <div *ngIf=\"premium.controls['paymentMode'].invalid &&\n        (premium.controls['paymentMode'].dirty || premium.controls['paymentMode'].touched)\" class=\"alert\">\n          <div *ngIf=\"premium.controls['paymentMode'].errors.required\">\n            Payment Mode is missing.\n          </div>\n        </div>\n      </label>\n<!--       <label>\n          Method of Premium Collection:* <br>\n       <div>   \n          <input id=\"wireTransfer\" type=\"checkbox\" value=\"1\" name=\"wire-transfer\"><label for=\"wireTransfer\">Wire Transfer</label>\n        </div>\n        <div>\n          <input id=\"bankDraft\" type=\"checkbox\" value=\"2\" name=\"bank-draft\">\n          <label for=\"bankDraft\"> Draft </label>\n        </div>\n        <div>\n          <input id=\"check\" type=\"checkbox\" value=\"3\" name=\"check\">\n          <label for=\"check\">Check</label>\n        </div>\n      </label> -->\n      <!-- <button type=\"submit\">Submit</button> -->\n      <button type=\"submit\" class=\"previousButton\" (click)=\"onPrev()\">Previous</button>\n    </div>\n  </form>\n</div>\n<div class=\"errormessages\">\n  <ul>{{premiumErrors.premium_payors}}</ul>\n  <ul>{{premiumErrors.paymentMode}}</ul>\n</div>\n<div *ngIf=\"premiumForm.submitted\">\n  <p>You have submitted getting started screen with values</p>\n  {{premium.value | json}}\n</div>"

/***/ }),

/***/ "./src/app/screens/premium/premium.component.ts":
/*!******************************************************!*\
  !*** ./src/app/screens/premium/premium.component.ts ***!
  \******************************************************/
/*! exports provided: PremiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumComponent", function() { return PremiumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screen-service.service */ "./src/app/services/screen-service.service.ts");





var PremiumComponent = /** @class */ (function () {
    function PremiumComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.premium_payors = ["Proposed Insured", "Payor", "Owner"];
        this.paymentModes = ["Single Payment", "Annual", "Semi-Annual", "Quarterely", "Monthly"];
        this.prevScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.validationMessages = {
            'premium_payors': 'Premium Payor is missing.',
            'paymentMode': 'Payment Mode is missing.'
        };
        this.premiumErrors = {
            'premium_payors': '',
            'paymentMode': ''
        };
    }
    PremiumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.premium = this.fb.group({
            premium_payors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            paymentMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.getDetails(this.premium);
        var observable = this.service.getPremiumServerError();
        var observer = {
            next: function (x) { _this.premiumErrors = x; }
        };
        observable.subscribe(observer);
    };
    PremiumComponent.prototype.saveDetails = function () {
        event.preventDefault();
        /*   console.log('Using JSON ');
          console.log(JSON.stringify(this.premium.value));
          Object.keys(this.premium.controls).forEach(key => {
            let value = this.premium.get(key).value;
            attributes.forEach(function (data) {
              if (data.name == key) {
                //console.log(key+' '+value);
                data.value = value;
                console.log('attributes value  ' + data.value);
              }
            });
          }) */
        this.service.postPremium(JSON.parse(JSON.stringify(this.premium.value))).subscribe();
        this.logValidationError(this.premium);
    };
    PremiumComponent.prototype.getDetails = function (propInsured) {
        var _this = this;
        /* let premiumMap = new Map();
        Object.keys(propInsured.controls).forEach(key => {
          //let  value = this.gettingStarted.get(key).value;
          attributes.forEach(function (data) {
            if (data.name == key) {
              //console.log(data.name + ' ' + data.value);
              premiumMap.set(data.name, data.value);
            }
          });
        })
        this.premium.patchValue({
          premium_payors: premiumMap.get("premium_payors"),
          paymentMode: premiumMap.get("paymentMode")
        }) */
        var observable = this.service.getPremium();
        var observer = {
            next: function (x) {
                _this.premium.patchValue({
                    premium_payors: x.premium_payors,
                    paymentMode: x.paymentMode
                });
            }
        };
        observable.subscribe(observer);
    };
    PremiumComponent.prototype.onPrev = function () {
        var value = "existing-applied";
        this.prevScreen.emit(value);
    };
    PremiumComponent.prototype.logValidationError = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractcontrol = group.get(key);
            _this.premiumErrors[key] = '';
            if (abstractcontrol && !abstractcontrol.valid) {
                _this.premiumErrors[key] = _this.validationMessages[key];
            }
        });
        this.service.postGettingStartedServerError(JSON.parse(JSON.stringify(this.premiumErrors))).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PremiumComponent.prototype, "prevScreen", void 0);
    PremiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-premium',
            template: __webpack_require__(/*! ./premium.component.html */ "./src/app/screens/premium/premium.component.html"),
            styles: [__webpack_require__(/*! ../css/all-screens.css */ "./src/app/screens/css/all-screens.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__["ScreenServiceService"]])
    ], PremiumComponent);
    return PremiumComponent;
}());



/***/ }),

/***/ "./src/app/screens/proposed-insured/proposed-insured.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/screens/proposed-insured/proposed-insured.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pages\">\n    <div class=\"heading\">Porposed Insured</div>\n    <div class=\"mandatory\">* Fields marked with an asterisk are required</div>\n  <form [formGroup]=\"proposedInsured\" #proposedInsuredForm=\"ngForm\">\n    <div [hidden]=\"proposedInsuredForm.submitted\">\n      <label>\n        Prefix:\n        <select formControlName=\"prefix\">\n          <option *ngFor=\"let prefix of prefixes\" [value]=\"prefix\">{{prefix}}</option>\n        </select>\n\n      </label>\n      <label>\n        First Name:*\n        <input type=\"text\" formControlName=\"firstName\">\n      \n      <div *ngIf=\"proposedInsured.controls['firstName'].invalid &&\n    (proposedInsured.controls['firstName'].dirty || proposedInsured.controls['firstName'].touched)\" class=\"alert\">\n        <div *ngIf=\"proposedInsured.controls['firstName'].errors.required\">\n          First Name is required.\n        </div>\n      </div>\n    </label>\n      <label>\n        Middle Name:\n        <input type=\"text\" formControlName=\"middleName\" maxlength=\"1\">\n      </label>\n      <label>\n        Last Name:*\n        <input type=\"text\" formControlName=\"lastName\">\n      \n      <div *ngIf=\"proposedInsured.controls['lastName'].invalid &&\n    (proposedInsured.controls['lastName'].dirty || proposedInsured.controls['lastName'].touched)\" class=\"alert\">\n        <div *ngIf=\"proposedInsured.controls['lastName'].errors.required\">\n          Last Name is required.\n        </div>\n      </div>\n    </label>\n      <label>\n        Permanent Address:*\n        <input type=\"text\" formControlName=\"permanentAddress\">\n      \n      <div *ngIf=\"proposedInsured.controls['permanentAddress'].invalid &&\n    (proposedInsured.controls['permanentAddress'].dirty || proposedInsured.controls['permanentAddress'].touched)\"\n        class=\"alert\">\n        <div *ngIf=\"proposedInsured.controls['permanentAddress'].errors.required\">\n          Permanent Address is required.\n        </div>\n      </div>\n    </label>\n      <label>\n        Date Of Birth:*\n        <input type=\"date\" #dob formControlName=\"dateofBirth\" (keyup)=\"validatedate(dob.value)\">\n        <div *ngIf=\"proposedInsured.controls['dateofBirth'].invalid &&\n      (proposedInsured.controls['dateofBirth'].dirty || proposedInsured.controls['dateofBirth'].touched)\"\n          class=\"alert\">\n          <div *ngIf=\"proposedInsured.controls['dateofBirth'].errors.required\">\n            Date of birth is required.\n          </div>\n        </div>\n        <div class=\"alert\" >{{invalidDate}}</div>\n      </label>\n\n      <label>\n        Social Security Number:*\n        <input type=\"text\" formControlName=\"ssn\">\n        <div *ngIf=\"proposedInsured.controls['ssn'].invalid &&\n      (proposedInsured.controls['ssn'].dirty || proposedInsured.controls['ssn'].touched)\" class=\"alert\">\n          <div *ngIf=\"proposedInsured.controls['ssn'].errors.required\">\n            SSN is required.\n          </div>\n        </div>\n      </label>\n      <!-- <button type=\"button\" (click)=\"saveDetails()\">Submit</button> -->\n      <button type=\"button\" class=\"previousButton\" (click)=\"onPrev()\">Previous</button>\n      <button type=\"button\" class=\"nextButton\" (click)=\"onNext()\">Next</button>\n    </div>\n  </form>\n</div>\n<div class=\"errormessages\">\n  <ul>{{proposedInsuredErrors.firstName}}</ul>\n  <ul>{{proposedInsuredErrors.lastName}}</ul>\n  <ul>{{proposedInsuredErrors.permanentAddress}}</ul>\n  <ul>{{proposedInsuredErrors.dateofBirth}}</ul>\n  <ul>{{proposedInsuredErrors.ssn}}</ul>\n</div>\n<!-- <div *ngIf=\"proposedInsuredForm.invalid\">invalid form</div>\n<div *ngIf=\"proposedInsuredForm.submitted\">\n  <p>You have submitted Proposed Insured screen with values</p>\n  {{proposedInsured.value | json}}\n</div> -->"

/***/ }),

/***/ "./src/app/screens/proposed-insured/proposed-insured.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/screens/proposed-insured/proposed-insured.component.ts ***!
  \************************************************************************/
/*! exports provided: ProposedInsuredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposedInsuredComponent", function() { return ProposedInsuredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screen-service.service */ "./src/app/services/screen-service.service.ts");





var ProposedInsuredComponent = /** @class */ (function () {
    function ProposedInsuredComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.prevScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prefixes = ["commander", "Doctor", "Mr.", "Ms", "Mrs.", "General"];
        this.validationMessages = {
            "firstName": "First Name is required.",
            "lastName": "Last Name is required.",
            "permanentAddress": "Permanent Address is required.",
            "dateofBirth": "Date of birth is required.",
            "ssn": "SSN is required."
        };
        this.proposedInsuredErrors = {
            "firstName": "",
            "lastName": "",
            "permanentAddress": "",
            "dateofBirth": "",
            "ssn": ""
        };
    }
    ProposedInsuredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proposedInsured = this.fb.group({
            prefix: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            middleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            permanentAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateofBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ssn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getDetails(this.proposedInsured);
        var observable = this.service.getProposed_InsuredServerError();
        var observer = {
            next: function (x) { _this.proposedInsuredErrors = x; }
        };
        observable.subscribe(observer);
    };
    ProposedInsuredComponent.prototype.validatedate = function (date) {
        //console.log(this.ownersArray.at(index).get("dateofBirth").value);
        var year = parseInt(date.split("-")[0]);
        if (year < 1900 || year > 2099) {
            // console.log('Please enter a valid date')
            this.invalidDate = "Please enter a valid date";
        }
        else {
            this.invalidDate = "";
        }
    };
    ProposedInsuredComponent.prototype.saveDetails = function () {
        event.preventDefault();
        /*     console.log('Using JSON ');
            console.log(JSON.stringify(this.proposedInsured.value));
            Object.keys(this.proposedInsured.controls).forEach(key => {
              let value = this.proposedInsured.get(key).value;
              attributes.forEach(function (data) {
                if (data.name == key) {
                  //console.log(key+' '+value);
                  data.value = value;
                  //console.log('attributes value  ' + data.value);
                }
              });
            }) */
        this.service.postProposedInsured(JSON.parse(JSON.stringify(this.proposedInsured.value))).subscribe();
        this.logValidationError(this.proposedInsured);
    };
    ProposedInsuredComponent.prototype.getDetails = function (propInsured) {
        var _this = this;
        /* let proposedInsuredMap = new Map();
        Object.keys(propInsured.controls).forEach(key => {
          //let  value = this.gettingStarted.get(key).value;
          attributes.forEach(function (data) {
            if (data.name == key) {
              //console.log(data.name + ' ' + data.value);
              proposedInsuredMap.set(data.name, data.value);
            }
          });
        })
        this.proposedInsured.patchValue({
          prefix: proposedInsuredMap.get("prefix"),
          firstName: proposedInsuredMap.get("firstName"),
          middleName: proposedInsuredMap.get("middleName"),
          lastName: proposedInsuredMap.get("lastName"),
          permanentAddress: proposedInsuredMap.get("permanentAddress"),
          dateofBirth: proposedInsuredMap.get("dateofBirth"),
          ssn: proposedInsuredMap.get("ssn"),
        }) */
        var observable = this.service.getProposedInsured();
        var observer = {
            next: function (x) {
                _this.proposedInsured.patchValue({
                    prefix: x.prefix,
                    firstName: x.firstName,
                    middleName: x.middleName,
                    lastName: x.lastName,
                    permanentAddress: x.permanentAddress,
                    dateofBirth: x.dateofBirth,
                    ssn: x.ssn
                });
            }
        };
        observable.subscribe(observer);
    };
    ProposedInsuredComponent.prototype.onPrev = function () {
        var value = "getting-started";
        this.prevScreen.emit(value);
    };
    ProposedInsuredComponent.prototype.onNext = function () {
        var value = "proposed-insured";
        if (this.isOwner) {
            value = "owner";
        }
        else {
            value = "existing-applied";
        }
        this.nextScreen.emit(value);
    };
    ProposedInsuredComponent.prototype.logValidationError = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractcontrol = group.get(key);
            _this.proposedInsuredErrors[key] = '';
            if (abstractcontrol && !abstractcontrol.valid) {
                _this.proposedInsuredErrors[key] = _this.validationMessages[key];
            }
        });
        this.service.postProposed_InsuredServerError(JSON.parse(JSON.stringify(this.proposedInsuredErrors))).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProposedInsuredComponent.prototype, "selectedScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposedInsuredComponent.prototype, "prevScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposedInsuredComponent.prototype, "nextScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('isOwner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProposedInsuredComponent.prototype, "isOwner", void 0);
    ProposedInsuredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposed-insured',
            template: __webpack_require__(/*! ./proposed-insured.component.html */ "./src/app/screens/proposed-insured/proposed-insured.component.html"),
            styles: [__webpack_require__(/*! ../css/all-screens.css */ "./src/app/screens/css/all-screens.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_screen_service_service__WEBPACK_IMPORTED_MODULE_3__["ScreenServiceService"]])
    ], ProposedInsuredComponent);
    return ProposedInsuredComponent;
}());



/***/ }),

/***/ "./src/app/screens/screens.component.css":
/*!***********************************************!*\
  !*** ./src/app/screens/screens.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n  float: left;\r\n  width: 20%;\r\n}\r\n.screens {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.screens li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n   /* background-color: #EEE; */\r\n    background-color: #607D8B;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    position: relative;\r\n    line-height: 1 em;\r\n  }\r\n.screens li:hover {\r\n    color: #607D8B;\r\n    background-color: rgb(215, 236, 20);\r\n    left: .1em;\r\n  }\r\n.screens .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: absolute;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVucy9zY3JlZW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztHQUNSLDRCQUE0QjtJQUMzQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsVUFBVTtFQUNaO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NjcmVlbnMvc2NyZWVucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuLnNjcmVlbnMge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG4gIC5zY3JlZW5zIGxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNFRUU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEgZW07XHJcbiAgfVxyXG4gIC5zY3JlZW5zIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjM2LCAyMCk7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAuc2NyZWVucyAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/screens/screens.component.html":
/*!************************************************!*\
  !*** ./src/app/screens/screens.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<ul class=\"screens\">\n<li *ngFor=\"let screen of screens\"  (click)=\"OnSelectedScreen(screen)\">{{screen.name}}</li>\n\n   <!-- <span (click)=\"OnSelectedScreen(screen)\" class=\"badge\">{{screen.name}}</span>  -->\n\n  \n</ul>\n</div>\n<div *ngIf = \"selectedScreen\">\n<div [ngSwitch] = \"selectedScreen\">\n<app-getting-started  *ngSwitchCase=\"'getting-started'\" [selectedScreen]=\"selectedScreen\" (PIotherThanOwn)=\"IsPIOtherThanOwn($event)\" (nextScreen)=\"changeNextScreen($event)\"></app-getting-started>\n<app-proposed-insured *ngSwitchCase=\"'proposed-insured'\" [isOwner]=\"PIOtherOwn\" (prevScreen)=\"changePrevScreen($event)\" (nextScreen)=\"changeNextScreen($event)\"></app-proposed-insured>\n<app-owner *ngSwitchCase=\"'owner'\" (prevScreen)=\"changePrevScreen($event)\" (nextScreen)=\"changeNextScreen($event)\"></app-owner>\n<app-existing-applied *ngSwitchCase=\"'existing-applied'\" [isOwner]=\"PIOtherOwn\" (prevScreen)=\"changePrevScreen($event)\" (nextScreen)=\"changeNextScreen($event)\"></app-existing-applied>\n<app-premium *ngSwitchCase=\"'premium'\" (prevScreen)=\"changePrevScreen($event)\"></app-premium>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/screens/screens.component.ts":
/*!**********************************************!*\
  !*** ./src/app/screens/screens.component.ts ***!
  \**********************************************/
/*! exports provided: ScreensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreensComponent", function() { return ScreensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screen */ "./src/app/screen.ts");
/* harmony import */ var _all_screens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-screens */ "./src/app/all-screens.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/screens/getting-started/getting-started.component.ts");
/* harmony import */ var _proposed_insured_proposed_insured_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proposed-insured/proposed-insured.component */ "./src/app/screens/proposed-insured/proposed-insured.component.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/screens/owner/owner.component.ts");
/* harmony import */ var _premium_premium_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./premium/premium.component */ "./src/app/screens/premium/premium.component.ts");
/* harmony import */ var _existing_applied_existing_applied_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./existing-applied/existing-applied.component */ "./src/app/screens/existing-applied/existing-applied.component.ts");









var ScreensComponent = /** @class */ (function () {
    function ScreensComponent() {
        //nextScreen : String;
        this.screens = _all_screens__WEBPACK_IMPORTED_MODULE_3__["SCREENS"];
        this.ownerScreen = new _screen__WEBPACK_IMPORTED_MODULE_2__["Screen"]('owner', 'owner');
    }
    ScreensComponent.prototype.ngOnInit = function () {
        this.PIOtherOwn = false;
        this.selectedScreen = "getting-started";
    };
    /*   ngOnChanges(changes: SimpleChanges): void {
       console.log('In ngOnchanges in Screens ............');
       for(let name in changes){
         console.log('name :'+changes[name].currentValue);
         console.log('isFirstChange :'+changes[name].isFirstChange);
         console.log('previous value :'+changes[name].previousValue);
         console.log('firstchange :'+changes[name].firstChange);
       }
       
      } */
    /*   ngDoCheck(): void {
        console.log('Im Do check  '+this.selectedScreen);
      } */
    ScreensComponent.prototype.OnSelectedScreen = function (screen) {
        var prev_screen = this.selectedScreen;
        this.selectedScreen = screen.id;
        this.saveDetails(prev_screen);
    };
    ScreensComponent.prototype.saveDetails = function (screen) {
        /*     if(screen == "getting-started")
            this.gettingStartedComponent.saveDetails();
            if(screen == "proposed-insured")
            this.proposedInsuredComponent.saveDetails(); */
        //console.log('all details saved');
        switch (screen) {
            case "getting-started": {
                this.gettingStartedComponent.saveDetails();
                break;
            }
            case "proposed-insured": {
                this.proposedInsuredComponent.saveDetails();
                break;
            }
            case "owner": {
                this.ownerComponent.saveDetails();
                break;
            }
            case "existing-applied": {
                this.existingAppliedComponent.saveDetails();
                break;
            }
            case "premium": {
                this.premiumComponent.saveDetails();
            }
        }
    };
    ScreensComponent.prototype.IsPIOtherThanOwn = function (PIOtherOwn) {
        if (PIOtherOwn == "Yes") {
            this.PIOtherOwn = true;
            if (!this.screens.includes(this.ownerScreen)) {
                this.screens.splice(2, 0, this.ownerScreen);
            }
        }
        else {
            this.PIOtherOwn = false;
            // this.ownerComponent.ownersArray
            if (this.screens.includes(this.ownerScreen))
                this.screens.splice(2, 1);
        }
    };
    ScreensComponent.prototype.changeNextScreen = function (nextScreen) {
        var prev_screen = this.selectedScreen;
        this.selectedScreen = nextScreen;
        this.saveDetails(prev_screen);
    };
    ScreensComponent.prototype.changePrevScreen = function (prevScreen) {
        var prev_screen = this.selectedScreen;
        this.selectedScreen = prevScreen;
        this.saveDetails(prev_screen);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"])
    ], ScreensComponent.prototype, "gettingStartedComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_proposed_insured_proposed_insured_component__WEBPACK_IMPORTED_MODULE_5__["ProposedInsuredComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _proposed_insured_proposed_insured_component__WEBPACK_IMPORTED_MODULE_5__["ProposedInsuredComponent"])
    ], ScreensComponent.prototype, "proposedInsuredComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_owner_owner_component__WEBPACK_IMPORTED_MODULE_6__["OwnerComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _owner_owner_component__WEBPACK_IMPORTED_MODULE_6__["OwnerComponent"])
    ], ScreensComponent.prototype, "ownerComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_premium_premium_component__WEBPACK_IMPORTED_MODULE_7__["PremiumComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _premium_premium_component__WEBPACK_IMPORTED_MODULE_7__["PremiumComponent"])
    ], ScreensComponent.prototype, "premiumComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_existing_applied_existing_applied_component__WEBPACK_IMPORTED_MODULE_8__["ExistingAppliedComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _existing_applied_existing_applied_component__WEBPACK_IMPORTED_MODULE_8__["ExistingAppliedComponent"])
    ], ScreensComponent.prototype, "existingAppliedComponent", void 0);
    ScreensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-screens',
            template: __webpack_require__(/*! ./screens.component.html */ "./src/app/screens/screens.component.html"),
            styles: [__webpack_require__(/*! ./screens.component.css */ "./src/app/screens/screens.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScreensComponent);
    return ScreensComponent;
}());



/***/ }),

/***/ "./src/app/services/screen-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/screen-service.service.ts ***!
  \****************************************************/
/*! exports provided: ScreenServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenServiceService", function() { return ScreenServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//import {attributes} from './all-attributes';
var ScreenServiceService = /** @class */ (function () {
    function ScreenServiceService(http) {
        this.http = http;
        this.baseUrl = 'http://20.198.11.75:3002/';
    }
    ScreenServiceService.prototype.partialSave = function (attributes) {
        return this.http.post("" + this.baseUrl, attributes);
    };
    ScreenServiceService.prototype.postGettingStarted = function (attributes) {
        console.log('post gettingstarted from service ' + attributes);
        return this.http.post(this.baseUrl + 'getting_started', attributes);
    };
    ScreenServiceService.prototype.postOwner = function (attributes) {
        console.log('post owner from service ' + attributes);
        return this.http.post(this.baseUrl + 'owners', attributes);
    };
    ScreenServiceService.prototype.putOwner = function (attributes, index) {
        console.log('put owner from service ' + attributes);
        return this.http.put(this.baseUrl + 'owners/' + index, attributes);
    };
    ScreenServiceService.prototype.deleteOwner = function (index) {
        console.log('delete owner from index ' + index);
        return this.http.delete(this.baseUrl + 'owners/' + index);
    };
    ScreenServiceService.prototype.postProposedInsured = function (attributes) {
        console.log('post proposed insured from service ' + attributes);
        return this.http.post(this.baseUrl + 'proposed_Insured', attributes);
    };
    ScreenServiceService.prototype.postExistingApplied = function (attributes) {
        console.log('post existing from service ' + attributes);
        return this.http.post(this.baseUrl + 'existingApplied', attributes);
    };
    ScreenServiceService.prototype.postPremium = function (attributes) {
        console.log('post premium from service ' + attributes);
        return this.http.post(this.baseUrl + 'premium', attributes);
    };
    ScreenServiceService.prototype.getGettingStarted = function () {
        return this.http.get(this.baseUrl + 'getting_started');
    };
    ScreenServiceService.prototype.getProposedInsured = function () {
        return this.http.get(this.baseUrl + 'proposed_Insured');
    };
    ScreenServiceService.prototype.getOwner = function () {
        return this.http.get(this.baseUrl + 'owners');
    };
    ScreenServiceService.prototype.getExistingApplied = function () {
        return this.http.get(this.baseUrl + 'existingApplied');
    };
    ScreenServiceService.prototype.getPremium = function () {
        return this.http.get(this.baseUrl + 'premium');
    };
    ScreenServiceService.prototype.getGettingStartedServerError = function () {
        return this.http.get(this.baseUrl + 'gettingStarted_Error');
    };
    ScreenServiceService.prototype.getProposed_InsuredServerError = function () {
        return this.http.get(this.baseUrl + 'proposed_Insured_Error');
    };
    ScreenServiceService.prototype.getownerServerError = function () {
        return this.http.get(this.baseUrl + 'owner_Error');
    };
    ScreenServiceService.prototype.getexistingAppliedServerError = function () {
        return this.http.get(this.baseUrl + 'existingApplied_Error');
    };
    ScreenServiceService.prototype.getPremiumServerError = function () {
        return this.http.get(this.baseUrl + 'premium_Error');
    };
    ScreenServiceService.prototype.postGettingStartedServerError = function (errors) {
        console.log('postServerError success');
        return this.http.post(this.baseUrl + 'gettingStarted_Error', errors);
    };
    ScreenServiceService.prototype.postProposed_InsuredServerError = function (errors) {
        console.log('postServerError success');
        return this.http.post(this.baseUrl + 'proposed_Insured_Error', errors);
    };
    ScreenServiceService.prototype.postOwnerServerError = function (errors) {
        console.log('postServerError Owner success' + JSON.stringify(errors));
        return this.http.post(this.baseUrl + 'owner_Error', errors);
    };
    ScreenServiceService.prototype.putOwnerServerError = function (errors, index) {
        console.log('putServerError Owner success');
        return this.http.put(this.baseUrl + 'owner_Error/' + index, errors);
    };
    ScreenServiceService.prototype.deleteOwnerServerError = function (index) {
        console.log('delete ServerError success');
        return this.http.delete(this.baseUrl + 'owner_Error/' + index);
    };
    ScreenServiceService.prototype.postexistingAppliedServerError = function (errors) {
        console.log('postServerError success');
        return this.http.post(this.baseUrl + 'existingApplied_Error', errors);
    };
    ScreenServiceService.prototype.postPremiumServerError = function (errors) {
        console.log('postServerError success');
        return this.http.post(this.baseUrl + 'premium_Error', errors);
    };
    ScreenServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ScreenServiceService);
    return ScreenServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular workspace\chota-eApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map