'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stock = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stock = exports.Stock = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'stock'), _dec2 = (0, _decorators.generateBindables)('kendoStockChart'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Stock(element, widgetBase) {
    _classCallCheck(this, Stock);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoStockChart').useElement(this.element).linkViewModel(this);
  }

  Stock.prototype.subscribe = function subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  };

  Stock.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Stock.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Stock.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.recreate();
  };

  Stock.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Stock.prototype.detached = function detached() {
    this.destroy();
  };

  return Stock;
}()) || _class) || _class) || _class);