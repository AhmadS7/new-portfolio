//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'Fullstack Ecommerce',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Fullstack Ecommerce',
          description:
            '“An E-commerce Backend made with Strapi. Require users to be logged in to make a purchase. Stores user orders. NextJS Frontend with Magic for Authentication, Stripe for Checkout Payment, Strapi for Product, Orders and User Management.”',
        },
      ],
    },
    {
      title: 'GitHub Job Finder',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'React Music App',
          description:
            '“A React application using the GitHub Jobs API to fetch and filter job posts in real time. The app uses hooks, Axios, and pagination to organize the job posts in batches of 50.”',
        },
      ],
    },
    {
      title: 'React Player',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'React Music App',
          description:
            '“A Music Player build with React and SASS for styling. It also shows the song that is playing. The slider also changes Its color based on the song That is playing. Also works on Mobile and Tablet. You can skip any song.”',
        },
      ],
    },
  ];
};
