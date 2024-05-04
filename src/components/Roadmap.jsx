import "./Roadmap.css";
import ScrollAnimationWrapper from "./AnimationWrapper";
const Roadmap = () => {
  return (
    <section className="roadmapSection">
      <div className="roadmapContainer">
        <ScrollAnimationWrapper animation="fadeInUp" index={0}>
          <h3 className="roadmapTitle">Roadmap</h3>
        </ScrollAnimationWrapper>
        <div className="phaseContainer">
          <ScrollAnimationWrapper animation="fadeInUp" index={1}>
            <div className="phaseCard">
              <span className="titlePhaseCard">Phase 1</span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={2}>
            <div className="phaseCard">
              <span className="titlePhaseCard">Phase 2</span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={3}>
            <div className="phaseCard">
              <span className="titlePhaseCard">Phase 3</span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="fadeInUp" index={4}>
            <div className="phaseCard">
              <span className="titlePhaseCard">Phase 4</span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
              <span className="phaseText">
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
