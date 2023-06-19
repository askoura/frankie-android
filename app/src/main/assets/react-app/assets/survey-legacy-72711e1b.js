;
(function () {
  System.register(['./index-legacy-23e2ff21.js'], function (exports, module) {
    'use strict';

    var requireCreateSvgIcon, interopRequireDefaultExports, jsxRuntimeExports;
    return {
      setters: [module => {
        requireCreateSvgIcon = module.g;
        interopRequireDefaultExports = module.i;
        jsxRuntimeExports = module.j;
      }],
      execute: function () {
        var Close = {};
        var _interopRequireDefault = interopRequireDefaultExports;
        Object.defineProperty(Close, "__esModule", {
          value: true
        });
        var default_1 = exports('d', Close.default = void 0);
        var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
        var _jsxRuntime = jsxRuntimeExports;
        var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        }), 'Close');
        exports('d', default_1 = Close.default = _default);
        const SURVEY_MODE = exports('b', {
          MIXED: "mixed",
          WEB: "web",
          OFFLINE: "offline"
        });
        const SURVEY_STATUS = exports('S', {
          ACTIVE: "active",
          DRAFT: "draft",
          CLOSED: "closed"
        });
        const NAVIGATION_MODE = exports('N', {
          ALL_IN_ONE: "all_in_one",
          GROUP_BY_GROUP: "group_by_group",
          QUESTION_BY_QUESTION: "question_by_question"
        });
        const SURVEY = exports('a', {
          ALLOW_PREVIOUS: "allowPrevious",
          ALLOW_INCOMPLETE: "allowIncomplete",
          ALLOW_JUMP: "allowJump",
          SKIP_INVALID: "skipInvalid",
          BACKGROUND_AUDIO: "backgroundAudio",
          RECORD_GPS: "recordGps",
          CAN_LOCK_SURVEY: "canLockSurvey",
          SAVE_IP: "saveIp",
          SAVE_TIMINGS: "saveTimings",
          PUBLIC_WITHIN_ORG: "publicWithinOrg"
        });
      }
    };
  });
})();
