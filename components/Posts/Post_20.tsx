import React from 'react'
import Signature from '../UI/Signature/Signature'
import Image from 'next/image'
import s from './Post.module.scss'
import Footnote from '../UI/Footnote/Footnote'

const Post_20 = () => {
  return (
    <div className={s.container}>
      <h2>
        Уважаемые преподаватели и аспиранты!<sup>1</sup>
      </h2>
      <Footnote>
        <sup>1</sup> Кстати, как там учеба в очной аспирантуре, товарищи аспиранты? Не разочаровались? Никто не пожалел о сделанном выборе?
      </Footnote>

      <p>
        Начну с главного. Не ожидал, конечно, что практически вся кафедра в едином порыве примет участие во внутривузовском конкурсе антикоррупционных рисунков
        (
        <span>
          <a href='https://www.usla.ru/news/putevoditel-po-martovskim-meropriyatiyam-urgyuu-imeni-v-f-yakovleva/'>
            https://www.usla.ru/news/putevoditel-po-martovskim-meropriyatiyam-urgyuu-imeni-v-f-yakovleva/
          </a>
        </span>
        ). Хоть никакого отношения это состязание к состязательной процедуре в арбитражных судах и преподаванию отраслевой дисциплины не имеет, все равно
        приятно &ndash; в очередной раз члены кафедры показали, что являются приверженцами честной сдачи экзаменов и зачетов. Осталось только что-то решить с
        модульно-рейтинговой системой (видимо, и здесь без обличительных рисунков никак не обойтись).
      </p>
      <p>
        Теперь к упрекам в мой адрес. Периодически мне высказывают недовольство тем, что само заседание проходит хаотично, что нет никакого заранее
        утвержденного плана, что члены группы произвольно входят и выходят из зала заседаний. Что я могу на это ответить?
      </p>
      <p>
        Во-первых, контролировать чьи-либо перемещения я, увы, не могу. На мой взгляд, и студенты должны иметь право свободно зайти и выйти из аудитории, а уж
        взрослые люди &ndash; тем более.
      </p>
      <p>
        Более сложный вопрос с планированием. Действительно, гораздо удобнее, когда в любую минуту знаешь, что будет дальше. Поэтому на текущее заседание
        предлагаю вот такой план:
      </p>
      <p>
        - <strong>19-00 &ndash; 20-00</strong> &ndash; краткое вступительное слово председательствующего;
      </p>
      <p>
        - <strong>20-00 &ndash; 20-10</strong> &ndash; выступление Н.С. Зверевой об успешном опыте обращения в Конституционный Суд&nbsp;РФ и дискуссия по итогам
        выступления;
      </p>
      <p>
        - <strong>20-10 &ndash; 24-00</strong> &ndash; свободный микрофон (хаотичные, никак ни с чем не связанные воспоминания и реплики всех присутствующих на
        заседании, произносимые одновременно).
      </p>
      <p>
        Далее хочу внести вклад в обучение молодых коллег. Неожиданно обратил внимание на то, что каждый второй из них сейчас пишет по банкротной тематике
        (видимо, не дают покоя лавры одного из преподавателей, который когда-то взялся за тему обособленных споров). Мое скромное содействие будет состоять в
        создании универсального шаблона, который гарантированно поможет написать хорошую статью по банкротству. Итак, делюсь тем, как должна выглядеть такая
        статья:
      </p>
      <ul>
        <li>в самом начале &ndash; обязательная цитата из работы Г.Ф. Шершеневича о конкурсном процессе.</li>
      </ul>
      <p>
        Лучше всего подходит утверждение о том, что &laquo;самые испытанные указания практики, самые глубокие исследования теории не в состоянии устранить в
        этой области трудности, которые коренятся в самой природе института. Все теряют при конкурсе. Искусство законодателя состоит не в том, чтобы устранить и
        предупредить возможность вынужденных потерь, а в том, чтобы определить их точно и поставить в соответствие&raquo;.
      </p>
      <p>Эта довольно общая фраза сразу как нельзя лучше показывает уровень статьи и полета мысли автора;</p>
      <ul>
        <li>дальше &ndash; ссылка на несовершенный закон (пробелы, противоречия, откровенный сумбур).</li>
      </ul>
      <p>
        Здесь можно себя не сдерживать &ndash; насколько я знаю, не родился еще человек, который был бы доволен законодательным регулированием несостоятельности
        в России;
      </p>
      <ul>
        <li>затем &ndash; упоминание &laquo;первой ласточки&raquo;, которая худо-бедно обнаружила проблему.</li>
      </ul>
      <p>
        Обычно это судебный акт Высшего Арбитражного Суда РФ, принятый по конкретному делу где-то в районе 2008 г. Считается хорошим тоном раскритиковать
        буквально все от первой до последней буквы, однако в итоге отметить, что при желании можно извлечь разумное зерно даже и из этого невнятного акта
        судебного правотворчества;
      </p>
      <ul>
        <li>
          потом &ndash; апелляция к постановлению пленума Высшего Арбитражного Суда РФ, которое уже не действует (а если формально еще и действует, то
          совершенно не соответствует тому, что есть на данный момент в законе).
        </li>
      </ul>
      <p>
        Здесь также приветствуется критический напор. Тем более что Высший Арбитражный Суд РФ, скажем прямо, довольно часто даже вполне понятные и разумные идеи
        излагал не самым удачным образом;
      </p>
      <ul>
        <li>
          после &ndash; обязательный отсыл к актуальной практике Верховного Суда РФ (здесь уже нужна некоторая осторожность, хотя общий критический настрой,
          конечно, сохраняется) и обращение внимания на аспекты, которые не охвачены актуальной практикой Верховного Суда РФ, но арбитражные суды округов по ним
          высказываются так-то и так-то (как правило, все совершенно неправильно);
        </li>
        <li>в середине статьи желательно вставить цитату из законодательства Германии (оптимально) или другой страны Европы/США (тоже пойдет).</li>
      </ul>
      <p>
        Сразу успокою: точность цитирования никто не проверяет. Да и смысл, который вы как переводчик вложили, тоже мало кому под силу подвергнуть критике
        &ndash; почему-то считается, что если человек способен перевести с немецкого (английского, французского) языка, то уж явно он постиг самые глубины
        содержания рассматриваемого правового понятия.
      </p>
      <p>
        &nbsp;А уж история самого правого института, его связь с другими правовыми явлениями, интерпретации процитированной нормы в академической иностранной
        литературе &ndash; это у нас точно никого не заинтересует. Поэтому не сдерживайте себя: со спокойной душой утверждайте, что у немцев (англичан,
        французов) именно так, как вы написали. Ну, и совершенно случайно это совпадает с результатами ваших скромных размышлений;
      </p>
      <ul>
        <li>
          вишенка на торте, которая украсит любую статью по банкротству, &ndash; развернутый пересказ какого-то архиважного судебного акта по конкретному делу
          со всей историей движения по инстанциям, с названиями участников, с суммой требований (страницы на три-четыре), из которого смысловая
          интерпретационная часть составляет максимум абзац.
        </li>
      </ul>
      <p>
        Вывод по судебному акту должен быть категоричным: по сути спор разрешен верно, но аргументация никуда не годится (в сноске можно сравнить со школьным
        учебником арифметики: подсмотрел правильный ответ, но решение написал абы как);
      </p>
      <ul>
        <li>
          факультативно можно покритиковать какой-нибудь законопроект по заявленной тематике (здесь вообще можно рубить с плеча &ndash; если вы этого не
          сделаете, то многие читатели заподозрят в вас разработчика).
        </li>
      </ul>
      <p>Теперь небольшое лирическое отступление.</p>
      <p>
        С одной стороны, юристы люди довольно черствые, а посему обращаться к чему-то возвышенному в нашей среде не принято. С другой, мы все же, как правило,
        не чураемся каких-то отсылок к произведениям искусства, к обыгрыванию тех или иных классических строк, к сравнению судебных фабул с литературными
        сюжетами и т.п. Вот и я решил двигаться в этом русле. Однако поскольку особых талантов у меня нет, то пошел по самому примитивному пути: взял уже
        готовые пародии, написанные в советское время довольно известным пародистом, и немного их подправил. Важный момент: впервые в истории рифмованные строки
        даны с необходимыми комментариями в прозе, которые, хоть и сбивают с ритма, но помогают сходу понять глубинный смысл, заложенный автором.
      </p>
      <p>
        Итак, представляю своего соавтора &ndash; Александр Иванов (люди старшего поколения наверняка помнят его как ведущего телевизионной передачи
        &laquo;Вокруг смеха&raquo;). Обычно он брал не самые удачные стихи известных (и не очень) поэтов и, делая акцент на одной-двух строках, сочинял короткую
        стихотворную пародию. Я взял несколько его пародий и немного их скорректировал с акцентом на наших учебных, учебно-методических и творческих проблемах.
      </p>

      <div className={s.img_container}>
        <div className={s.img}>
          <Image src='/images/Post_20/ivanov.jpg' width={540} height={550} objectFit='cover' alt='aff' />
        </div>
      </div>

      <p>
        <strong>
          Преподавателю, пишущему статьи исключительно ради выполнения плана по кафедре
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
        </strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Не писал статей и не пиши, <br />
          Лучше погуляй и подыши, <br />
          Пред комп&oacute;м
          <a href='#_ftn2'>
            <span>[2]</span>
          </a>{' '}
          поспешно не садись &ndash;
          <br />
          От тачпада
          <a href='#_ftn3'>
            <span>[3]</span>
          </a>{' '}
          дальше уберись,
          <br />
          Не спеши, не торопись, уймись! <br />
          Чем-нибудь в конце концов займись: <br />
          Выброси к чертям карандаши, <br />
          Полежи, в затылке почеши, <br />
          Борщ свари, включи себе Ютьюб
          <a href='#_ftn4'>
            <span>[4]</span>
          </a>
          ,
          <br />
          Выпей пива, почини утюг, <br />
          Новый комментарий
          <a href='#_ftn5'>
            <span>[5]</span>
          </a>{' '}
          разбери &ndash;
          <br />
          Посмотри, что у него внутри, <br />
          Плюнь в окно и в урну попади, <br />В Ельцин-Центр вечером пойди
          <a href='#_ftn6'>
            <span>[6]</span>
          </a>
          ,
          <br />
          Вымой пол, прими холодный душ, <br />
          Почитай на сон грядущий чушь&hellip; <br />
          Что-нибудь, короче, соверши! <br />
          Не писал статей и не пиши!
        </p>
      </div>

      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        &laquo;Соавторов&raquo; и &laquo;соавторок&raquo; тоже касается, кстати. Ну, ей-богу, пора завязывать с этим позорищем.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref2'>
          <span>[2]</span>
        </a>{' '}
        &laquo;Комп&raquo; - родовое понятие, объединяющее карманные, портативные, настольные компьютеры, а также рабочие станции, серверы, суперкомпьютеры и
        кластерные системы. Короче, всё то, во что члены кафедры погружаются, когда на заседании кафедры поднимается вопрос об обновлении тестов.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref3'>
          <span>[3]</span>
        </a>{' '}
        Не путать с мультитачем.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref4'>
          <span>[4]</span>
        </a>{' '}
        Пока не начали искусственно замедлять.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref5'>
          <span>[5]</span>
        </a>{' '}
        Имеется в виду новый кафедральный комментарий к АПК РФ, ГПК РФ, КАС РФ или к Закону об исполнительном производстве (они так часто обновляются, что
        практически всегда есть какой-то свежий).
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref6'>
          <span>[6]</span>
        </a>{' '}
        Даже если не будет никакого культурного мероприятия, то можно зайти в &laquo;БарБорис&raquo; перекусить посикунчиками с камчатским крабом.
      </p>

      <p>
        <strong>
          Преподавателю-процессуалисту, который познакомился с кандидатом физико-математических наук и решил блеснуть своими знаниями из геометрии, сказав, что
          площадь круга 2&pi;r
        </strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Говорит моя коллега, чуть дыша:
          <br />
          &ndash; Где учился ты, товарищ? В ЦПШ
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
          ?
          <br />
          Чашу знаний осушил ты не до дна, <br />
          Два пи эр &ndash; не площадь круга, а длина <br />
          И не круга, а окружности притом; <br />
          Учат в классе это, кажется, в шестом. <br />
          Ну, юристы! Удивительный народ! <br />
          И наука правоведов не берет... <br />
          Вас в банальности никак не упрекнешь, <br />
          И в уверенности &ndash; нет, не превзойдешь! <br />
          Всё б резвиться вам, голубчикам, дерзать. <br />
          Образованность всё хочут показать&hellip;
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        ЦПШ &nbsp;[цэ&nbsp;пэ&nbsp;ша́] &ndash; церковно-приходская школа (в данном контексте упоминание ЦПШ выглядит довольно унизительно&nbsp;&ndash; типа как
        УрФЮИ).
      </p>

      <p>
        <strong>Доценту, у которого во время заседания учебно-методической группы по арбитражному процессу пробежала мысль для будущей статьи</strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Доцент задумчиво сидит,
          <br />
          Но это ничего не значит!
          <br />
          Внутри доцента всё бежит,
          <br />И как же может быть иначе?..
          <br />
          Бегут соленые грибки,
          <br />
          Бежит, гортань лаская, водка,
          <br />
          За ней, естественно, селедка,
          <br />
          Затем &ndash; пивко и пирожки.
          <br />
          Потом бежит пашот яйцо,
          <br />
          Бежит тар-тар по пищеводу
          <a href='#_ftn2'>
            <span>[1]</span>
          </a>
          ,<br />А я с ликующим лицом
          <br />
          Бегу слагать доценту оду. <br />
          Бежит еда в последний путь,
          <br />С идеей для статьи играя.
          <br />
          Не замедляю бег пера я,
          <br />
          Авось и выйдет что-нибудь!
        </p>
      </div>

      <p className={s.small_footnote}>
        <a href='#_ftnref2'>
          <span>[1]</span>
        </a>{' '}
        Можно было и дальше продолжить (см. меню{' '}
        <span>
          <a href='http://menu.grottbar.ru/'>http://menu.grottbar.ru/</a>
        </span>
        ), но там уже плохо рифмуется.
      </p>

      <p>
        <strong>Доценту, которого внезапно посреди ночи посетила мысль</strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Традиционно ночью спят. <br />
          Спит всё &mdash; Исеть спит и Белинка
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
          ,
          <br />
          В Москве заснул Нескучный сад, <br />
          Спит и свердловская глубинка
          <a href='#_ftn2'>
            <span>[2]</span>
          </a>
          ,
          <br />
          Спит индивид и замполит
          <a href='#_ftn3'>
            <span>[3]</span>
          </a>
          ,
          <br />
          Спит черствый сыр на бутерброде, <br />
          В пивной напротив пиво спит, <br />
          Хотя одновременно бродит, <br />
          Общага спит и дендропарк, <br />
          Похрапывает парк трамвайный, <br />
          На Комсомольской мыши спят, <br />
          На кафедре спит лист похвальный, <br />
          Заснул на кухне табурет, <br />
          Сопит дитя, забыв про школу... <br />
          Не спит доцент. Творит доцент. <br />
          Ну что бы принял димедролу!
          <a href='#_ftn1'>
            <span>[4]</span>
          </a>
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        Речь идет о Свердловской областной универсальной научной библиотекеим. В.Г. Белинского (подозреваю, что не все знают о ее существовании).
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref2'>
          <span>[2]</span>
        </a>{' '}
        Нижняя Синячиха, Гагарка, Боярка, Суеватпауль, Новая Княсьпа, Ёква, Чауж, Меркитасиха, Марсяты и др. населенные пункты Свердловской области.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref3'>
          <span>[3]</span>
        </a>{' '}
        Замполит &ndash; заместитель командира по политической работе (типа нашего координатора учебно-методической работы кафедры).
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[4]</span>
        </a>{' '}
        Он же дифенгидрами́н, он же C17H21NO (некоторые его применяют как снотворное средство).
      </p>

      <p>
        <strong>Ода оппоненту</strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Оппонент усталости не знает: <br />
          Пишут все, а один читает <br />
          Горы графоманской ерунды. <br />
          Легче быть, наверно, землекопом, <br />
          Сутками сидеть над микроскопом, <br />
          Чем понять &laquo;идеи&raquo; новизны
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
          .
          <br />
          Оппонент, конечно, пишет мало, <br />
          Что и говорить, душа устала <br />
          И бумагу портить ни к чему&hellip; <br />
          Да, из отзывов не видно в нем поэта, <br />
          Но, конечно, за одно за это <br />
          Можно ставить памятник ему!
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        Специально для аспирантов: речь идет о разделе, который имеется в каждой диссертации. Предполагается, что в нем в сжатой форме изложены основные идеи, к
        которым аспирант пришел в ходе своей работы. Короче, речь идет о том, чем, собственно, в итоге обогатилась процессуальная наука (ну, или должна была
        обогатиться).
      </p>

      <p>
        <strong>Коллегам, которые норовят поздравить других процессуалистов с неизбежными юбилеями, или Искусство быть посторонним&nbsp;</strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Не так мы юбиляров поздравляем: <br />
          Букеты, книги &ndash; это ни к чему, <br />В Телеге
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>{' '}
          ль шлём банальные открытки&hellip;
          <br />
          Да нужно ль это, братцы, всё ему?
          <br />
          Заздравный адрес, хилые сонеты, <br />
          В честь юбилея &ndash; сборник от коллег, <br />
          Мы ждем его душевные ответы, <br />
          А он &ndash; когда закончится набег&hellip;
          <br />
          Ярка моих прекрасных чувств палитра,
          <br />
          Но юбиляром ой как дорожу:
          <br />
          Гуманен я &ndash; возьму с собой пол-литра
          <a href='#_ftn2'>
            <span>[2]</span>
          </a>
          ,<br />
          Огурчиков и &hellip; дома посижу!
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        Имеется в виду то ли разрешенный, то ли запрещенный Telegram (кто-то, кстати, открывает чат &laquo;Кафедра ГП&raquo;?).
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref2'>
          <span>[2]</span>
        </a>{' '}
        Речь, конечно, идет о бутылке водки (той, которая в старых советских ценах стоила 3 руб. 62 коп.).
      </p>

      <p>
        <strong>
          Пеший поход на Комсомольскую, 21 на заседание кафедры, или Когда идешь отчитываться для очередного переизбрания на должность, а сказать нечего
        </strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          В&nbsp;худой рюкзак поклав свое планшето,
          <br />Я ухожу туда, где слышен звон
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
          .<br />И вижу над собою синий небо,
          <br />
          Косматый облак и высокий крон.
          <br />Я дома здесь: на кафедру &ndash; не в гости.
          <br />
          Снимаю кепк, одетый набекрень,
          <br />
          Стою серьезно словно на помосте, <br />
          Устал и раздеваться дальше лень.
          <br />
          Хороший мысль проносится внезапно:
          <br />
          &laquo;Зачем пришел? Не переизберут&hellip;&raquo; <br />
          И я шепчу дрожащие губами:
          <br />
          &laquo;Всем до свиданья - мне на пару
          <a href='#_ftn1'>
            <span>[2]</span>
          </a>
          ,
          <br />
          Другой, коллеги, у меня маршрут!&raquo;
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        Если кто не понял, то речь идет о звонках на занятия, а не о звонах колоколов в культовых сооружениях.
      </p>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[2]</span>
        </a>{' '}
        Под парой здесь понимается занятие, время которого по случайности якобы совпало со временем проведения заседания кафедры. Важная ремарка для молодых
        коллег: по сложившейся традиции преподавателю, который прямо посреди заседания кафедры встает и крадучись уходит, верят на слово (в смысле не только не
        проверяют его актуальное расписание, но даже немного сочувствуют).
      </p>

      <p>
        <strong>Свое и чужое, или Когда решил поделиться гениальными мыслями из собственных статей с коллегами по кафедре</strong>
      </p>
      <div className={s.small_space_between_p}>
        <p>
          Я мысли слагаю словами,
          <br />
          Не чьими-то, а моими,
          <br />
          Ношу я доцента званье,
          <br />
          Не чье-нибудь, а свое.
          <br />
          На вуз я смотрю глазами,
          <br />
          Не чьими-то, а своими,
          <br />
          В задачнике есть задачи, <br />
          Не чьи-нибудь, а мои.
          <br />
          Вожу я знакомство с музой,
          <br />
          Не с чьей-нибудь, а моею,
          <br />
          Бывает, статьи пишу я,
          <br />
          Не чьи-нибудь, а свои.
          <br />
          Иду в ресторан с женою,
          <br />
          Не с чьей-нибудь, а своею,
          <br />
          Друзья меня ждут под вечер,
          <br />
          Не чьи-нибудь, а мои.
          <br />Я потчую их статьями,
          <br />
          Не чьими-то, а своими,
          <br />Я им раскрываю тему,
          <br />
          Не чью-нибудь, а свою.
          <br />
          Статьями по горло сыты,
          <br />
          Не чьими-то, а моими,
          <br />
          Они вспоминают маму
          <a href='#_ftn1'>
            <span>[1]</span>
          </a>
          ,<br />
          Не чью-нибудь, а мою&hellip;
        </p>
      </div>
      <p className={s.small_footnote}>
        <a href='#_ftnref1'>
          <span>[1]</span>
        </a>{' '}
        Добрыми словами, а не теми, о которых вы подумали.
      </p>

      <p>Теперь о вопросах для обсуждения.</p>
      <p>
        Предполагаю, что совсем немногие из вас читали постановление Пленума Верховного Суда РФ от 23 апреля 2019 г. № 10 &laquo;О применении части четвертой
        Гражданского кодекса Российской Федерации&raquo;. В нем меня заинтересовал п. 152:
      </p>
      <p>
        &laquo;Требование прекратить использование фирменного наименования, тождественного фирменному наименованию правообладателя или сходного с ним до степени
        смешения, в отношении видов деятельности, аналогичных видам деятельности, осуществляемым правообладателем, или изменить фирменное наименование, а также
        возместить&nbsp;правообладателю причиненные убытки в силу пункта 4 статьи 1474 ГК РФ может заявить только правообладатель.
      </p>
      <p>
        В ходе рассмотрения соответствующего спора судом должно быть установлено, что истец и ответчик имеют тождественные или сходные до степени смешения
        фирменные наименования и фактически занимаются конкретными установленными судом аналогичными видами деятельности.
      </p>
      <p>
        Различие организационно-правовой формы как части фирменного наименования истца и ответчика само по себе не свидетельствует об отсутствии нарушения права
        на фирменное наименование.
      </p>
      <p>
        Требование о прекращении использования фирменного наименования может быть удовлетворено,{' '}
        <em>если нарушение имеет место на момент вынесения судом решения</em>.
      </p>
      <p>
        При этом выбор способа прекращения нарушения исключительного права - прекращение использования фирменного наименования в отношении конкретных
        определенных судом видов деятельности или изменение фирменного наименования в силу пункта 4 статьи 1474 ГК РФ (в редакции Федерального закона N 35-ФЗ) -{' '}
        <em>принадлежит не истцу, а ответчику</em>. В связи с этим в резолютивной части решения суда, установившего факт нарушения права на фирменное
        наименование истца, указывается на запрет ответчику осуществлять определенные виды деятельности под определенным фирменным наименованием.{' '}
        <em>Выбор способа исполнения такого решения суда осуществляется ответчиком на стадии исполнения решения суда</em>&raquo;.
      </p>
      <p>Обращаю ваше внимание на два последних абзаца.</p>
      <p>
        Во-первых, необходимо поразмышлять об исках, направленных на пресечение длящихся правонарушений. Безусловно, логика в подходе Верховного Суда РФ есть:
        если нарушение (в данном случае &ndash; использование фирменного наименования) прекращено, то к чему обязывать ответчика? Но, с другой стороны, что ж
        получается? Используешь фирменное наименование, используешь, потом начинаешь судебное состязание с правообладателем, чувствуешь, что дело запахло
        керосином, и перед удалением суда в совещательную комнату прекращаешь нарушение, оперативно представляя соответствующие доказательства. Суд выносит
        отказное решение (кстати, видимо, судебные расходы здесь будут отнесены на проигравшего истца?). А потом уже на следующий день снова начинаешь незаконно
        использовать чужое фирменное наименование. Что делать правообладателю? Первоначально вынесенное решение законно и обоснованно &ndash; обжаловать смысла
        нет. Надо ему, бедолаге, предъявлять новый иск (появился новый юридический факт &ndash; иски не будут тождественными). И опять похожая картина: судебное
        состязание, которое заканчивается тем, что перед удалением суда в совещательную комнату ответчик прекращает нарушение и представляет соответствующие
        доказательства. Какой-то порочный круг&hellip; Или я чего-то не понимаю?
      </p>
      <p>
        Во-вторых, меня просто заинтриговала логика перенесения выбора способа прекращения нарушения исключительного права в процессуальную плоскость. Можно,
        конечно, послушать цивилистов на предмет того, действительно ли в п. 4 ст. 1474 ГК РФ имеется такой выбор. Но я предлагаю посмотреть на проблему шире:
        предположим, что материально-правовая норма действительно наделяет должника таким выбором. И тогда у меня возникает вопрос: такой выбор сохраняется в
        течение всего времени, пока идет судебный спор, и даже на стадии исполнения? Если ответ положительный, то каковы последствия бездействия должника? Может
        ли кредитор через какой-то период времени заместить волю должника и требовать принудительного исполнения обязательства из строго определенного
        охранительного правоотношения? Если да, то как это должно работать в исполнительном производстве? Если нет, то что остается в такой ситуации делать
        кредитору?
      </p>
      <p>Ну, и не могу удержаться от очередной фабулы, связанной с динамикой материальных правоотношений.</p>
      <p>Итак, есть два судебных дела:</p>
      <p>- первое: истец-кредитор взыскивает долг с ответчика-должника;</p>
      <p>- второе: истец-кредитор взыскивает долг с ответчика, который выступил поручителем по обязательству должника из первого дела.</p>
      <p>Предлагаю поразмышлять над несколькими вариантами:</p>
      <ul>
        <li>
          в первом деле заключено мировое соглашение, по условиям которого предоставлена отсрочка в погашении долга. Должно ли каким-то образом судебное
          определение о его утверждении влиять на судебный спор по второму делу?
        </li>
        <li>
          в первом деле заключено указанное выше мировое соглашение, а по второму уже принято судебное решение в пользу кредитора, кредитор-взыскатель получил
          исполнительный лист и обратился за принудительным исполнением. Должно ли каким-то образом судебное определение об утверждении мирового соглашения
          влиять на процедуру принудительного исполнения?
        </li>
        <li>
          в первом деле принято судебное решение о взыскании основного долга, а затем суд предоставил отсрочку в исполнении судебного акта. Должно ли каким-то
          образом судебное определение об отсрочке влиять на судебный спор по второму делу (на процедуру принудительного исполнения судебного решения, принятого
          по второму делу)?
        </li>
        <li>
          в первом деле истец отказался от иска, вследствие чего производство по делу было прекращено. Должно ли каким-то образом соответствующее судебное
          определение влиять на судебный спор по второму делу (на процедуру принудительного исполнения судебного решения, принятого по второму делу)?
        </li>
      </ul>
      <p>
        Итак, очередное заседание группы состоится в пятницу <strong>14 апреля 2023 г. в 19&ndash;00</strong> в &laquo;Гротт Баре&raquo; (
        <span>пр. Ленина, 49)</span>.
      </p>
      <p>
        Как обычно, чтобы понять, насколько соответствует имеющееся там помещение количеству участников, прошу <strong>не позднее 12 апреля</strong> подтвердить
        свое участие в работе группы посредством короткого сообщения на мою электронную почту abushenko73@mail.ru либо в мессенджер ВотсАп (само собой, не в
        кафедральном чате, а лично мне).
      </p>

      <Signature>
        <p>Бывший руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  )
}

export default Post_20
