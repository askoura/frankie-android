import { F as FRONT_END_HOST, E as PROTOCOL, bN as BACKEND_BASE_URL, T as TokenService } from "./index-b8730e94.js";
const hostnameSubdomain = () => {
  const host = window.location.host;
  if (host == FRONT_END_HOST) {
    return "";
  } else {
    return host.replace("." + FRONT_END_HOST, "");
  }
};
const urlWithSubdomain = (subdomain) => {
  return PROTOCOL + "://" + subdomain + "." + FRONT_END_HOST;
};
const buildResourceUrl = (fileName) => {
  const surveyId = sessionStorage.getItem("surveyId");
  return `${BACKEND_BASE_URL}/survey/${surveyId}/resource/${fileName}`;
};
const sharingUrl = (surveyId, preview, lang) => {
  let segment = "run-survey";
  if (preview) {
    segment = "preview-survey";
  }
  let searchParams = "";
  if (lang) {
    searchParams = `?lang=${lang}`;
  }
  return `${PROTOCOL}://${TokenService.getSubdomain()}.${FRONT_END_HOST}/${segment}/${surveyId}${searchParams}`;
};
export {
  buildResourceUrl as b,
  hostnameSubdomain as h,
  sharingUrl as s,
  urlWithSubdomain as u
};
