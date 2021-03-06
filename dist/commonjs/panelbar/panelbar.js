'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelBar = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _constants = require('../common/constants');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PanelBar = exports.PanelBar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'panel-bar'), _dec2 = (0, _decorators.generateBindables)('kendoPanelBar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function PanelBar(element, widgetBase) {
    _classCallCheck(this, PanelBar);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPanelBar').useRootElement(this.element).linkViewModel(this);
  }

  PanelBar.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  PanelBar.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  PanelBar.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PanelBar.prototype.recreate = function recreate() {
    var element = this.element;

    if (!hasListChildNode(element)) {
      var ul = document.createElement('ul');

      while (element.children.length > 0) {
        ul.appendChild(element.children[0]);
      }

      element.appendChild(ul);
      element = ul;
    } else {
      element = this.element.children[0];
    }

    this.widgetBase.useElement(element);

    this.kWidget = this.widgetBase.recreate();
  };

  PanelBar.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  PanelBar.prototype.detached = function detached() {
    this.destroy();
  };

  return PanelBar;
}()) || _class) || _class) || _class);

function hasListChildNode(element) {
  return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
}