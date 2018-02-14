import trimmertycoon from '../../assets/images/games/trimmertycoon.webp';
import brandcolorquiz from '../../assets/images/games/brandcolorquiz.webp';
import nowayout from '../../assets/images/games/nowayout.webp';

const gameInfos = [
  {
    name: 'Trimmer Tycoon',
    description:
      "You're the new owner of a beard trimming salon. Satisfy your customers' beardy dreams and become a millionaire.",
    header: trimmertycoon,
    links: {
      play: 'http://store.steampowered.com/app/505750/Trimmer_Tycoon/',
    },
  },
  {
    name: 'Brand Color Quiz',
    description:
      "How well do you know the world's most famous colors? A new type of logo quiz.",
    header: brandcolorquiz,
    links: {
      play:
        'https://play.google.com/store/apps/details?id=com.ImproxGames.BrandColorQuiz&hl=en',
    },
  },
  {
    name: 'No Way Out',
    description:
      'Climb up! A randomly generated platformer inspired by the famous kicking scene from the movie 300.',
    header: nowayout,
    links: {
      play: 'https://www.kongregate.com/games/oskiiiii/way-out',
    },
  },
];

export default gameInfos;
