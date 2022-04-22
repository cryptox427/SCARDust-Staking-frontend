import "./reward.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons'



const StakingIcon = 'images/girl_bullet.png';

function Rewarding() {

    const onClickButButton = () => {
        // alert();
    }

    return (
        <div className="masthead">
            <Container>
                <div className='rewarding'>
                    <h4>Earn with SCRD</h4><br/>
                    <Row>
                        <Col lg={4}>
                            <div className = 'earnby'>

                                <span className="head_title">DUST helps you earn rewards.</span> <br/><br/>
                                <p>Rewards (both wETH and SCRD) are automatically re-staked into the pool to increase the amount of SCRD staked. When you unstake your tokens, the amount of compounded SCRD plus the original amount staked will be sent to your address.</p><br/>
                                <a href = "https://docs.looksrare.org/about/buy-looks" target="_blank" rel="noopener noreferrer" >
                                    <Button icon = {''} value = 'Buy DUST'/>
                                </a>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className = 'earnby'>
                                <span className="head_title">Earn By Staking</span>
                                <br/><br/>
                                <p>SCRD gets you the best apy for your investment something like that. </p>
                                <br/><br/>
                                <ul>
                                    <li>Stake DUST via this page to earn:</li>
                                    <li><font>▶</font> WETH trading fees</li>
                                    <li><font>▶</font> Extra DUST</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                        <div className = 'earnby'>
                                <span className="head_title">Earn By Staking</span>
                                <br/><br/>
                                <p>SCRD gets you the best apy for your investment something like that. </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Rewarding;
