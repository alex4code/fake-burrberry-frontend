import React from 'react';
import styled from 'styled-components';

import Image from './SliderItem';
import Info from './Info';
import Color from './Color';
import Size from './Size';
import Buttons from './Buttons';

import { Sm, Lg } from '../common/responsive';

const Title = styled.h1`
  margin: 0;
  padding: 0;
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  font-family: "Lora", serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: #171717;
  @media (min-width: 48rem) {
    padding-left: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #111111;
  }
  @media (min-width: 62rem) {
    margin-top: 10rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

const Slider = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  margin: 0 -0.5rem;
  overflow-x: auto;
  @media (min-width: 48rem) {
    margin: 0;
  }
`;
const Caption = styled.h3`
  margin: 0 0 0.3125rem;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.1667;
`;

const Text = styled.p`
  margin: 0;
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
`;

const Wrapper = styled.div`
  @media (min-width: 62rem) {
    background: #d4bdad;
    margin-bottom: 4rem;
  }
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Sm>
        <Title>Long Cotton Gabardine Car Coat</Title>
      </Sm>
      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <Lg>
            <Slider className="product-slider">
              <Image
                nameItem="front"
                alt="Long Cotton Gabardine Car Coat - front"
              />
            </Slider>
          </Lg>
          <Sm>
            <Slider className="product-slider">
              <Image
                nameItem="front"
                alt="Long Cotton Gabardine Car Coat - front"
              />
              <Image
                nameItem="detail1"
                alt="Long Cotton Gabardine Car Coat - collar detail 1"
              />
              <Image
                nameItem="detail2"
                alt="Long Cotton Gabardine Car Coat - collar detail 2"
              />
              <Image
                nameItem="back"
                alt="Long Cotton Gabardine Car Coat - back"
              />
            </Slider>
          </Sm>
        </div>

        <div className="col-xs-12 col-sm-5">
          <Lg>
            <Title>Long Cotton Gabardine Car Coat Coat Coat Coat Coat</Title>
          </Lg>
          <Info price="110 000" id="39428531" />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <Color currentColor="Honey" />
            </div>
            <Lg>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <Size />
              </div>
            </Lg>
          </div>
          <Buttons />
          <Lg>
            <Caption>Free Next Day Delivery</Caption>
            <Text>
              Order before 7pm Monday to Thursday for delivery the next day
            </Text>
          </Lg>
        </div>
      </div>
    </div>
  </Wrapper>);