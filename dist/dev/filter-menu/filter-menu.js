System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, FilterMenu;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('FilterMenu', FilterMenu = (_dec = customAttribute(constants.attributePrefix + 'filter-menu'), _dec2 = generateBindables('kendoFilterMenu'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function FilterMenu(element, widgetBase) {
          _classCallCheck(this, FilterMenu);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoFilterMenu').useElement(this.element).linkViewModel(this);
        }

        FilterMenu.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        FilterMenu.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        FilterMenu.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        FilterMenu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        FilterMenu.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        FilterMenu.prototype.detached = function detached() {
          this.destroy();
        };

        return FilterMenu;
      }()) || _class) || _class) || _class));

      _export('FilterMenu', FilterMenu);
    }
  };
});
//# sourceMappingURL=../dist/dev/filter-menu/filter-menu.js.map
