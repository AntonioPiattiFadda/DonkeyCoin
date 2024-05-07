import "./About.css";
import DonkeyAboutImage from "../assets/DonkeyAboutImage.png";
import ScrollAnimationWrapper from "./AnimationWrapper";

const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <ScrollAnimationWrapper animation="fadeInLeft" index={0}>
          <div>
            <img
              className="aboutImage"
              src={DonkeyAboutImage}
              alt="Donkey image"
            />
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fadeInRight" index={0}>
          <div id="about">
            <h2>ABOUT</h2>

            <p>
              Donky is there to protect the other <br /> memes especially $PEPE
              and $BOME in <br /> their race to be the first memecoin to <br />
              reach $1 limit.
            </p>
            <p>
              Donky will do anything to protect the <br /> princes ($Pepe,$Bome)
              from all the dogs <br /> and cats and other memes. But who <br />
              knows, maybe he will be the lucky one in <br /> the end to be the
              first memecoin to cross <br /> the $1 limit, lol.
            </p>
            <p>
              Donky is here to make the memecoins <br /> competition even more
              attractive and <br />
              entertaining. $Donky is a coin for people <br /> who love the 80s
              and 90s and have <br /> wonderful memories of that time…
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default About;
