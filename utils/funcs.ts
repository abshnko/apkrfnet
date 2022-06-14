import Post_1 from '../components/Posts/Post_1';
import Post_2 from '../components/Posts/Post_2';

export const scroll = (ref: any) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smoth' });
  }
};

export const fixBackground = (showSpyCheck: boolean) => {
  if (showSpyCheck) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
  }
};

// export const renderSwitch = (id: number) => {
//   switch (id) {
//     case 0:
//       return <Post_1 />;
//     case 1:
//       return <Post_2 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     case 0:
//       return <Post_1 />;
//     default:
//       return null;
//   }
// };
