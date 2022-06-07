import React from "react";
import AccentedBlock from "../../UI/AccentedParagraph/AccentedParagraph";
import AccentedText from "../../UI/AccentedText/AccentedText";
import Footnote from "../../UI/Footnote/Footnote";
import RedactedText from "../../UI/RedactedText/RedactedText";
import Signature from "../../UI/Signature/Signature";
import Image from "next/image";
import s from "./Post.module.scss";

const Post_7 = () => {
  return (
    <div className={s.container}>
      <h2>
        Уважаемые преподаватели, аспиранты и соискатели, а также скучающие по
        кафедре кандидаты!
      </h2>
      <p>
        Кое-кто из тех, кто по уважительной причине пропустил последнее
        заседание, просил меня направить протокол (наивные люди!). Так вот
        &ndash; никаких протоколов, аудиозаписей и видеосъемок на заседаниях
        учебно-методической группы никогда не велось и не производилось. Я
        категорический противник любых форм фиксации нашего не совсем
        формального общения. Но поскольку некоторые направления дискуссии могут
        представлять для кого-то определенный интерес, я по памяти кое-что
        восстановил (привожу со своими комментариями):
      </p>
      <ul>
        <li>
          члены группы просто гомерически смеялись над последней новеллой
          процессуального законодательства о новом субъекте &ndash;
          Уполномоченном при Президенте РФ по защите прав предпринимателей. Дело
          было не только в самом факте появления этого специального субъекта,
          который удостоился самостоятельной ст. 53.1 АПК РФ. От внимания
          пытливых процессуальных глаз не могли ускользнуть две, мягко говоря,
          странные нормы: во-первых, этот субъект по какой-то причине получил
          возможность участвовать в деле на стороне истца или ответчика в
          качестве третьего лица, а, во-вторых, еще и обжаловать судебные акты
          по правилам ст. 42 АПК РФ! Человека четыре (не читавшие самих
          изменений) поначалу подумали, что это некий процессуальный стёб. Но
          когда выяснилось, что это действительно воля нашего &ndash; кх&hellip;
          кх&hellip; &ndash; законодателя, то мне как руководителю стоило
          немалых трудов, чтобы успокоить аудиторию и начать обсуждать что-то
          серьезное;
        </li>
        <li>
          встал вопрос о подведомственности споров, когда участник общества
          оспаривает не только последовательную цепочку сделок (начавшуюся с
          первой сделки с участием общества), но и еще при этом некую
          &laquo;сделку, которую стороны в действительности имели в виду&raquo;,
          при этом такая сделка является (по квалификации истца) сделкой между
          самим обществом и последним приобретателем. Для случаев, когда в
          цепочке присутствует физическое лицо, не являющееся предпринимателем,
          никаких формальных оснований для вывода о судебно-арбитражной
          подведомственности не имеется, однако складывающаяся в последнее время
          арбитражная практика показывает, что арбитражные суды: а) вполне
          воспринимают такой способ защиты прав участника; б) не считают себя
          некомпетентными. Такой новаторский подход требует, конечно,
          критического осмысления;
        </li>
        <li>
          в очередной раз нашла подтверждение убежденность представителей
          системы судов общей юрисдикции в том, что только они являются
          компетентными в спорах отстраненных единоличных исполнительных органов
          обществ об их восстановлении. Никакие аргументы (в том числе и о том,
          что само решение об отстранении по правилам подведомственности должно
          проверяться в арбитражных судах) не смогли поколебать уверенность
          практикующих судей. Последний довод убедил всех присутствующих, что
          по-другому попросту быть не может: &laquo;Что же, арбитражные суды
          будут что ли считать зарплату за время вынужденного прогула?&raquo;
          Тут уж не поспоришь &ndash; таким аргументом буйвола свалить можно, не
          то что рефлексирующего преподавателя процесса;
        </li>
        <li>
          отдельно возник вопрос о случае, когда в альтернативном
          гражданско-правовом обязательстве кредитор сначала использует один
          способ защиты, а потом &ndash; уже после вынесения судебного решения
          об отказе в иске &ndash; обращается с новым иском, требование по
          которому является альтернативным (например, потребитель сначала
          обращается с иском о расторжении к продавцу, а затем с новым иском о
          замене товара к изготовителю). Присутствующие сошлись во мнении, что
          никакого тождества исков в подобной ситуации нет, и ограничивать в
          праве на судебную защиту такого субъекта было бы неверным. Однако
          здесь необходимо разрешение вопроса на уровне материального
          законодательства &ndash; такое, которое бы логически соответствовало
          природе альтернативного требования (использование одной из альтернатив
          должно предполагать прекращение всех иных возможностей &ndash; подобно
          тому, как это имеет место в цивилистическом процессе применительно к
          альтернативной подсудности). Соответственно суд должен рассматривать
          такие требования по существу и отказывать в удовлетворении исковых
          требований;
        </li>
        <li>
          крайне занимательной оказалась дискуссия о том, каким образом должен
          защищаться интерес должника применительно к ситуации, когда кредитор
          не предъявляет к нему иск, и в силу длящегося неисполнения денежного
          обязательства при этом начисляется неустойка. Что делать должнику,
          который готов исполнить основное денежное обязательство и даже
          уплатить какую-то разумным образом определенную неустойку, но при этом
          считает, что имеются основания для применения ст.333 ГК РФ?
          Выяснилось, что практика судов общей юрисдикции знает случаи, когда
          такие должники обращаются с самостоятельными исками &laquo;об
          определении размера задолженности&raquo;, имея в виду, что суд,
          определяя ее на дату решения, сам применит норму об уменьшении
          неустойки. В то же время практика эта разделяется далеко не всеми
          судебными органами, которые в числе контраргументов указывают на
          отсутствие такого способа защиты. Обсуждение этой проблемы показало,
          что имеются довольно серьезные возражения к тому, чтобы
          квалифицировать поведение кредитора, намеренно не предъявляющего иск,
          как злоупотребление правом на судебную защиту. Впрочем, даже если
          согласиться с тем, что такое злоупотребление имеет место, то сама
          борьба с ним вряд ли может быть эффективной только на уровне
          процессуально-правовом. Здесь явно требуется комплексный подход
          &ndash; такой, который бы позволил должнику требовать в судебном
          порядке ясности применительно к содержанию гражданско-правового
          обязательства (по крайне мере для тех случаев, когда дискреционные
          полномочия суда создают ситуацию неопределенности в части взаимных
          прав и обязанностей);
        </li>
        <li>
          еще один блок проблем касался мировых соглашений, содержащих
          обеспечительные гражданско-правовые условия. Для соглашений о
          неустойке указывалось на сложность определения ее размера на
          конкретную дату, когда фактически будет исполнено обязательство (в
          связи с чем некоторые горячие процессуальные головы предлагали вообще
          исходить из недопустимости подобного рода условий либо заключать
          отдельный &ndash; вне мирового соглашения &ndash; договор, который
          будет обеспечивать исполнение обязательства, возникшего из
          утвержденного судом мирового соглашения). Для соглашений о залоге
          обращалось внимание на ситуацию, когда залогодателем выступает лицо,
          не имеющее статуса лица, участвующего в деле (приглашенные судьи
          высказали предположение, что далеко не каждый суд общей юрисдикции
          утвердит такое мировое соглашение), а также на случай, когда предметом
          залога выступает недвижимость (понятно, что момент утверждения
          мирового соглашения и момент регистрации залога не будут совпадать по
          времени).
        </li>
      </ul>
      <p>
        <AccentedText>Теперь лирическое отступление</AccentedText>
      </p>
      <p>
        Подумал я: а почему не сформулировать специальные заповеди для
        аспирантов? Чем они лучше нас, обычных преподавателей? Вот что у меня
        &ndash; при помощи некоторых остепененных коллег
        <sup>1</sup>
        &ndash; в итоге получилось (назовем это{" "}
        <strong>
          <em>&laquo;Моральный кодекс аспиранта&raquo;</em>
        </strong>
        ):
      </p>
      <p>
        <Footnote>
          <sup>1</sup>
          <span>
            Спасибо всем, кто откликнулся на мой призыв! Гонорар за публикацию
            Морального кодекса аспиранта анонимные авторы могут получить,
            обратившись в Российское авторское общество (спросить Н. Михалкова).
            По желанию гонорар может быть заменен на диплом Третьего
            Международного конкурса имени С.В. Михалкова на лучшее
            художественное произведение для подростков.
          </span>
        </Footnote>
      </p>
      <p>
        &laquo;Помни, что научный руководитель заинтересован в твоей защите
        гораздо сильнее, чем ты сам. Успешно защитившись, ты сделаешь ему
        одолжение, за которое он по гроб жизни будет обязан&raquo;.
      </p>
      <p>
        &laquo;Если договорились о встрече с научным руководителем &ndash;
        никогда не приезжай первым. Пусть чуток подождет, помучается. Если планы
        изменились &ndash; не звони, не предупреждай. Когда позвонит сам &ndash;
        спокойно ссылайся на пробки и говори, что вообще сегодня не
        приедешь&raquo;.
      </p>
      <p>
        &laquo;При личной беседе с научным руководителем демонстративно достань
        телефон и погрузись в чтение новостей или в переписку. Лишь изредка
        поглядывай на собеседника, давая понять, что он может продолжать. Если
        тебе позвонили &ndash; не ограничивая себя во времени, разговаривай
        прямо при научном руководителе, ибо у тебя от него секретов нет&raquo;.
      </p>
      <p>
        &laquo;Не спеши отвечать на письма и смс, которые тебе направляет
        научный руководитель. Надо будет &ndash; продублирует.
      </p>
      <p>
        Если уж все-таки решил ему написать, то активно используй одному тебе
        понятные сокращения, молодежный сленг и круглые скобочки с двоеточием
        как специальные знаки, выражающие твое настроение.
      </p>
      <p>
        Никогда не заполняй поле &laquo;Тема письма&raquo; &ndash; это явный
        признак слабости и заискивания.
      </p>
      <p>
        Всякий раз письмо отправляй с нового адреса &ndash; всегда потом можно
        будет сказать, что научный руководитель сам виноват, ибо отправил письмо
        на недействующую почту.
      </p>
      <p>
        При необходимости можешь перейти в нападение, упрекнув научного
        руководителя, что все его письма оказываются у тебя в папке
        &laquo;Спам&raquo; - с чего бы это, а?&raquo;
      </p>
      <p>
        &laquo;Основное правило в переписке с научным руководителем &ndash; не
        важно, о чем тебя спросили, значение имеет лишь то, что ты хочешь
        ответить.
      </p>
      <p>
        Знай, что научный руководитель просто обожает получать ссылки на
        фотографии кошечек, африканских ландшафтов и татуировки вождя племени
        Тумба-юмба.
      </p>
      <p>
        Что уж говорить о регулярных предложениях вступить в какую-нибудь
        социальную сеть! Твой научный руководитель такой дремучий &ndash; надо
        открыть ему все возможности, которые дает Интернет в плане общения со
        знакомыми, малознакомыми и совсем незнакомыми людьми. Лента новостей,
        обсуждение злободневных проблем, комментирование всего и вся, поиск
        работы, образование, сбор денег на добрые дела, ссылки на ужас какие
        интересные странички, рассказы о своей удавшейся жизни и
        профессиональных победах, фотографии домашних питомцев и
        одноклассниц/однокурсниц с турецких пляжей &ndash; несчастный, он же
        всего этого лишен!&raquo;
      </p>
      <p>
        &laquo;Помни, что библиотека научного руководителя &ndash; твоя
        библиотека. Любую книгу из нее ты вправе взять когда угодно. Понятно,
        что возвращать книги &ndash; это признавать свою слабость. Тем более что
        научный руководитель все равно уже их прочитал&raquo;.
      </p>
      <p>
        &laquo;Если научный руководитель попросил за него провести семинарское
        занятие, то смело отказывай (все знают, что ты человек крайне занятой).
        Если все же сделаешь ему одолжение и дашь обещание заменить, то, само
        собой, опоздай хотя бы минут на 15. К самому семинару готовиться не надо
        &ndash; ты прекрасно сходу решишь все заданные студентам задачи&raquo;.
      </p>
      <p>
        &laquo;Если в пятницу вечером выпиваешь с друзьями, то раз в пять минут
        спокойно можешь звонить научному руководителю (оптимально при этом
        задавать один и тот же вопрос). Он сам был аспирантом, а потому
        прекрасно тебя поймет и простит. Тебе же будет что вспомнить на
        банкете&raquo;.
      </p>
      <p>
        &laquo;Поблагодари научного руководителя за список работ по теме
        диссертации. Он будет в восторге, если прочитаешь хотя бы треть. А
        вообще-то творческие личности особо не забивают себе голову чужими
        точками зрения&raquo;.
      </p>
      <p>
        &laquo;Главное правило в написании диссертации предельно просто &ndash;
        используй те же методы, что и при написании курсовой (вставка целых
        страниц из других работ, перестановка абзацев, замена вводных слов,
        осовременивание примеров, удаление ссылок на недействующие акты,
        включение ссылок на несуществующие работы известных и малоизвестных
        авторов и т.п.). Не забывай, что ссылка на Интернет-ресурс легко
        проверяется, поэтому по возможности используй неоцифрованную литературу
        советского периода &ndash; лучше всего периодические журналы (никто не
        будет рыскать по библиотекам, проверяя корректность ссылок, а переводом
        всего этого в цифру ближайшие годы вряд ли кто займется). Спокойно
        ссылайся на судебные акты из архивов районных судов &ndash; тут твоя
        фантазия вообще ничем не ограничена.
      </p>
      <p>
        Пробуй новаторские подходы. Например, очень эффективна оцифровка и
        перевод в Гугле работ из малотиражных сборников конференций
        украинских/казахских/прибалтийских коллег. Если есть много свободного
        времени &ndash; прошерсти юридические форумы на известных порталах (там,
        конечно, придется весьма изрядно покопаться, а когда что-то найдешь, то
        еще и поработать с текстом &ndash; высказывая интересные мысли,
        форумчане делают это совсем не наукообразно).
      </p>
      <AccentedBlock>
        <p>
          Особый восторг у научного руководителя вызовет цитата на
          китайском/корейском/японском языке &ndash; это как латынь, переводить
          с которой считается признаком дурного тона.
        </p>
      </AccentedBlock>
      <p>
        И еще &ndash; найди в каком-нибудь иностранном законодательстве
        неизвестный российскому праву институт: всем дико интересно его
        содержание, поэтому подробному рассказу о нем можешь посвятить страниц
        50-70 (никак не меньше!). Главное здесь &ndash; избегать каких-то
        выводов, пусть все ищут скрытый смысл, сами додумывают, к чему ты это
        так подробно описал&raquo;.
      </p>
      <p>
        &laquo;Если научный руководитель просит представить первую главу &ndash;
        не отказывай, отдавай что есть (сомнительная логика в изложении
        материала, отсутствие ссылок, путаница с цитатами, разные шрифты,
        неверно написанные фамилии классиков, напрочь отсутствующая пунктуация
        &ndash; все это поправишь потом). Через какое-то время обязательно
        намекни, что не откажешься бегло просмотреть предложенные научным
        руководителем положения, которые могли бы быть включены в
        новизну&raquo;.
      </p>
      <p>
        &laquo;Не спеши писать научные статьи &ndash; все понимают, что это
        глупая формальность. К тому же никто не сомневается в силе твоего
        интеллекта. В крайнем случае быстро напечатаешься в последний месяц
        перед размещением диссертации на сайте. Знай, что ВАКовские журналы
        будут драться за право разместить твою статью в ближайшем номере.
      </p>
      <p>
        Если ранее готовил заключения по каким-то правовым вопросам &ndash;
        спокойно облекай это в научную статью (всем понятно, что всё написанное
        тобой как минимум гениально). Здесь достаточно лишь вставить вводный
        абзац об актуальности и дать пару ссылок на потенциальных оппонентов;
        если потенциальный оппонент никогда по твоей теме не писал &ndash; еще
        лучше, ибо тогда можно брать совершенно любую цитату общего характера
        (для примера можешь посмотреть, как вставляли ссылки на классиков
        марксизма-ленинизма в работах советского периода); если лень
        переписывать всю цитату &ndash; смело отсекай все ненужное.
      </p>
      <p>
        Не забывай, что прекрасно трансформируются в статьи выполненные когда-то
        переводы юридических текстов. Используй маленькие аспирантские хитрости
        &ndash; дай ссылку на иностранного автора без
        &laquo;закавычивания&raquo; цитаты, затем перескажи процитированное свои
        словами, после чего спокойно возвращайся к изложению текста иностранного
        автора. Будь уверен &ndash; такие хитросплетения никто никогда не
        разгадает, а если кто-то и начнет бурчать, то у тебя всегда есть
        оправдание (ссылочка-то выше ведь имеется!)&raquo;
      </p>
      <p>
        &laquo;Помни, что научная конференция &ndash; это не более чем
        возможность весело провести время. Никто никогда ничего стоящего по
        твоей теме не скажет, твое же выступление &ndash; всегда лишь дань
        учтивости организаторам.
      </p>
      <p>
        Особо ценятся случаи, когда в итоге ты и не выступал, и не направил
        статью для сборника&raquo;.
      </p>
      <p>
        &nbsp;&laquo;Согласованные с научным руководителем сроки тебя ни к чему
        не обязывают &ndash; это некий ориентир, причем даже не для тебя, а для
        него. Поэтому пропуск срока не должен тебя волновать в принципе, надо
        будет &ndash; назначит новый&raquo;.
      </p>
      <p>
        &laquo;Отчет аспиранта на кафедре &ndash; пустейшая формальность.
        Напечатай на листочке несколько предложений и сообщи через лаборанта,
        что появиться на заседании не получится. Если все же пришел, то во время
        устного отчета говори с напором, можно даже вызывающе &ndash; все знают,
        что в итоге ты все успеешь, а научный руководитель, конечно, тебя только
        поддержит&raquo;.
      </p>
      <p>
        &laquo;Обязательно посещай все банкеты, которые проводят молодые
        кандидаты после защиты. Твоя раскованная манера поведения, громкие не к
        месту тосты и особенно двусмысленные шутки обязательно всем запомнятся,
        включая членов диссовета (о, они любят дерзких!). Особый шик при
        обращениях к членам диссовета придает постоянная путаница с именами и
        отчествами&raquo;.
      </p>
      <p>
        &laquo;Помни, что всякие там коллоквиумы, учебно-методические группы и
        т.п. &ndash; для тех, кто в студенчестве вообще не учился. Понятно, что
        к тебе это не относится&raquo;.
      </p>
      <p>
        &laquo;Не сомневайся &ndash; кандидатские экзамены сдашь в любом
        состоянии. Готовятся к ним только полные оболтусы. Незнание никчемных
        деталей по предмету с лихвой компенсирует твоя широчайшая
        эрудиция&raquo;.
      </p>
      <p>
        &laquo;Обсуждение диссертации на кафедре &ndash; пустейшая формальность.
        Раз научный руководитель считает, что работа состоялась, кто бы там и
        что ни говорил &ndash; это не более чем происки против самого научного
        руководителя.
      </p>
      <p>
        В силу сложившейся традиции обязательно поблагодари кафедральных
        рецензентов и сообщи, что обязательно учтешь их замечания &ndash; все
        прекрасно понимают смысл этих пассажей&raquo;.
      </p>
      <p>
        &laquo;Помни, что сама защита &ndash; это набор ритуальных действий,
        которые никак не влияют на итоговый результат. А результат этот есть
        следствие отношения членов диссовета к твоему научному руководителю.
        Поэтому веди себя во время защиты расслабленно, на вопросы отвечай
        снисходительно, половину из них вообще спокойно игнорируй&raquo;.
      </p>
      <AccentedBlock>
        <p>
          &laquo;Оппоненты на защите &ndash; это не более чем дань традиции. Не
          воспринимай их всерьез, тем более что все они чем-то обязаны твоему
          научному руководителю&raquo;.
        </p>
      </AccentedBlock>
      <p>
        &laquo;Если есть желание как-то оживить защиту &ndash; подготовь
        самостоятельно несколько откровенно бестолковых отзывов от практических
        работников. Во время выступления сделай особый акцент на несуразности
        замечаний и на банальном незнании ими основ теории.
      </p>
      <p>
        Можешь даже пошутить над ними &ndash; после того, как подпишут
        подготовленный тобой отзыв, позвони и скажи, что в соответствии с новым
        положением о защите лица, подписавшие отзывы, должны лично прийти на
        защиту и огласить содержание отзыва публично. Объясни, что выступление
        должно быть совсем кратким &ndash; не более 15 минут. Как бы между
        прочим оброни, что все это будет транслироваться в режиме реального
        времени. Посмотришь на их реакцию&raquo;.
      </p>
      <p>
        &laquo;На банкете по поводу твоей успешной защиты ты просто обязан
        что-то учудить. Особенно ценится какой-то вызывающий поступок в
        отношении самого научного руководителя.
      </p>
      <p>
        Пригласи хорошо пьющих друзей, владеющих ненормативной лексикой, &ndash;
        пусть внесут некую живую струю. К половине из них обращайся
        &laquo;Брат!&raquo; (родственники на банкете защищены от претензий
        &ndash; считается, что они больше всех переживали).
      </p>
      <p>
        Негласную традицию произносить тосты в определенной последовательности
        можешь спокойно игнорировать &ndash; это твой праздник, как тебе удобно,
        так и поступай. Все очень обрадуются, если ты начнешь банкет бодрым
        тостом &laquo;За ирригацию Узбекистана!&raquo;
      </p>
      <p>
        Особый шик &ndash; во время танцев заснуть прямо за столом (все
        отнесутся к этому с пониманием, ибо знают, чего стоила тебе эта
        защита)&raquo;.
      </p>
      <p>&laquo;Помни, что после защиты твой статус резко меняется, поэтому</p>
      <p>
        - во-первых, на кафедре передвигайся медленно и будь все время
        задумчивым (пару раз &ndash; но не больше! &ndash; можешь по
        рассеянности уйти в чужой верхней одежде);
      </p>
      <p>
        - во-вторых, при научных разговорах с аспирантами держи дистанцию и
        глубокомысленно замолкай в середине (а еще лучше в начале) фразы; с
        аспирантами противоположного пола допустимы теперь разбавляющие научную
        дискуссию анекдоты про Чапаева и Петьку;
      </p>
      <p>
        - в-третьих, никогда не отвечай на аспирантский вопрос о том, какой из
        точек зрения на проблему придерживаешься лично ты; в самом крайнем
        случае всегда говори, что вопрос непростой, и есть разумные доводы как в
        пользу одной, так и в пользу другой точек зрения;
      </p>
      <p>
        - в-четвертых, неопределенно покачивай головой и многозначительно
        вздыхай, когда кто-то из старших коллег высказывается по какой-либо
        правовой проблеме;
      </p>
      <p>
        - в-пятых, с момента твоей защиты все иные остепененные преподаватели
        кафедры становятся практически твоими ровесниками, поэтому если разница
        в возрасте не превышает 20 лет, смело переходи на &laquo;ты&raquo;; к
        противоположному полу теперь можно обращаться, используя
        уменьшительно-ласкательные суффиксы (единственное изъятие касается
        д.ю.н., являющихся кмс по боксу);
      </p>
      <p>
        - в-шестых, &ndash; внимание, это крайне важно! &ndash; у тебя
        появляется право на собственный кафедральный кармашек (учти только, что
        он пока еще не может располагаться в нижнем ряду&nbsp;&ndash; на это
        можно претендовать лишь после прохождения курсов повышения
        квалификации)&raquo;.
      </p>
      <p>&nbsp;</p>
      <p>
        На очередное заседание, которое состоится{" "}
        <strong>30 мая 2014 г. (пятница) в 18-00</strong>, на обсуждение
        выносятся следующие темы.
      </p>
      <p>
        Первую я сформулирован предельно обще (не ищите ее в практикуме):
        &laquo;Влияние реформы частного права на арбитражный процесс&raquo;.
        Здесь предлагаю поразмышлять над тем, есть ли вообще сама необходимость
        в корректировке процессуальных норм, а если есть, то по каким
        направлениям такая корректировка должна идти.
      </p>
      <p>
        Остальные темы&hellip; По кафедральному задачнику их осталось всего 24
        (с 6 по 29). Понятно, что все обсудить нереально, поэтому предлагаю
        каждому найти что-то свое &ndash; волнующее и тревожащее процессуальную
        душу. Ну, и излить все это на присутствующих.
      </p>
      <p>
        Чтобы наше обсуждение не превратилось в балаган, как деспотичный
        руководитель я запрещаю любое обсуждение темы, связанной с объединением
        судов. Лицо, которое даже вскользь попытается упомянуть о ней, обязано
        будет оплатить все алкогольные напитки, заказанные членами кафедры.
      </p>
      <AccentedBlock>
        <p>
          Место, где будет проводиться наше мероприятие, будет определено
          традиционно путем подбрасывания рублевой монеты. В связи с чем прошу в
          срок <strong>до 16 мая 2014 г.</strong> (включительно){" "}
          <strong>
            подтвердить свое участие в работе группы посредством сообщения
            лаборанту &hellip;
          </strong>
        </p>
      </AccentedBlock>
      <p>
        <AccentedText>Теперь о гостях</AccentedText>
      </p>
      <p>
        Поскольку обсуждаемые вопросы будут касаться в том числе и материального
        права, подумалось мне &ndash; а почему бы не пригласить профессионалов?
      </p>
      <p>И вот кто в итоге окажется у нас в гостях.</p>
      <p>
        Во-первых, это наверняка знакомый вам по преподавательской работе в
        УрГЮА <RedactedText />
      </p>
      <p>
        Во-вторых, это крупный специалист по иностранной валюте и иностранным
        инвестициям, доцент кафедры предпринимательского права УрГЮА{" "}
        <RedactedText />
      </p>
      <p>
        В-третьих, это специалист в области банкротного законодательства и
        спорах с участием иностранного элемента <RedactedText />
      </p>
      <p></p>

      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_7;