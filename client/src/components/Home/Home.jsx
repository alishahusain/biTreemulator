import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";
import fancydna from '../../assets/Icons/fancydna.svg';
import basicdna from '../../assets/Icons/basicdna.svg';
//import Framie from "./Framie";
import "./Home.scss";
import { API_URL } from "../../utils/utils";

class Home extends Component {
  state = {
    homeList: this.props.homeList,
  };

  componentDidMount() {
    this.setState({ homeList: this.props.homeList });
  }
  componentDidUpdate(prevProps) {
    axios.get(`${API_URL}/home`).then((response) => {
      if (this.state.homeList !== prevProps.match.params) {
        axios
          .get(`${API_URL}/home`)
          .then((res) => {
            this.setState({
              homeList: res.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  render() {
    return (
      <>
      
        <div className="home">
            <div className="hero-container hero-container__mobile-size-biography  hero-container--sizing hero-container--scale">
                <div className="hero-container__box hero-container__box--mobile-box-size-biography hero-container__box--tablet-box-size-biography hero-container__box--desktop-box-size-biography">
                    <h1 className="hero-container__text  hero-container__text--font-size-biography"> </h1>
                </div>
            </div>
          <div className='home__inside hero-container__text'>
          <div className="home__subtitle hero-container__text">
          ChromaGene
            <img className="home__arrow hero-container__title" src={chevronImg} alt="img" />
          </div>
    
          <div className="home__titleb hero-container__text">Welcome to ChromaGene!</div>
          <div className="home__about hero-container__text" >
            Upload DNA .txt or .csv file to create unique art and begin your
            journey! A SNP Single-Nucleotide Polymorphism is a variation of a
            single nucleotide (A, G, C or T). a text file, roughly 25meg big that 
            contains what is essentially a diff against a common shared genetic code, 
            it's certainly millionsof years of progress, but yet can be 
            transferred to your computer in a matter of seconds. 
            Each line corresponds to a single SNP. For each SNP, we provide
            its identifier (an rsid or an internal id), its location on the
            reference human genome, and the genotype call oriented with respect
            to the plus strand on the human reference sequence.
            <div className="home__buttons">
            <Link to="/Upload">  <button className="btn btn--delta" type="submit"><span>Get Started</span></button>
              </Link>
             
            </div>
          </div>
          </div>
          
        </div>
        <div className="content"></div>
        <div className="content"></div>


      </>
    );
  }
}

export default Home;
//
//  <Framie/>      <div className="home__title hero-container__text">ChromeGene</div>
//  <img src={fancydna} alt=''></img>

