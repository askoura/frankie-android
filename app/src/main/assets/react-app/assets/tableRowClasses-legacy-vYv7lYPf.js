;
(function () {
  System.register(['./index-legacy-vEA8K-LS.js'], function (exports, module) {
    'use strict';

    var generateUtilityClasses, generateUtilityClass;
    return {
      setters: [module => {
        generateUtilityClasses = module.f;
        generateUtilityClass = module.g;
      }],
      execute: function execute() {
        exports({
          b: getTableCellUtilityClass,
          g: getTableRowUtilityClass
        });
        function getTableCellUtilityClass(slot) {
          return generateUtilityClass('MuiTableCell', slot);
        }
        const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
        const tableCellClasses$1 = exports("a", tableCellClasses);
        function getTableRowUtilityClass(slot) {
          return generateUtilityClass('MuiTableRow', slot);
        }
        const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
        const tableRowClasses$1 = exports("t", tableRowClasses);
      }
    };
  });
})();
//# sourceMappingURL=tableRowClasses-legacy-vYv7lYPf.js.map
