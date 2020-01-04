import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import {css} from 'glamor';
import {Row, Col} from 'react-flexbox-grid';

import Block from '../Block';
import Dude from './Dude';

import helsinkiImg from '../../assets/images/helsinki.jpg';

import {fonts, colors} from '../../theme';
import dudeInfos from './dudeInfos';

const Team = () => (
  <Scroll.Element name="team">
    <div
      {...css({
        backgroundColor: '#FCFCFC',
        backgroundImage: `url(${helsinkiImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Block>
        <div {...css({
            fontFamily: fonts.primary,
            color: colors.black,
            textAlign: 'center',
            marginBottom: '3em',
          })}>
          <h1>
            THE TEAM
          </h1>
          <div {...css({
            fontWeight: 400,
            fontSize: '25px'
          })}>
            <p>
              We're five childhood friends from Helsinki, Finland.
            </p>
            <p>
              Meet the founders of Improx Games.
            </p>
          </div>
        </div>
        <Row height={2} center="xs">
          {dudeInfos.map((x, i) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl
                key={i}
                {...css({
                  marginTop: '0.2em',
                  marginBottom: '0.2em',
                })}
              >
                <Dude dudeInfo={x} key={i} />
              </Col>
            );
          })}
        </Row>
      </Block>
    </div>
  </Scroll.Element>
);

Team.propTypes = {
  children: PropTypes.node,
};

export default Team;
