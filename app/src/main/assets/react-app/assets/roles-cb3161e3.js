import { T as TokenService } from "./index-3f835c40.js";
const ROLES = {
  SUPER_ADMIN: "super_admin",
  SURVEY_ADMIN: "survey_admin",
  ANALYST: "analyst",
  SURVEYOR: "surveyor",
  SURVEYOR_AUDITOR: "surveyor_auditor"
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
