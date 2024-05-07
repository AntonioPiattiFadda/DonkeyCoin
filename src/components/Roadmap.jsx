import './Roadmap.css';
import ScrollAnimationWrapper from './AnimationWrapper';
import RoadmapMonkey from '../assets/RoadmapMonkey.png';

const Roadmap = () => {
  return (
    <section className="roadmapSection" id='roadmap'>
      <div className="roadmapContainer">
        <div className="LeftColumn">
          <ScrollAnimationWrapper animation="fadeInUp" index={0}>
            <h3 className="roadmapTitle">Roadmap</h3>
          </ScrollAnimationWrapper>
          <div className="phaseContainer">
            <ScrollAnimationWrapper animation="fadeInUp" index={1}>
              <div className="phaseCard">
                <span className="titlePhaseCard">Phase 1</span>
                <span className="phaseText">
                  Meme Free-Airdrop, Vibe and HODL
                </span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={2}>
              <div className="phaseCard">
                <span className="titlePhaseCard">Phase 2</span>
                <span className="phaseText">Presale, Meme Takeover</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={3}>
              <div className="phaseCard">
                <span className="titlePhaseCard">Phase 3</span>
                <span className="phaseText">DEX, UNISWAP/LP</span>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="fadeInUp" index={4}>
              <div className="phaseCard">
                <span className="titlePhaseCard">Phase 4</span>
                <span className="phaseText">CEX</span>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <ScrollAnimationWrapper animation="fadeInRight" index={1}>
          <div className="rightColumn">
            <img src={RoadmapMonkey} alt="Monkey" />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Roadmap;
