import { n as TokenService } from "./index-ad8f0a8b.js";
const ROLES = {
  SUPER_ADMIN: "super_admin",
  SURVEY_ADMIN: "survey_admin",
  SURVEYOR: "surveyor"
};
const isSurveyAdmin = () => {
  const roles = TokenService.getUser().roles;
  return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEY_ADMIN) != -1;
};
const isSurveyor = (user) => {
  const roles = user.roles;
  return roles.indexOf(ROLES.SUPER_ADMIN) != -1 || roles.indexOf(ROLES.SURVEYOR) != -1;
};
export {
  ROLES as R,
  isSurveyor as a,
  isSurveyAdmin as i
};
//# sourceMappingURL=roles-32b0c89d.js.map
