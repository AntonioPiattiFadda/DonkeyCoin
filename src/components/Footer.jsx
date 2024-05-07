import "./Footer.css";

import ScrollAnimationWrapper from "./AnimationWrapper";
const Footer = () => {
  return (
    <div className="footerContainer">
      <ScrollAnimationWrapper animation="fadeInUp" index={0}>
        <span>© 2024 by Donkycoin. All rights reserved!</span>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Footer;
