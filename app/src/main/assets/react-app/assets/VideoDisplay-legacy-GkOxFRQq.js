;
(function () {
  System.register(['./index-legacy-T3s18jo3.js', './index-legacy-6OqQYde5.js', './index-legacy-qlp3hc0T.js'], function (exports, module) {
    'use strict';

    var buildResourceUrl, useTheme, jsxRuntimeExports, ReactPlayer;
    return {
      setters: [module => {
        buildResourceUrl = module.bo;
        useTheme = module.b5;
        jsxRuntimeExports = module.j;
      }, module => {
        ReactPlayer = module.R;
      }, null],
      execute: function execute() {
        exports('default', VideoDisplay);
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
//# sourceMappingURL=VideoDisplay-legacy-GkOxFRQq.js.map
