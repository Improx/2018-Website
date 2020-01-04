import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import Scroll from "react-scroll";
import ReactPlayer from "react-player";
import ExternalIconLink from "../LayoutFooter/ExternalIconLink";
import { FaSteamSquare } from "react-icons/lib/fa";

import { colors, fonts } from "../../theme";
import cubeLogo from "../../assets/images/TLC-horizontal-blue.png";

const socialInfo = [
  {
    path: "https://twitter.com/lastcubegame",
    icon: "twitter"
  },
  {
    path: "https://facebook.com/lastcubegame",
    icon: "facebook"
  },
  {
    path: "https://instagram.com/lastcubegame",
    icon: "instagram"
  },
  {
    path: "https://www.youtube.com/channel/UCI8m0v8AJimBs2J9dXEMSJw/",
    icon: "youtube"
  }
];

const cubeHeaderStyle = css({
  fontFamily: fonts.primary,
  fontSize: "5em",
  display: "block",
  margin: 0
});

const columnContainerStyle = css({
  display: "flex",
  flexDirection: "column"
});

const promoContainerStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "2em",
  "@media screen and (max-width: 750px)": {
    flexDirection: "column"
  }
});

const textColumnStyle = css({
  flexDirection: "column",
  maxWidth: "50vh"
});

const cubeLogoStyle = css({
  width: "85%",
  height: "auto",
  margin: "auto"
});

const linkStyle = css({
  color: colors.light,
  fontFamily: fonts.secondary,
  fontSize: "2em",
  ":hover": {
    color: colors.yellow
  }
});

const socialsContainerStyle = css({
  marginTop: "3em",
  fontFamily: fonts.secondary
});

const CubePromo = () => (
  <Scroll.Element name="cube">
    <div
      {...css({
        backgroundColor: colors.dark,
        color: colors.light,
        marginTop: "-3%",
        minHeight: "110vh"
      })}
    >
      <div
        {...columnContainerStyle}
        {...css({ maxWidth: 1280, margin: "0 auto" })}
      >
        <img src={cubeLogo} alt="The Last Cube logo" {...cubeLogoStyle} />
        <div {...promoContainerStyle}>
          <div {...textColumnStyle}>
            <h1 {...cubeHeaderStyle}>COMING SOON</h1>
            <section>
              <p {...css({ fontFamily: fonts.secondary })}>
                Venture through six unique areas of the cube-world and overcome
                three-dimensional brain-teasers in this upcoming puzzle
                adventure game. You, the Last Cube, were awakened for a
                purpose—save this peculiar world from collapsing by solving
                puzzle tracks left by your ancestors.
              </p>
              <a
                href="https://store.steampowered.com/app/903630/The_Last_Cube"
                {...linkStyle}
              >
                <FaSteamSquare alt="Steam" /> Wishlist now on Steam!
              </a>

              <br />

              <div {...socialsContainerStyle}>
                Follow the development on:
                <div
                  {...css({
                    width: "100%",
                    display: "flex"
                    // justifyContent: "center"
                  })}
                >
                  {socialInfo.map((x, i) => {
                    return (
                      <ExternalIconLink
                        href={x.path}
                        alt={"Improx Games " + x.icon}
                        icon={x.icon}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <ReactPlayer
            url="https://youtu.be/iCquAqKBens"
            {...css({ maxWidth: "100%" })}
          />
        </div>
      </div>
    </div>
  </Scroll.Element>
);

CubePromo.propTypes = {
  children: PropTypes.node
};

export default CubePromo;
