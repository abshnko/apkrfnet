import React from 'react';
import AccentedText from '../UI/AccentedText/AccentedText';
import RedactedText from '../UI/RedactedText/RedactedText';
import Signature from '../UI/Signature/Signature';

const Post_2 = () => {
  return (
    <div>
      <h2>Уважаемые аспиранты, соискатели и молодые преподаватели!</h2>
      <p>
        Прекрасно понимаю, что никаких проблем, никаких вопросов у вас при
        преподавании предмета &laquo;Арбитражный процесс&raquo; не возникает (у
        меня лет 15 назад тоже, собственно, не возникало). Охотно верю также
        (даже доподлинно знаю), что все выходные у вас расписаны месяцев на
        шесть вперед. Тем не менее есть сугубо формальные моменты, которые
        вынуждают меня внести некий сумбур в вашу размеренную научную,
        преподавательскую и семейную жизнь. Как руководитель учебно-методической
        группы по арбитражному процессу я вынужден периодически проводить
        довольно нудное мероприятие &ndash; заседание этой самой группы.
      </p>
      <p>
        На первое в этом учебном году заседание, которое состоится
        <strong> 10 декабря 2011 г. в 18-00</strong>, на обсуждение выносятся
        следующие темы:
      </p>
      <ol>
        <li>Участники арбитражного процесса.</li>
        <li>Представительство в арбитражном процессе.</li>
        <li>Подведомственность дел арбитражным судам.</li>
        <li>Подсудность дел арбитражным судам.</li>
        <li>Доказательства и доказывание в арбитражном процессе.</li>
      </ol>
      <p>
        Специально приглашенный гость &ndash; <RedactedText />
      </p>
      <p>
        Чтобы хоть как-то скрасить скуку обсуждения процессуальных норм,
        заседание по уже заведенной традиции будет проводиться в низкобюджетном
        пивном пабе/ресторане (для вновь зачисленных аспирантов отдельно
        поясняю, что норма употребления алкоголя каждым определяется
        самостоятельно исходя из градуса научной дискуссии, собственного веса,
        количества закуски, индивидуальных особенностей организма, финансовых
        возможностей, и, конечно же, предшествующего негативного опыта).
      </p>
      <p>
        Поскольку близкое соседство подвыпивших горожан и гостей столицы Урала
        не очень сильно способствует плодотворной научной дискуссии, опять же по
        традиции участники учебно-методической группы просто обязаны уединиться
        в отдельном зале/помещении. С этой целью прошу в срок
        <strong> до 01 декабря 2011 г. </strong>
        (включительно)
        <strong>
          {' '}
          подтвердить свое участие в работе группы посредством
          устного/письменного сообщения лаборанту.{' '}
        </strong>
        Конкретное место проведения мероприятия будет уточнено дополнительно
        исходя из общего количества акцептовавших эту публичную оферту (надеюсь,
        последнюю фразу переводить на нормальный язык нет необходимости).
      </p>
      <p>
        <AccentedText> P.S.</AccentedText> Специально для тех, кто ранее на
        подобных мероприятиях не бывал, настоятельно не рекомендую брать дорогую
        технику (ноутбуки, планшеты и т.п.). Во-первых, маловероятно, что она
        вообще понадобится, а, во-вторых, и это главное, по закону подлости
        обязательно кто-нибудь что-нибудь на нее прольет (в итоге останутся
        запах и неприятное воспоминание о работе учебно-методической группы).
      </p>
      <p>
        Явка на мероприятие сугубо добровольная. Пропустившие могут прослушать
        нелегально распространяемый аудиокурс или просто спросить у других, как
        там все прошло, что ели/пили, дошли ли до второй темы, кто кому что
        сказал, а как тот ему ответил, чем закончилось и т.п.
      </p>
      <p>
        <AccentedText>P.S.S.</AccentedText> Лица, не дочитавшие до конца это
        объявление, должны{' '}
        <strong>
          представить письменное объяснение <RedactedText />
        </strong>{' '}
        (а <RedactedText /> &ndash; письменное объяснение самому себе по поводу
        своей неявки на прошлое заседание с приложением оправдательных
        документов).
      </p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д.Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_2;
