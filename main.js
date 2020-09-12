(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a2) { return ["/", "profile", a2]; };
function LandingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Usr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", Usr_r1.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, Usr_r1.stdID));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Usr_r1.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Usr_r1.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Usr_r1.email, " \u00A0 \u00A0 \u00A0\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Usr_r1.phone, " ");
} }
class LandingComponent {
    constructor(info) {
        this.info = info;
    }
    ngOnInit() {
        this.Days = this.info.getDays();
        this.Students = this.info.getStudents();
        this.Students.forEach(element => {
            this.profile = element["Students"];
            console.log(this.profile);
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 3, vars: 1, consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["alt", "", 1, "profile", 3, "src"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "fa", "fa-envelope"], [1, "fa", "fa-phone"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingComponent_div_2_Template, 12, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%]\r\n{\r\n  background-color: #f5f6f7;\r\n  width: 70%;\r\n\r\n}\r\nh1[_ngcontent-%COMP%]\r\n{\r\n\r\n  margin-top: 100px;\r\n  color: #1C2833;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n\r\n margin: 20px;\r\n\r\n}\r\n.card[_ngcontent-%COMP%]\r\n{\r\n\r\n  width: 100%;\r\n  float: left;\r\n  margin-bottom:  10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n     transition: 0.3s;\r\n}\r\na[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color:  #1C2833;\r\n}\r\nh2[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  opacity: 0.6;\r\n  font-size: 36px;\r\n  border-bottom: #1C2833 2px solid;\r\n}\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\r\n  width: 200px;\r\n  height: 200px;\r\n  float: left;\r\n  margin: 10px;\r\n  border-radius: 10px;\r\n\r\n}\r\n.fa-phone[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  color: #1c2833;\r\n}\r\n.fa-envelope[_ngcontent-%COMP%]{\r\n  color: #1c2833;\r\n  font-size:20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0VBQ3pCLFVBQVU7O0FBRVo7QUFDQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTs7Q0FFQyxZQUFZOztBQUViO0FBQ0E7OztFQUdFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVDQUF1QztLQUNwQyxnQkFBZ0I7QUFDckI7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7QUFDQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1COztBQUVyQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xyXG4gIHdpZHRoOiA3MCU7XHJcblxyXG59XHJcbmgxXHJcbntcclxuXHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgY29sb3I6ICMxQzI4MzM7XHJcbn1cclxuaDJ7XHJcblxyXG4gbWFyZ2luOiAyMHB4O1xyXG5cclxufVxyXG4uY2FyZFxyXG57XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1ib3R0b206ICAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbmF7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogICMxQzI4MzM7XHJcbn1cclxuaDIgOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzFDMjgzMyAycHggc29saWQ7XHJcbn1cclxuLmNhcmQgaW1ne1xyXG5cclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5mYS1waG9uZXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMxYzI4MzM7XHJcbn1cclxuXHJcbi5mYS1lbnZlbG9wZXtcclxuICBjb2xvcjogIzFjMjgzMztcclxuICBmb250LXNpemU6MjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProfileComponent_div_0_tr_26_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r2.subName);
} }
function ProfileComponent_div_0_tr_26_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r2.date);
} }
function ProfileComponent_div_0_tr_26_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r2.lectName);
} }
function ProfileComponent_div_0_tr_26_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r2.school);
} }
function ProfileComponent_div_0_tr_26_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](items_r2.grade);
} }
function ProfileComponent_div_0_tr_26_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qualifies With Distriction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_tr_26_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qualifies ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_tr_26_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qualifies for re-exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_tr_26_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_0_tr_26_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_0_tr_26_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_0_tr_26_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_0_tr_26_td_4_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_0_tr_26_td_5_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_0_tr_26_td_6_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_0_tr_26_td_7_Template, 2, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_0_tr_26_td_8_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_0_tr_26_td_9_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID && items_r2.grade >= "80");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID && items_r2.grade < "80" && items_r2.grade >= "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID && items_r2.grade < "50" && items_r2.grade >= "45");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r2.stdID == ctx_r1.student.stdID && items_r2.grade < "45");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Institution");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileComponent_div_0_tr_26_Template, 10, 9, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.student.pic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.student.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.student.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.student.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.student.email, " \u00A0 \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.student.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sub);
} }
class ProfileComponent {
    constructor(Data, _route) {
        this.Data = Data;
        this._route = _route;
    }
    ngOnInit() {
        this.Ref = this._route.snapshot.paramMap.get('ref');
        console.log('Ref', this.Ref);
        this.student = this.Data.getStudentsData(this.Ref);
        console.log(this.student);
        //this.subject = this.Data.getStudentsSubject(this.Ref);
        // console.log(this.subject);
        this.subject = this.Data.getStudents();
        //this.subRef=this.subject.lectId;
        this.subject.forEach(element => {
            //if(this.Ref==element["s"])
            this.sub = element['Subject'];
            this,
                console.log(this.sub);
        });
        this.lecture = this.Data.getLecture(this.subRef);
        console.log(this.lecture);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [3, "src", "alt"], [1, "fa", "fa-envelope"], [1, "fa", "fa-phone"], [1, "subject"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "failed", 4, "ngIf"], [1, "failed"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 27, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.student);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]\r\n{\r\n margin-top: 100px;\r\n  width: 100%;\r\n  float: left;\r\n\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n     transition: 0.3s;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\r\n  width: 200px;\r\n  height: 200px;\r\n  float: left;\r\n  margin: 10px;\r\n  border-radius: 10px;\r\n\r\n}\r\n\r\n.subject[_ngcontent-%COMP%]{\r\n\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 98%;\r\n  margin: 1%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #1C2833;\r\n  color: white;\r\n}\r\n\r\n.failed[_ngcontent-%COMP%]{\r\n\r\n  color: red;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]\r\n{\r\n color: #1C2833;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]\r\n{\r\n  color: #1C2833;\r\n  font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsaUJBQWlCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXOztFQUVYLHVDQUF1QztLQUNwQyxnQkFBZ0I7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjs7QUFFckI7O0FBQ0E7O0VBRUUsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCLHlCQUF5QixDQUFDOztBQUV4RCxxQkFBcUIsc0JBQXNCLENBQUM7O0FBRTNDO0VBQ0MsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxVQUFVO0FBQ1o7O0FBQ0E7O0NBRUMsY0FBYztBQUNmOztBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFxyXG57XHJcbiBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuXHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5jYXJkIGltZ3tcclxuXHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcbi5zdWJqZWN0e1xyXG5cclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IDElO1xyXG59XHJcblxyXG50YWJsZSB0ZCwgdGFibGUgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzI4MzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmFpbGVke1xyXG5cclxuICBjb2xvcjogcmVkO1xyXG59XHJcbmgxXHJcbntcclxuIGNvbG9yOiAjMUMyODMzO1xyXG59XHJcbi5mYVxyXG57XHJcbiAgY29sb3I6ICMxQzI4MzM7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/landing/landing.component */ "./src/app/Pages/landing/landing.component.ts");
/* harmony import */ var _Pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/profile/profile.component */ "./src/app/Pages/profile/profile.component.ts");






const routes = [
    { path: '', redirectTo: "/landing", pathMatch: "full" },
    { path: 'landing', component: _Pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'profile/:ref', component: _Pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/landing"]; };
class AppComponent {
    constructor() {
        this.title = 'Students';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 2, consts: [["action", ""], ["type", "text", "placeholder", "Search..."], ["type", "submit"], [1, "fa", "fa-search"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "fa", "fa-home"], ["id", "link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Students Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A9 Students 2019 - All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%]\r\n{\r\n\r\n  width: 70%;\r\n  height: 70px;\r\n  background-color: #1C2833;\r\n  color:#fff;\r\n  float: left;\r\n  position: fixed;\r\n  top: 0;\r\n  justify-content: center;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\nalign-content: center;\r\n margin: 10px;\r\nfloat: left;\r\n\r\n\r\n}\r\n\r\n#link[_ngcontent-%COMP%]{\r\n\r\n\r\n  font-size: 18px;\r\n  visibility: hidden;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color:#fff;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n\r\n  opacity: 0.9;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n\r\n height: 17px;\r\n border-style: none;\r\n\r\n\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n\r\n  float: right;\r\n  margin: 10px;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]{\r\n\r\n  font-size: 25px;\r\n}\r\n\r\n.fa-home[_ngcontent-%COMP%]{\r\n\r\n\r\n  float: right;\r\n font-size: 30px;\r\nmargin: 10px;\r\nmargin-right: 40px;\r\nmargin-top: 15px;\r\n\r\n}\r\n\r\n.fa-home[_ngcontent-%COMP%]:hover{\r\n\r\n  font-size: 35px;\r\n\r\n}\r\n\r\n.fa-home[_ngcontent-%COMP%]:hover   #link[_ngcontent-%COMP%]{\r\n\r\n visibility: visible;\r\n transition: 0.3s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\r\n\r\n\r\n  background: #1C2833;\r\n  color: white;\r\n  font-size: 10px;\r\n  margin: 5px;\r\n  border: 1px solid #1C2833;\r\n  border-left: none; \r\n  cursor: pointer;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]\r\n{\r\n  float: left;\r\n  width: 100%;\r\n  height: 100px;\r\n  align-content: center;\r\n  justify-content: center;\r\n  background-color: #1C2833;\r\n}\r\n\r\np[_ngcontent-%COMP%]\r\n{\r\n  color: #ffff;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07RUFDTix1QkFBdUI7QUFDekI7O0FBRUE7QUFDQSxxQkFBcUI7Q0FDcEIsWUFBWTtBQUNiLFdBQVc7OztBQUdYOztBQUNBOzs7RUFHRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjs7QUFFbEI7O0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLGtCQUFrQjs7O0FBR25COztBQUNBOztFQUVFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFHQTs7O0VBR0UsWUFBWTtDQUNiLGVBQWU7QUFDaEIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixnQkFBZ0I7O0FBRWhCOztBQUNBOztFQUVFLGVBQWU7O0FBRWpCOztBQUNBOztDQUVDLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBSUE7Ozs7RUFJRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFFLDJCQUEyQjtFQUM5QyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlclxyXG57XHJcblxyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzI4MzM7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgaDF7XHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuIG1hcmdpbjogMTBweDtcclxuZmxvYXQ6IGxlZnQ7XHJcblxyXG5cclxufVxyXG4jbGlua3tcclxuXHJcblxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbn1cclxuYXtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuYTpob3ZlcntcclxuXHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5pbnB1dHtcclxuXHJcbiBoZWlnaHQ6IDE3cHg7XHJcbiBib3JkZXItc3R5bGU6IG5vbmU7XHJcblxyXG5cclxufVxyXG5mb3Jte1xyXG5cclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uZmF7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuXHJcbi5mYS1ob21le1xyXG5cclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gZm9udC1zaXplOiAzMHB4O1xyXG5tYXJnaW46IDEwcHg7XHJcbm1hcmdpbi1yaWdodDogNDBweDtcclxubWFyZ2luLXRvcDogMTVweDtcclxuXHJcbn1cclxuLmZhLWhvbWU6aG92ZXJ7XHJcblxyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuXHJcbn1cclxuLmZhLWhvbWU6aG92ZXIgICNsaW5re1xyXG5cclxuIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcblxyXG5cclxuXHJcbiAgYmFja2dyb3VuZDogIzFDMjgzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxQzI4MzM7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7IC8qIFByZXZlbnQgZG91YmxlIGJvcmRlcnMgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlclxyXG57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjgzMztcclxufVxyXG5wXHJcbntcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/details */ "./src/app/services/details.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/landing/landing.component */ "./src/app/Pages/landing/landing.component.ts");
/* harmony import */ var _Pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/profile/profile.component */ "./src/app/Pages/profile/profile.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _services_details__WEBPACK_IMPORTED_MODULE_3__["Details"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _Pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
        _Pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _Pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                    _Pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
                    _services_details__WEBPACK_IMPORTED_MODULE_3__["Details"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./src/app/services/details.ts");



class ApiService {
    constructor(Data) {
        this.Data = Data;
        this.high = 0;
    }
    getDays() {
        return this.Data.days;
    }
    // get students arrar
    getStudents() {
        return this.Data.persons;
    }
    //get Singe students data
    getStudentsData(ref) {
        this.students = this.Data.persons;
        this.students.forEach(i => {
            this.person = i['Students'];
        });
        return this.person.find(e => e.stdID === ref);
    }
    // gets subjects for each students
    getStudentsSubject(ref) {
        this.students = this.Data.persons;
        this.students.forEach(i => {
            this.person = i['Subject'];
        });
        return this.person.find(e => e.stdID === ref);
    }
    // get subject lecture
    getLecture(subref) {
        this.students = this.Data.persons;
        this.students.forEach(i => {
            this.person = i['Lecture'];
        });
        return this.person.find(e => e.lectId === subref);
    }
    ///
    getsub(ref) {
        this.students = this.Data.persons;
        this.students.forEach(i => {
            this.person = i['Lecture'];
        });
        return this.person.find(e => e.lectId === ref);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_details__WEBPACK_IMPORTED_MODULE_1__["Details"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _details__WEBPACK_IMPORTED_MODULE_1__["Details"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/details.ts":
/*!*************************************!*\
  !*** ./src/app/services/details.ts ***!
  \*************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
class Details {
    constructor() {
        this.days = [
            "Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"
        ];
        this.persons = [
            {
                "Students": [
                    {
                        "stdID": "0001",
                        "fullName": "John Letsoala",
                        "bio": "Software developers are the creative minds behind software programs, and they have the technical skills to build those programs or to oversee their creation by a team.",
                        "email": "johnlestoala@gmail.com",
                        "phone": "071000000",
                        "pic": "/assets/img001.jpg"
                    },
                    {
                        "stdID": "0002",
                        "fullName": "Andrew Don",
                        "bio": "A Web Developer is responsible for the coding, design and layout of a website according to a company's specifications.",
                        "email": "AndrewDon@gmail.com",
                        "phone": "072000000",
                        "pic": "/assets/img002.jpg"
                    },
                    {
                        "stdID": "0003",
                        "fullName": "Rashid Mohamed",
                        "bio": "Full Stack Developers are computer programmers who are proficient in both front and back end coding.",
                        "email": "RashidMohamed@gmail.com",
                        "phone": "073000000",
                        "pic": "/assets/img003.jpg"
                    },
                    {
                        "stdID": "0004",
                        "fullName": "Embrahim Patel",
                        "bio": "Database administrators (DBAs) are employees who work with technology, using specialized types of software to store and organize a company's data.",
                        "email": "EmbrahimPatel@gmail.com",
                        "phone": "074000000",
                        "pic": "././assets/img004.jpg"
                    },
                    {
                        "stdID": "0005",
                        "fullName": "Maryjane Potgiter",
                        "bio": "Testing. System testers test software. ... When performing manual testing, system testers make notes so they can provide the exact method to duplicate a defect.",
                        "email": "MaryjanePotgiter@gmail.com",
                        "phone": "075000000",
                        "pic": "./studentsProfile/assets/img005.jpg"
                    },
                    {
                        "stdID": "0006",
                        "fullName": "Daniel Monyai",
                        "bio": "Network administrators are responsible for maintaining computer networks and solving any problems that may occur with them.",
                        "email": "Daniel Monyai@gmail.com",
                        "phone": "076000000",
                        "pic": "/assets/img006.jpg"
                    },
                ],
                "Subject": [
                    {
                        "subid": "sub001",
                        "stdID": "0001",
                        "lectName": "Profesor Grobler",
                        "subName": "Software Development",
                        "school": "Tshwane University of Technology",
                        "date": "2009",
                        "grade": "78"
                    },
                    {
                        "subid": "sub002",
                        "stdID": "0001",
                        "lectName": "Profesor Habib",
                        "subName": "System Designs",
                        "school": "Tshwane University of Technology",
                        "date": "2009",
                        "grade": "50"
                    },
                    {
                        "subid": "sub003",
                        "stdID": "0001",
                        "lectName": "Profesor Eben",
                        "subName": "Database Design",
                        "school": "Tshwane University of Technology",
                        "date": "2009",
                        "grade": "85"
                    },
                    {
                        "subid": "sub004",
                        "stdID": "0001",
                        "lectName": "Mr Khuma",
                        "subName": "Programing",
                        "school": "Tshwane University of Technology",
                        "date": "2009",
                        "grade": "65"
                    },
                    {
                        "subid": "sub005",
                        "stdID": "0002",
                        "lectName": "Proffesor Mohamed",
                        "subName": "Web Design",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "81"
                    },
                    {
                        "subid": "sub006",
                        "stdID": "0002",
                        "lectName": "Proffesor Mokwena",
                        "subName": "Internet Programing",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "71"
                    },
                    {
                        "subid": "sub007",
                        "stdID": "0002",
                        "lectName": "Mrs Khumalo",
                        "subName": "Cloud Computing",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "78"
                    },
                    {
                        "subid": "sub008",
                        "stdID": "0002",
                        "lectName": "Mrs Khumalo",
                        "subName": "Networking",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "56"
                    },
                    {
                        "subid": "sub009",
                        "stdID": "0003",
                        "lectName": "Mrs Khumalo",
                        "subName": "Networking",
                        "school": "University Of Johannesburg",
                        "date": "2018",
                        "grade": "56"
                    },
                    {
                        "subid": "sub010",
                        "stdID": "0003",
                        "lectName": "Mr Khuma",
                        "subName": "Programing",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "80"
                    },
                    {
                        "subid": "sub011",
                        "stdID": "0003",
                        "lectName": "Profesor Eben",
                        "subName": "Database Design",
                        "school": "University Of Johannesburg",
                        "date": "2018",
                        "grade": "81"
                    },
                    {
                        "subid": "sub012",
                        "stdID": "0003",
                        "lectName": "Proffesor Mokwena",
                        "subName": "Internet Programing",
                        "school": "University Of Johannesburg",
                        "date": "2018",
                        "grade": "83"
                    },
                    {
                        "subid": "sub013",
                        "stdID": "0003",
                        "lectName": "Mrs Khumalo",
                        "subName": "Cloud Computing",
                        "school": "University Of Johannesburg",
                        "date": "2011",
                        "grade": "80"
                    },
                    {
                        "subid": "sub014",
                        "stdID": "0003",
                        "lectName": "Profesor Grobler",
                        "subName": "Software Development",
                        "school": "University Of Johannesburg",
                        "date": "2018",
                        "grade": "82"
                    },
                    {
                        "subid": "sub015",
                        "stdID": "0004",
                        "lectName": "Proffesor Mokwena",
                        "subName": "Internet Programing",
                        "school": "University of Prectoria",
                        "date": "2011",
                        "grade": "71"
                    },
                    {
                        "subid": "sub016",
                        "stdID": "0004",
                        "lectName": "Mrs Khumalo",
                        "subName": "Cloud Computing",
                        "school": "University of Prectoria",
                        "date": "2011",
                        "grade": "78"
                    },
                    {
                        "subid": "sub017",
                        "stdID": "0004",
                        "lectName": "Mrs Khumalo",
                        "subName": "Networking",
                        "school": "University of Prectoria",
                        "date": "2011",
                        "grade": "36"
                    },
                    {
                        "subid": "sub018",
                        "stdID": "0004",
                        "lectName": "Mr Mashabela",
                        "subName": "Database Design",
                        "school": "University of Prectoria",
                        "date": "2011",
                        "grade": "46"
                    },
                    {
                        "subid": "sub019",
                        "stdID": "0005",
                        "lectName": "Proffesor Deviliers",
                        "subName": "System Analysis",
                        "school": "University of Prectoria",
                        "date": "2017",
                        "grade": "56"
                    },
                    {
                        "subid": "sub020",
                        "stdID": "0005",
                        "lectName": "Mrs Mabuza",
                        "subName": "Data Analysis",
                        "school": "University of Prectoria",
                        "date": "2017",
                        "grade": "87"
                    },
                    {
                        "subid": "sub021",
                        "stdID": "0005",
                        "lectName": "Ms Hazel",
                        "subName": "System Design",
                        "school": "University of Prectoria",
                        "date": "2017",
                        "grade": "70"
                    },
                    {
                        "subid": "sub022",
                        "stdID": "0005",
                        "lectName": "Mrs Modiba",
                        "subName": "Networking",
                        "school": "University of Prectoria",
                        "date": "2017",
                        "grade": "65"
                    },
                    {
                        "subid": "sub023",
                        "stdID": "0006",
                        "lectName": "Proffesor Deviliers",
                        "subName": "Network Computing",
                        "school": "University of Prectoria",
                        "date": "2015",
                        "grade": "56"
                    },
                    {
                        "subid": "sub024",
                        "stdID": "0006",
                        "lectName": "Mrs Kgatla",
                        "subName": "Data Analysis",
                        "school": "University of Prectoria",
                        "date": "2015",
                        "grade": "66"
                    },
                    {
                        "subid": "sub025",
                        "stdID": "0006",
                        "lectName": "Ms Ndlovu",
                        "subName": "Network Design",
                        "school": "University of Prectoria",
                        "date": "2015",
                        "grade": "70"
                    },
                    {
                        "subid": "sub026",
                        "stdID": "0006",
                        "lectName": "Proffessor Jaques",
                        "subName": "Networking",
                        "school": "University of Prectoria",
                        "date": "2015",
                        "grade": "29"
                    },
                ],
                "Lecture": [
                    {
                        "lectId": "lec001",
                        "Names": "Makgoba"
                    }
                ]
            }
        ];
    }
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORKSPACE\WEBSITES\Students\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map