(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\nbody {\n  background: #FBFBFB;\n  font-family: 'Source Sans Pro', sans-serif;\n  color: #73879C;\n  font-size: 16px;\n  line-height: 150%;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: 100%;\n  /*-moz-osx-font-smoothing: grayscale;*/\n  text-rendering: optimizeLegibility;\n  overflow-x: hidden !important; }\n*, *:before, *:after {\n  box-sizing: border-box; }\n:focus {\n  outline: 0 !important; }\nfigure {\n  margin: 0;\n  padding: 0; }\nfigure img {\n  width: 100%;\n  height: auto; }\nfigure :not(.icon-overlay) a:hover,\nfigure:not(.icon-overlay) > a:hover {\n  opacity: .7; }\nimg[src*=\".svg\"] {\n  height: 100%; }\niframe {\n  border: none; }\n* > p:last-child {\n  padding-bottom: 0 !important;\n  margin-bottom: 0 !important; }\n::-moz-selection {\n  background: #AAF2E4;\n  /* Safari */\n  color: #506A85; }\n::selection {\n  background: #AAF2E4;\n  /* Safari */\n  color: #506A85; }\n::-moz-selection {\n  background: #AAF2E4;\n  /* Firefox */\n  color: #506A85; }\n.animate {\n  transition: all 0.1s ease-out;\n  /* Optionally cubic-bezier(0.215, 0.610, 0.355, 1.000) which is easeOutCubic */\n  -webkit-transform: translateZ(0);\n  /* Enables hardware accelerated transitions for transform, opacity and filter properties on browsers with webkit engines — optionally will-change */\n  -webkit-backface-visibility: hidden;\n  /* Fixes transition flickering in Chrome and Safari */ }\n.navbar,\nmain {\n  background-color: #FFF; }\nmain:before {\n  content: \"\";\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  background: #ffffff;\n  transition: 0.4s ease-out 0.2s;\n  transition-property: opacity, visibility; }\nmain.js-reveal:before {\n  opacity: 0;\n  visibility: hidden; }\n.container {\n  padding-right: 0;\n  padding-left: 0; }\np {\n  margin-bottom: 20px; }\np a {\n  border-bottom: 1px solid #73879C; }\np a:hover {\n  border-color: transparent; }\na {\n  color: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  -webkit-transform: translateZ(0);\n  /* Enables hardware accelerated transitions for transform, opacity and filter properties on browsers with webkit engines — optionally will-change */\n  -webkit-backface-visibility: hidden;\n  /* Fixes transition flickering in Chrome and Safari */ }\na:hover,\na:focus {\n  color: #1ABB9C;\n  text-decoration: none; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.025em;\n  color: #506A85;\n  margin-top: 0;\n  /*word-wrap: break-word;*/ }\nh1 {\n  font-size: 40px;\n  line-height: 130%;\n  margin-bottom: 25px; }\nh2 {\n  font-size: 22px;\n  line-height: 130%;\n  margin-bottom: 20px; }\nh3 {\n  font-size: 18px;\n  line-height: 150%;\n  margin-bottom: 15px; }\nh4 {\n  font-size: 14px;\n  line-height: 150%;\n  margin-bottom: 15px; }\nh5 {\n  font-size: 12px;\n  line-height: 160%;\n  margin-bottom: 13px; }\nh6 {\n  font-size: 10px;\n  line-height: 160%;\n  margin-bottom: 10px; }\n/*a .logo {\n\ttransition: all 0.2s ease-out;\n}*/\na:hover .logo {\n  opacity: .6; }\na.green:hover {\n  background: #1ABB9C !important; }\na.blue:hover {\n  background: #3F8DBF !important; }\na.red:hover {\n  background: #FA6C65 !important; }\na.orange:hover {\n  background: #F27A24 !important; }\na.purple:hover {\n  background: #9B59B6 !important; }\na.pink:hover {\n  background: #D487BE !important; }\na.navy:hover {\n  background: #34495E !important; }\na.gray:hover {\n  background: #95A5A6 !important; }\nol {\n  position: relative;\n  padding-left: 22px; }\nul {\n  list-style: none;\n  position: relative;\n  padding-left: 22px; }\nul.arrowed li,\nul.circled li,\nol li {\n  margin-bottom: 5px; }\nul.contacts {\n  padding-left: 0; }\nul.contacts li {\n  margin-bottom: 5px; }\nfooter ul.contacts li {\n  margin-bottom: 2px; }\n/*===================================================================================*/\n/*\tBUTTONS\n/*===================================================================================*/\n#buttons .btn {\n  margin: 5px 3px; }\n#buttons .btn-wrapper {\n  margin: 30px 0; }\n.btn {\n  color: #FFF !important;\n  background: #1ABB9C;\n  padding: 11px 20px 13px;\n  margin: 15px 5px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  letter-spacing: 0.02em;\n  text-shadow: none;\n  -webkit-font-smoothing: antialiased;\n  border: none;\n  -webkit-transition: all 200ms ease-out;\n  -o-transition: all 200ms ease-out;\n  -moz-transition: all 200ms ease-out;\n  border-radius: 3px;\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.15); }\n.btn-small {\n  padding: 5px 13px 6px;\n  font-size: 13px; }\n.btn-large {\n  padding: 14px 26px 16px;\n  font-size: 15px; }\n.btn.btn-green {\n  background: #1ABB9C; }\n.btn.btn-blue {\n  background: #3F8DBF; }\n.btn.btn-red {\n  background: #FA6C65; }\n.btn.btn-pink {\n  background: #D487BE; }\n.btn.btn-purple {\n  background: #9B59B6; }\n.btn.btn-orange {\n  background: #F27A24; }\n.btn.btn-navy {\n  background: #34495E; }\n.btn.btn-gray {\n  background: #95A5A6; }\n.btn:hover,\n.btn:focus,\n.btn:active,\n.btn.active {\n  background: #17A78B;\n  color: #FFF !important;\n  -webkit-transition: all 200ms ease-out;\n  -o-transition: all 200ms ease-out;\n  -moz-transition: all 200ms ease-out;\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.15); }\n.btn-green:hover,\n.btn-green:focus,\n.btn-green:active,\n.btn-green.active {\n  background: #17A78B !important; }\n.btn-blue:hover,\n.btn-blue:focus,\n.btn-blue:active,\n.btn-blue.active {\n  background: #387EAA !important; }\n.btn-red:hover,\n.btn-red:focus,\n.btn-red:active,\n.btn-red.active {\n  background: #CF4C45 !important; }\n.btn-pink:hover,\n.btn-pink:focus,\n.btn-pink:active,\n.btn-pink.active {\n  background: #BD78A9 !important; }\n.btn-purple:hover,\n.btn-purple:focus,\n.btn-purple:active,\n.btn-purple.active {\n  background: #8A4FA2 !important; }\n.btn-orange:hover,\n.btn-orange:focus,\n.btn-orange:active,\n.btn-orange.active {\n  background: #D96716 !important; }\n.btn-navy:hover,\n.btn-navy:focus,\n.btn-navy:active,\n.btn-navy.active {\n  background: #2C3E50 !important; }\n.btn-gray:hover,\n.btn-gray:focus,\n.btn-gray:active,\n.btn-gray.active {\n  background: #859394 !important; }\n.tint-bg .btn {\n  background: #FFF !important;\n  color: #1ABB9C !important; }\n.tint-bg .btn:hover {\n  background: #E9E9E9 !important;\n  color: #506A85 !important; }\n.btn.share-facebook {\n  background: #3d5b9b !important; }\n.btn.share-facebook:hover {\n  background: #334c8e !important; }\n.btn.share-twitter {\n  background: #5aa8cd !important; }\n.btn.share-twitter:hover {\n  background: #499ac8 !important; }\n.btn.share-googleplus {\n  background: #3b3b3b !important; }\n.btn.share-googleplus:hover {\n  background: #2e2e2e !important; }\n.btn.share-pinterest {\n  background: #c53942 !important; }\n.btn.share-pinterest:hover {\n  background: #bc2d32 !important; }\n.btn-share-lg,\n.btn-share-md,\n.btn-share-sm,\n.btn-share-xs {\n  display: table;\n  position: relative;\n  z-index: 0;\n  width: 100%;\n  text-align: center; }\n.btn-share-lg i,\n.btn-share-md i,\n.btn-share-sm i,\n.btn-share-xs i {\n  display: table-cell;\n  vertical-align: middle; }\n.btn-share-lg {\n  height: 250px; }\n.btn-share-lg i {\n  font-size: 80px; }\n.btn-share-md {\n  height: 180px; }\n.btn-share-md i {\n  font-size: 60px; }\n.btn-share-sm {\n  height: 120px; }\n.btn-share-sm i {\n  font-size: 40px; }\n.btn-share-xs {\n  height: 80px; }\n.btn-share-xs i {\n  font-size: 28px; }\n.btn-share-lg i:after,\n.btn-share-md i:after,\n.btn-share-sm i:after,\n.btn-share-xs i:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  transition: all 200ms ease-out; }\n/*.btn-share-lg:hover i:after,\n.btn-share-md:hover i:after,\n.btn-share-sm:hover i:after,\n.btn-share-xs:hover i:after {\n\theight: 100%;\n}*/\n.btn-share-lg:hover .icon-s-facebook:after,\n.btn-share-md:hover .icon-s-facebook:after,\n.btn-share-sm:hover .icon-s-facebook:after,\n.btn-share-xs:hover .icon-s-facebook:after {\n  background: #3B5998;\n  background: #4668B3; }\n.btn-share-lg:hover .icon-s-gplus:after,\n.btn-share-md:hover .icon-s-gplus:after,\n.btn-share-sm:hover .icon-s-gplus:after,\n.btn-share-xs:hover .icon-s-gplus:after {\n  background: #DD4B39;\n  background: #DE5745; }\n.btn-share-lg:hover .icon-s-twitter:after,\n.btn-share-md:hover .icon-s-twitter:after,\n.btn-share-sm:hover .icon-s-twitter:after,\n.btn-share-xs:hover .icon-s-twitter:after {\n  background: #00ACED;\n  background: #2FBBED; }\n.btn-share-lg p,\n.btn-share-md p,\n.btn-share-sm p,\n.btn-share-xs p {\n  position: absolute;\n  height: 1.1em;\n  font-family: 'Lato', sans-serif;\n  line-height: 100%;\n  color: #FFF;\n  margin: auto;\n  opacity: 0; }\n.btn-share-lg p,\n.btn-share-md p {\n  top: 20px; }\n.btn-share-sm p,\n.btn-share-xs p {\n  top: 0;\n  bottom: 0; }\n.btn-share-sm p {\n  font-size: 16px; }\n.btn-share-xs p {\n  font-size: 15px; }\n.btn-share-lg:hover p,\n.btn-share-md:hover p,\n.btn-share-sm:hover p,\n.btn-share-xs:hover p {\n  opacity: 1; }\n.btn-share-lg .name,\n.btn-share-md .name,\n.btn-share-sm .name,\n.btn-share-xs .name {\n  left: 25px; }\n.btn-share-lg .counter,\n.btn-share-md .counter,\n.btn-share-sm .counter,\n.btn-share-xs .counter {\n  right: 25px; }\n.btn-share-lg:hover,\n.btn-share-md:hover,\n.btn-share-sm:hover,\n.btn-share-xs:hover {\n  color: #FFF; }\nh1 .btn,\nh2 .btn,\nh3 .btn,\nh4 .btn,\np .btn {\n  margin-left: 15px; }\n.txt-btn {\n  font-size: 105%;\n  font-weight: 700; }\n.txt-btn:after {\n  font-family: 'fontello';\n  font-size: 75%;\n  content: '\\e846';\n  margin-left: 7px;\n  transition: all 200ms ease-out; }\n.txt-btn:hover:after {\n  margin-left: 12px; }\n/**LABELS*/\n.green-bg {\n  background-color: #1ABB9C !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.blue-bg {\n  background-color: #3F8DBF !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.red-bg {\n  background-color: #FA6C65 !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.orange-bg {\n  background-color: #F27A24 !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.purple-bg {\n  background-color: #9B59B6 !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.pink-bg {\n  background-color: #D487BE !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.navy-bg {\n  background-color: #34495E !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.gray-bg {\n  background-color: #95A5A6 !important;\n  color: #FFF !important;\n  padding: 2px 8px 4px;\n  margin-top: -2px; }\n.light-bg {\n  background-color: #F2F5F7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2NyaXN0aWFub2xheWEvV2Vic3Rvcm1Qcm9qZWN0cy9hZHAvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQ0FqQiwrRUFBK0U7QUFDL0U7RUFDRSxvQkFBbUI7RUFDbkIsMkNBQTBDO0VBQzFDLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixvQ0FBbUM7RUFDbkMsK0JBQThCO0VBQzlCLHVDQUF1QztFQUN2QyxtQ0FBa0M7RUFDbEMsOEJBQTZCLEVBQzlCO0FBRUQ7RUFHRSx1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLHNCQUFxQixFQUN0QjtBQUNEO0VBQ0UsVUFBUztFQUNULFdBQVUsRUFDWDtBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjtBQUNEOztFQUVFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsYUFBWSxFQUNiO0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7QUFDRDtFQUNFLDZCQUE0QjtFQUM1Qiw0QkFBMkIsRUFDNUI7QUFDRDtFQUNFLG9CQUFtQjtFQUFFLFlBQVk7RUFDakMsZUFBYyxFQUNmO0FBSEQ7RUFDRSxvQkFBbUI7RUFBRSxZQUFZO0VBQ2pDLGVBQWMsRUFDZjtBQUNEO0VBQ0Usb0JBQW1CO0VBQUUsYUFBYTtFQUNsQyxlQUFjLEVBQ2Y7QUFDRDtFQUNFLDhCQUE2QjtFQUFFLCtFQUErRTtFQUM5RyxpQ0FBZ0M7RUFBRSxvSkFBQTtFQUNsQyxvQ0FBbUM7RUFBRSxzREFBc0QsRUFDNUY7QUFDRDs7RUFFRSx1QkFBc0IsRUFDdkI7QUFDRDtFQUNFLFlBQVc7RUFDWCxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsVUFBUztFQUNULFNBQVE7RUFDUixXQUFVO0VBQ1Ysb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5Qix5Q0FBd0MsRUFDekM7QUFDRDtFQUNFLFdBQVU7RUFDVixtQkFBa0IsRUFDbkI7QUFDRDtFQUNFLGlCQUFnQjtF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QUNFLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjtBQUNEOzs7O0VBSUUsV0FBVSxFQUNYO0FBQ0Q7Ozs7RUFJRSxXQUFVLEVBQ1g7QUFDRDs7OztFQUlFLFlBQVcsRUFDWjtBQUNEOzs7O0VBSUUsWUFBVyxFQUNaO0FBQ0Q7Ozs7O0VBS0Usa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBSWhCLCtCQUE4QixFQUMvQjtBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBRUQsV0FBVztBQUNYO0VBQ0UscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixxQkFBb0I7RUFDcEIsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxxQ0FBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIscUJBQW9CO0VBQ3BCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixxQkFBb0I7RUFDcEIsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxxQ0FBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIscUJBQW9CO0VBQ3BCLGlCQUFnQixFQUNqQjtBQUNEO0VBQ0UscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixxQkFBb0I7RUFDcEIsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxxQ0FBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLDBCQUF5QixFQUMxQiIsImZpbGUiOiIuLi8uLi9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzM4NzlDO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKi1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7Ki9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7IH1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7IH1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmZpZ3VyZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbmZpZ3VyZSA6bm90KC5pY29uLW92ZXJsYXkpIGE6aG92ZXIsXG5maWd1cmU6bm90KC5pY29uLW92ZXJsYXkpID4gYTpob3ZlciB7XG4gIG9wYWNpdHk6IC43OyB9XG5cbmltZ1tzcmMqPVwiLnN2Z1wiXSB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5pZnJhbWUge1xuICBib3JkZXI6IG5vbmU7IH1cblxuKiA+IHA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNBQUYyRTQ7XG4gIC8qIFNhZmFyaSAqL1xuICBjb2xvcjogIzUwNkE4NTsgfVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI0FBRjJFNDtcbiAgLyogRmlyZWZveCAqL1xuICBjb2xvcjogIzUwNkE4NTsgfVxuXG4uYW5pbWF0ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICAvKiBPcHRpb25hbGx5IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCkgd2hpY2ggaXMgZWFzZU91dEN1YmljICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAvKiBFbmFibGVzIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zIGZvciB0cmFuc2Zvcm0sIG9wYWNpdHkgYW5kIGZpbHRlciBwcm9wZXJ0aWVzIG9uIGJyb3dzZXJzIHdpdGggd2Via2l0IGVuZ2luZXMg4oCUIG9wdGlvbmFsbHkgd2lsbC1jaGFuZ2UgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIEZpeGVzIHRyYW5zaXRpb24gZmxpY2tlcmluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSAqLyB9XG5cbi5uYXZiYXIsXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxuXG5tYWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0IDAuMnM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIHZpc2liaWxpdHk7IH1cblxubWFpbi5qcy1yZXZlYWw6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxucCBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Mzg3OUM7IH1cblxucCBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAvKiBFbmFibGVzIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zIGZvciB0cmFuc2Zvcm0sIG9wYWNpdHkgYW5kIGZpbHRlciBwcm9wZXJ0aWVzIG9uIGJyb3dzZXJzIHdpdGggd2Via2l0IGVuZ2luZXMg4oCUIG9wdGlvbmFsbHkgd2lsbC1jaGFuZ2UgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC8qIEZpeGVzIHRyYW5zaXRpb24gZmxpY2tlcmluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSAqLyB9XG5cbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6ICMxQUJCOUM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gIGNvbG9yOiAjNTA2QTg1O1xuICBtYXJnaW4tdG9wOiAwO1xuICAvKndvcmQtd3JhcDogYnJlYWstd29yZDsqLyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cblxuaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7IH1cblxuaDYge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG5cbi8qYSAubG9nbyB7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufSovXG5hOmhvdmVyIC5sb2dvIHtcbiAgb3BhY2l0eTogLjY7IH1cblxuYS5ncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxQUJCOUMgIWltcG9ydGFudDsgfVxuXG5hLmJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjM0Y4REJGICFpbXBvcnRhbnQ7IH1cblxuYS5yZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkE2QzY1ICFpbXBvcnRhbnQ7IH1cblxuYS5vcmFuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjI3QTI0ICFpbXBvcnRhbnQ7IH1cblxuYS5wdXJwbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOUI1OUI2ICFpbXBvcnRhbnQ7IH1cblxuYS5waW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0Q0ODdCRSAhaW1wb3J0YW50OyB9XG5cbmEubmF2eTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NUUgIWltcG9ydGFudDsgfVxuXG5hLmdyYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOTVBNUE2ICFpbXBvcnRhbnQ7IH1cblxub2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjJweDsgfVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4OyB9XG5cbnVsLmFycm93ZWQgbGksXG51bC5jaXJjbGVkIGxpLFxub2wgbGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxudWwuY29udGFjdHMge1xuICBwYWRkaW5nLWxlZnQ6IDA7IH1cblxudWwuY29udGFjdHMgbGkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuZm9vdGVyIHVsLmNvbnRhY3RzIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLypcdEJVVFRPTlNcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuI2J1dHRvbnMgLmJ0biB7XG4gIG1hcmdpbjogNXB4IDNweDsgfVxuXG4jYnV0dG9ucyAuYnRuLXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHggMDsgfVxuXG4uYnRuIHtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFBQkI5QztcbiAgcGFkZGluZzogMTFweCAyMHB4IDEzcHg7XG4gIG1hcmdpbjogMTVweCA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG5cbi5idG4tc21hbGwge1xuICBwYWRkaW5nOiA1cHggMTNweCA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuXG4uYnRuLWxhcmdlIHtcbiAgcGFkZGluZzogMTRweCAyNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG4uYnRuLmJ0bi1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMxQUJCOUM7IH1cblxuLmJ0bi5idG4tYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMzRjhEQkY7IH1cblxuLmJ0bi5idG4tcmVkIHtcbiAgYmFja2dyb3VuZDogI0ZBNkM2NTsgfVxuXG4uYnRuLmJ0bi1waW5rIHtcbiAgYmFja2dyb3VuZDogI0Q0ODdCRTsgfVxuXG4uYnRuLmJ0bi1wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjOUI1OUI2OyB9XG5cbi5idG4uYnRuLW9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNGMjdBMjQ7IH1cblxuLmJ0bi5idG4tbmF2eSB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NUU7IH1cblxuLmJ0bi5idG4tZ3JheSB7XG4gIGJhY2tncm91bmQ6ICM5NUE1QTY7IH1cblxuLmJ0bjpob3Zlcixcbi5idG46Zm9jdXMsXG4uYnRuOmFjdGl2ZSxcbi5idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE3QTc4QjtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9XG5cbi5idG4tZ3JlZW46aG92ZXIsXG4uYnRuLWdyZWVuOmZvY3VzLFxuLmJ0bi1ncmVlbjphY3RpdmUsXG4uYnRuLWdyZWVuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxN0E3OEIgIWltcG9ydGFudDsgfVxuXG4uYnRuLWJsdWU6aG92ZXIsXG4uYnRuLWJsdWU6Zm9jdXMsXG4uYnRuLWJsdWU6YWN0aXZlLFxuLmJ0bi1ibHVlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMzODdFQUEgIWltcG9ydGFudDsgfVxuXG4uYnRuLXJlZDpob3Zlcixcbi5idG4tcmVkOmZvY3VzLFxuLmJ0bi1yZWQ6YWN0aXZlLFxuLmJ0bi1yZWQuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0NGNEM0NSAhaW1wb3J0YW50OyB9XG5cbi5idG4tcGluazpob3Zlcixcbi5idG4tcGluazpmb2N1cyxcbi5idG4tcGluazphY3RpdmUsXG4uYnRuLXBpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0JENzhBOSAhaW1wb3J0YW50OyB9XG5cbi5idG4tcHVycGxlOmhvdmVyLFxuLmJ0bi1wdXJwbGU6Zm9jdXMsXG4uYnRuLXB1cnBsZTphY3RpdmUsXG4uYnRuLXB1cnBsZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOEE0RkEyICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1vcmFuZ2U6aG92ZXIsXG4uYnRuLW9yYW5nZTpmb2N1cyxcbi5idG4tb3JhbmdlOmFjdGl2ZSxcbi5idG4tb3JhbmdlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNEOTY3MTYgIWltcG9ydGFudDsgfVxuXG4uYnRuLW5hdnk6aG92ZXIsXG4uYnRuLW5hdnk6Zm9jdXMsXG4uYnRuLW5hdnk6YWN0aXZlLFxuLmJ0bi1uYXZ5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyQzNFNTAgIWltcG9ydGFudDsgfVxuXG4uYnRuLWdyYXk6aG92ZXIsXG4uYnRuLWdyYXk6Zm9jdXMsXG4uYnRuLWdyYXk6YWN0aXZlLFxuLmJ0bi1ncmF5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM4NTkzOTQgIWltcG9ydGFudDsgfVxuXG4udGludC1iZyAuYnRuIHtcbiAgYmFja2dyb3VuZDogI0ZGRiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzFBQkI5QyAhaW1wb3J0YW50OyB9XG5cbi50aW50LWJnIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRTlFOUU5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTA2QTg1ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi5zaGFyZS1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzZDViOWIgIWltcG9ydGFudDsgfVxuXG4uYnRuLnNoYXJlLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzNGM4ZSAhaW1wb3J0YW50OyB9XG5cbi5idG4uc2hhcmUtdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1YWE4Y2QgIWltcG9ydGFudDsgfVxuXG4uYnRuLnNoYXJlLXR3aXR0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNDk5YWM4ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi5zaGFyZS1nb29nbGVwbHVzIHtcbiAgYmFja2dyb3VuZDogIzNiM2IzYiAhaW1wb3J0YW50OyB9XG5cbi5idG4uc2hhcmUtZ29vZ2xlcGx1czpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyZTJlMmUgIWltcG9ydGFudDsgfVxuXG4uYnRuLnNoYXJlLXBpbnRlcmVzdCB7XG4gIGJhY2tncm91bmQ6ICNjNTM5NDIgIWltcG9ydGFudDsgfVxuXG4uYnRuLnNoYXJlLXBpbnRlcmVzdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiYzJkMzIgIWltcG9ydGFudDsgfVxuXG4uYnRuLXNoYXJlLWxnLFxuLmJ0bi1zaGFyZS1tZCxcbi5idG4tc2hhcmUtc20sXG4uYnRuLXNoYXJlLXhzIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYnRuLXNoYXJlLWxnIGksXG4uYnRuLXNoYXJlLW1kIGksXG4uYnRuLXNoYXJlLXNtIGksXG4uYnRuLXNoYXJlLXhzIGkge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5idG4tc2hhcmUtbGcge1xuICBoZWlnaHQ6IDI1MHB4OyB9XG5cbi5idG4tc2hhcmUtbGcgaSB7XG4gIGZvbnQtc2l6ZTogODBweDsgfVxuXG4uYnRuLXNoYXJlLW1kIHtcbiAgaGVpZ2h0OiAxODBweDsgfVxuXG4uYnRuLXNoYXJlLW1kIGkge1xuICBmb250LXNpemU6IDYwcHg7IH1cblxuLmJ0bi1zaGFyZS1zbSB7XG4gIGhlaWdodDogMTIwcHg7IH1cblxuLmJ0bi1zaGFyZS1zbSBpIHtcbiAgZm9udC1zaXplOiA0MHB4OyB9XG5cbi5idG4tc2hhcmUteHMge1xuICBoZWlnaHQ6IDgwcHg7IH1cblxuLmJ0bi1zaGFyZS14cyBpIHtcbiAgZm9udC1zaXplOiAyOHB4OyB9XG5cbi5idG4tc2hhcmUtbGcgaTphZnRlcixcbi5idG4tc2hhcmUtbWQgaTphZnRlcixcbi5idG4tc2hhcmUtc20gaTphZnRlcixcbi5idG4tc2hhcmUteHMgaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDsgfVxuXG4vKi5idG4tc2hhcmUtbGc6aG92ZXIgaTphZnRlcixcbi5idG4tc2hhcmUtbWQ6aG92ZXIgaTphZnRlcixcbi5idG4tc2hhcmUtc206aG92ZXIgaTphZnRlcixcbi5idG4tc2hhcmUteHM6aG92ZXIgaTphZnRlciB7XG5cdGhlaWdodDogMTAwJTtcbn0qL1xuLmJ0bi1zaGFyZS1sZzpob3ZlciAuaWNvbi1zLWZhY2Vib29rOmFmdGVyLFxuLmJ0bi1zaGFyZS1tZDpob3ZlciAuaWNvbi1zLWZhY2Vib29rOmFmdGVyLFxuLmJ0bi1zaGFyZS1zbTpob3ZlciAuaWNvbi1zLWZhY2Vib29rOmFmdGVyLFxuLmJ0bi1zaGFyZS14czpob3ZlciAuaWNvbi1zLWZhY2Vib29rOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbiAgYmFja2dyb3VuZDogIzQ2NjhCMzsgfVxuXG4uYnRuLXNoYXJlLWxnOmhvdmVyIC5pY29uLXMtZ3BsdXM6YWZ0ZXIsXG4uYnRuLXNoYXJlLW1kOmhvdmVyIC5pY29uLXMtZ3BsdXM6YWZ0ZXIsXG4uYnRuLXNoYXJlLXNtOmhvdmVyIC5pY29uLXMtZ3BsdXM6YWZ0ZXIsXG4uYnRuLXNoYXJlLXhzOmhvdmVyIC5pY29uLXMtZ3BsdXM6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjREQ0QjM5O1xuICBiYWNrZ3JvdW5kOiAjREU1NzQ1OyB9XG5cbi5idG4tc2hhcmUtbGc6aG92ZXIgLmljb24tcy10d2l0dGVyOmFmdGVyLFxuLmJ0bi1zaGFyZS1tZDpob3ZlciAuaWNvbi1zLXR3aXR0ZXI6YWZ0ZXIsXG4uYnRuLXNoYXJlLXNtOmhvdmVyIC5pY29uLXMtdHdpdHRlcjphZnRlcixcbi5idG4tc2hhcmUteHM6aG92ZXIgLmljb24tcy10d2l0dGVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwQUNFRDtcbiAgYmFja2dyb3VuZDogIzJGQkJFRDsgfVxuXG4uYnRuLXNoYXJlLWxnIHAsXG4uYnRuLXNoYXJlLW1kIHAsXG4uYnRuLXNoYXJlLXNtIHAsXG4uYnRuLXNoYXJlLXhzIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMS4xZW07XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI0ZGRjtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwOyB9XG5cbi5idG4tc2hhcmUtbGcgcCxcbi5idG4tc2hhcmUtbWQgcCB7XG4gIHRvcDogMjBweDsgfVxuXG4uYnRuLXNoYXJlLXNtIHAsXG4uYnRuLXNoYXJlLXhzIHAge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDsgfVxuXG4uYnRuLXNoYXJlLXNtIHAge1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLmJ0bi1zaGFyZS14cyBwIHtcbiAgZm9udC1zaXplOiAxNXB4OyB9XG5cbi5idG4tc2hhcmUtbGc6aG92ZXIgcCxcbi5idG4tc2hhcmUtbWQ6aG92ZXIgcCxcbi5idG4tc2hhcmUtc206aG92ZXIgcCxcbi5idG4tc2hhcmUteHM6aG92ZXIgcCB7XG4gIG9wYWNpdHk6IDE7IH1cblxuLmJ0bi1zaGFyZS1sZyAubmFtZSxcbi5idG4tc2hhcmUtbWQgLm5hbWUsXG4uYnRuLXNoYXJlLXNtIC5uYW1lLFxuLmJ0bi1zaGFyZS14cyAubmFtZSB7XG4gIGxlZnQ6IDI1cHg7IH1cblxuLmJ0bi1zaGFyZS1sZyAuY291bnRlcixcbi5idG4tc2hhcmUtbWQgLmNvdW50ZXIsXG4uYnRuLXNoYXJlLXNtIC5jb3VudGVyLFxuLmJ0bi1zaGFyZS14cyAuY291bnRlciB7XG4gIHJpZ2h0OiAyNXB4OyB9XG5cbi5idG4tc2hhcmUtbGc6aG92ZXIsXG4uYnRuLXNoYXJlLW1kOmhvdmVyLFxuLmJ0bi1zaGFyZS1zbTpob3Zlcixcbi5idG4tc2hhcmUteHM6aG92ZXIge1xuICBjb2xvcjogI0ZGRjsgfVxuXG5oMSAuYnRuLFxuaDIgLmJ0bixcbmgzIC5idG4sXG5oNCAuYnRuLFxucCAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cblxuLnR4dC1idG4ge1xuICBmb250LXNpemU6IDEwNSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLnR4dC1idG46YWZ0ZXIge1xuICBmb250LWZhbWlseTogJ2ZvbnRlbGxvJztcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbnRlbnQ6ICdcXGU4NDYnO1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0OyB9XG5cbi50eHQtYnRuOmhvdmVyOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7IH1cblxuLyoqTEFCRUxTKi9cbi5ncmVlbi1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUJCOUMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7IH1cblxuLmJsdWUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y4REJGICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG5cbi5yZWQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2QzY1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG5cbi5vcmFuZ2UtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3QTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG5cbi5wdXJwbGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUI1OUI2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG5cbi5waW5rLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0ODdCRSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggOHB4IDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDsgfVxuXG4ubmF2eS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7IH1cblxuLmdyYXktYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVBNUE2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4OyB9XG5cbi5saWdodC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkY1Rjc7IH1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzM4NzlDO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKi1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7Ki9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG46Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5maWd1cmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbmZpZ3VyZSA6bm90KC5pY29uLW92ZXJsYXkpIGE6aG92ZXIsXG5maWd1cmU6bm90KC5pY29uLW92ZXJsYXkpID4gYTpob3ZlciB7XG4gIG9wYWNpdHk6IC43O1xufVxuaW1nW3NyYyo9XCIuc3ZnXCJdIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lO1xufVxuKiA+IHA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI0FBRjJFNDsgLyogU2FmYXJpICovXG4gIGNvbG9yOiAjNTA2QTg1O1xufVxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNBQUYyRTQ7IC8qIEZpcmVmb3ggKi9cbiAgY29sb3I6ICM1MDZBODU7XG59XG4uYW5pbWF0ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0OyAvKiBPcHRpb25hbGx5IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCkgd2hpY2ggaXMgZWFzZU91dEN1YmljICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAvKiBFbmFibGVzIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zIGZvciB0cmFuc2Zvcm0sIG9wYWNpdHkgYW5kIGZpbHRlciBwcm9wZXJ0aWVzIG9uIGJyb3dzZXJzIHdpdGggd2Via2l0IGVuZ2luZXMg4oCUIG9wdGlvbmFsbHkgd2lsbC1jaGFuZ2UgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIEZpeGVzIHRyYW5zaXRpb24gZmxpY2tlcmluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSAqL1xufVxuLm5hdmJhcixcbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxubWFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dCAwLjJzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB2aXNpYmlsaXR5O1xufVxubWFpbi5qcy1yZXZlYWw6YmVmb3JlIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxucCBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Mzg3OUM7XG59XG5wIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgLyogRW5hYmxlcyBoYXJkd2FyZSBhY2NlbGVyYXRlZCB0cmFuc2l0aW9ucyBmb3IgdHJhbnNmb3JtLCBvcGFjaXR5IGFuZCBmaWx0ZXIgcHJvcGVydGllcyBvbiBicm93c2VycyB3aXRoIHdlYmtpdCBlbmdpbmVzIOKAlCBvcHRpb25hbGx5IHdpbGwtY2hhbmdlICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBGaXhlcyB0cmFuc2l0aW9uIGZsaWNrZXJpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgKi9cbn1cbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgY29sb3I6ICMxQUJCOUM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgY29sb3I6ICM1MDZBODU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIC8qd29yZC13cmFwOiBicmVhay13b3JkOyovXG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5oNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5oNSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XG59XG5oNiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2MCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4vKmEgLmxvZ28ge1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn0qL1xuYTpob3ZlciAubG9nbyB7XG4gIG9wYWNpdHk6IC42O1xufVxuYS5ncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxQUJCOUMgIWltcG9ydGFudDtcbn1cbmEuYmx1ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzRjhEQkYgIWltcG9ydGFudDtcbn1cbmEucmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0ZBNkM2NSAhaW1wb3J0YW50O1xufVxuYS5vcmFuZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjI3QTI0ICFpbXBvcnRhbnQ7XG59XG5hLnB1cnBsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5QjU5QjYgIWltcG9ydGFudDtcbn1cbmEucGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNENDg3QkUgIWltcG9ydGFudDtcbn1cbmEubmF2eTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NUUgIWltcG9ydGFudDtcbn1cbmEuZ3JheTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5NUE1QTYgIWltcG9ydGFudDtcbn1cbm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG59XG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xufVxudWwuYXJyb3dlZCBsaSxcbnVsLmNpcmNsZWQgbGksXG5vbCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxudWwuY29udGFjdHMge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG51bC5jb250YWN0cyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmZvb3RlciB1bC5jb250YWN0cyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLypcdEJVVFRPTlNcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4jYnV0dG9ucyAuYnRuIHtcbiAgbWFyZ2luOiA1cHggM3B4O1xufVxuI2J1dHRvbnMgLmJ0bi13cmFwcGVyIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4uYnRuIHtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzFBQkI5QztcbiAgcGFkZGluZzogMTFweCAyMHB4IDEzcHg7XG4gIG1hcmdpbjogMTVweCA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCByZ2JhKDAsMCwwLDAuMTUpO1xufVxuLmJ0bi1zbWFsbCB7XG4gIHBhZGRpbmc6IDVweCAxM3B4IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmJ0bi1sYXJnZSB7XG4gIHBhZGRpbmc6IDE0cHggMjZweCAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYnRuLmJ0bi1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICMxQUJCOUM7XG59XG4uYnRuLmJ0bi1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzNGOERCRjtcbn1cbi5idG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQ6ICNGQTZDNjU7XG59XG4uYnRuLmJ0bi1waW5rIHtcbiAgYmFja2dyb3VuZDogI0Q0ODdCRTtcbn1cbi5idG4uYnRuLXB1cnBsZSB7XG4gIGJhY2tncm91bmQ6ICM5QjU5QjY7XG59XG4uYnRuLmJ0bi1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRjI3QTI0O1xufVxuLmJ0bi5idG4tbmF2eSB7XG4gIGJhY2tncm91bmQ6ICMzNDQ5NUU7XG59XG4uYnRuLmJ0bi1ncmF5IHtcbiAgYmFja2dyb3VuZDogIzk1QTVBNjtcbn1cbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzLFxuLmJ0bjphY3RpdmUsXG4uYnRuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxN0E3OEI7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoMCwwLDAsMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbn1cbi5idG4tZ3JlZW46aG92ZXIsXG4uYnRuLWdyZWVuOmZvY3VzLFxuLmJ0bi1ncmVlbjphY3RpdmUsXG4uYnRuLWdyZWVuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxN0E3OEIgIWltcG9ydGFudDtcbn1cbi5idG4tYmx1ZTpob3Zlcixcbi5idG4tYmx1ZTpmb2N1cyxcbi5idG4tYmx1ZTphY3RpdmUsXG4uYnRuLWJsdWUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM4N0VBQSAhaW1wb3J0YW50O1xufVxuLmJ0bi1yZWQ6aG92ZXIsXG4uYnRuLXJlZDpmb2N1cyxcbi5idG4tcmVkOmFjdGl2ZSxcbi5idG4tcmVkLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNDRjRDNDUgIWltcG9ydGFudDtcbn1cbi5idG4tcGluazpob3Zlcixcbi5idG4tcGluazpmb2N1cyxcbi5idG4tcGluazphY3RpdmUsXG4uYnRuLXBpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0JENzhBOSAhaW1wb3J0YW50O1xufVxuLmJ0bi1wdXJwbGU6aG92ZXIsXG4uYnRuLXB1cnBsZTpmb2N1cyxcbi5idG4tcHVycGxlOmFjdGl2ZSxcbi5idG4tcHVycGxlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM4QTRGQTIgIWltcG9ydGFudDtcbn1cbi5idG4tb3JhbmdlOmhvdmVyLFxuLmJ0bi1vcmFuZ2U6Zm9jdXMsXG4uYnRuLW9yYW5nZTphY3RpdmUsXG4uYnRuLW9yYW5nZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRDk2NzE2ICFpbXBvcnRhbnQ7XG59XG4uYnRuLW5hdnk6aG92ZXIsXG4uYnRuLW5hdnk6Zm9jdXMsXG4uYnRuLW5hdnk6YWN0aXZlLFxuLmJ0bi1uYXZ5LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMyQzNFNTAgIWltcG9ydGFudDtcbn1cbi5idG4tZ3JheTpob3Zlcixcbi5idG4tZ3JheTpmb2N1cyxcbi5idG4tZ3JheTphY3RpdmUsXG4uYnRuLWdyYXkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzg1OTM5NCAhaW1wb3J0YW50O1xufVxuLnRpbnQtYmcgLmJ0biB7XG4gIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxQUJCOUMgIWltcG9ydGFudDtcbn1cbi50aW50LWJnIC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRTlFOUU5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTA2QTg1ICFpbXBvcnRhbnQ7XG59XG4uYnRuLnNoYXJlLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNkNWI5YiAhaW1wb3J0YW50XG59XG4uYnRuLnNoYXJlLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzNGM4ZSAhaW1wb3J0YW50XG59XG4uYnRuLnNoYXJlLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWFhOGNkICFpbXBvcnRhbnRcbn1cbi5idG4uc2hhcmUtdHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0OTlhYzggIWltcG9ydGFudFxufVxuLmJ0bi5zaGFyZS1nb29nbGVwbHVzIHtcbiAgYmFja2dyb3VuZDogIzNiM2IzYiAhaW1wb3J0YW50XG59XG4uYnRuLnNoYXJlLWdvb2dsZXBsdXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMmUyZTJlICFpbXBvcnRhbnRcbn1cbi5idG4uc2hhcmUtcGludGVyZXN0IHtcbiAgYmFja2dyb3VuZDogI2M1Mzk0MiAhaW1wb3J0YW50XG59XG4uYnRuLnNoYXJlLXBpbnRlcmVzdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiYzJkMzIgIWltcG9ydGFudFxufVxuLmJ0bi1zaGFyZS1sZyxcbi5idG4tc2hhcmUtbWQsXG4uYnRuLXNoYXJlLXNtLFxuLmJ0bi1zaGFyZS14cyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuLXNoYXJlLWxnIGksXG4uYnRuLXNoYXJlLW1kIGksXG4uYnRuLXNoYXJlLXNtIGksXG4uYnRuLXNoYXJlLXhzIGkge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi1zaGFyZS1sZyB7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uYnRuLXNoYXJlLWxnIGkge1xuICBmb250LXNpemU6IDgwcHg7XG59XG4uYnRuLXNoYXJlLW1kIHtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5idG4tc2hhcmUtbWQgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cbi5idG4tc2hhcmUtc20ge1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuLmJ0bi1zaGFyZS1zbSBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmJ0bi1zaGFyZS14cyB7XG4gIGhlaWdodDogODBweDtcbn1cbi5idG4tc2hhcmUteHMgaSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5idG4tc2hhcmUtbGcgaTphZnRlcixcbi5idG4tc2hhcmUtbWQgaTphZnRlcixcbi5idG4tc2hhcmUtc20gaTphZnRlcixcbi5idG4tc2hhcmUteHMgaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbn1cbi8qLmJ0bi1zaGFyZS1sZzpob3ZlciBpOmFmdGVyLFxuLmJ0bi1zaGFyZS1tZDpob3ZlciBpOmFmdGVyLFxuLmJ0bi1zaGFyZS1zbTpob3ZlciBpOmFmdGVyLFxuLmJ0bi1zaGFyZS14czpob3ZlciBpOmFmdGVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufSovXG4uYnRuLXNoYXJlLWxnOmhvdmVyIC5pY29uLXMtZmFjZWJvb2s6YWZ0ZXIsXG4uYnRuLXNoYXJlLW1kOmhvdmVyIC5pY29uLXMtZmFjZWJvb2s6YWZ0ZXIsXG4uYnRuLXNoYXJlLXNtOmhvdmVyIC5pY29uLXMtZmFjZWJvb2s6YWZ0ZXIsXG4uYnRuLXNoYXJlLXhzOmhvdmVyIC5pY29uLXMtZmFjZWJvb2s6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xuICBiYWNrZ3JvdW5kOiAjNDY2OEIzO1xufVxuLmJ0bi1zaGFyZS1sZzpob3ZlciAuaWNvbi1zLWdwbHVzOmFmdGVyLFxuLmJ0bi1zaGFyZS1tZDpob3ZlciAuaWNvbi1zLWdwbHVzOmFmdGVyLFxuLmJ0bi1zaGFyZS1zbTpob3ZlciAuaWNvbi1zLWdwbHVzOmFmdGVyLFxuLmJ0bi1zaGFyZS14czpob3ZlciAuaWNvbi1zLWdwbHVzOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI0RENEIzOTtcbiAgYmFja2dyb3VuZDogI0RFNTc0NTtcbn1cbi5idG4tc2hhcmUtbGc6aG92ZXIgLmljb24tcy10d2l0dGVyOmFmdGVyLFxuLmJ0bi1zaGFyZS1tZDpob3ZlciAuaWNvbi1zLXR3aXR0ZXI6YWZ0ZXIsXG4uYnRuLXNoYXJlLXNtOmhvdmVyIC5pY29uLXMtdHdpdHRlcjphZnRlcixcbi5idG4tc2hhcmUteHM6aG92ZXIgLmljb24tcy10d2l0dGVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwQUNFRDtcbiAgYmFja2dyb3VuZDogIzJGQkJFRDtcbn1cbi5idG4tc2hhcmUtbGcgcCxcbi5idG4tc2hhcmUtbWQgcCxcbi5idG4tc2hhcmUtc20gcCxcbi5idG4tc2hhcmUteHMgcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxLjFlbTtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjRkZGO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG59XG4uYnRuLXNoYXJlLWxnIHAsXG4uYnRuLXNoYXJlLW1kIHAge1xuICB0b3A6IDIwcHg7XG59XG4uYnRuLXNoYXJlLXNtIHAsXG4uYnRuLXNoYXJlLXhzIHAge1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5idG4tc2hhcmUtc20gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idG4tc2hhcmUteHMgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5idG4tc2hhcmUtbGc6aG92ZXIgcCxcbi5idG4tc2hhcmUtbWQ6aG92ZXIgcCxcbi5idG4tc2hhcmUtc206aG92ZXIgcCxcbi5idG4tc2hhcmUteHM6aG92ZXIgcCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYnRuLXNoYXJlLWxnIC5uYW1lLFxuLmJ0bi1zaGFyZS1tZCAubmFtZSxcbi5idG4tc2hhcmUtc20gLm5hbWUsXG4uYnRuLXNoYXJlLXhzIC5uYW1lIHtcbiAgbGVmdDogMjVweDtcbn1cbi5idG4tc2hhcmUtbGcgLmNvdW50ZXIsXG4uYnRuLXNoYXJlLW1kIC5jb3VudGVyLFxuLmJ0bi1zaGFyZS1zbSAuY291bnRlcixcbi5idG4tc2hhcmUteHMgLmNvdW50ZXIge1xuICByaWdodDogMjVweDtcbn1cbi5idG4tc2hhcmUtbGc6aG92ZXIsXG4uYnRuLXNoYXJlLW1kOmhvdmVyLFxuLmJ0bi1zaGFyZS1zbTpob3Zlcixcbi5idG4tc2hhcmUteHM6aG92ZXIge1xuICBjb2xvcjogI0ZGRjtcbn1cbmgxIC5idG4sXG5oMiAuYnRuLFxuaDMgLmJ0bixcbmg0IC5idG4sXG5wIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi50eHQtYnRuIHtcbiAgZm9udC1zaXplOiAxMDUlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnR4dC1idG46YWZ0ZXIge1xuICBmb250LWZhbWlseTogJ2ZvbnRlbGxvJztcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbnRlbnQ6ICdcXGU4NDYnO1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xufVxuLnR4dC1idG46aG92ZXI6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLyoqTEFCRUxTKi9cbi5ncmVlbi1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUJCOUMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uYmx1ZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjhEQkYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ucmVkLWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNkM2NSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggOHB4IDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5vcmFuZ2UtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3QTI0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCA4cHggNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLnB1cnBsZS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QjU5QjYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ucGluay1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENDg3QkUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ubmF2eS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDQ5NUUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uZ3JheS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NUE1QTYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDhweCA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ubGlnaHQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGNUY3O1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cristianolaya/WebstormProjects/adp/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map