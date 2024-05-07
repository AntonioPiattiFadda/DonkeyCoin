import './Tokenomics.css';
import ScrollAnimationWrapper from './AnimationWrapper';
const Tokenomics = () => {
  return (
    <section className="tokenomicsSection" id='tokenomics'>
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
                <span className="tokenCardSubTitle">DonkyCoin</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={3}>
              <div className="infoCard">
                <span className="tokenCardTitle">Token Symbol</span>
                <span className="tokenCardSubTitle"> $DONKY</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={4}>
              <div className="infoCard">
                <span className="tokenCardTitle">Total Supply</span>
                <span className="tokenCardSubTitle">690.420.000.000</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
          <div className="cardsContainer">
            <ScrollAnimationWrapper animation="fadeInUp" index={5}>
              <div className="infoCard">
                <span className="tokenCardTitle">Airdrop</span>
                <span className="tokenCardSubTitle">20%</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={6}>
              <div className="infoCard">
                <span className="tokenCardTitle">Presale</span>
                <span className="tokenCardSubTitle">50%</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={7}>
              <div className="infoCard">
                <span className="tokenCardTitle">Liquidity</span>
                <span className="tokenCardSubTitle">30%</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <ScrollAnimationWrapper animation="fadeInUp" index={8}>
          <div className="buttonContainer">
            <button className='hoverButton'>Whitepaper</button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Tokenomics;
