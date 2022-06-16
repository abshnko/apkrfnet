import React from 'react';
import AccentedBlock from '../../UI/AccentedParagraph/AccentedParagraph';
import AccentedText from '../../UI/AccentedText/AccentedText';
import Footnote from '../../UI/Footnote/Footnote';
import RedactedText from '../../UI/RedactedText/RedactedText';
import Signature from '../../UI/Signature/Signature';
import Image from 'next/image';
import s from './Post.module.scss';

const Post_15 = () => {
  return (
    <div className={s.container}>
      <h2>Уважаемые преподаватели и аспиранты!</h2>
      <p>
        Что-то давненько мы с вами не собирались, не обсуждали глобальные
        вопросы современного цивилистического процесса. А ведь, согласитесь,
        есть что обсудить. Впрочем, начну с более фундаментальных вещей.
      </p>
      <p>
        Во-первых, это, конечно, инициатива ректора МГУ В.А. Садовничего,
        предложившего изучение в средней школе церковнославянского языка
        (https://tass.ru/obschestvo/5764063). Казалось бы, какое это имеет
        отношение к нам, к преподавателям цивилистического процесса и прочих
        околопроцессуальных наук? Отвечаю: прямое. Совсем скоро придут студенты,
        владеющие не только русским, но и церковнославянским языком. Поэтому мы
        не должны ударить в грязь лицом так, как это иногда получается с латынью
        (это я в первую очередь о себе, конечно).
      </p>
      <p>
        Вы, конечно, мне возразите &ndash; мол, и так постоянно употребляете. И
        действительно:
      </p>
      <p>
        - в теме &laquo;Подсудность&raquo; мы оперируем понятием
        &laquo;пререкание о подсудности&raquo;, интуитивно выбирая из четырех
        возможных значений (возмущение, противоречие, упорство, спор) последнее;
      </p>
      <p>
        - в теме &laquo;Доказательства&raquo; применительно к допросу свидетеля
        иногда проскользнет &laquo;послушествовати&raquo; в смысле
        &laquo;лжесвидетельствовать&raquo;;
      </p>
      <p>
        - при решении задач по особенностям рассмотрения отдельных категорий дел
        то и дело ненароком скажешь вместо &laquo;вступить в брак&raquo;
        &laquo;снитися&raquo;, а вместо &laquo;дочь&raquo; &ndash;
        &laquo;дщерь&raquo;.
      </p>
      <p>
        Более того, подозреваю даже, что многие слова употребляются нами без
        осознания их церковнославянского происхождения:
      </p>
      <p>
        - стоишь так иногда посреди аудитории на Колмогорова, посмотришь в
        окошко, а там по реке лодки с гребцами плывут &ndash; и задумчиво
        произнесешь: &laquo;Лепота&hellip;&raquo;;
      </p>
      <p>
        - или вот желаешь сделать акцент в какой-то фразе во время лекции и само
        собой вырывается: &laquo;Наипаче же&hellip;&raquo;;
      </p>
      <p>
        - или опоздала студентка после обеденного перерыва на семинар, и у
        преподавателя помимо воли предложение начинается с &laquo;Еда
        како&hellip;&raquo;, а в конце обязательно проскользнет &laquo;токмо
        несытая отроковица&raquo;;
      </p>
      <p>
        - или забыл преподаватель взять ключ от аудитории, подходит к ней и
        невольно восклицает: &laquo;Ничтоже дивно &ndash; сонм паки!&raquo;
      </p>
      <p>
        И тем не менее я категорически настаиваю на расширении горизонта наших
        лингвистических познаний. Как прекрасно, когда преподаватель может как
        бы между прочим сказать: &laquo;Не употребляйте имя Маркуса Ароновича
        всуе!&raquo; Или снисходительно: &laquo;Ничтоже дивно, я вижу, что Вы
        вкупе с Адольфом Христиановичем&hellip;&raquo; А как запомнится лекция,
        когда в ее конце после небольшой паузы лектор, подняв руку и показывая
        указательным пальцем куда-то вверх, многозначительно провозгласит:
        &laquo;Се бо!&raquo; И я просто реально вижу картину, когда громко и не
        по делу разговаривающий во время семинара студент неожиданно услышит
        обращенный в свой адрес вопрос преподавателя: &laquo;Вы, отрок, доколе
        семо и овамо своим оралом дождеточити рцем?&raquo; (сразу говорю &ndash;
        фраза совершенно бессмысленная, но она явно должна произвести
        впечатление на всех, кто присутствует в аудитории, включая работников
        деканата, которые проверяют соответствие темы и обсуждаемых на семинаре
        вопросов разработанным Александром Геннадьевичем П. учебно-методическим
        материалам).
      </p>
      <p>
        Кстати, иногда хорошее знание церковнославянского может помочь в
        комичном обыгрывании. Вспомните: все мы ведь любим у студента,
        употребляющего всуе &laquo;как бы договор&raquo;, невзначай спросить:
        &laquo;Молодой человек, &laquo;как бы&raquo; в смысле
        &laquo;квази&raquo;?&raquo; Так вот, этот же прием можно использовать и
        в отношении неологизма &laquo;ваще&raquo; - как только услышали его,
        сразу же спрашиваете: &laquo;Извините, хотелось бы уточнить:
        &laquo;ваще&raquo; это в смысле &laquo;вотще&raquo;?&raquo;
      </p>
      <p>
        Наконец, церковнославянские фразы могут использоваться уже в качестве
        готовых предложений из классических произведений:
      </p>
      <p>- &laquo;Аз есмь ваш новый преподаватель&raquo;;</p>
      <p>
        - &laquo;Ответчик в этой фабуле, не будем кривить душой, просто
        любoстрастный прыщ, нет &ndash; даже пес смердячий&raquo;;
      </p>
      <p>- &laquo;Отрок, Вы просто вожделеете решить задачу № 5!&raquo;;</p>
      <p>
        - &laquo;Ну, бoрoда мнoгoгрешная, ежели за тoбoй чтo худoе прoведаю на
        тестировании&hellip;&raquo;
      </p>
      <p>
        Во-вторых, хотел бы обратить внимание, что летние каникулы пролетят
        совсем быстро и уже не за горами новый медосмотр. Понятно, что
        наибольшее волнение вызывает посещение психиатра. Вот здесь бы я хотел
        немного просветить вас &ndash; все же совершенно ненормально, когда
        врач, глядя на преподавателя, с умным видом что-то бубнит себе под нос,
        а мы с вами в ответ только виновато улыбаемся.
      </p>
      <p>Итак, краткая памятка:</p>
      <ol>
        <li>Примерно половине из нас психиатр ставит амнестический синдром.</li>
      </ol>
      <p>
        Не нужно бояться такой мелочи! Оказывается, это &laquo;синдром,
        характеризующийся выраженным хроническим снижением памяти на недавние и
        отдаленные события. Непосредственное воскрешение в памяти событий обычно
        не нарушено. Память на недавние события обычно нарушена сильнее, чем на
        отдаленные&raquo;. Будем откровенны &ndash; по утрам в субботу у
        большинства членов нашей кафедры именно это и происходит &ndash; резкое
        снижение памяти на события вечера пятницы.
      </p>
      <p>
        Правда, есть один маленький нюанс, связанный с мироощущением. Далее
        авторитетный источник указывает, что &laquo;обычно явно выражено
        нарушение ощущения времени и последовательности событий и имеются
        трудности в освоении нового материала&raquo;. С новым материалом нужно,
        конечно, аккуратнее &ndash; как-никак нам совсем скоро предстоит
        столкнуться с измененной реальностью (это я о ФЗ-451).
      </p>
      <ol start={2}>
        <li>
          Некоторые из нас сталкиваются с ситуацией &laquo;ощущения отражения
          мыслей (эхо), вкладывания чужой или похищения собственной мысли,
          передачи мысли на расстояние&raquo;.
        </li>
      </ol>
      <p>
        Иногда подобная симптоматика сопровождается &laquo;слуховыми
        галлюцинациями, комментирующими или обсуждающими больного в третьем
        лице; беспорядочностью мысли и симптомами негативизма&raquo;.
      </p>
      <p>
        Не пугайтесь! В научной среде &laquo;вкладывание чужой или похищение
        собственной мысли&raquo; &ndash; банальнейшее явление. А уж
        &laquo;беспорядочность мысли&raquo; и негативизм по отношению к коллегам
        &ndash; это просто бич.
      </p>
      <p>
        Короче, если психиатр произнесет что-то типа &laquo;шизофреническое
        расстройство&raquo; - не пугайтесь, нас таких много.
      </p>
      <ol start={3}>
        <li>
          Все мы люди нестандартные, и когда видишь какую-то чужую интересную
          статью, то, как правило, это вызывает в нас &laquo;холодность или
          неадекватность эмоциональных реакций, странное или эксцентричное
          поведение&raquo;.
        </li>
      </ol>
      <p>
        Вы будете смеяться, но на языке психиатрии это &laquo;шизотипическое
        расстройство&raquo;!
      </p>
      <ol start={4}>
        <li>
          Ну, и совсем уже о мелочах. При выходе из учебного корпуса после
          четырех пар у заочников &laquo;часто отмечаются растерянность и
          недоумение, но дезориентация во времени, месте и окружении не
          настолько устойчива и тяжела, чтобы можно было диагностировать делирий
          органической этиологии&raquo;.
        </li>
      </ol>
      <p>
        Эта, в общем-то, сущая ерунда представляет собой &laquo;острые и
        преходящие психотические расстройства&raquo;.
      </p>
      <p>
        А теперь ближе к науке. Недавно перечитывал докторскую диссертацию
        одного из классиков уральской процессуальной школы &ndash; Владимира
        Михайловича Семенова. Как вы прекрасно помните, она посвящена принципам
        гражданского процессуального права. И вот обнаруживаю в диссертации
        следующее: &laquo;Соблюдение принципа диспозитивности в части права
        распоряжаться существом заявленных требований должно согласовываться с
        соблюдением других принципов гражданского судопроизводства. В частности,
        изменение предмета иска означает замену первоначального иска новым, то
        есть отказ от первоначального иска и невозможность вторичного
        предъявление иска по тому же основанию и по любому из ранее заявленных
        требований, как по первоначальному, так и по измененному&raquo;.
      </p>
      <p>
        Честно скажу, что сталкивался с подобным подходом при рассмотрении
        конкретных дел в судах общей юрисдикции и долго не мог понять, как можно
        квалифицировать изменение предмета иска именно как отказ от
        первоначального иска &ndash; это ведь совершенно разные правовые
        институты. В какой-то момент даже подумал, что это некое коллективное
        бессознательное руководит судьями судов общей юрисдикции. Но вот теперь
        истоки данного подхода установлены. Что ж, и классики уральской
        процессуальной школы могут высказывать крайне спорные суждения. Важно,
        конечно, понимать сущностное обоснование того или иного утверждения.
        Честно скажу, мне ссылка на принципы в данном случае не кажется
        убедительной. Впрочем, если кто-то видит здесь какие-то иные аргументы
        &ndash; готовьтесь их высказать во время очной процедуры.
      </p>
      <p>
        Ну, а наиболее пытливые могут взять в руки первоисточник и найти в
        тексте диссертации одну довольно существенную оговорку, которую сделал
        В.М. Семенов именно для &laquo;невозможности предъявления вторичного
        иска по первоначальному требованию&raquo;.
      </p>
      <p>
        Далее &ndash; о теме предстоящего заседания. Подозреваю, что все уже
        вдоль и поперек перечитали Федеральный закон от 28 ноября 2018 г. №
        451-ФЗ &laquo;О внесении изменений в отдельные законодательные акты
        Российской Федерации&raquo;. Поэтому в 101-ый раз обсуждать какие-то
        банальности вроде профессионального судебного представительства желания
        совсем нет.
      </p>
      <p>
        И все же я вижу определенный (предполагаю, совершенно скрытый от
        большинства обычных юристов) пласт проблем, которые действительно
        требуют некоторого доктринального осмысления. Кое-какими из них хотел бы
        с Вами поделиться:
      </p>
      <ol>
        <li>
          <em> </em>
          <em>
            Течение исковой давности при передаче дела из суда общей юрисдикции
            в арбитражный суд (и в противоположном направлении)
          </em>
        </li>
      </ol>
      <p>
        Данный вопрос, собственно, является продолжением общей проблемы течения
        исковой давности при несоблюдении истцом правил об обращении в суд
        первой инстанции.
      </p>
      <p>
        Как мы помним, законодатель для ряда случаев позволяет оставлять исковое
        заявление без движения, а после возбуждения производства по делу &ndash;
        передавать дело по подсудности. В известном смысле это проявление
        некоторого проистцового правового регулирования. С точки зрения
        процессуальной экономии такое законодательное решение вопросов не
        вызывает. Но как быть все же с интересами ответчика? Напомню, что п. 1
        ст. 204 ГК РФ устанавливает, что срок исковой давности не течет со дня
        обращения в суд в установленном порядке за защитой нарушенного права на
        протяжении всего времени, пока осуществляется судебная защита
        нарушенного права. Что же получается? Истец допустил весьма существенную
        ошибку &ndash; обратился вместо арбитражного суда в суд общей
        юрисдикции; суд, возбуждая производство по делу, эту ошибку просмотрел;
        впоследствии суд общей юрисдикции своей волей передает дело в конкретный
        арбитражный суд. Доведем ситуацию до критической точки &ndash; сам истец
        не согласен с такой передачей и обжалует соответствующее определение.
        Внимание, вопрос: когда же все ж таки прервалось течение срока исковой
        давности?
      </p>
      <p>
        Если у кого-то есть знакомые цивилисты, то можно как бы невзначай и их
        спросить &ndash; должны же они как-то разумно интерпретировать случаи,
        когда действие материально-правового института в силу прямого указания
        закона связано с определенным процессуальным механизмом.
      </p>
      <ol start={2}>
        <li>
          <em> </em>
          <em>Применение института с</em>
          <em>
            удебных издержек в отношении третьих лиц, не заявляющих
            самостоятельных требований относительно предмета спора
          </em>
        </li>
      </ol>
      <p>Вы, конечно, все знаете о двух новых частях в ст. 110 АПК РФ:</p>
      <p>
        &laquo;5.1. Судебные издержки, понесенные третьими лицами, не
        заявляющими самостоятельных требований относительно предмета спора и
        участвовавшими в деле на стороне, в пользу которой принят судебный акт
        по делу, могут быть возмещены им, если их фактическое поведение как
        участников судебного процесса способствовало принятию данного судебного
        акта.
      </p>
      <p>
        5.2. Если третье лицо, не заявляющее самостоятельных требований
        относительно предмета спора, реализовало право на обжалование судебного
        акта и его жалоба была оставлена без удовлетворения, судебные издержки,
        понесенные лицами, участвующими в деле, в связи с рассмотрением данной
        жалобы, могут быть взысканы с этого третьего лица&raquo;.
      </p>
      <p>
        Собственно, все мы помним, что судебная практика уже достаточно давно
        выработала подходы в отношении допустимости распространения института
        судебных издержек на третьих лиц, не заявляющих самостоятельных
        требований относительно предмета спора. Но всегда ведь ожидаешь от
        законодателя какого-то фундаментального решения задачи &ndash; зачем
        переписывать в закон какие-то частные случаи, если наша любимая
        романо-германская правовая система дает возможность формулировать некую
        общую идею на уровне позитивного правила?
      </p>
      <p>
        Если кратко, то я крайне разочарован тем, что появилось в законе. И в
        связи с этим предлагаю обсудить следующие вопросы:
      </p>
      <ul>
        <li>
          Каким должен быть общий подход ко взысканию издержек &ndash; следует
          ли уравновесить общее право третьих лиц на взыскание с проигравшей
          стороны судебных издержек их зеркальной общей обязанностью возмещать
          такие издержки во всех случаях, когда фактическое поведение третьего
          лица как участника судебного процесса вынудило сторону, в пользу
          которой принят итоговый судебный акт, понести дополнительные расходы,
          которые она бы не понесла, если бы спор ограничился исключительно
          доводами, высказанными процессуальным оппонентом?
        </li>
      </ul>
      <p>
        Соответственно более частный вопрос &ndash; насколько разумно
        ограничение взыскания судебных издержек с третьего лица лишь случаями
        обжалования судебного акта?
      </p>
      <ul>
        <li>
          На самом ли деле правило о праве третьих лиц на взыскание с
          проигравшей стороны судебных издержек и обязанности возмещать такие
          издержки должно предусматривать судебную дискрецию?
        </li>
      </ul>
      <p>
        Уточню &ndash; речь не идет об определении конкретного размера судебных
        издержек, вопрос ставится именно о самом основании возникновения этого
        элементарного процессуального правоотношения. Действительно ли суд в
        одних случаях может взыскать, а в других по своему усмотрению отказать
        во взыскании судебных издержек? Если допустить утвердительный ответ, то
        что за обстоятельства будут склонять суд в ту или иную сторону?
      </p>
      <ul>
        <li>
          Как должен разрешаться вопрос о судебных издержках, если лицо,
          формально имеющее статус третьего лица на стороне истца (ответчика),
          де-факто противостоит обеим сторонам?
        </li>
      </ul>
      <p>
        Для наглядности &ndash; пример с обжалованием определения об утверждении
        мирового соглашения: обе спорящие стороны имеют интерес в заключении
        мирового соглашения; суд первой инстанции такое мировое соглашение
        утвердил; в суде проверочной инстанции третье лицо доказало, что
        утвержденное мировое соглашение затрагивает его права, вследствие чего
        определение об утверждении отменено. Чтобы совсем &laquo;очистить&raquo;
        ситуацию &ndash; допустим, что после отмены определения третье лицо
        утратило свой процессуальный статус и более в деле не участвовало.
      </p>
      <ul>
        <li>
          Какое значение для возмещения судебных издержек имеет наличие у
          третьего лица правовой связи с обеими сторонами?
        </li>
      </ul>
      <p>
        Поясняю: всем нам хорошо известна сложившая в арбитражных судах практика
        привлекать третье лицо без &laquo;привязки&raquo; к одной из спорящих
        сторон. Судьям так, конечно, проще. И в большинстве случаев это никак не
        влияет ни на реализацию процессуальных прав, ни на разрешение спора по
        существу. Но вот новые части ст. 110 АПК РФ должны вернуть судейское
        сообщество в лоно процессуальной доктрины &ndash; как ни упрощай, а для
        целей возмещения судебных издержек придется дать четкий ответ на вопрос
        о том, на чьей же стороне выступало третье лицо.
      </p>
      <p>
        В большинстве случаев никаких сложностей возникнуть не должно &ndash;
        достаточно лишь проанализировать то, какой материально-правовой эффект
        может оказать судебное решение на уже существующее (либо будущее)
        правоотношение между одной из сторон и третьим лицом. Но в некоторых
        случаях, чувствую я, будут возникать сложности.
      </p>
      <p>
        Опять же для наглядности смоделируем простой пример: представитель,
        наделенный полномочиями от обеих сторон, совершил сделку; соответственно
        такая сделка повлекла правовые последствия для обоих доверителей; через
        какое-то время одна из сторон предъявляет иск о признании сделки
        недействительной. На чьей стороне в итоге должен быть привлечен к
        участию в деле в качестве третьего лица представитель?
      </p>
      <p>
        После того, как будет дан ответ на этот вопрос, предлагаю поразмышлять
        дальше: например, представитель привлечен на стороне истца, иск
        удовлетворен; фактическое процессуальное поведение третьего лица
        способствовало принятию данного судебного акта (например, он представил
        доказательства факта порочности сделки); однако никакого интереса в
        опорочивании сделки у третьего лица не было, поскольку по условиям
        договоров, которые связывают его и с истцом, и с ответчиком,
        вознаграждение находится в прямой зависимости как от заключения, так и
        от исполнения оспоренного договора. Справедливо ли при таких условиях
        возмещение судебных издержек, понесенных третьим лицом? А если в этой же
        ситуации третье лицо изначально было помещено на сторону ответчика?
      </p>
      <ul>
        <li>
          Для наиболее пытливых факультативно предлагаю также проанализировать
          Постановление Конституционного Суда РФ от 21 января 2019 г. № 6-П
          &laquo;По делу о проверке конституционности статьи 112 Кодекса
          административного судопроизводства Российской Федерации в связи с
          жалобой граждан Н.А. Баланюк, Н.В. Лаврентьева, И.В. Попова и В.А.
          Чернышева&raquo;.
        </li>
      </ul>
      <p>
        Сразу скажу: если вы еще не читали этот судебный акт, то вас ждет ряд
        открытий чу́дных (ибо Конституционный Суд РФ, как сказал классик,
        парадоксов друг).
      </p>
      <p>
        Вкратце лишь укажу, что Конституционный Суд РФ пришел к выводу о том,
        что ст. 112 КАС РФ &laquo;предполагает возможность присуждения судом с
        административного истца расходов на оплату услуг представителя,
        понесенных заинтересованным лицом, участвовавшим в административном деле
        об оспаривании решений, действий (бездействия) органа публичной власти
        на стороне административного ответчика, в пользу которого принят
        итоговый судебный акт по административному делу, когда фактическое
        процессуальное поведение заинтересованного лица способствовало принятию
        данного судебного акта, при условии, что:
      </p>
      <p>
        судебные расходы, понесенные на оплату услуг представителя, являлись (1)
        необходимыми (вынужденными) и возмещаются (2) в разумных пределах;
      </p>
      <p>
        участие заинтересованного лица в административном деле на стороне
        административного ответчика является (3) надлежащим способом защиты
        своих прав, свобод и законных интересов, а (4) судебный акт по делу
        влечет юридические последствия для заинтересованного лица в виде
        сохранения или прекращения (сокращения, изменения содержания и объема)
        его прав и обязанностей;
      </p>
      <p>
        расходы на оплату услуг представителя, понесенные заинтересованным
        лицом, (5) не были обусловлены исключительно целью воспрепятствовать
        деятельности административного истца по защите своих прав, свобод и
        законных интересов, прав, свобод и законных интересов других лиц или
        неопределенного круга лиц путем оспаривания в судебном порядке решений,
        действий (бездействия) органа публичной власти, в том числе
        затрагивающих права заинтересованного лица&raquo;.
      </p>
      <p>
        Соответственно наиболее пытливые могут поразмышлять над каждым из
        выделенных Конституционным Судом РФ условий (для удобства я их обозначил
        цифрами 1-5).
      </p>
      <ol start={3}>
        <li>
          <em> </em>
          <em>Правовой эффект неутвержденного мирового соглашения</em>
        </li>
      </ol>
      <p>
        Вообще-то, Федеральный закон от 28 ноября 2018 г. № 451-ФЗ &laquo;О
        внесении изменений в отдельные законодательные акты Российской
        Федерации&raquo; никаких норм, которые касались бы неутвержденных
        мировых соглашений, не содержит. Все, что сделал законодатель, это
        включение в ГПК РФ совершенно новой Главы 14.1, которая, уверен, нам
        всем до боли что-то напоминает.
      </p>
      <p>
        И опять я разочарован итогом законотворческой работы &ndash; в таком
        масштабном документе тихой сапой можно было провести какие-то совсем
        свежие идеи (все настолько были поглощены немотивированными решениями и
        профессиональным представительством, что точно бы просмотрели). Меж тем,
        как мне представляется, уже давно требует разрешения целый блок довольно
        фундаментальных вопросов, связанных именно с теми правовыми эффектами
        которое может (или должно) порождать еще неутвержденное мировое
        соглашение, а также судебный акт, которым в утверждении мирового
        соглашения отказано:
      </p>
      <ul>
        <li>
          Следует ли признавать юридический эффект подписанного, но еще
          неутвержденного мирового соглашения, постулируя связанность сторон
          выраженным в таком мировом соглашении волеизъявлением и невозможность
          одностороннего немотивированного отказа?
        </li>
        <li>
          Обладает ли определение, которым суд отказал в утверждении мирового
          соглашения, свойством преюдициальности?
        </li>
        <li>
          Обладает ли определение, которым суд отказал в утверждении мирового
          соглашения, свойством исключительности?
        </li>
        <li>
          Допустимы ли такие мировые соглашения, в которых стороны
          &laquo;препарировали&raquo; спорное материальное правоотношение,
          дополнив саму договоренность факультативным условием о прекращении
          судебного спора (подразумевая гражданско-правовой эффект сделки,
          составляющей содержание мирового соглашения, независимо от судебной
          легитимации самого мирового соглашения)? Если да, то имеет ли какое-то
          правовое значение основание, послужившее причиной вынесения
          определения об отказе в утверждении мирового соглашения, и какой
          правовой эффект должно оказывать судебное определение на сделку,
          составляющую содержание мирового соглашения?
        </li>
      </ul>
      <ol start={4}>
        <li>
          <em> </em>
          <em>И напоследок &ndash; самая тревожная тема</em>
        </li>
      </ol>
      <p>
        Все мы, конечно, следили за самым громким судебным делом последнего
        десятилетия. Да, я о нем &ndash; о приговоре Кокорину и Мамаеву
        (https://www.vesti.ru/doc.html?id=3145419).
      </p>
      <p>
        И поскольку в последнее время меня крайне интересует межотраслевая
        тематика, внимание привлек сугубо вещно-правовой момент &ndash;
        уничтожение стула.
      </p>
      <p>
        Давайте подумаем вместе: допустимы ли ситуации, когда интересы
        правосудия &laquo;перевешивают&raquo; частноправовой интерес, вследствие
        чего следует допускать уничтожение (изменение, повреждение) вещи,
        принадлежащей одной из сторон либо вообще совершенно постороннему
        субъекту, не имеющему какого-либо процессуального статуса?
      </p>
      <p>
        По давно сложившейся традиции наше мероприятие не обойдется без гостя. В
        этот раз им будет человек, который является крупным специалистом в
        области теории шахматной игры, &ndash; доктор юридических наук, уже
        много лет работающий на кафедре административного права УрГЮУ, известный
        радиоведущий и практикующий юрист, совсем недавно с блеском прошедший
        курсы повышения квалификации, <RedactedText />
      </p>
      <p>
        Очередное заседание группы состоится <u>24 мая 2019 г. в 18-00</u>.
      </p>
      <p>
        Поскольку всеми любимый &laquo;Ратскеллер&raquo;, увы, перестроен, в
        этот раз наше мероприятие совершенно точно пройдет в новом месте,
        которое будет определено в зависимости от общего числа желающих посетить
        заседание. Так что прошу в срок <u>до 19 мая 2019 г.</u> (включительно){' '}
        <u>
          подтвердить свое участие в работе группы посредством сообщения
          лаборанту <RedactedText />
        </u>
      </p>
      <p>О месте проведения будет сообщено дополнительно.</p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_15;
