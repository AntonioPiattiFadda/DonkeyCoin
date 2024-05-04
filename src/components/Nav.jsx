import NavLogo from '../assets/navLogo.png';
import '../variables.css';
import ScrollAnimationWrapper from './AnimationWrapper';
import './Nav.css';

const Nav = () => {
  const openWallet = async () => {
    if (window.ethereum) {
      try {
        // Solicita al usuario que conecte su wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Wallet conectada.');
      } catch (error) {
        console.error('Error al conectar la wallet:', error);
      }
    } else {
      console.log('MetaMask no está instalado.');
    }
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
          <li>Home</li>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={2}
          baseDelay={0.05}
        >
          <li>About</li>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={3}
          baseDelay={0.05}
        >
          <li>How to buy </li>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={4}
          baseDelay={0.05}
        >
          <li>Tokenomics</li>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={5}
          baseDelay={0.05}
        >
          <li>Whitepaper</li>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="fadeInUpNav"
          index={5}
          baseDelay={0.05}
        >
          <li>NFT</li>
        </ScrollAnimationWrapper>
      </ul>
      <ScrollAnimationWrapper animation="bounce" index={6} baseDelay={0.05}>
        <button onClick={openWallet}>connect wallet</button>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Nav;
