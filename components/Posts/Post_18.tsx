import React from 'react';
import AccentedBlock from '../../UI/AccentedParagraph/AccentedParagraph';
import AccentedText from '../../UI/AccentedText/AccentedText';
import Footnote from '../../UI/Footnote/Footnote';
import RedactedText from '../../UI/RedactedText/RedactedText';
import Signature from '../../UI/Signature/Signature';
import Image from 'next/image';
import s from './Post.module.scss';

const Post_18 = () => {
  return (
    <div className={s.container}>
      <Signature>
        <p>
          Бывший руководитель учебно-методической группы по арбитражному
          процессу
        </p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_18;
