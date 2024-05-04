import './Footer.css';

import ScrollAnimationWrapper from './AnimationWrapper';
const Footer = () => {
  return (
    <div className="footerContainer">
      <ScrollAnimationWrapper animation="fadeInUp" index={0}>
        <span>© 2024 by Donky. All rights reserved!</span>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Footer;
