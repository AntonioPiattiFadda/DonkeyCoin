import "./TermsOfUse.css";
import DonkeyTerms from "../assets/DonkeyTerms.png";
import ScrollAnimationWrapper from "./AnimationWrapper";
const TermsOfUse = () => {
  return (
    <section className="termsSection">
      <div className="termsContainer">
        <ScrollAnimationWrapper animation="fadeInUp" index={1}>
          <div className="titleContainer">
            <img src={DonkeyTerms} alt="Monkey Head" />
            <h2>DONKY</h2>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fadeInUp" index={2}>
          <div className="termsInfoContainer">
            <p>
              $DONKY coin has no association with Shigeru Miyamoto/ Nintendo or
              theirs creation Donkey Kong. This token is simply an homage to a
              meme in memories of the 80s and 90s.
            </p>
            <p>
              $DONKY is a meme coin with no intrinsic value or expectation of
              financial return. There is no formal team or roadmap. the coin is
              completely useless and for entertainment purposes only.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default TermsOfUse;
