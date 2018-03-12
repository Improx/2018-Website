import trimmertycoonWebp from '../../assets/images/games/trimmertycoon.webp';
import trimmertycoonLegacy from '../../assets/images/games/trimmertycoon.jpg';
import brandcolorquizWebp from '../../assets/images/games/brandcolorquiz.webp';
import brandcolorquizLegacy from '../../assets/images/games/brandcolorquiz.jpg';
import nowayoutWebp from '../../assets/images/games/nowayout.webp';
import nowayoutLegacy from '../../assets/images/games/nowayout.jpg';

const gameInfos = [
  {
    name: 'Trimmer Tycoon',
    description:
      "You're the new owner of a beard trimming salon. Satisfy your customers' beardy dreams and become a millionaire.",
    headerWebp: trimmertycoonWebp,
    headerLegacy: trimmertycoonLegacy,
    links: {
      play: 'http://store.steampowered.com/app/505750/Trimmer_Tycoon/',
    },
  },
  {
    name: 'Brand Color Quiz',
    description:
      "How well do you know the world's most famous colors? A new type of logo quiz.",
      headerWebp: brandcolorquizWebp,
      headerLegacy: brandcolorquizLegacy,
    links: {
      play:
        'https://play.google.com/store/apps/details?id=com.ImproxGames.BrandColorQuiz&hl=en',
    },
  },
  {
    name: 'No Way Out',
    description:
      'Climb up! A randomly generated platformer inspired by the famous kicking scene from the movie 300.',
      headerWebp: nowayoutWebp,
      headerLegacy: nowayoutLegacy,
    links: {
      play: 'https://www.kongregate.com/games/oskiiiii/way-out',
    },
  },
];

export default gameInfos;
