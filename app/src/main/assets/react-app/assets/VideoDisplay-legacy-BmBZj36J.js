;
(function () {
  System.register(['./index-legacy-y70fvrxI.js', './Android-legacy-CkMEONVX.js', './index-legacy-CtJt1unI.js'], function (exports, module) {
    'use strict';

    var useTheme, jsxRuntimeExports, buildResourceUrl, ReactPlayer;
    return {
      setters: [module => {
        useTheme = module.a6;
        jsxRuntimeExports = module.m;
      }, module => {
        buildResourceUrl = module.X;
      }, module => {
        ReactPlayer = module.R;
      }],
      execute: function execute() {
        exports("default", VideoDisplay);
        function VideoDisplay(props) {
          var _props$component$reso, _props$component$reso2;
          const videUrl = (_props$component$reso = props.component.resources) !== null && _props$component$reso !== void 0 && _props$component$reso.videoUrl ? buildResourceUrl(props.component.resources.videoUrl) : "";
          useTheme();
          return ((_props$component$reso2 = props.component.resources) === null || _props$component$reso2 === void 0 ? void 0 : _props$component$reso2.videoUrl) && /* @__PURE__ */jsxRuntimeExports.jsx("div", {
            style: {
              position: "relative",
              marginTop: "16px",
              // 16:9 aspect ratio
              paddingTop: props.component.audio_only ? "10%" : "56%"
            },
            children: /* @__PURE__ */jsxRuntimeExports.jsx(ReactPlayer, {
              url: videUrl,
              loop: props.component.loop || false,
              light: true,
              controls: true,
              config: {
                forceAudio: props.component.audio_only || false
              },
              style: {
                backgroundColor: "black",
                position: "absolute",
                top: "0",
                left: "0"
              },
              volume: 1,
              width: "100%",
              height: "100%"
            })
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=VideoDisplay-legacy-BmBZj36J.js.map
