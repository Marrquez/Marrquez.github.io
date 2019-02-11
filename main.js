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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_restore_restore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/restore/restore.component */ "./src/app/components/restore/restore.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * components
 * */



var routes = [
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'home',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'restore',
        component: _components_restore_restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"]
    },
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: '**',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

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
        this.title = 'adp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_domain_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/domain.service */ "./src/app/services/domain.service.ts");
/* harmony import */ var _pipes_get_links_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/get-links.pipe */ "./src/app/pipes/get-links.pipe.ts");
/* harmony import */ var _pipes_get_domains_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/get-domains.pipe */ "./src/app/pipes/get-domains.pipe.ts");
/* harmony import */ var _pipes_link_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/link-sanitizer.pipe */ "./src/app/pipes/link-sanitizer.pipe.ts");
/* harmony import */ var _components_restore_restore_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/restore/restore.component */ "./src/app/components/restore/restore.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _pipes_get_links_pipe__WEBPACK_IMPORTED_MODULE_15__["GetLinksPipe"],
                _pipes_get_domains_pipe__WEBPACK_IMPORTED_MODULE_16__["GetDomainsPipe"],
                _pipes_link_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_17__["LinkSanitizerPipe"],
                _components_restore_restore_component__WEBPACK_IMPORTED_MODULE_18__["RestoreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_domain_service__WEBPACK_IMPORTED_MODULE_14__["DomainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"row\" *ngIf=\"this.authService.data.logged\">\n  <div class=\"actions col-sm-12 col-lg-12\" *ngIf=\"this.authService.data.admin\">\n    <div (click)=\"addDomain()\" class=\"add-btn\">Agregar dominio</div>\n    <span class=\"msg success\">{{ successMsg }}</span>\n    <span class=\"msg error\">{{ errorMsg }}</span>\n    <button (click)=\"saveData()\">\n      <i class=\"far fa-save\"></i>\n      Guardar\n    </button>\n  </div>\n  <div class=\"left-bar col-sm-3 col-lg-3\">\n    <br />\n    <ng-container *ngFor=\"let item of items\">\n      <div class=\"domain\"\n           [ngClass]=\"{'selected':item.selected==true && domain.currentItem==item.id }\"\n           (click)=\"focusElement(item.id)\"\n      >\n        <input  type=\"text\"\n                placeholder=\"Nombre...\"\n                [(ngModel)]=item.name\n                [value]=\"item.name\"\n                [disabled]=\"!this.authService.data.admin\"\n                >\n        <i class=\"fa fa-trash\" (click)=\"removeItem(item.id)\" *ngIf=\"this.authService.data.admin\"></i>\n        <i class=\"fa fa-plus\" (click)=\"addLink(item.id)\" *ngIf=\"this.authService.data.admin\"></i>\n        <i class=\"fa fa-eye\" (click)=\"viewLinks(item.id)\"></i>\n      </div>\n    </ng-container>\n    <br />\n  </div>\n  <div class=\"right-bar col-sm-9 col-lg-9\">\n    <div *ngFor=\"let subitem of items | getLinks\" class=\"card\" style=\"width: 18rem;\">\n      <i (click)=\"removeSubItem(subitem.id)\" class=\"fa fa-trash\" *ngIf=\"this.authService.data.admin\"></i>\n      <iframe [src]=\"subitem.link | linkSanitizer\" width=\"199\" height=\"125\"></iframe>\n      <div class=\"card-body\">\n        <input type=\"text\"\n               placeholder=\"Click aquí para editar\"\n               [(ngModel)]=\"subitem.link\"\n               *ngIf=\"this.authService.data.admin\"\n                  />\n        <a *ngIf=\"subitem.link != ''\" href=\"{{subitem.link}}\" target=\"_blank\" class=\"btn btn-small btn-blue\">Visitar sitio</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"empty row\" *ngIf=\"!this.authService.data.logged\">\n  <div>\n    <p class=\"small\">\n      Lo sentimos, usted no se encuentra autorizado para ver esta página.\n    </p>\n    <p class=\"small\">\n      Por favor contacte al Administrador del sistema o Inicia sesión.\n    </p>\n    <button class=\"btn btn-small btn-blue\" (click)=\"navigate('login')\">Iniciar sesión</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .empty.row {\n  min-height: 300px; }\n  :host .empty.row div {\n    text-align: center;\n    width: 100%; }\n  :host .error {\n  color: #D01D13;\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  margin: 0 10px;\n  display: block;\n  float: left;\n  padding: 0 10px;\n  font-style: italic;\n  border-radius: 3px; }\n  :host .success {\n  color: #006DA7;\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  margin: 0 10px;\n  display: block;\n  float: left;\n  padding: 0 10px;\n  font-style: italic;\n  border-radius: 3px; }\n  :host .actions button {\n  color: #3F8DBF;\n  float: right;\n  font-size: 14px;\n  padding: 0 0 0 30px;\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n  width: 100px; }\n  :host .actions button i {\n    box-sizing: border-box;\n    color: #3F8DBF;\n    cursor: pointer;\n    font-size: 16px;\n    height: 30px;\n    line-height: 30px;\n    left: 0;\n    line-height: 30px;\n    position: absolute;\n    right: auto;\n    text-align: center;\n    top: 0;\n    width: 30px; }\n  :host .actions .add-btn {\n  background-color: #3F8DBF !important;\n  color: #FFF !important;\n  cursor: pointer;\n  font-size: 14px;\n  float: left;\n  height: 30px;\n  line-height: 30px;\n  margin: 0 5px;\n  text-align: center;\n  width: 130px; }\n  :host .right-bar {\n  background: #FFF;\n  padding-bottom: 10px;\n  margin-top: 5px;\n  min-height: 350px; }\n  :host .right-bar .card {\n    background: #F8F8F8;\n    border: 0.5px solid #CECECE;\n    border-radius: 0;\n    float: left;\n    margin: 10px 5px 0 5px;\n    max-width: 200px;\n    min-height: 222px;\n    padding: 0; }\n  :host .right-bar .card .card-body input {\n      background: transparent;\n      border: none;\n      color: #444;\n      font-size: 12px;\n      height: 25px;\n      width: 160px; }\n  :host .right-bar .card .card-body input:focus {\n      background: #fff;\n      border: 0.5px solid #ddd;\n      font-style: italic;\n      outline: none;\n      padding: 0 8px; }\n  :host .right-bar .card i {\n      border: 0.5px solid #fff;\n      border-radius: 50%;\n      cursor: pointer;\n      color: #fff;\n      font-size: 13px;\n      height: 30px;\n      line-height: 30px;\n      position: absolute;\n      right: 5px;\n      text-align: center;\n      top: 5px;\n      width: 30px; }\n  :host .right-bar .card i.fa-trash {\n      border: 1px solid #D74F28 !important;\n      color: #D74F28 !important;\n      background: #fff; }\n  :host .left-bar .domain.selected input {\n  border: 1px solid #3F8DBF;\n  box-shadow: 0px 0px 4px 0px #3f8dbf; }\n  :host .left-bar .domain {\n  padding: 5px;\n  position: relative; }\n  :host .left-bar .domain input {\n    color: #73879C;\n    font-size: 14px;\n    height: 32px;\n    padding: 0 60px 0 10px;\n    width: 100%; }\n  :host .left-bar .domain input:focus {\n    font-style: italic; }\n  :host .left-bar .domain i {\n    cursor: pointer;\n    font-size: 12px;\n    height: 32px;\n    line-height: 32px;\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    text-align: center;\n    width: 25px; }\n  :host .left-bar .domain i.fa-plus {\n    right: 60px; }\n  :host .left-bar .domain i.fa-eye {\n    right: 10px; }\n  :host .left-bar .domain i.fa-trash {\n    color: #D74F28 !important;\n    right: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmlzdGlhbm9sYXlhL1dlYnN0b3JtUHJvamVjdHMvYWRwL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWlCLEVBTWxCO0VBUkg7SUFLTSxtQkFBa0I7SUFDbEIsWUFBVyxFQUNaO0VBUEw7RUFXSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBYztFQUNkLFlBQVc7RUFDWCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7RUF0Qkg7RUF5QkksZUFBYztFQUNkLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGVBQWM7RUFDZCxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25CO0VBcENIO0VBd0NNLGVBQWM7RUFDZCxhQUFXO0VBQ1gsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsYUFBWSxFQWlCYjtFQWhFTDtJQWtEUSx1QkFBc0I7SUFDdEIsZUFBYztJQUNkLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLFFBQU87SUFDUCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFlBQVcsRUFDWjtFQS9EUDtFQW9FTSxxQ0FBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGFBQVksRUFDYjtFQTlFTDtFQWtGSSxpQkFBZ0I7RUFDaEIscUJBQW9CO0VBQ3BCLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBb0RsQjtFQXpJSDtJQXdGTSxvQkFBbUI7SUFDbkIsNEJBQTJCO0lBQzNCLGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gsdUJBQXNCO0lBQ3RCLGlCQUFnQjtJQUNoQixrQkFBaUI7SUFDakIsV0FBVSxFQXlDWDtFQXhJTDtNQW1HVSx3QkFBdUI7TUFDdkIsYUFBVztNQUNYLFlBQVc7TUFDWCxnQkFBZTtNQUNmLGFBQVk7TUFDWixhQUFZLEVBQ2I7RUF6R1Q7TUE0R1UsaUJBQWdCO01BQ2hCLHlCQUF1QjtNQUN2QixtQkFBa0I7TUFDbEIsY0FBWTtNQUNaLGVBQWMsRUFDZjtFQWpIVDtNQXFIUSx5QkFBd0I7TUFDeEIsbUJBQWtCO01BQ2xCLGdCQUFlO01BQ2YsWUFBVztNQUNYLGdCQUFlO01BQ2YsYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixtQkFBaUI7TUFDakIsV0FBVTtNQUNWLG1CQUFpQjtNQUNqQixTQUFRO01BQ1IsWUFBVyxFQUNaO0VBaklQO01Bb0lRLHFDQUFvQztNQUNwQywwQkFBeUI7TUFDekIsaUJBQWdCLEVBQ2pCO0VBdklQO0VBOElRLDBCQUF5QjtFQUd6QixvQ0FBOEMsRUFDL0M7RUFsSlA7RUFzSk0sYUFBWTtFQUNaLG1CQUFrQixFQXNDbkI7RUE3TEw7SUEwSlEsZUFBYztJQUNkLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixZQUFXLEVBQ1o7RUEvSlA7SUFrS1EsbUJBQWtCLEVBQ25CO0VBbktQO0lBc0tRLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsU0FBUTtJQUNSLG1CQUFrQjtJQUNsQixZQUFXLEVBQ1o7RUEvS1A7SUFrTFEsWUFBVyxFQUNaO0VBbkxQO0lBc0xRLFlBQVcsRUFDWjtFQXZMUDtJQTBMUSwwQkFBeUI7SUFDekIsWUFBVyxFQUNaIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5lbXB0eS5yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuXG4gICAgZGl2IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgY29sb3I6ICNEMDFEMTM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAuc3VjY2VzcyB7XG4gICAgY29sb3I6ICMwMDZEQTc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAjM0Y4REJGO1xuICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG5cbiAgICAgIGkge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBjb2xvcjogIzNGOERCRjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAuYWRkLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y4REJGICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJpZ2h0LWJhciB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG5cbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0VDRUNFO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luOiAxMHB4IDVweCAwIDVweDtcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAyMjJweDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3JkZXI6MC41cHggc29saWQgI2RkZDtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgb3V0bGluZTpub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgIH1cblxuICAgICAgaS5mYS10cmFzaCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENzRGMjggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNENzRGMjggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGVmdC1iYXIge1xuICAgIC5kb21haW4uc2VsZWN0ZWQge1xuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y4REJGO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCByZ2JhKDYzLDE0MSwxOTEsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoNjMsMTQxLDE5MSwxKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoNjMsMTQxLDE5MSwxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZG9tYWluIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaW5wdXQge1xuICAgICAgICBjb2xvcjogIzczODc5QztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNjBweCAwIDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgfVxuXG4gICAgICBpLmZhLXBsdXMge1xuICAgICAgICByaWdodDogNjBweDtcbiAgICAgIH1cblxuICAgICAgaS5mYS1leWUge1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgaS5mYS10cmFzaCB7XG4gICAgICAgIGNvbG9yOiAjRDc0RjI4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/domain.service */ "./src/app/services/domain.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * services
 * */


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(domain, authService) {
        var _this = this;
        this.domain = domain;
        this.authService = authService;
        this.items = [];
        this.documentId = "lM4ZE7zpppIC7UMMMZPc";
        this.successMsg = "";
        this.errorMsg = "";
        this.domain.currentItem = "";
        this.domain.getDomains().subscribe(function (domainsSnapshot) {
            domainsSnapshot.forEach(function (domainData) {
                _this.items = domainData.payload.doc.data().dList ? JSON.parse(domainData.payload.doc.data().dList) : [];
                _this.authService.data.admin = _this.authService.data.email === domainData.payload.doc.data().admin;
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.addItem = function () {
        this.items.push({ id: this.getID(), link: '' });
    };
    DashboardComponent.prototype.removeSubItem = function (id) {
        var self = this;
        this.items.filter(function (item) {
            if (item.id === self.domain.currentItem) {
                item.elements = item.elements.filter(function (ele) {
                    return ele.id != id;
                });
            }
        });
    };
    DashboardComponent.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (ele) {
            return ele.id != id;
        });
    };
    DashboardComponent.prototype.getID = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    DashboardComponent.prototype.addDomain = function () {
        this.items.push({ id: this.getID(), elements: [], name: '', selected: false });
    };
    DashboardComponent.prototype.addLink = function (id) {
        var self = this;
        this.items.filter(function (ele) {
            if (ele.id === id) {
                ele.selected = true;
                ele.elements.push({ id: self.getID(), link: '' });
            }
            else {
                ele.selected = false;
            }
        });
        this.domain.currentItem = id;
    };
    DashboardComponent.prototype.viewLinks = function (id) {
        this.items.filter(function (ele) {
            if (ele.id === id) {
                ele.selected = true;
            }
            else {
                ele.selected = false;
            }
        });
        this.domain.currentItem = id;
    };
    DashboardComponent.prototype.saveData = function () {
        var _this = this;
        var data = {
            dList: JSON.stringify(this.items),
            admin: this.authService.data.email
        };
        this.domain.updateDomains(this.documentId, data).then(function () {
            _this.successMsg = "¡Los datos se han guardado correctamente!";
            _this.errorMsg = "";
            setTimeout(function () {
                this.successMsg = "";
            }.bind(_this), 4000);
        }, function (error) {
            _this.successMsg = "";
            _this.errorMsg = "Ha habido un error en el guardado de los datos";
            setTimeout(function () {
                this.errorMsg = "";
            }.bind(_this), 4000);
        });
    };
    DashboardComponent.prototype.focusElement = function (id) {
        this.items.filter(function (ele) {
            if (ele.id === id) {
                ele.selected = true;
            }
            else {
                ele.selected = false;
            }
        });
        this.domain.currentItem = id;
    };
    DashboardComponent.prototype.navigate = function (view) {
        this.authService.navigate(view);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"dark-bg\">\n  <div class=\"container inner\">\n    <div class=\"row\">\n\n      <div class=\"col-md-3 col-sm-6 inner\">\n        <h4>Más información</h4>\n        <p>Centro de servicios:</p>\n        <p><i class=\"fas fa-envelope contact\"></i><span> centrodeservicios@ssf.gov.co</span></p>\n        <p>@Copyright 2018</p>\n      </div><!-- /.col -->\n\n      <div class=\"col-md-3 col-sm-6 inner\">\n        <h4>Contacto</h4>\n        <span>Línea de atención al ciudadano.</span>\n        <ul class=\"contacts\">\n          <li><i class=\"fas fa-mobile-alt contact\"></i> +57 (1) 348 77 77</li>\n        </ul><!-- /.contacts -->\n        <span>Línea gratuita nacional.</span>\n        <ul class=\"contacts\">\n          <li><i class=\"fas fa-mobile-alt contact\"></i> 018000910110</li>\n          <li><i class=\"fas fa-mobile-alt contact\"></i> PBX: +57 (1) 348 78 00</li>\n          <li><i class=\"fas fa-mobile-alt contact\"></i> FAX: +57 (1) 348 78 04</li>\n        </ul><!-- /.contacts -->\n      </div><!-- /.col -->\n\n      <div class=\"col-md-3 col-sm-6 inner\">\n        <h4>Sedes</h4>\n        <span>Principal:</span>\n        <ul class=\"contacts\">\n          <li><i class=\"fas fa-map-marker-alt contact\"></i> Carrera 69 NO. 25B-44, Bogotá, Colombia</li>\n        </ul><!-- /.contacts -->\n        <span>Atención al ciudadano:</span>\n        <ul class=\"contacts\">\n          <li><i class=\"fas fa-map-marker-alt contact\"></i> Calle 26 NO. 57-41, Torre 8 Piso 15 y 16, Bogotá, Colombia</li>\n        </ul><!-- /.contacts -->\n        <span>Horario de atención:</span>\n        <ul class=\"contacts\">\n          <li><i class=\"far fa-clock contact\"></i> Lunes a Viernes de 7:00AM a 4:00 PM</li>\n        </ul><!-- /.contacts -->\n      </div><!-- /.col -->\n\n      <div class=\"col-md-3 col-sm-6 inner\">\n        <div class=\"row thumbs gap-xs\">\n          <div class=\"col-xs-6 col-sm-5 thumb\">\n            <figure class=\"icon-overlay icn-link\">\n              <a><span class=\"icn-more\"></span><img src=\"./assets/images/iso_9001.png\" alt=\"\"></a>\n            </figure>\n          </div><!-- /.thumb -->\n          <div class=\"col-xs-6 col-sm-5 thumb\">\n            <figure class=\"icon-overlay icn-link\">\n              <a><span class=\"icn-more\"></span><img src=\"./assets/images/iso_14001.png\" alt=\"\"></a>\n            </figure>\n          </div><!-- /.thumb -->\n          <div class=\"col-xs-6 col-sm-5 thumb\">\n            <figure class=\"icon-overlay icn-link\">\n              <a><span class=\"icn-more\"></span><img src=\"./assets/images/iq_net.png\" alt=\"\"></a>\n            </figure>\n          </div><!-- /.thumb -->\n          <div class=\"col-xs-6 col-sm-5 thumb\">\n            <figure class=\"icon-overlay icn-link\">\n              <a><span class=\"icn-more\"></span><img src=\"./assets/images/col_logo.png\" alt=\"\"></a>\n            </figure>\n          </div><!-- /.thumb -->\n        </div><!-- /.row -->\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n  </div><!-- .container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n:host .dark-bg {\n  background-color: #3F8DBF; }\n:host footer {\n  font-size: 14px;\n  line-height: 22px; }\n:host footer.dark-bg {\n  color: #fff; }\n:host footer .inner {\n  padding-top: 45px;\n  padding-bottom: 35px; }\n:host footer .container > .row {\n  margin-left: -25px;\n  margin-right: -25px; }\n:host footer .row .inner {\n  padding: 25px; }\n:host footer .logo {\n  height: auto;\n  max-height: 100%; }\n:host footer h4 {\n  text-transform: uppercase;\n  margin-bottom: 20px; }\n:host footer p {\n  margin-bottom: 15px; }\n:host .footer-menu {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n:host .footer-menu li {\n  display: inline;\n  padding-left: 10px; }\n:host .footer-menu li:before {\n  display: inline-block;\n  content: \"·\";\n  padding-right: 12px; }\n:host .footer-menu li:first-child:before {\n  display: none; }\n:host .footer-bottom {\n  background: #283645;\n  color: #707E8C; }\n:host .footer-bottom .container.inner {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n:host .footer-bottom p,\n:host .footer-bottom a {\n  color: #707E8C; }\n:host .footer-bottom p {\n  padding: 0;\n  margin: 0; }\n:host .dark-bg,\n:host .dark-bg p,\n:host .dark-bg .item-details li:before {\n  color: #FBFBFB; }\n:host .dark-bg h1,\n:host .dark-bg h2,\n:host .dark-bg h3,\n:host .dark-bg h4 {\n  color: #FFF; }\n:host .dark-bg .widget h1,\n:host .dark-bg .widget h2,\n:host .dark-bg .widget h3,\n:host .dark-bg .widget h4 {\n  color: #FFF; }\n:host .thumb {\n  background: #FBFBFB;\n  margin: 5px;\n  height: 80px;\n  line-height: 80px;\n  width: 80px; }\n:host .thumb figure {\n    margin-left: auto;\n    margin-right: auto;\n    width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvY3Jpc3RpYW5vbGF5YS9XZWJzdG9ybVByb2plY3RzL2FkcC9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFFSSwwQkFBeUIsRUFDMUI7QUFISDtFQU1JLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCO0FBUkg7RUFVSSxZQUFXLEVBQ1o7QUFYSDtFQWFJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDckI7QUFmSDtFQWlCSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCO0FBbkJIO0VBcUJJLGNBQWEsRUFDZDtBQXRCSDtFQXdCSSxhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCO0FBMUJIO0VBNEJJLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7QUE5Qkg7RUFnQ0ksb0JBQW1CLEVBQ3BCO0FBakNIO0VBbUNJLFdBQVU7RUFDVixVQUFTO0VBQ1QsaUJBQWdCLEVBQ2pCO0FBdENIO0VBd0NJLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25CO0FBMUNIO0VBNENJLHNCQUFxQjtFQUNyQixhQUFZO0VBQ1osb0JBQW1CLEVBQ3BCO0FBL0NIO0VBaURJLGNBQWEsRUFDZDtBQWxESDtFQW9ESSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNmO0FBdERIO0VBd0RJLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDckI7QUExREg7O0VBNkRJLGVBQWMsRUFDZjtBQTlESDtFQWdFSSxXQUFVO0VBQ1YsVUFBUyxFQUNWO0FBbEVIOzs7RUF1RUksZUFBYyxFQUNmO0FBeEVIOzs7O0VBNkVJLFlBQVcsRUFDWjtBQTlFSDs7OztFQW1GSSxZQUFXLEVBQ1o7QUFwRkg7RUF1Rkksb0JBQW1CO0VBQ25CLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLFlBQVcsRUFPWjtBQWxHSDtJQThGTSxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDWiIsImZpbGUiOiJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3QgLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y4REJGOyB9XG5cbjpob3N0IGZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7IH1cblxuOmhvc3QgZm9vdGVyLmRhcmstYmcge1xuICBjb2xvcjogI2ZmZjsgfVxuXG46aG9zdCBmb290ZXIgLmlubmVyIHtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4OyB9XG5cbjpob3N0IGZvb3RlciAuY29udGFpbmVyID4gLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjVweDsgfVxuXG46aG9zdCBmb290ZXIgLnJvdyAuaW5uZXIge1xuICBwYWRkaW5nOiAyNXB4OyB9XG5cbjpob3N0IGZvb3RlciAubG9nbyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxuXG46aG9zdCBmb290ZXIgaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbjpob3N0IGZvb3RlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG46aG9zdCAuZm9vdGVyLW1lbnUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuOmhvc3QgLmZvb3Rlci1tZW51IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cblxuOmhvc3QgLmZvb3Rlci1tZW51IGxpOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogXCLCt1wiO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4OyB9XG5cbjpob3N0IC5mb290ZXItbWVudSBsaTpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbjpob3N0IC5mb290ZXItYm90dG9tIHtcbiAgYmFja2dyb3VuZDogIzI4MzY0NTtcbiAgY29sb3I6ICM3MDdFOEM7IH1cblxuOmhvc3QgLmZvb3Rlci1ib3R0b20gLmNvbnRhaW5lci5pbm5lciB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDsgfVxuXG46aG9zdCAuZm9vdGVyLWJvdHRvbSBwLFxuOmhvc3QgLmZvb3Rlci1ib3R0b20gYSB7XG4gIGNvbG9yOiAjNzA3RThDOyB9XG5cbjpob3N0IC5mb290ZXItYm90dG9tIHAge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuOmhvc3QgLmRhcmstYmcsXG46aG9zdCAuZGFyay1iZyBwLFxuOmhvc3QgLmRhcmstYmcgLml0ZW0tZGV0YWlscyBsaTpiZWZvcmUge1xuICBjb2xvcjogI0ZCRkJGQjsgfVxuXG46aG9zdCAuZGFyay1iZyBoMSxcbjpob3N0IC5kYXJrLWJnIGgyLFxuOmhvc3QgLmRhcmstYmcgaDMsXG46aG9zdCAuZGFyay1iZyBoNCB7XG4gIGNvbG9yOiAjRkZGOyB9XG5cbjpob3N0IC5kYXJrLWJnIC53aWRnZXQgaDEsXG46aG9zdCAuZGFyay1iZyAud2lkZ2V0IGgyLFxuOmhvc3QgLmRhcmstYmcgLndpZGdldCBoMyxcbjpob3N0IC5kYXJrLWJnIC53aWRnZXQgaDQge1xuICBjb2xvcjogI0ZGRjsgfVxuXG46aG9zdCAudGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7IH1cbiAgOmhvc3QgLnRodW1iIGZpZ3VyZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MHB4OyB9XG4iLCI6aG9zdCB7XG4gIC5kYXJrLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y4REJGO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbiAgZm9vdGVyLmRhcmstYmcge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIGZvb3RlciAuaW5uZXIge1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyID4gLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTI1cHg7XG4gIH1cbiAgZm9vdGVyIC5yb3cgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG4gIGZvb3RlciAubG9nbyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgZm9vdGVyIGg0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgZm9vdGVyIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmZvb3Rlci1tZW51IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIC5mb290ZXItbWVudSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuZm9vdGVyLW1lbnUgbGk6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29udGVudDogXCLCt1wiO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH1cbiAgLmZvb3Rlci1tZW51IGxpOmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9vdGVyLWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZDogIzI4MzY0NTtcbiAgICBjb2xvcjogIzcwN0U4QztcbiAgfVxuICAuZm9vdGVyLWJvdHRvbSAuY29udGFpbmVyLmlubmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuZm9vdGVyLWJvdHRvbSBwLFxuICAuZm9vdGVyLWJvdHRvbSBhIHtcbiAgICBjb2xvcjogIzcwN0U4QztcbiAgfVxuICAuZm9vdGVyLWJvdHRvbSBwIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5kYXJrLWJnLFxuICAuZGFyay1iZyBwLFxuICAuZGFyay1iZyAuaXRlbS1kZXRhaWxzIGxpOmJlZm9yZSB7XG4gICAgY29sb3I6ICNGQkZCRkI7XG4gIH1cbiAgLmRhcmstYmcgaDEsXG4gIC5kYXJrLWJnIGgyLFxuICAuZGFyay1iZyBoMyxcbiAgLmRhcmstYmcgaDQge1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG4gIC5kYXJrLWJnIC53aWRnZXQgaDEsXG4gIC5kYXJrLWJnIC53aWRnZXQgaDIsXG4gIC5kYXJrLWJnIC53aWRnZXQgaDMsXG4gIC5kYXJrLWJnIC53aWRnZXQgaDQge1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG5cbiAgLnRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcblxuICAgIGZpZ3VyZSB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<section id=\"contact-form\">\n  <div class=\"container inner\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 center-block text-center\">\n        <header>\n          <h1>Iniciar Sesión</h1>\n          <p>Si presenta algún problema para ingresar, contacte a su Administrador</p>\n        </header>\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n    <br />\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 outer-top-md inner-right-sm\">\n            <h2>Datos de {{ formType }}</h2>\n            <p *ngIf=\"authService.data.logged\">\n              Ingresaste como: {{authService.data.email}}\n              <br />\n              <button class=\"btn btn-small btn-blue\" (click)=\"navigate('dashboard')\">Ir al Area de Trabajo</button>\n              <button class=\"btn btn-small btn-gray\" (click)=\"logoutUser()\">Cerrar sesión</button>\n            </p>\n            <form *ngIf=\"!authService.data.logged\" [formGroup]=\"loginForm\">\n              <div class=\"form-group\">\n                <label class=\"small\">Correo Electrónico</label>\n                <input type=\"email\"\n                       formControlName=\"email\"\n                       class=\"form-control col-sm-6\"\n                       required\n                       placeholder=\"example@mail.com\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"small\">Contraseña</label>\n                <input type=\"password\" class=\"form-control col-sm-6\" formControlName=\"password\" required>\n              </div>\n              <div class=\"col-sm-8\">\n                <label class=\"error\">{{errorMessage}}</label>\n                <label class=\"success\">{{successMessage}}</label>\n              </div>\n              <div *ngIf=\"formType==='Ingreso'\">\n                <button type=\"submit\" (click)=\"loginUser(loginForm.value)\" class=\"btn btn-small btn-blue\">Ingresar</button>\n              </div>\n              <div *ngIf=\"formType==='Registro'\">\n                <button type=\"submit\" (click)=\"registerUser(loginForm.value)\" class=\"btn btn-small btn-blue\">Registrarme</button>\n                <button type=\"submit\" (click)=\"goBack()\" class=\"btn btn-small btn-gray\">Cancelar</button>\n              </div>\n              <span *ngIf=\"formType==='Ingreso'\" class=\"small\">No tienes una cuenta? <a (click)=\"showRegisterForm()\">Registrarme</a></span>\n              <br />\n              <span *ngIf=\"formType==='Ingreso'\" class=\"small\">No recuerdas tu contraseña? <a (click)=\"navigate('restore')\">Recuperar contraseña</a></span>\n            </form>\n            <div id=\"response\"></div>\n          </div><!-- ./col -->\n          <div class=\"col-sm-6 outer-top-md inner-left-sm border-left\">\n            <h2>Recuerda</h2>\n            <p>Todos los derechos reservados, el administrador del sistema se reserva el derecho de admisión y administración de los usuarios del sistema.</p>\n\n            <h3>Más info</h3>\n            <ul class=\"contacts\">\n              <li><i class=\"fas fa-map-marker-alt contact\"></i> Carrera 69 NO. 25B-44, Bogotá, Colombia</li>\n              <li><i class=\"fas fa-mobile-alt contact\"></i> +57 (1) 348 77 77</li>\n              <li><a href=\"mailto:info@reen.com\"><i class=\"fas fa-envelope contact\"></i> centrodeservicios@ssf.gov.co</a></li>\n            </ul><!-- /.contacts -->\n          </div><!-- /.col -->\n        </div><!-- /.row -->\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n  </div><!-- /.container -->\n</section>\n<br/>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .error {\n  color: #D01D13;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center; }\n\n:host .success {\n  color: #006DA7;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmlzdGlhbm9sYXlhL1dlYnN0b3JtUHJvamVjdHMvYWRwL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBTkg7RUFTSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuZXJyb3Ige1xuICAgIGNvbG9yOiAjRDAxRDEzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc3VjY2VzcyB7XG4gICAgY29sb3I6ICMwMDZEQTc7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * services
 * */

var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.errorMessage = "";
        this.successMessage = "";
        this.formType = 'Ingreso';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginUser = function (value) {
        var _this = this;
        this.authService.loginWithEmail(value.email, value.password)
            .then(function () {
            _this.authService.navigate("dashboard");
        }).catch(function (_error) {
            _this.errorMessage = _error;
            _this.authService.navigate('/');
        });
    };
    LoginComponent.prototype.registerUser = function (value) {
        var _this = this;
        this.authService.signUpWithEmail(value.email, value.password)
            .then(function () {
            _this.authService.navigate("dashboard");
        }).catch(function (_error) {
            _this.errorMessage = _error;
            _this.authService.navigate('/');
        });
    };
    LoginComponent.prototype.showRegisterForm = function () {
        this.formType = 'Registro';
    };
    LoginComponent.prototype.goBack = function () {
        this.formType = 'Ingreso';
    };
    LoginComponent.prototype.navigate = function (view) {
        this.authService.navigate(view);
    };
    LoginComponent.prototype.logoutUser = function () {
        this.authService.signOut();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"navbar-header\">\n    <div class=\"container\">\n      <ul class=\"info pull-left\">\n        <li><img src=\"./assets/images/ssf_logo.png\" alt=\"\"></li>\n        <li><img src=\"./assets/images/gobierno_de_colombia.png\" alt=\"\"></li>\n      </ul><!-- /.info -->\n      <ul class=\"social pull-right\">\n        <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fab fa-youtube\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n      </ul><!-- /.social -->\n    </div><!-- /.container -->\n  </div>\n  <div class=\"yamm brand\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"index.html\">\n        <img src=\"./assets/images/ssf_adp_logo.png\" class=\"logo animate\" alt=\"\" style=\"height: 40px;\">\n      </a>\n      <ul class=\"user-info\">\n        <li *ngIf=\"authService.data.logged\" class=\"user-info__status\">\n          <span>Welcome {{ authService.data.email }}</span>\n          <span class=\"small\" (click)=\"logoutUser()\">Salir</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  margin: 0;\n  border-radius: 0;\n  border: none;\n  position: relative;\n  z-index: 8000;\n  min-height: inherit;\n  width: 100%;\n  padding: 0; }\n  :host .navbar .navbar-header {\n    float: none !important;\n    position: relative;\n    display: block;\n    background: #F5F7FA;\n    border-bottom: 1px solid #E6E9ED;\n    z-index: 0;\n    width: 100%; }\n  :host .navbar .navbar-header li, :host .navbar .navbar-header a {\n      display: table-cell;\n      vertical-align: middle;\n      height: 40px; }\n  :host .navbar .navbar-header .info {\n      padding-left: 0;\n      margin: 0; }\n  :host .navbar .navbar-header .info li {\n      font-size: 12px;\n      padding-right: 25px; }\n  :host .navbar .navbar-header .info li a {\n      font-size: 12px;\n      color: #73879C; }\n  :host .navbar .navbar-header .info a:hover {\n      color: #1ABB9C; }\n  :host .navbar .navbar-header .info li img {\n      height: 40px; }\n  :host .navbar ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  :host .navbar .container {\n    display: table;\n    padding: 0; }\n  :host .navbar .container .pull-left {\n      float: left; }\n  :host .navbar .container .pull-right {\n      float: right; }\n  :host .navbar .container .social {\n      padding: 0;\n      margin: 0; }\n  :host .navbar .container .social li {\n        font-family: 'fontello-social';\n        margin-right: 4px; }\n  :host .navbar .container .social li {\n        position: relative; }\n  :host .navbar .container .social li a {\n        display: table;\n        position: relative; }\n  :host .navbar .container .social li a:hover {\n        cursor: pointer;\n        text-decoration: none; }\n  :host .navbar .container .social li a i {\n        text-align: center;\n        display: table-cell;\n        vertical-align: middle;\n        color: #73879C;\n        width: 30px;\n        height: 30px;\n        font-size: 12px;\n        transition: all 200ms ease-out; }\n  :host .navbar .container .social li a i:after {\n        content: '';\n        z-index: -1;\n        position: absolute;\n        width: 100%;\n        height: 0;\n        top: 0;\n        left: 0;\n        transition: all 200ms ease-out; }\n  :host .navbar .container .social li a:hover i {\n        color: #FFF; }\n  :host .navbar .container .social li a:hover i:after {\n        height: 100%; }\n  :host .navbar .container .social a .fa-facebook-f:after {\n        background: #3B5998;\n        background: #4668B3; }\n  :host .navbar .container .social a .fa-youtube:after {\n        background: #DD4B39;\n        background: #DE5745; }\n  :host .navbar .container .social a .fa-twitter:after {\n        background: #00ACED;\n        background: #2FBBED; }\n  :host .navbar .brand {\n    background: #fff;\n    border-bottom: 1px solid #E6E9ED;\n    height: 70px;\n    line-height: 70px;\n    width: 100%; }\n  :host .navbar .brand .navbar-brand {\n      color: #506A85;\n      font-size: 30px;\n      font-weight: bold; }\n  :host .navbar .brand .user-info {\n      float: right; }\n  :host .navbar .brand .user-info .user-info__status span:first-child {\n        color: #73879C;\n        display: block;\n        font-size: 14px;\n        height: 16px;\n        width: 100%; }\n  :host .navbar .brand .user-info .user-info__status span:last-child {\n        color: #73879C;\n        cursor: pointer;\n        float: right;\n        text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmlzdGlhbm9sYXlhL1dlYnN0b3JtUHJvamVjdHMvYWRwL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsV0FBVSxFQXlKWDtFQWxLSDtJQVlNLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFDbEIsZUFBYTtJQUNiLG9CQUFtQjtJQUNuQixpQ0FBZ0M7SUFDaEMsV0FBVTtJQUNWLFlBQVcsRUEwQlo7RUE1Q0w7TUFxQlEsb0JBQW1CO01BQ25CLHVCQUFzQjtNQUN0QixhQUFZLEVBQ2I7RUF4QlA7TUEyQlEsZ0JBQWU7TUFDZixVQUFTLEVBQ1Y7RUE3QlA7TUErQlEsZ0JBQWU7TUFDZixvQkFBbUIsRUFDcEI7RUFqQ1A7TUFtQ1EsZ0JBQWU7TUFDZixlQUFjLEVBQ2Y7RUFyQ1A7TUF1Q1EsZUFBYyxFQUNmO0VBeENQO01BMENRLGFBQVksRUFDYjtFQTNDUDtJQStDTSxpQkFBZ0I7SUFDaEIsVUFBUztJQUNULFdBQVUsRUFDWDtFQWxETDtJQXFETSxlQUFjO0lBQ2QsV0FBVSxFQTBFWDtFQWhJTDtNQXlEUSxZQUFVLEVBQ1g7RUExRFA7TUE2RFEsYUFBVyxFQUNaO0VBOURQO01BaUVRLFdBQVU7TUFDVixVQUFTLEVBNkRWO0VBL0hQO1FBcUVVLCtCQUE4QjtRQUM5QixrQkFBaUIsRUFDbEI7RUF2RVQ7UUF5RVUsbUJBQWtCLEVBQ25CO0VBMUVUO1FBNEVVLGVBQWM7UUFDZCxtQkFBa0IsRUFDbkI7RUE5RVQ7UUFnRlUsZ0JBQWU7UUFDZixzQkFBb0IsRUFDckI7RUFsRlQ7UUFvRlUsbUJBQWtCO1FBQ2xCLG9CQUFtQjtRQUNuQix1QkFBc0I7UUFDdEIsZUFBYztRQUNkLFlBQVc7UUFDWCxhQUFZO1FBQ1osZ0JBQWU7UUFJZiwrQkFBOEIsRUFDL0I7RUEvRlQ7UUFpR1UsWUFBVztRQUNYLFlBQVc7UUFDWCxtQkFBa0I7UUFDbEIsWUFBVztRQUNYLFVBQVM7UUFDVCxPQUFNO1FBQ04sUUFBTztRQUlQLCtCQUE4QixFQUMvQjtFQTVHVDtRQThHVSxZQUFXLEVBQ1o7RUEvR1Q7UUFpSFUsYUFBWSxFQUNiO0VBbEhUO1FBb0hVLG9CQUFtQjtRQUNuQixvQkFBbUIsRUFDcEI7RUF0SFQ7UUF3SFUsb0JBQW1CO1FBQ25CLG9CQUFtQixFQUNwQjtFQTFIVDtRQTRIVSxvQkFBbUI7UUFDbkIsb0JBQW1CLEVBQ3BCO0VBOUhUO0lBbUlNLGlCQUFnQjtJQUNoQixpQ0FBZ0M7SUFDaEMsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixZQUFXLEVBMEJaO0VBaktMO01BMElRLGVBQWM7TUFDZCxnQkFBZTtNQUNmLGtCQUFpQixFQUNsQjtFQTdJUDtNQWdKUSxhQUFXLEVBZ0JaO0VBaEtQO1FBbUpVLGVBQWM7UUFDZCxlQUFhO1FBQ2IsZ0JBQWU7UUFDZixhQUFZO1FBQ1osWUFBVyxFQUNaO0VBeEpUO1FBMkpVLGVBQWM7UUFDZCxnQkFBZTtRQUNmLGFBQVk7UUFDWiwyQkFBMEIsRUFDM0IiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubmF2YmFyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDgwMDA7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm5hdmJhci1oZWFkZXIge1xuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjVGN0ZBO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNkU5RUQ7XG4gICAgICB6LWluZGV4OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGxpLCBhIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAuaW5mbyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmluZm8gbGkge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgICAuaW5mbyBsaSBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzczODc5QztcbiAgICAgIH1cbiAgICAgIC5pbmZvIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzFBQkI5QztcbiAgICAgIH1cbiAgICAgIC5pbmZvIGxpIGltZyB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgICAgLnB1bGwtbGVmdCB7XG4gICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5wdWxsLXJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5zb2NpYWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udGVsbG8tc29jaWFsJztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGxpIGEge1xuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgbGkgYSBpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGNvbG9yOiAjNzM4NzlDO1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICBsaSBhIGk6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICBsaSBhOmhvdmVyIGkge1xuICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICB9XG4gICAgICAgIGxpIGE6aG92ZXIgaTphZnRlciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGEgLmZhLWZhY2Vib29rLWY6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ2NjhCMztcbiAgICAgICAgfVxuICAgICAgICBhIC5mYS15b3V0dWJlOmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNERTU3NDU7XG4gICAgICAgIH1cbiAgICAgICAgYSAuZmEtdHdpdHRlcjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwQUNFRDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMkZCQkVEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJyYW5kIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2RTlFRDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBjb2xvcjogIzUwNkE4NTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuXG4gICAgICAgIC51c2VyLWluZm9fX3N0YXR1cyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogIzczODc5QztcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1pbmZvX19zdGF0dXMgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogIzczODc5QztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * services
 * */

var MenuComponent = /** @class */ (function () {
    function MenuComponent(authService) {
        this.authService = authService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logoutUser = function () {
        this.authService.signOut();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/restore/restore.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/restore/restore.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<section id=\"contact-form\">\n  <div class=\"container inner\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 center-block text-center\">\n        <header>\n          <h1>Restablecer contraseña</h1>\n          <p>Enviaremos un email con un link desde el cual podrás configurar una nueva contraseña</p>\n        </header>\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n    <br />\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 outer-top-md\">\n            <form class=\"col-sm-6\" [formGroup]=\"recoverForm\">\n              <div class=\"form-group\">\n                <label class=\"small\">Correo Electrónico</label>\n                <input type=\"email\"\n                       formControlName=\"email\"\n                       class=\"form-control col-sm-6\"\n                       required\n                       placeholder=\"example@mail.com\"\n                       pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                >\n              </div>\n              <div class=\"msgs col-sm-12\">\n                <label class=\"error\">{{errorMessage}}</label>\n                <label class=\"success\">{{successMessage}}</label>\n              </div>\n              <div>\n                <button type=\"submit\" (click)=\"sendEmail(recoverForm)\"  class=\"btn btn-small btn-blue\">Enviar</button>\n                <button type=\"submit\" (click)=\"navigate('home')\" class=\"btn btn-small btn-gray\">Regresar</button>\n              </div>\n            </form>\n            <div id=\"response\"></div>\n          </div><!-- ./col -->\n        </div><!-- /.row -->\n      </div><!-- /.col -->\n    </div><!-- /.row -->\n  </div><!-- /.container -->\n</section>\n<br/>\n\n"

/***/ }),

/***/ "./src/app/components/restore/restore.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/restore/restore.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center; }\n  :host form {\n    margin-left: auto;\n    margin-right: auto; }\n  :host form .form-group {\n      text-align: center; }\n  :host form .form-group input {\n        margin-left: auto;\n        margin-right: auto; }\n  :host .msgs .error {\n    color: #D01D13;\n    font-size: 12px;\n    font-weight: bold; }\n  :host .msgs .success {\n    color: #006DA7;\n    font-size: 12px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcmlzdGlhbm9sYXlhL1dlYnN0b3JtUHJvamVjdHMvYWRwL3NyYy9hcHAvY29tcG9uZW50cy9yZXN0b3JlL3Jlc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUE2Qm5CO0VBOUJEO0lBSUksa0JBQWlCO0lBQ2pCLG1CQUFrQixFQVVuQjtFQWZIO01BUU0sbUJBQWtCLEVBTW5CO0VBZEw7UUFXUSxrQkFBaUI7UUFDakIsbUJBQWtCLEVBQ25CO0VBYlA7SUFtQk0sZUFBYztJQUNkLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCO0VBdEJMO0lBeUJNLGVBQWM7SUFDZCxnQkFBZTtJQUNmLGtCQUFpQixFQUNsQiIsImZpbGUiOiJyZXN0b3JlL3Jlc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBmb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubXNncyB7XG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiAjRDAxRDEzO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnN1Y2Nlc3Mge1xuICAgICAgY29sb3I6ICMwMDZEQTc7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/restore/restore.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/restore/restore.component.ts ***!
  \*********************************************************/
/*! exports provided: RestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreComponent", function() { return RestoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * services
 * */

var RestoreComponent = /** @class */ (function () {
    function RestoreComponent(authService) {
        this.authService = authService;
        this.errorMessage = "";
        this.successMessage = "";
        this.recoverForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    }
    RestoreComponent.prototype.ngOnInit = function () {
    };
    RestoreComponent.prototype.sendEmail = function (value) {
        var _this = this;
        if (value.status === "VALID") {
            this.errorMessage = "";
            this.authService.resetEmail(value.value.email)
                .then(function () {
                _this.successMessage = "Un correo electrónico de recuperación ha sido enviado";
            }).catch(function (_error) {
                _this.errorMessage = _error;
            });
        }
        else {
            this.successMessage = "";
            this.errorMessage = "El email debe ser valido.";
        }
    };
    RestoreComponent.prototype.navigate = function (view) {
        this.authService.navigate(view);
    };
    RestoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-restore',
            template: __webpack_require__(/*! ./restore.component.html */ "./src/app/components/restore/restore.component.html"),
            styles: [__webpack_require__(/*! ./restore.component.scss */ "./src/app/components/restore/restore.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RestoreComponent);
    return RestoreComponent;
}());



/***/ }),

/***/ "./src/app/pipes/get-domains.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/get-domains.pipe.ts ***!
  \*******************************************/
/*! exports provided: GetDomainsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDomainsPipe", function() { return GetDomainsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/domain.service */ "./src/app/services/domain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * services
 * */

var GetDomainsPipe = /** @class */ (function () {
    function GetDomainsPipe(domain) {
        this.domain = domain;
    }
    GetDomainsPipe.prototype.transform = function (domains) {
        var self = this;
        console.log(domains);
        return [];
    };
    GetDomainsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'getDomains', pure: false }),
        __metadata("design:paramtypes", [_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]])
    ], GetDomainsPipe);
    return GetDomainsPipe;
}());



/***/ }),

/***/ "./src/app/pipes/get-links.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/get-links.pipe.ts ***!
  \*****************************************/
/*! exports provided: GetLinksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLinksPipe", function() { return GetLinksPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/domain.service */ "./src/app/services/domain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * services
 * */

var GetLinksPipe = /** @class */ (function () {
    function GetLinksPipe(domain) {
        this.domain = domain;
    }
    GetLinksPipe.prototype.transform = function (items) {
        var self = this;
        var domain = items.filter(function (ele) {
            return ele.id === self.domain.currentItem;
        })[0];
        return domain ? domain.elements : [];
    };
    GetLinksPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'getLinks', pure: false }),
        __metadata("design:paramtypes", [_services_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]])
    ], GetLinksPipe);
    return GetLinksPipe;
}());



/***/ }),

/***/ "./src/app/pipes/link-sanitizer.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/link-sanitizer.pipe.ts ***!
  \**********************************************/
/*! exports provided: LinkSanitizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkSanitizerPipe", function() { return LinkSanitizerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkSanitizerPipe = /** @class */ (function () {
    function LinkSanitizerPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    LinkSanitizerPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    LinkSanitizerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'linkSanitizer', pure: false }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], LinkSanitizerPipe);
    return LinkSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.data = { logged: false, email: '', admin: false, adminUser: '' };
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.authState = auth;
                _this.data.logged = true;
                _this.data.email = auth.email;
            }
            else {
                _this.authState = null;
                _this.data.logged = false;
                _this.data.email = "";
            }
        });
    }
    AuthService.prototype.signUpWithEmail = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) {
            console.log(error);
            throw error;
        });
    };
    AuthService.prototype.resetEmail = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email)
            .then(function () {
            //console.log("email sent");
        })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.loginWithEmail = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (data) {
            //this.authState = data;
            //this.data.email = data.user.email;
        })
            .catch(function (error) {
            //console.log(error)
            //this.data.email = '';
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    AuthService.prototype.navigate = function (view) {
        this.router.navigate([view]);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/domain.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/domain.service.ts ***!
  \********************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomainService = /** @class */ (function () {
    function DomainService(firestore) {
        this.firestore = firestore;
        this.currentItem = '';
    }
    DomainService.prototype.addDomain = function (data) {
        return this.firestore.collection('domains').add(data);
    };
    DomainService.prototype.getDomain = function (documentId) {
        return this.firestore.collection('domains').doc(documentId).snapshotChanges();
    };
    DomainService.prototype.getDomains = function () {
        return this.firestore.collection('domains').snapshotChanges();
    };
    DomainService.prototype.updateDomains = function (documentId, data) {
        return this.firestore.collection('domains').doc(documentId).set(data);
    };
    DomainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DomainService);
    return DomainService;
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
    production: true,
    firebase: {
        apiKey: "AIzaSyAD39gNSpD7ka5R8guPVeCvLoNfO_8DSMY",
        authDomain: "booo-745d1.firebaseapp.com",
        databaseURL: "https://booo-745d1.firebaseio.com",
        projectId: "booo-745d1",
        storageBucket: "booo-745d1.appspot.com",
        messagingSenderId: "357600474405"
    }
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

module.exports = __webpack_require__(/*! /Users/cristianolaya/WebstormProjects/adp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map