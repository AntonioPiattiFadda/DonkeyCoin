import NavLogo from "../assets/navLogo.png";
import "../variables.css";
import ScrollAnimationWrapper from "./AnimationWrapper";
import "./Nav.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const openWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Wallet conectada.");
      } catch (error) {
        console.error("Error al conectar la wallet:", error);
      }
    } else {
      console.log("MetaMask no está instalado.");
    }
  };

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.easeInOut",
    });
  };

  return (
    <div className="navContainer">
      <ScrollAnimationWrapper
        animation="fadeInUpNav"
        index={0}
        baseDelay={0.05}
      >
        <div>
          <img src={NavLogo} alt="Logo Speedy" />
        </div>
      </ScrollAnimationWrapper>
      <ul>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={1}
          baseDelay={0.05}
        >
          <li>
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")}>
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
            <a href="#about" onClick={(e) => handleScrollTo(e, "#about")}>
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
              onClick={(e) => handleScrollTo(e, "#how-to-buy")}
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
            <a href="#roadmap" onClick={(e) => handleScrollTo(e, "#roadmap")}>
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
              onClick={(e) => handleScrollTo(e, "#tokenomics")}
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
            <a href="#nft" onClick={(e) => handleScrollTo(e, "#nft")}>
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
            <a href="#airdrop" onClick={(e) => handleScrollTo(e, "#airdrop")}>
              Airdrop
            </a>
          </li>
        </ScrollAnimationWrapper>
      </ul>
      <ScrollAnimationWrapper animation="bounce" index={7} baseDelay={0.05}>
        <button onClick={openWallet}>connect wallet</button>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Nav;
