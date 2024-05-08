import NavLogo from '../assets/navLogo.png';
import '../variables.css';
import ScrollAnimationWrapper from './AnimationWrapper';
import './Nav.css';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import HamMenu from '../assets/HamMenu.png';
import CloseMenu from '../assets/CloseMenu.png';

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const openWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Wallet conectada.');
      } catch (error) {
        console.error('Error al conectar la wallet:', error);
      }
    } else {
      console.log('MetaMask no está instalado.');
    }
  };

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: 'power2.easeInOut',
    });
  };

  const handleOpenMenu = () => {
    const accordion = document.querySelector('.mobileMenu');
    accordion.classList.toggle('mobileMenuOpen');
    const mobileHam = document.querySelector('.mobileHamb');
    mobileHam.classList.toggle('mobileHambOpen');
    const mobileClose = document.querySelector('.mobileClose');
    mobileClose.classList.toggle('mobileCloseOpen');
  };

  return (
    <div className="navContainer">
      <div className="desktopMenu">
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={0}
          baseDelay={0.05}
        >
          <div>
            <img src={NavLogo} alt="Logo Speedy" />
          </div>
        </ScrollAnimationWrapper>
        <ul className="desktopMenuUl">
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={1}
            baseDelay={0.05}
          >
            <li>
              <a href="#home" onClick={(e) => handleScrollTo(e, '#home')}>
                Home
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={2}
            baseDelay={0.05}
          >
            <li>
              <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>
                About
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={3}
            baseDelay={0.05}
          >
            <li>
              <a
                href="#how-to-buy"
                onClick={(e) => handleScrollTo(e, '#how-to-buy')}
              >
                How to buy
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={4}
            baseDelay={0.05}
          >
            <li>
              <a href="#roadmap" onClick={(e) => handleScrollTo(e, '#roadmap')}>
                Roadmap
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={5}
            baseDelay={0.05}
          >
            <li>
              <a
                href="#tokenomics"
                onClick={(e) => handleScrollTo(e, '#tokenomics')}
              >
                Tokenomics
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={6}
            baseDelay={0.05}
          >
            <li>
              <a href="#nft" onClick={(e) => handleScrollTo(e, '#nft')}>
                NFT
              </a>
            </li>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper
            animation="fadeInUpNav"
            index={7}
            baseDelay={0.05}
          >
            <li>
              <a href="#airdrop" onClick={(e) => handleScrollTo(e, '#airdrop')}>
                Airdrop
              </a>
            </li>
          </ScrollAnimationWrapper>
        </ul>
        <ScrollAnimationWrapper animation="bounce" index={7} baseDelay={0.05}>
          <button onClick={openWallet}>connect wallet</button>
        </ScrollAnimationWrapper>
      </div>

      <div className="mobileMenu">
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={0}
          baseDelay={0.05}
        >
          <div className="hamburgerMenuContainer">
            <img className="mobileLogo" src={NavLogo} alt="Logo Speedy" />
            <img
              onClick={handleOpenMenu}
              className="mobileHamb"
              src={HamMenu}
              alt="Ham Menu"
            />
            <img
              onClick={handleOpenMenu}
              className="mobileClose"
              src={CloseMenu}
              alt="Close Menu"
            />
          </div>
        </ScrollAnimationWrapper>
        <ul className="mobileMenuAccordion">
          <li>
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')}>
              About
            </a>
          </li>

          <li>
            <a
              href="#how-to-buy"
              onClick={(e) => handleScrollTo(e, '#how-to-buy')}
            >
              How to buy
            </a>
          </li>

          <li>
            <a href="#roadmap" onClick={(e) => handleScrollTo(e, '#roadmap')}>
              Roadmap
            </a>
          </li>

          <li>
            <a
              href="#tokenomics"
              onClick={(e) => handleScrollTo(e, '#tokenomics')}
            >
              Tokenomics
            </a>
          </li>

          <li>
            <a href="#nft" onClick={(e) => handleScrollTo(e, '#nft')}>
              NFT
            </a>
          </li>

          <li>
            <a href="#airdrop" onClick={(e) => handleScrollTo(e, '#airdrop')}>
              Airdrop
            </a>
          </li>
        </ul>
        <button onClick={openWallet}>connect wallet</button>
      </div>
    </div>
  );
};

export default Nav;
