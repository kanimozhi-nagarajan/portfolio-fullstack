import { useMediaQuery } from "react-responsive";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";

function SkillsSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileSkills /> : <DesktopSkills />;
}

export default SkillsSection;
