;
(function () {
  System.register(['./index-legacy-T3s18jo3.js'], function (exports, module) {
    'use strict';

    var React, jsxRuntimeExports, getparam, useParams;
    return {
      setters: [module => {
        React = module.R;
        jsxRuntimeExports = module.j;
        getparam = module.aG;
        useParams = module.ap;
      }],
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "._container_w1917_1 {\n  background-color: #d7ccc8;\n  display: flex;\n  text-align: center;\n  vertical-align: middle;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  overflow: auto;\n  height: 100%;\n}\n\n._onlinePreview_w1917_12 {\n  flex: 1;\n  border: none;\n  width: 100%;\n}\n\n._icon_w1917_18 {\n  height: 1em;\n  width: 1em;\n}\n\n._offlinePreview_w1917_23 {\n  position: absolute;\n  top: 107px;\n  left: calc(50% - 189.5px);\n  border: 0;\n  width: 375px;\n  height: 664px;\n}\n\n._wrapperMob_w1917_32 {\n  padding-top: 50px;\n  height: calc(100vh - 80px);\n  overflow: auto;\n  position: relative;\n}\n\n._phoneBg_w1917_39 {\n  width: 472px;\n  max-height: 888px;\n}\n";
        document.head.appendChild(__vite_style__);
        const container = "_container_w1917_1";
        const onlinePreview = "_onlinePreview_w1917_12";
        const icon = "_icon_w1917_18";
        const offlinePreview = "_offlinePreview_w1917_23";
        const wrapperMob = "_wrapperMob_w1917_32";
        const phoneBg = "_phoneBg_w1917_39";
        const styles = {
          container: container,
          onlinePreview: onlinePreview,
          icon: icon,
          offlinePreview: offlinePreview,
          wrapperMob: wrapperMob,
          phoneBg: phoneBg
        };
        function PreviewSurvey({
          mode = "online"
        }) {
          const resolveMode = mode2 => {
            if (mode2 == "offline") return "offline";
            return "online";
          };
          const withEmbeddedParam = () => {
            const surveyId = getparam(useParams(), "surveyId");
            let location = `/preview-survey/${surveyId}`;
            if (location.indexOf("?mode") == -1) {
              location = location + "?mode=" + resolveMode(mode);
            } else {
              location = location.replace("?mode=offline", `?mode=${resolveMode(mode)}`);
              location = location.replace("?mode=online", `?mode=${resolveMode(mode)}`);
            }
            return location;
          };
          return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            className: styles.container,
            children: mode == "online" ? /* @__PURE__ */jsxRuntimeExports.jsx("iframe", {
              src: withEmbeddedParam(),
              className: styles.onlinePreview
            }) : mode == "online-phone" ? /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles.wrapperMob,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: "/phone-android.png",
                className: styles.phoneBg
              }), /* @__PURE__ */jsxRuntimeExports.jsx("iframe", {
                src: withEmbeddedParam(),
                className: styles.offlinePreview
              })]
            }) : /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
              className: styles.wrapperMob,
              children: [/* @__PURE__ */jsxRuntimeExports.jsx("img", {
                src: "/phone-android.png",
                className: styles.phoneBg
              }), /* @__PURE__ */jsxRuntimeExports.jsx("iframe", {
                src: withEmbeddedParam(),
                className: styles.offlinePreview
              })]
            })
          });
        }
        const index = exports('default', React.memo(PreviewSurvey));
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-UFP4vvH4.js.map
