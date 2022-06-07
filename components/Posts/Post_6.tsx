import React from "react";
import AccentedBlock from "../../UI/AccentedParagraph/AccentedParagraph";
import AccentedText from "../../UI/AccentedText/AccentedText";
import Footnote from "../../UI/Footnote/Footnote";
import RedactedText from "../../UI/RedactedText/RedactedText";
import Signature from "../../UI/Signature/Signature";
import Image from "next/image";
import s from "./Post.module.scss";

const Post_6 = () => {
  return (
    <div className={s.container}>
      <h2>
        Уважаемые преподаватели, аспиранты и соискатели, а также оборвавшие
        пуповину, соединявшую с родной кафедрой, не так давно защитившиеся
        кандидаты!
      </h2>
      <p>
        Подозреваю, что некоторые из вас сладостно потирали руки, рассчитывая
        провести субботний вечер на мягких диванах. И так бы оно и было, но есть
        нечто, что способно собрать в общем-то довольно разных людей в одном
        месте &ndash; правильно, это страстное желание поделиться своими идеями
        и узнать что-то новое об арбитражном процессе.
      </p>
      <p>Но для начала несколько лирических отступлений.</p>
      <p>
        Во-первых, должен вам сообщить, что именно папка под названием
        &laquo;Учебно-методический комплекс дисциплины &laquo;Арбитражный
        процесс&raquo; стала объектом исследования при проведении аттестации
        нашего вуза. Понятно, что ничего, кроме восхищения, она не вызвала. Я,
        конечно, немного приукрасил действительность &ndash; в протоколах
        заседаний, датированных мартом, указал, что женская половина получила
        роскошные букеты цветов, а если даты проведения заседаний были где-то
        рядом с днями рождений, то писал о поздравлениях именинников и вручении
        памятных подарков. Хотя, быть может, именно это и понравилось
        проверяющему? Ведь не на графы о навыках и компетенциях он смотрел!
      </p>
      <p>
        Во-вторых, хотел бы обратить внимание на то, что предложенные мною ранее
        заповеди процессуалиста вызвали какой-то нездоровый ажиотаж.
      </p>
      <p>
        Совершенно не понятой оказалась заповедь &laquo;Не пиши, если нечего
        сказать&raquo;. Человек шесть мне вполне серьезно говорили, что тогда
        встанет вообще весь печатный юридический рынок, что народ на
        конференциях будет сидеть и молча смотреть друг на друга и т.п. Что тут
        сказать? Да, будет какой-то период ломки. Но процессуалисты должны через
        него пройти. С этими графоманскими пристрастиями пора кончать.
      </p>
      <p>
        Просто шквал негодований вызвала заповедь &laquo;Не думай, что если
        обнаружил в иностранном праве незнакомый процессуальный институт, то это
        само по себе уже потянет на новизну&raquo;. Мне привели массу примеров,
        когда успешно защитившиеся кандидаты в новизну включали именно подобные
        положения. Отчасти согласен, погорячился &ndash; это ж сколько тогда
        знатоков иностранных языков вдруг поймет, что адекватный перевод совсем
        не тождественен формулированию новых научных положений. Хотя, с другой
        стороны, все же мы не филологи&hellip; Может, пора покончить с этой
        сомнительной практикой?
      </p>
      <p>
        &laquo;Не выдергивай фразы из контекста&raquo; - здесь я вообще оказался
        практически никем не понят. Мне популярно объяснили сразу несколько
        товарищей, что это основной полемический прием: его использование
        оживляет работу, задает дискуссионный тон и т.п. &nbsp;Неужели
        по-другому совсем никак нельзя?
      </p>
      <p>
        Ожесточенной критике подверглись и следующие связанные заповеди:
        &laquo;Не вставляй в новые произведения куски из ранее
        опубликованных&raquo;, &laquo;Не печатай одну статью под разными
        наименованиями&raquo;, &laquo;Не рассказывай на разных конференциях одно
        и то же&raquo;. Главный довод&nbsp;&ndash; не важно, как и где доносится
        идея, главное, чтобы о ней узнало как можно больше коллег. Тут трудно
        что-либо возразить. Но какой-то осадочек от такого подхода
        остается&hellip;
      </p>
      <AccentedBlock>
        <p>
          Про необходимость беречь репутацию тоже высказали&hellip; Типа, какая
          к черту репутация? Что за атавизм такой? Развел руками &ndash; нельзя,
          конечно, быть столь требовательным к людям. Да и сам-то, каюсь,
          грешен.
        </p>
      </AccentedBlock>
      <p>
        Просто на смех подняли заповедь о том, что &laquo;частная жизнь и
        межличностные отношения не должны влиять на содержание
        процессуально-правовой дискуссии&raquo;. Некоторые вполне серьезно
        утверждали, что именно напряженные отношения и двигают науку. И вообще,
        обратили внимание, что научная дискуссия &ndash; прекрасное поле для
        выплеска накопившейся злобы (кто-то кулаками машет, а тут все происходит
        цивилизованно, с улыбочками, рукопожатиями и фигами в кармане).
      </p>
      <p>
        Впрочем, что-то было активно поддержано. Большинство согласилось, что на
        банкете (по крайней мере первые полчаса) действительно слушают гораздо
        более внимательно, чем на официальной части. Высказывались и некоторые
        уточнения. Больше всего &ndash; по поводу заповеди об иногороднем
        процессуалисте (&laquo;Если в твой город приехал иногородний
        процессуалист &ndash; встреть, размести, накорми. Если надо &ndash;
        посели у себя дома и предложи собственную кровать. Не бросай его в
        прогулках по ночному городу, ибо процессуалисты как дети &ndash; могут
        заблудиться. Не пренебрегай этими правилами, даже если процессуалист
        противоположного пола&raquo;). Обратили внимание как на недостаток на
        отсутствие обязанности обеспечить культурную программу. Принимаю.
        Понравилась идея заменить в последнем предложении слово
        &laquo;противоположного&raquo; на словосочетание &laquo;того же&raquo;.
      </p>
      <p>
        В-третьих, подумал я, что пора от никому не нужных наставлений
        переходить к практическим аспектам работы преподавателя.
      </p>
      <p>
        Каждый из нас постоянно сталкивается с попытками нерадивых студентов и
        магистрантов выдать чужую работу за свою. Студентам, конечно, проще: они
        быстро понимают, в чем тут дело, и растворяются в неизвестном
        направлении. Но вот магистранты &ndash; это преподавательский бич.
      </p>
      <p>
        У меня сохранилась продолжавшаяся около трех лет переписка с одной из
        особ. Предлагаю отдельные фрагменты из нее использовать как некий
        базовый шаблон в общении с подобными субъектами (письма самой
        магистрантки по понятным соображениям опускаю):
      </p>
      <p>&laquo;Здравствуйте, &hellip; !</p>
      <p>
        К сожалению, Ваша работа оставила у меня самые негативные впечатления.
        Дочитал только до 11 страницы &ndash; дальше не стал. Работа
        представляет собой откровенный плагиат. Само собой, никаких рекомендаций
        кроме одной дать Вам не могу &ndash; если Вы действительно желаете выйти
        на защиту магистерской диссертации, то необходимо с первой до последней
        строки написать ее самостоятельно (включая Ваши авторские предложения по
        избранной теме). Это не исключает, конечно, изложения позиций других
        авторов, но делаться это должно только одним способом &ndash;
        посредством цитирования&raquo;.
      </p>
      <p>&laquo;Здравствуйте, .. !</p>
      <p>
        К сожалению, Ваша работа в очередной раз не является самостоятельным
        исследованием. Я прочитал чуть больше 20 страниц - плагиат либо
        абзацами, либо целыми страницами (Л.Б. Ситдикова, Ю.А. Свирин, А.В.
        Чекмарева, М.И. Малахов). Ваша настойчивость в попытках представить
        &quot;слепленную&quot; из чужих работ диссертацию начинает вызывать у
        меня раздражение. Печально, что Вы так и не поняли, что путь к выходу на
        защиту только один &ndash; самостоятельное написание диссертации. Не
        тратьте, пожалуйста, мое время на поиск первоисточника&raquo;.
      </p>
      <p>
        &laquo;Прочитал треть Вашей работы и опять обнаружил откровенный плагиат
        из работ &quot;Комментарий к Федеральному закону &quot;Об исполнительном
        производстве&quot; и практике его применения&quot; (Белоусов Л.В.,
        Закарлюка А.В., Куликова М.А., Решетникова И.В., Царегородцева Е.А.),
        Пузанов И. &quot;С жалобой на пристава - в Москву&quot; // ЭЖ-Юрист.
        2010. №&nbsp;25, Саблин М.Т., &quot;Взыскание долгов: от профилактики до
        принуждения: практическое руководство по управлению дебиторской
        задолженностью&quot;, &quot;Волтерс Клувер&quot;, 2011.
      </p>
      <p>Без комментариев&raquo;.</p>
      <p>
        &laquo;&hellip;, Вы в очередной раз неприятно удивили. Не знаю, как Вам
        вообще в голову приходит то, что Вы делаете. Перестаньте заниматься
        ерундой &ndash; не хватало мне еще среди украинских авторов отыскивать
        источник Ваших &quot;вдохновений&quot;. Если не можете сами ничего
        написать по избранной теме, смените тему. Если Вы никогда ничего сами не
        писали, Вам будет очень сложно. Но выбор, конечно, за Вами&raquo;.
      </p>
      <p>
        &laquo;&hellip;, Вы не тем занимаетесь. Еще раз повторяю: Ваша работа
        &ndash; откровенный плагиат. Вы (или кто-то иной) взяли несколько работ
        украинских авторов, довольно приблизительно их перевели (кое-где даже
        довольно забавно), убрали ссылки на украинское законодательство,
        разбавили вставками из российского законодательства, заменили в примерах
        гривны на рубли и теперь пытаетесь меня убедить в том, что работа
        является самостоятельной.
      </p>
      <p>
        Я за годы работы перечитал сотни статей, монографий и учебников. Не надо
        делать из меня идиота и заставлять заниматься поиском первоисточника.
        Впрочем, первоисточник могу Вам указать: Бабич В.А. Принципи
        функціонування державної виконавчої служби // Наука і практика. Фурса
        С.Я., Щербак С.В. Виконавче провадження в Україні. Навчальний посібник.-
        К.: Атіка, 2002. Поэтому никаких &quot;конкретных замечаний по
        тексту&quot; я Вам делать не собираюсь. Вы раз за разом наступаете на
        одни и те же грабли. Не растрачивайте ни свое, ни мое время&raquo;.
      </p>
      <p>
        <AccentedText>Теперь о гостях</AccentedText>
      </p>
      <p>
        Те, кто занимает вертикальное положение, могут присесть или прилечь, ибо
        на этот раз я решил пригласить двух судей <RedactedText /> судов общей
        юрисдикции. С чего бы это? Ну, во-первых, хотелось услышать мнение
        &laquo;конкурирующей структуры&raquo; по вопросам подведомственности.
        Во-вторых, целый ряд процессуальных институтов имеет в гражданском
        процессе существенно отличное (от процесса арбитражного) правовое
        регулирование. Вот пусть и расскажут. А мы обсудим. Может, найдутся
        новые решения для имеющихся в арбитражном процессе проблем.
      </p>
      <p>
        Итак, первый приглашенный &ndash; судья <RedactedText /> Проработал
        долгое время районным судьей &ndash; будет что спросить о применении
        общих институтов гражданского процесса при рассмотрении дела в суде
        первой инстанции.
      </p>
      <p>
        Второй приглашенный (сохраняйте, пожалуйста, горизонтальное положение)
        &ndash; Вы не угадаете, ибо предположить такое невозможно ни при каких
        обстоятельствах; заинтриговал? ну, получайте! &ndash; к.ю.н., доцент
        <RedactedText /> Да-да, внешний совместитель, работающий у нас на 0,4
        ставки. Почему, зачем? &ndash; читаю в ваших глазах немые вопросы. На
        самом деле на кафедре работает масса людей, которых мы не знаем. Они
        ловко договариваются с учебным отделом, чтобы занятия были поставлены на
        субботу (день, который обычный преподаватель использует для работы с
        документами после напряженной пятницы). Эти люди под разными предлогами
        избегают кафедральных мероприятий &ndash; причем не только те, которые и
        мы с вами с радостью пропустили бы (например, заседание кафедры,
        обсуждение тестовых заданий и пр.), но и гораздо более увлекательные
        собрания (новогодние корпоративы, послезащитные банкеты, кафедральные
        выходы в пивные пабы, поездки в обсерватории, походы в консерватории,
        прогулки по акватории, осмотр парковой территории, участие в работе
        консистории и т.п.). Вот и будет повод, что называется, познакомиться!
        Ну, и между прочим замечу, что <RedactedText />, хотя и является судьей
        <RedactedText />, довольно известный комментатор судебно-арбитражной
        практики (я бы даже сказал, что крупный специалист по вопросам судебного
        представительства, судебных расходов, примирительных процедур и
        упрощенного производства).
      </p>
      <AccentedBlock>
        <p>
          На очередное заседание, которое состоится{" "}
          <strong>9 ноября 2013 г. в 18-00</strong>, на обсуждение выносятся
          следующие темы:
        </p>
        <ol>
          <li>Участники арбитражного процесса.</li>
          <li>Представительство в арбитражном процессе.</li>
          <li>Подведомственность дел арбитражным судам.</li>
          <li>Подсудность дел арбитражным судам.</li>
          <li>Доказательства и доказывание в арбитражном процессе.</li>
        </ol>
      </AccentedBlock>
      <p>
        Место, где будет проводиться наше мероприятие, будет определено
        исключительно исходя из пропорционального соотношения любителей пива и
        вина. В связи с чем прошу в срок <strong>до 31 октября 2013 г.</strong>{" "}
        (включительно){" "}
        <strong>
          подтвердить свое участие в работе группы посредством
          устного/письменного/телеграфного сообщения лаборанту &hellip;
        </strong>
      </p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_6;
