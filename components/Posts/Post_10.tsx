import React from 'react';
import AccentedBlock from '../UI/AccentedParagraph/AccentedParagraph';
import AccentedText from '../UI/AccentedText/AccentedText';
import Footnote from '../UI/Footnote/Footnote';
import RedactedText from '../UI/RedactedText/RedactedText';
import Signature from '../UI/Signature/Signature';
import Image from 'next/image';
import s from './Post.module.scss';

const Post_10 = () => {
  return (
    <div className={s.container}>
      <h2>
        Уважаемые преподаватели, аспиранты и соискатели, а также ностальгирующие
        вдали (а кое-кто и вблизи) кандидаты!
      </h2>
      <p>
        Начну с самого важного. Должность руководителя учебно-методической
        группы по арбитражному процессу &ndash; это не то, чем можно
        наслаждаться вечно, изредка пуская посторожить тёплое место кого-то из
        особо приближенных. Отнюдь!
      </p>
      <p>
        Считаю, что любой желающий пользоваться благами и привилегиями, которые
        полагаются руководителю такого уровня, должен иметь возможность в
        открытой и честной процедуре доказать коллегам, что именно он достоин
        занимать кресло руководителя.
      </p>
      <p>
        В качестве первого шага, пожалуйста, распечатайте и заполните Бюллетень
        для тайного голосования по выбору руководителя учебно-методической
        группы (в графе 2 можно вписать любого субъекта, который, на ваш взгляд,
        мог бы достойно нести черно-жёлтое знамя группы):
        <RedactedText />
      </p>
      <p>
        Заполненные и испорченные бюллетени прошу сдать в Центр медиации УрГЮУ
        (он работает все лето с 8-30 до 19-00 без перерывов и выходных). Если
        что &ndash; звоните работникам Центра медиации прямо на домашние
        телефоны.
      </p>
      <p>
        Теперь о грустном. Долго не хотел поднимать эту тему, но&hellip;
        Надо&hellip; Надо!
      </p>
      <p>
        Уважаемые аспиранты, чем больше читаю статей, монографий, авторефератов
        и диссертаций, тем сильнее убеждаюсь, что нам, людям умственного труда,
        категорически необходимо освежить какие-то элементарные правила, имеющие
        отношение к тексту.
      </p>
      <p>
        Не буду злоупотреблять вашим вниманием &ndash; поведаю только о
        некоторых очевидных вещах (кстати, я вполне допускаю, что отдельные мои
        соображения могут показаться спорными, поэтому готов выслушать
        возражения):
      </p>
      <ol>
        <li>
          <strong> Заголовок</strong>
        </li>
      </ol>
      <p>
        1.1. В конце заголовка не принято ставить точку (на иные знаки
        препинания это правило не распространяется).
      </p>
      <p>
        1.2. Карается пожизненным отлучением от кафедры такое расположение
        заголовка, при котором сам заголовок размещается на одной странице, а
        текст &ndash; на другой.
      </p>
      <p>Однозначно колесование за разрыв заголовка на две страницы.</p>
      <p>1.3. Признаки дурного тона:</p>
      <p>&ndash; разбивать переносом слова заголовка;</p>
      <p>&ndash; оставлять в заголовке в конце строки предлог.</p>
      <ol start={2}>
        <li>
          <strong> Первый абзац</strong>
        </li>
      </ol>
      <p>Первый абзац начинается без отступа (т.е. не с красной строки).</p>
      <ol start={3}>
        <li>
          <strong>
            {' '}
            Располагаются на одной строке (без переноса на другую строку):
          </strong>
        </li>
      </ol>
      <p>&ndash; инициалы;</p>
      <p>&ndash; инициалы и фамилия;</p>
      <p>
        &ndash; аббревиатуры (даже если внутри аббревиатуры есть пробел &ndash;
        например, &laquo;ГПК РФ&raquo;);
      </p>
      <p>
        &ndash; сокращения (&laquo;и&nbsp;т.д.&raquo;, &laquo;т.е.&raquo; и
        т.п.);
      </p>
      <p>&ndash; статья (часть, пункт и т.п.) и номер статьи;</p>
      <p>
        &ndash; номер нормативного акта (даже если внутри номера имеется дефис);
      </p>
      <p>
        &ndash; числа (даже если внутри числа есть пробел &ndash; например,
        &laquo;100&nbsp;500&raquo;);
      </p>
      <p>
        &ndash; число и относящаяся к нему единица измерения (&laquo;0,5
        л.&raquo;, &laquo;1973 г.&raquo;);
      </p>
      <p>&ndash; календарная дата (&laquo;3 февраля 1973 г.&raquo;);</p>
      <p>&ndash; слово и следующее за ним тире.</p>
      <p>
        Как бороться с Вордом, который помимо вашей воли переносит на другую
        строку то, что переносу не подлежит? Некоторые используют дополнительные
        пробелы, заставляя непокорный Ворд перенести на следующую строку то, что
        разбиваться не должно. Это не самое элегантное решение. Пару лет назад
        мне поведали способ, который перевернул мои представления о добре и зле.
        Итак, если необходимо, чтобы слова, разделённые одним пробелом,
        располагались на одной и той же строке, то &ndash; ну, почему я об этом
        узнал только на пятом десятке? почему мучился столько лет? чем я
        провинился? что было не так в моей жизни? &ndash; надо одновременно
        нажать три клавиши: CTRL, SHIFT и ПРОБЕЛ! И будет вам счастье в виде
        неразрывного пробела.
      </p>
      <p>
        Тот же нехитрый &shy;&shy;&shy;&shy;&shy;&shy;&shy;&shy;прием
        используется и для дефисов...
      </p>
      <ol start={4}>
        <li>
          <strong> Кавычки</strong>
        </li>
      </ol>
      <p>
        4.1. Кавычки должны иметь одинаковую форму (либо &laquo;&raquo;, либо
        &rdquo; &ldquo;, либо &bdquo; &rdquo;).
      </p>
      <p>
        4.2. Перед закрывающими кавычками не ставятся точка, запятая, точка с
        запятой, двоеточие и тире. Все эти знаки ставятся только после кавычек!
      </p>
      <p>
        Знаки вопросительный и восклицательный, а также многоточие ставятся:
      </p>
      <p>
        &ndash; перед закрывающими кавычками, если относятся только к словам,
        заключенным в кавычки;
      </p>
      <p>
        &ndash; после закрывающих кавычек, если относятся ко всему предложению
        вместе со словами, выделенными посредством кавычек.
      </p>
      <ol start={5}>
        <li>
          <strong> Сноска</strong>
        </li>
      </ol>
      <p>
        5.1. Если сноска относится к слову или группе слов внутри предложения,
        то запятая, точка с запятой, двоеточие ставятся после знака сноски.
      </p>
      <p>
        5.2. Если есть знаки вопросительный, восклицательный и многоточие,
        относящиеся ко всему предложению, то они ставятся перед знаком сноски.
      </p>
      <p>
        5.3. Если сноска относится ко всему предложению, а в конце его
        отсутствуют знаки, указанные в п.5.2, то после знака сноски ставится
        точка.
      </p>
      <p>5.4. Кавычки ставятся перед знаком сноски.</p>
      <ol start={6}>
        <li>
          <strong> Дефис (-) и тире (&ndash;)</strong>
        </li>
      </ol>
      <p>
        Разница, как все понимают, не только в длине горизонтальной черточки.
      </p>
      <p>
        Не забывайте, что тире требует пробела как до, так и после себя (в
        отличие от дефиса).
      </p>
      <ol start={7}>
        <li>
          <strong> Ударение в слове</strong>
        </li>
      </ol>
      <p>
        Выделять ударение в слове посредством использования вместо строчной
        прописной буквы, цветом либо полужирным начертанием допустимо:
      </p>
      <p>&ndash; на сайте http://www.gramota.ru;</p>
      <p>&ndash; на форумах для демонстративного унижения собеседника;</p>
      <p>
        &ndash; руководителю учебно-методической группы по арбитражному процессу
        в старых объявлениях о заседании группы.
      </p>
      <p>
        Во всех остальных случаях нужно просто ставить ударение над необходимой
        гласной:
      </p>
      <p>а́ е́ и́ о́ у́ ы́ э́ ю́ я́</p>
      <p>
        Кстати, если не сможете найти ударные гласные на клавиатуре &ndash;
        копируйте прямо отсюда. Раздаю всем знакомым &ndash; не жалко&hellip;
      </p>
      <ol start={8}>
        <li>
          <strong> Корявое начало предложения</strong>
        </li>
      </ol>
      <p>
        Ну, тут понятно, о чем идет речь &ndash; предложение со слов &laquo;то
        есть&raquo;, &laquo;причём&raquo;, &laquo;в том числе&raquo;,
        &laquo;потому что&raquo;, &laquo;также&raquo;, &laquo;в связи с
        чем&raquo; можно начинать в разговорной речи, а вот в письменной это
        режет глаз.
      </p>
      <ol start={9}>
        <li>
          <strong> Употребление выражения &laquo;авторы закона&raquo;</strong>
        </li>
      </ol>
      <p>
        Говорить об &laquo;авторах закона&raquo; можно только в случае, если
        закон воспринимается как хореографическое произведение или пантомима. Во
        всех остальных случаях лучше использовать термин
        &laquo;разработчики&raquo; либо любой иной термин, не имеющий корреляции
        с институтами авторского права.
      </p>
      <ol start={10}>
        <li>
          <strong>
            {' '}
            Употребление не к месту оборота &laquo;то, что&raquo;
          </strong>
        </li>
      </ol>
      <p>
        Выражения типа &laquo;полагал то, что&raquo;, &laquo;утверждается то,
        что&raquo; вместо &laquo;полагал, что&raquo;, &laquo;утверждается,
        что&raquo; употребляют только современные подростки. Им это
        простительно.
      </p>
      <p>
        Сам приложил определенные усилия к искоренению этой заразы у своих
        детей&hellip; Оказалось, что так говорит школьный учитель русского
        языка.
      </p>
      <ol start={11}>
        <li>
          <strong> Употребление не к месту предлога &laquo;о&raquo;</strong>
        </li>
      </ol>
      <p>
        &laquo;Утверждал о том, что&raquo;, &laquo;доказательства о том,
        что&raquo; и т.п. выкрутасы не красят серьёзных научных исследователей.
      </p>
      <ol start={12}>
        <li>
          <strong> Употребление однокоренных слов в одном предложении</strong>
        </li>
      </ol>
      <p>
        Просто поверьте &ndash; это дурной тон. Если сложно отыскать синоним, не
        опускайте руки, а поработайте с предложением &ndash; не исключено, что
        ситуацию исправят местоимения или банальная перемена слов.
      </p>
      <p>
        Кстати, и в одном абзаце по возможности следует избегать употребления
        однокоренных слов. Но это уже высший пилотаж.
      </p>
      <ol start={13}>
        <li>
          <strong> Излишнее цитирование</strong>
        </li>
      </ol>
      <p>
        Это беда большинства начинающих авторов. Каюсь, сам был грешен&hellip;
        Тут все приходит с опытом. Совет же предельно простой &ndash; отсекайте
        все лишнее. Даже в закавыченной цитате можно пожертвовать частью текста,
        поставив многоточие.
      </p>
      <ol start={14}>
        <li>
          <strong> Цитирование, не позволяющее понять начало цитаты</strong>
        </li>
      </ol>
      <p>
        Это порочное явление имеет место, когда чужой текст не закавычен (автор
        своими словами излагает мысль другого исследователя). Правильно
        выстроенный текст не оставляет сомнений, откуда начинается изложение
        чужой позиции, например, если в начале предложения имеется ссылка на
        конкретного субъекта (&laquo;Так, М.А. Гурвич полагал, что
        &hellip;&raquo;).
      </p>
      <ol start={15}>
        <li>
          <strong> Запятые</strong>
        </li>
      </ol>
      <p>
        Здесь можно ещё страниц 50 написать. Но ограничусь только парой
        моментов.
      </p>
      <p>
        15.1. Запятая после &laquo;то есть&raquo; и &laquo;однако&raquo;,
        употребляемого в значении &laquo;но&raquo; (если нет реальных причин,
        например, следующего за этими словами обращения или деепричастного
        оборота) должна жесточайше караться. Испанский сапожок. Не меньше.
      </p>
      <p>
        15.2. Отсутствие запятой в сложносочиненном предложении превратилось уже
        в некое правило. Грешат все &ndash; законодатель, высшие суды,
        авторы&hellip;
      </p>
      <p>
        Да, Дитмар Эльяшевич Розенталь выделял шесть случаев, когда запятая в
        сложносочиненном предложении не ставится. Но, господа, все ли мы их
        помним?
      </p>
      <ol start={16}>
        <li>
          <strong> Ноль перед числом</strong>
        </li>
      </ol>
      <p>
        Умоляю, не пишите &laquo;03 февраля&raquo;! Даже если вы по первому
        образованию программист.
      </p>
      <p>
        Само собой, это требование не относится к случаям, когда Вы цитируете
        уже присвоенный кем‑то номер (например, номер двигателя из ПТС).
      </p>
      <ol start={17}>
        <li>
          <strong> Написание дат</strong>
        </li>
      </ol>
      <p>
        Это должны знать все: автор, в научном тексте написавший дату при помощи
        цифр (например, &laquo;19.06.2015&raquo;), будет всю жизнь преподавать в
        филиалах Университета. Даже после их закрытия.
      </p>
      <p>
        Писать дату в научном тексте только словами позволительно лишь
        нотариусам (ибо они привыкли).
      </p>
      <p>
        Итак, даты пишем словами и цифрами (&laquo;23 марта 1978 г.&raquo;).
      </p>
      <ol start={18}>
        <li>
          <strong> Детские орфографические ошибки</strong>
        </li>
      </ol>
      <p>Имя им &ndash; легион. Примеры? Пожалуйста!</p>
      <p>
        18.1. Несчастное слово &laquo;асимметрия&raquo;. Как в нем можно сделать
        две ошибки? Легко: &laquo;ассиметрия&raquo;. Не верите, что так кто-то
        пишет? Ну, тогда введите &laquo;ассиметрия&raquo; в поисковую строку СПС
        &laquo;КонсультантПлюс&raquo;.
      </p>
      <p>
        18.2. Ну, а кто из нас не видел слова &laquo;уполномачивает&raquo;? Само
        забавное, что, как правило, рядом с ним в тексте соседствует слово
        &laquo;полномочие&raquo;, но это не наводит ни на какие размышления...
        Впрочем, здесь не буду излишне категоричен, ибо в среде лингвистов по
        вопросу о допустимости употребления слова &laquo;уполномачивает&raquo;
        есть некий разброд и шатания. Ей-богу, хуже юристов: так недалеко и до
        легализации словечек типа &laquo;растамаживать&raquo;.
      </p>
      <p>
        Завершая эту часть своего опуса, повторю то, что говорил на одном из
        заседаний кафедры: перед обсуждением вашей диссертации не бойтесь
        разослать ее всем коллегам (да-да, всем, а не только тем, что назначены
        рецензентами). Понятно, что не у каждого найдётся время прочитать вашу
        работу, однако высказанные замечания даже нескольких заинтересованных
        субъектов не только усилят ее содержательно, но и позволят избежать
        откровенных ляпов.
      </p>
      <p>
        Теперь к более радостному. Наверное, все уже обратили внимание на то,
        что заседание группы включено в официальный перечень мероприятий
        Европейско-Азиатского правового конгресса. Это, конечно же, наша общая
        заслуга. Уверен, что рано или поздно заседания будут проводиться в
        межпланетном формате.
      </p>
      <p>
        Поскольку некоторые коллеги выражали обеспокоенность тем, что заседания
        группы представляют собой исключительно заседания, в этот раз я
        предлагаю совершить небольшую пешую прогулку. Нет-нет, пивной паб не
        отменяется, не подумайте ничего плохого! Просто перед посещением паба
        (ещё раз: перед, а не после), мы пойдём на экскурсию в Арбитражный суд
        Уральского округа. Это спонтанное мероприятие будет включать в себя
        осмотр коридоров, залов судебных заседаний, подсобных помещений, комнаты
        эмоциональной разгрузки. Ну, и как венец &ndash; внезапное посещение
        рабочего кабинета рядового арбитражного судьи.
      </p>
      <p>
        Что касается гостей. В этот раз я решил воспользоваться визитом на
        Конгресс иногородних коллег. Наше мероприятие посетят:
      </p>
      <p>
        &ndash; к.ю.н., доцент
        <RedactedText />, Московский государственный университет имени
        М.В.&nbsp;Ломоносова;
      </p>
      <p>
        &ndash; к.ю.н., преподаватель
        <RedactedText />, Южный федеральный университет;
      </p>
      <p>
        &ndash; к.ю.н., лектор Школы права Университета Роберта Гордона
        <RedactedText />
        (Абердин, Великобритания).
      </p>
      <p>
        Тема в этот раз мною избрана нестандартная. Я предлагаю замахнуться на
        один из источников нашего процессуального вдохновения. Да, речь идёт об
        отливаемых в гранит рекомендациях Верховного Суда РФ.
      </p>
      <p>
        Не так давно Пленумом Верховного Суда РФ было принято постановление
        &laquo;О некоторых вопросах, возникших у судов при применении
        законодательства, регулирующего труд руководителя организации и членов
        коллегиального исполнительного органа организации&raquo;. Кроме того, до
        конца июня сего года Пленум Верховного Суда РФ должен будет принять
        долгожданное постановление &laquo;О применении судами раздела I части
        первой Гражданского кодекса Российской Федерации&raquo; (последний
        вариант проекта можно скачать по ссылке
        http://zakon.ru/Tools/DownloadFileRecord/1891).
      </p>
      <p>
        Вот эти два документа (в части сугубо процессуальных рекомендаций) я и
        предлагаю обсудить.
      </p>
      <p>
        Очередное заседание группы состоится{' '}
        <strong>19 июня 2015 г. в 18-00.</strong>
      </p>
      <p>
        Как указывалось выше, заседанию будет предшествовать экскурсия в
        Арбитражный суд Уральского округа. Сбор &ndash; у входа в суд{' '}
        <strong>в 17-00, </strong>
        на всякий случай напомню адрес: пр. Ленина, 32. Важно: на входе
        работники ФССП изымают все косметички, так что во избежание
        неприятностей просьба оставить их дома.
      </p>
      <p>
        Место, где будет проводиться наше мероприятие, уже определено &ndash;
        пивной ресторан &laquo;РатсКеллер&raquo;. Чтобы определиться с
        бронированием конкретных дубовых столов, мне необходимо знать общее
        число желающих излить душу, в связи с чем прошу в срок до{' '}
        <strong>15 июня 2015 г.</strong>
        (включительно){' '}
        <strong>
          подтвердить свое участие в работе группы посредством сообщения
          лаборанту <RedactedText />
        </strong>
      </p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_10;
