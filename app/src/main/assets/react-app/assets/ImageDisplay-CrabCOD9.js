import { m as jsxRuntimeExports } from "./index-SSbj36jE.js";
import { X as buildResourceUrl } from "./Android-BCdbvePO.js";
function ImageDisplay(props) {
  var _a, _b;
  const imageUrl = ((_a = props.component.resources) == null ? void 0 : _a.imageUrl) ? buildResourceUrl(props.component.resources.imageUrl) : "";
  return ((_b = props.component.resources) == null ? void 0 : _b.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      style: {
        width: "100%",
        maxWidth: "100%"
      },
      src: imageUrl
    }
  ) });
}
export {
  ImageDisplay as default
};
//# sourceMappingURL=ImageDisplay-CrabCOD9.js.map
