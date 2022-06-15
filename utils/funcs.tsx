import Post_1 from '../components/Posts/Post_1';
import Post_10 from '../components/Posts/Post_10';
import Post_2 from '../components/Posts/Post_2';
import Post_3 from '../components/Posts/Post_3';
import Post_4 from '../components/Posts/Post_4';
import Post_5 from '../components/Posts/Post_5';
import Post_6 from '../components/Posts/Post_6';
import Post_7 from '../components/Posts/Post_7';
import Post_8 from '../components/Posts/Post_8';
import Post_9 from '../components/Posts/Post_9';

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

export const incrementId = (id: string, setId: any, n: string) => {
  if (id === n) {
    setId('0');
  } else {
    setId((i: string) => {
      const newId = parseInt(i) + 1;
      return newId.toString();
    });
  }
};
export const decrementId = (id: string, setId: any, n: string) => {
  if (id === '0') {
    setId(n);
  } else {
    setId((i: any) => {
      const newId = parseInt(i) - 1;
      return newId.toString();
    });
  }
};

export const renderSwitch = (id: string) => {
  switch (id) {
    case '0':
      return <Post_1 />;
    case '1':
      return <Post_2 />;
    case '2':
      return <Post_3 />;
    case '3':
      return <Post_4 />;
    case '4':
      return <Post_5 />;
    case '5':
      return <Post_6 />;
    case '6':
      return <Post_7 />;
    case '7':
      return <Post_8 />;
    case '8':
      return <Post_9 />;
    case '9':
      return <Post_10 />;
    case '10':
      return null;
    case '11':
      return null;
    case '12':
      return null;
    case '13':
      return null;
    case '14':
      return null;
    default:
      return null;
  }
};
