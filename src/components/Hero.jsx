import './Hero.css';
import ScrollAnimationWrapper from './AnimationWrapper';
import DonkeyImage from '../assets/HeroImg.png';
import MLogo from '../assets/MLogo.png';
import TelegramLogo from '../assets/TelegramLogo.png';
import XLogo from '../assets/XLogo.png';

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <div>
          <ScrollAnimationWrapper animation="fadeInUp" index={3}>
            <h1>DONKY</h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={4}>
            <p>
              $DONKY is a meme for people who <br /> love the 80s and 90s and
              have <br /> wonderful memories of that time…
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={5}>
            <div className="buttonContainer">
              <button>PRESALE</button>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={6}>
            <div className="socialContainer">
              <a href="">
                <img className="socialLogo" src={XLogo} alt="X" />
              </a>
              <a href="">
                <img className="socialLogo" src={TelegramLogo} alt="Telegram" />
              </a>
              <a href="">
                <img className="mLogo" src={MLogo} alt="M" />
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper animation="fadeInUp" index={7}>
          <div>
            <img className="heroImage" src={DonkeyImage} alt="Donkey image" />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default Hero;
