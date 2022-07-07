import Post_1 from '../components/Posts/Post_1';
import Post_10 from '../components/Posts/Post_10';
import Post_11 from '../components/Posts/Post_11';
import Post_12 from '../components/Posts/Post_12';
import Post_13 from '../components/Posts/Post_13';
import Post_14 from '../components/Posts/Post_14';
import Post_15 from '../components/Posts/Post_15';
import Post_16 from '../components/Posts/Post_16';
import Post_17 from '../components/Posts/Post_17';
import Post_18 from '../components/Posts/Post_18';
import Post_2 from '../components/Posts/Post_2';
import Post_3 from '../components/Posts/Post_3';
import Post_4 from '../components/Posts/Post_4';
import Post_5 from '../components/Posts/Post_5';
import Post_6 from '../components/Posts/Post_6';
import Post_7 from '../components/Posts/Post_7';
import Post_8 from '../components/Posts/Post_8';
import Post_9 from '../components/Posts/Post_9';

export const fixBackground = (showSpyCheck: boolean) => {
  if (showSpyCheck) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
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

export const scrollToRef = (ref: any, isScroll: boolean, setIsScroll: any) => {
  if (isScroll) {
    const time = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      setIsScroll(false);
    }, 100);
    return () => clearTimeout(time);
  }
};

export const removeScrollUnderModal = (show: boolean) => {
  show
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');
};

//parse string from json for non breaking spaces
//should be \nbsp in passed message
export const addNBSP = (message: string) => {
  const messageWithNBSP = message.split('\\nbsp').map((m) => {
    return m + '\xa0';
  });
  return messageWithNBSP;
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
      return <Post_11 />;
    case '11':
      return <Post_12 />;
    case '12':
      return <Post_13 />;
    case '13':
      return <Post_14 />;
    case '14':
      return <Post_15 />;
    case '15':
      return <Post_16 />;
    case '16':
      return <Post_17 />;
    case '17':
      return <Post_18 />;
    case '18':
      return null;
    default:
      return null;
  }
};
