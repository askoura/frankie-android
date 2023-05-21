;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var serverDateTimeToLocalDateTime = exports('s', function (serverDate) {
          var dateInUTC = new Date(serverDate);
          return new Date(dateInUTC.getTime() - dateInUTC.getTimezoneOffset() * 60 * 1000);
        });
        var localDateToServerDateTime = exports('l', function (date) {
          var adjustedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
          return adjustedDate.toISOString().split(".")[0].replace("T", " ");
        });
        var formatlocalDateTime = exports('f', function (date) {
          var year = date.getFullYear();
          var month = ("0" + (date.getMonth() + 1)).slice(-2);
          var day = ("0" + date.getDate()).slice(-2);
          var hours = ("0" + date.getHours()).slice(-2);
          var minutes = ("0" + date.getMinutes()).slice(-2);
          var seconds = ("0" + date.getSeconds()).slice(-2);
          return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
        });
        var dayMonthUeatFormat = exports('d', function (date) {
          var yyyy = date.getFullYear();
          var mm = date.getMonth() + 1; // Months start at 0!
          var dd = date.getDate();
          if (dd < 10) dd = "0" + dd;
          if (mm < 10) mm = "0" + mm;
          return dd + "/" + mm + "/" + yyyy;
        });
      }
    };
  });
})();
