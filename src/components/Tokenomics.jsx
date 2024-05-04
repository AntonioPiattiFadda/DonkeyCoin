import './Tokenomics.css';
import graphic from '../assets/tokenomics.png';
import ScrollAnimationWrapper from './AnimationWrapper';
const Tokenomics = () => {
  return (
    <section className="tokenomicsSection">
      <div className="tokenomicsContainer">
        <ScrollAnimationWrapper animation="fadeInUp" index={1}>
          <div className="tokenomicsTitleContainer">
            <span className="tokenomicsTitle">Tokenomics</span>
          </div>
        </ScrollAnimationWrapper>
        <div className="tokenInfo">
          <div className="cardsContainer">
            <ScrollAnimationWrapper animation="fadeInUp" index={2}>
              <div className="infoCard">
                <span className="tokenCardTitle">Token Name</span>
                <span className="tokenCardSubTitle">SPEEDY</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={3}>
              <div className="infoCard">
                <span className="tokenCardTitle">Token Symbol</span>
                <span className="tokenCardSubTitle">SPDY</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={4}>
              <div className="infoCard">
                <span className="tokenCardTitle">Total Supply</span>
                <span className="tokenCardSubTitle">1 Trillion</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
          <div className="cardsContainer">
            <ScrollAnimationWrapper animation="fadeInUp" index={5}>
              <div className="infoCard">
                <span className="tokenCardTitle">Token Name</span>
                <span className="tokenCardSubTitle">SPEEDY</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={6}>
              <div className="infoCard">
                <span className="tokenCardTitle">Token Symbol</span>
                <span className="tokenCardSubTitle">SPDY</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={7}>
              <div className="infoCard">
                <span className="tokenCardTitle">Total Supply</span>
                <span className="tokenCardSubTitle">1 Trillion</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <ScrollAnimationWrapper animation="fadeInUp" index={1}>
          <div className="grapichContainer">
            {/* <img src={graphic} alt="" /> */}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Tokenomics;
