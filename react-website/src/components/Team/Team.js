import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import {css} from 'glamor';
import {Row, Col} from 'react-flexbox-grid';

import Block from '../Block';
import Dude from './Dude';

import {fonts, colors} from '../../theme';
import dudeInfos from './dudeInfos';

const Team = () => (
  <Scroll.Element name="team">
    <div
      {...css({
        backgroundColor: colors.black,
      })}
    >
      <Block>
        <h1
          {...css({
            fontFamily: fonts.primary,
            color: colors.light,
            textAlign: 'center',
          })}
        >
          THE TEAM
        </h1>
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