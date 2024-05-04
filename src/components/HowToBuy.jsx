import { useState, useEffect } from 'react';
import CopyLogo from '../assets/CopyLogo.png';
import './HowToBuy.css';
import ScrollAnimationWrapper from './AnimationWrapper';
import BuyLogo from '../assets/BuyLogo.png';

const HowToBuy = () => {
  const endDate = new Date('March 28, 2024 23:59:59');

  const [userBNB, setUserBNB] = useState(84.5);
  const [totalBNB, setTotalBNB] = useState(150);

  const totalBnbWidth = 100;
  const userBnbWidth = (userBNB * 100) / totalBNB;
  const calculateCountdown = () => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <section>
      <div className="howToContainer">
        <ScrollAnimationWrapper animation="fadeInLeft" index={0}>
          <div className="leftContainer">
            <h2>HOW TO BUY!</h2>
            <p>
              Is very easy to obtain Donkys,
              <br /> you just need to have ETH on <br /> your Metamask wallet,
              connect
              <br /> it and get them!
            </p>
            <p>
              {' '}
              But, to be honest... I know you <br /> are an expert on this
              things haha
            </p>
            <div className="chainAddressContainer">
              <span className="contractAddress">CONTRACT ADDRESS</span>
              <div className="addressCopyContainer">
                <span>0x42d2d2A50C56867A4bc17Edf4a49dBa490a38866</span>
                <button className="copyButton">
                  <img src={CopyLogo} alt="" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="fadeInRight" index={0}>
          <div className="rightContainer">
            <img src={BuyLogo} alt="" className="logoBuy" />
            <div className="payModule">
              <div className="counterContainer">
                <span className="time"> {countdown.days} </span>
                <span className="time"> : {countdown.hours} </span>
                <span className="time"> : {countdown.minutes} </span>
                <span className="time"> : {countdown.seconds} </span>
              </div>
              <div className="memoryBar">
                <div
                  className="totalMemory"
                  style={{
                    width: `${totalBnbWidth}%`,
                  }}
                >
                  <div
                    className="userMemory"
                    style={{
                      width: `${userBnbWidth}%`,
                    }}
                  ></div>
                </div>
                <div className="total">
                  <p>{userBNB} BNB</p>
                  <p>{totalBNB} BNB</p>
                </div>
              </div>
              <div className="youPay">
                <div className="youPayBalance">
                  <span>You pay:</span>
                  <span>Your Balance: 10ETH</span>
                </div>
                <div className="payNumber">
                  <span className="dataPay">13.42</span>
                  <span className="datapayTwo">ETH</span>
                </div>
              </div>
              <div className="youReceive">
                <span>You receive:</span>
                <div className="receiveNumber">
                  <span className="dataReceive">514.82</span>
                  <span className="dataReceiveTwo">Donkys</span>
                </div>
              </div>
              <div className="buttonPayContainer">
                <button className="buttonPayModule">
                  <span className="buttonSpan">Approve & Pay</span>
                </button>
              </div>
              <div className="transactionContainer">
                <span>
                  See Transaction on{' '}
                  <span className="blockExplorer">Etherscan</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HowToBuy;
