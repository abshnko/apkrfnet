import React from 'react';
import AccentedBlock from '../../UI/AccentedParagraph/AccentedParagraph';
import AccentedText from '../../UI/AccentedText/AccentedText';
import Footnote from '../../UI/Footnote/Footnote';
import RedactedText from '../../UI/RedactedText/RedactedText';
import Signature from '../../UI/Signature/Signature';
import Image from 'next/image';
import s from './Post.module.scss';

const Post_17 = () => {
  return (
    <div className={s.container}>
      <h2>Уважаемые преподаватели и аспиранты!</h2>
      <p>
        Некоторые из нас очень удачно собрались в феврале этого года на
        очередное заседание группы. Прямо как чувствовали. Из-за известных
        событий только сейчас появилась возможность вновь окунуться в живое
        (подчеркиваю &ndash; живое) интеллектуальное общение. Тем более что в
        2020 г. как законодатель, так и Верховный Суд РФ отнюдь не дремали.
      </p>
      <p>
        Не сомневаюсь, что и с кафедры тоже никто не бил баклуши &ndash; все
        много читали, писали, размышляли.
      </p>
      <p>
        Ваш покорный слуга в перерывах между отдыхом занимался исключительно
        первым, поэтому хочу поделиться некоторыми находками:
      </p>
      <p>
        - во-первых, я нашел автора, который впервые употребил одно крылатое
        выражение, содержащее известный оборот о превращении &laquo;
        <em>судебного учреждения в нотариальную контору</em>&raquo; (это Т.М.
        Яблочков &ndash; см. его работу &laquo;Материальные признаки понятия
        судебного признания в гражданском процессе&raquo; // Журнал Министерства
        юстиции. 1915. № 3. С. 95);
      </p>
      <p>
        - во-вторых, мною обнаружен просто фантастический синоним для третьих
        лиц, не заявляющих самостоятельных требований относительно предмета
        спора, &ndash; &laquo;
        <em>процессуальная физиономия побочного вступщика</em>&raquo;
        (специально не буду говорить, где это я нашел &ndash; пусть будет некая
        интрига);
      </p>
      <p>
        - в-третьих, я сделал для себя маленькое открытие: оказывается,
        конструкция, имевшаяся в ст. 39 ГПК&nbsp;РСФСР (кто не помнит &ndash;
        посмотрите), не является чем-то самобытным, присущим исключительно
        советскому гражданскому процессу: достаточно посмотреть работу А.Х.
        Гольмстена &laquo;Опыт построения общего учения о праве регресса&raquo;
        (Журнал Министерства юстиции. С.-Пб.: Сенат. Тип., 1911, № 9. С. 36,
        37), в которой классик, описывая судебное взыскание по регрессному
        требованию, ссылается на французскую доктрину, допускающую привлечение
        регрессата к участию в деле в качестве &laquo;
        <em>эвентуального ответчика</em>&raquo;.
      </p>
      <p>
        В качестве лирического отступления я бы хотел немного пофантазировать. В
        своем детстве я прекрасно помню, как взрослые ждали 1980 год &ndash;
        именно тогда должен был наступить коммунизм. Потом была какая‑то
        странная история с 2000 годом (сначала М.С. Горбачев обещал к этому
        порогу следующего тысячелетия каждой семье отдельную квартиру, а потом,
        видимо, просто магия цифр сыграла определенную роль). Но какой теперь
        год избрать в качестве ориентира? Подумал я, подумал&hellip; И решил
        &ndash; пусть это будет ничем не примечательный 2036 год. Итак, что же
        будет через какие-то 16 лет? Картина видится такой:
      </p>
      <p>- начну с себя &ndash; мне 63 года:</p>
      <ul>
        <li>
          после очередного повышения пенсионного возраста понимаю, что ближайшие
          37 лет вряд ли покину родной вуз;
        </li>
        <li>
          купил треуголку, пилу, на Али-Экспресс заказал орден Почетного
          легиона, к известной фразе на французском языке из &laquo;12-ти
          стульев&raquo; добавил еще пару выражений &ndash; готовлюсь к первой
          реконструкции;
        </li>
        <li>
          примерно раз в месяц договариваюсь сам с собой, что со следующего
          понедельника сяду писать что-то серьезное, что-то фундаментальное
          &ndash; времени на раскачку совсем не осталось;
        </li>
        <li>
          боюсь спускаться в подвал на Комсомольской, 21 &ndash; в библиотеке по
          мою душу с 1990 г. по‑прежнему числятся взятые пять книг по истории и
          логике;
        </li>
        <li>
          привезенный мной с гастролей из Швеции на кафедру магнитик разложился
          на плесень и на липовый мед, а перестройка в сфере высшего образования
          все идет и идет;
        </li>
        <li>
          постоянно путаю Колмогорова и Комсомольскую; не могу запомнить
          расположение римских аудиторий, чтобы идти по оптимальному маршруту
          (всегда захожу на четвертый этаж не с той стороны; в IV римскую на
          Колмогорова иду по маршруту: преподавательская &ndash; 4-ый этаж
          &ndash; IVримская); кодовый замок в преподавательской на Студенческой
          открываю, не зная кода, исключительно потому, что с детства имею
          правильно растопыренные три пальца;
        </li>
        <li>
          спрашиваю ключ от открытых аудиторий и забываю про него тогда, когда
          аудитория на замке;
        </li>
        <li>
          при разговорах с коллегами-историками периодически путаю половцев с
          печенегами;
        </li>
        <li>
          &laquo;онлайн-образование&raquo; мой компьютер периодически заменяет
          на &laquo;отрицательный рост&raquo; &ndash; никак не пойму, что здесь
          общего;
        </li>
        <li>
          с 2020 г. около 99% занятий проводится онлайн, однако я тайно
          встречаюсь со студентами для проведения занятий дедовским методом,
          заранее предупреждая, что прийти могут только те, кто умеет за две
          секунды зарываться в землю;
        </li>
        <li>
          из моих реальных достижений &ndash; я научился включать проектор, но
          поскольку искусством изготовления презентаций так и не овладел, то
          всякий раз огорченно развожу руками и извиняюсь перед студентами за
          то, что &laquo;забыл фрешку&raquo; (заметил, что студенты практически
          не реагируют на мои оговорки; некоторые снисходительно посмеиваются,
          поскольку мне до сих пор не понятен смысл рекламы на сайте Е1
          &laquo;Цессия в Юрке под ключ!&raquo;);
        </li>
        <li>
          процент защит кандидатских и докторских диссертаций под моим
          руководством тот же, что и в 2020&nbsp;г.;
        </li>
        <li>
          на заседании учебно-методической группы периодически засыпаю, а
          деликатные коллеги делают вид, что ничего не заметили (впрочем, не
          исключено, что кто-то из них тоже погружается в сон);
        </li>
        <li>
          стал сопредседателем общественного движения
          &laquo;#СтопЛектор!&raquo;, выступающего за запрет онлайн‑, аудио- и
          видеолекций.
        </li>
      </ul>
      <p>
        Специально для него придумал несколько слоганов и риторических вопросов:
      </p>
      <ul>
        <li>
          &laquo;Выступают с видеолекциями только те, кто не умеет грамотно и
          доступно писать&raquo;;
        </li>
        <li>
          &laquo;Смотрят видеолекции только те, кто не умеет читать&raquo;;
        </li>
        <li>
          &laquo;Послушай себя со стороны &ndash; ты уверен, что это должны
          слышать еще кто-то, кроме твоих несчастных родственников?&raquo;;
        </li>
        <li>
          &laquo;Не трать попусту время &ndash; за двадцать минут вдумчивого
          чтения узнаешь в десять раз больше, чем из часовой видеолекции самого
          лучшего лектора&raquo;;
        </li>
        <li>
          &laquo;Скажи честно, на какой минуте видеолекции ты стал думать о
          чем-то своем?&raquo;;
        </li>
        <li>
          &laquo;Что за эмоции ты испытываешь, когда во время видеолекции лектор
          начинает демонстрировать всякого рода презентации, &ndash; ненависть,
          гнев, страх, трепет? Насколько они усиливаются, когда выясняется, что
          открылась не та, которую лектор уже пять минут комментирует? Какова
          вероятность того, что на заданный в этот момент вопрос о твоем
          отношении к свободной продаже огнестрельного оружия ты ответишь
          отрицательно?&raquo;
        </li>
      </ul>
      <p>
        На недоуменный вопрос коллег: &laquo;Как же так, Вы ведь сами много лет
        назад участвовали в записи видеолекции для ЛФ-Академии?&raquo; отвечаю
        предельно честно: &laquo;Был не прав. Вспылил. Но теперь считаю свою
        видеолекцию безобразной ошибкой. Раскаиваюсь. Прошу дать возможность
        загладить, искупить. Всё.&raquo;;
      </p>
      <ul>
        <li>
          наконец-то научился подтягивать индекс Хирша до нужных значений
          &ndash; это стало совсем легко после того, как в перечень ведущих
          рецензируемых научных журналов, включённых ВАКом в список изданий,
          рекомендуемых для опубликования основных научных результатов
          диссертации на соискание учёной степени кандидата и доктора наук,
          попал журнал &laquo;Молодежь и наука: Вестник аспирантов и
          магистрантов кафедры гражданского процесса УрГЮУ&raquo;;
        </li>
        <li>
          перестал смотреть интервью с музыкантами, режиссерами и артистами
          &ndash; слишком много разочарований, а это потом мешает погружению в
          творческий продукт;
        </li>
      </ul>
      <p>- теперь об окружающей действительности:</p>
      <ul>
        <li>
          лаборант сделала общий чат кафедры прямо в мозгах преподавателей и
          безостановочно туда что-то скидывает, а коллеги непрерывно благодарят
          ее за это и задают уточняющие вопросы (опция отказа от получения
          информации в этом чате отсутствует; имеющие индекс Хирша 130 и выше
          могут на ночь заменить крайне неприятный звук на жужжание в левом
          ухе);
        </li>
        <li>
          старожилы вспоминают, как в 2020 г. во время эпидемии какого-то вируса
          был создан кафедральный чат в ВотсАпе, как можно было легально
          отключить звук уведомлений и прочитать последние 350 крайне важных
          сообщений (включая 330 благодарностей друг другу за выложенные ссылки
          и размещенные документы) утром за завтраком;
        </li>
        <li>
          раз в год (1 апреля) кто-то из молодых преподавателей сбрасывает в
          общий чат очередной судебный акт о том, как какой-то районный суд
          рассмотрел дело по
          ВотсАпу/Скайпу/Зуму/Виберу/Телеграму/Инстаграму/АйСиКью, после чего
          начинается традиционная дискуссия, половина сообщений в которой
          представляют собой графические изображения желтого блинчика с
          удивленным, восторженным либо возмущенным выражением лица;
        </li>
        <li>
          &laquo;ЭБС Лань какая-то!&raquo; и &laquo;Коллега, я могу послать Вас
          только по ссылке в Индиго!&raquo; стали общеупотребимыми кафедральными
          ругательствами &ndash; правда, никто уже не помнит, с чего все
          началось;
        </li>
        <li>
          на кафедре вышла коллективная монография-воспоминание о событиях 2020
          г. &laquo;Блеск и нищета семинара-вебинара: тернистый путь освоения
          новой образовательной технологии&raquo;;
        </li>
        <li>
          все статьи членов кафедры давно выходят только в соавторстве; на
          заседаниях кафедры принято публично называть фамилии тех, кто
          ограничился лишь одним или двумя соавторами, &ndash; виновные каются,
          обещают не допускать подобного в будущем; после такой процедуры
          кафедральный климат заметно улучшается (впрочем, как и
          наукометрические показатели);
        </li>
        <li>
          в УМУ вот-вот должен решиться вопрос о том, оставить или нет бумажный
          журнал преподавателя;
        </li>
        <li>
          обсуждается концепция единого ГПК РФ (на кафедре появилась информация
          о том, что П.&nbsp;Крашенинников через первого заместителя
          председателя комитета Комитет по экологии и охране окружающей среды ГД
          РФ депутата Н. Валуева кому-то приватно сообщил, что не позднее 2050
          г. Государственная Дума РФ уж точно примет новый ГПК РФ; главную
          опасность традиционно усматривают в непредсказуемом поведении
          космонавта В. Терешковой);
        </li>
        <li>
          дебатируется вопрос о том, как бороться со студентами, которые прямо в
          мозг себе закачивают АПК РФ, ГПК РФ и КАС РФ (проблемы не видят только
          кмс по боксу профессор <RedactedText /> и автор этих строк: логику
          первого понять трудно, поскольку он лишь улыбается и хрустит
          костяшками пальцев, я же честно говорю, что содержания кодексов сам не
          помню, а потому студентам они тоже не помогут);
        </li>
        <li>
          на заседании кафедры кто-то возмущается, что для защиты докторской
          надо написать 250 статей с оригинальностью 70% и выше; другой
          вспоминает 2030 год, когда статей было всего 200 и оригинальности
          никто не требовал;
        </li>
        <li>
          на кафедре появился новый лаборант с кафедры прокнадзора; предыдущий
          лаборант стала преподавателем и по давно заведенной традиции пишет
          диссертацию по какой-то странной теме, связанной с доказательствами;
        </li>
        <li>
          весь медосмотр проводится по слюне, но чтобы ее сдать, нужно получить
          бумажное направление, поставить на него печать, заверить в канцелярии,
          приехать к 8-00 в поликлинику и отстоять в очереди три часа (при этом
          есть и пить запрещено с прошлого дня, а алкоголь &ndash; всю неделю);
          работники вуза рады новому порядку &ndash; можно поближе узнать
          коллег, а кого-то наконец увидеть вживую (возможно, в первый и
          последний раз);
        </li>
        <li>
          по вузу шепотом рассказывают, как очередного профессора привлекли к
          уголовной ответственности за то, что он во время онлайн-экзамена
          бросил в изображение студента на мониторе пластиковый стаканчик;
        </li>
        <li>
          на сайте УрГЮУ запущено поименное голосование по поводу одной из самых
          обсуждаемых инициатив &ndash; в начале рабочего дня всем
          преподавателям предлагается вставать на колено перед памятником
          студенту, который не смог сдать ГОСы и был отправлен в армию (вот уже
          двадцать лет из уст в уста передается леденящая душу история, как
          экзаменатор демонстративно спрашивал его по одному вопросу билета аж
          целые 10 минут);
        </li>
        <li>
          составлением расписания занимается искусственный интеллект, но
          координатор кафедры потом все равно за него все переделывает (брат
          одного из преподавателей, который занимается вопросами искусственного
          интеллекта в правовой сфере аж у к.э.н. Германа Г., каждый раз
          разводит руками и обещает, что в следующем году ИИ уж точно не
          допустит никаких ошибок);
        </li>
        <li>
          составлением КМ занимается искусственный интеллект, но заслуженный
          юрист
          <RedactedText /> потом все равно за него все переделывает (все члены
          кафедры до сих пор не могут прийти в себя после известного баттла
          <RedactedText /> против ИИ на Юридическом форуме в Петербурге 9
          <sup>1/4</sup> &ndash; программа, обыгравшая чемпиона в го, была
          разбита в пух и прах на простейших вопросах о видах судопроизводства и
          элементах иска);
        </li>
        <li>
          количество членов кафедры возросло до 80, и кармашки на кафедре теперь
          используются один на три человека (для профессоров &ndash; два на
          человека); гордое звание самой большой кафедры гражданского процесса в
          Евразии тем не менее утрачено, поскольку Саратовская государственная
          академия права поглотила МГЮА, разместив там заочное отделение и
          вернув ему прежнее название (кто-то горько шутит, что сначала
          саратовцы прижизненно присвоили Карла Сергеевича, а потом посмертно
          Маркуса Ароновича);
        </li>
        <li>
          на кафедру вернулся А.Г. К<RedactedText />
          в, но место жительства так и не сменил;
        </li>
        <li>
          на кафедру вернулся А.М. Б<RedactedText />
          в, но в лицо его никто не видел, так как все занятия проводит в
          комнате примирения в Арбитражном суде Свердловской области в перерывах
          между судебными заседаниями (электронная система учета использования
          комнаты примирения вот уже восьмой год подряд выводит Арбитражный суд
          Свердловской области на первое место в стране, а медиаторы всей страны
          ломают головы над феноменом уральской медиационной аномалии);
        </li>
        <li>
          на кафедру вернулась Е.Н. С<RedactedText />
          а, но в связи с тем, что новое здание Арбитражного суда Удмуртской
          республики неожиданно построили в Ижевске, УрГЮУ пришлось в этом
          славном городе оружейников и мотоциклистов открывать свой 96-й филиал;
        </li>
        <li>
          вуз отмечает 500-летний юбилей, т.к. Н.Н. З<RedactedText />а
          обнаружила документы, подтверждающие наше преемство от одного из
          французских университетов (кое-кто шутит, что в следующем году будем
          праздновать 1000-летие, поскольку директор музея недавно вернулась из
          командировки в Псков и Великий Новгород);
        </li>
        <li>
          Кировский районный суд Екатеринбурга рассматривает коллективный иск
          жителей города, оспаривающих самозахват части улицы Комсомольская под
          парковку УрГЮУ:
        </li>
        <li>
          на всех правовых порталах обсуждается полное отсутствие судебной
          перспективы;
        </li>
        <li>
          никто не может понять, как так получилось, что истцом-представителем
          стал один из членов кафедры гражданского процесса, являвшийся
          разработчиком соответствующей главы в ГПК&nbsp;РФ;
        </li>
        <li>
          почему-то вспоминают Арбитражный суд Свердловской области и улицу
          Шарташская;
        </li>
        <li>
          наиболее азартные делают ставки на то, сколько денег в итоге будет
          взыскано в рамках института судебных расходов;
        </li>
        <li>
          на кафедре бесплатно распространяется статья{' '}
          <em>
            Р<RedactedText />в Е.С., Т<RedactedText />в И.Н., Х<RedactedText />в
            С.А.{' '}
          </em>
          Актуальные вопросы возмещения судебных издержек: комментарий к еще не
          вынесенному определению // Вестник экономического правосудия
          Российской Федерации (она же Россия). 2036. № 4. С. 141 &ndash; 192;
        </li>
        <li>
          УрГЮУ претендует на очередные здания под новые учебные корпуса &ndash;
          в этот раз на недострой гостиницы по ул. Куйбышева и прилегающее
          здание цирка (вопрос упирается в небольшую проблему &ndash; весь
          коллектив цирка уехал, а клоуны остались, и их нужно пристроить на
          какую-то из кафедр);
        </li>
        <li>
          на уровне Правительства РФ решается вопрос о финансировании
          строительства переходов между всеми зданиями УрГЮУ (главный интересант
          &ndash; музей истории УрГЮУ, который распланировал на десятилетие
          вперед, где и что будет размещать);
        </li>
        <li>
          студенты из Германии, приехавшие в рамках магистерской программы в
          УрГЮУ в 2020 г. в Екатеринбург, до сих пор не вернулись на родину,
          хотя еще десять лет назад лично А.И. Б<RedactedText />а развезла по их
          домашним адресам дипломы, подтверждающие успешное освоение учебных
          дисциплин (говорят, что пара человек уже полгода скрывается в цехе
          готовой продукции Ирбитского ЛВЗ; есть информация, что на их розыск
          должна вот-вот прибыть министр чего-то там из Баварии по имени Эльке
          Штанке; старожилы кафедры напряженно пытаются вспомнить ее в лицо);
        </li>
        <li>
          вышло новое, 53-е издание учебника арбитражного процесса (некоторые
          студенты пытаются закачать его себе напрямую в голову, но хитрое
          издательство нашло новый способ борьбы с пиратами &ndash; сразу после
          прочтения главы о принципах на нелицензионной версии автоматически
          запускается песня из репертуара И. Кобзона, совсем еще молодого, с
          бакенбардами, который, держа в руках автомат, энергично поет про
          Кубу);
        </li>
        <li>
          курс о пересмотрах судебных актов разбит на четыре самостоятельных
          курса (апелляционное, 1‑ое кассационное, 2-ое кассационное и надзорное
          производство), которые студенты начинают изучать параллельно с темой
          &laquo;Иск&raquo;; периодически на кафедре обсуждается вопрос о том, а
          не сместить ли освоение этих курсов к теме &laquo;Судебное
          представительство&raquo;;
        </li>
        <li>
          выборы всего профессорско-преподавательского состава теперь проходят
          раз в полгода: сразу по итогам сессии преподавателям рекомендуется
          (или не рекомендуется) подавать документы в конкурсную комиссию
          (перечень документов остается неизменным с 2030 года &ndash; всего 344
          позиции, включая ежемесячно получаемую справку о несудимости в РФ,
          Казахстане и Белоруссии; наиболее смелые критикуют такой порядок в
          самоудаляющихся Снэпчатах);
        </li>
        <li>
          каждая диссертация обсуждается на кафедре от 8 до 12 раз (в итоге на
          защиту выходит коллективный кафедральный труд, который по сложившейся
          традиции считается плодом усилий самого аспиранта и его научного
          руководителя);
        </li>
        <li>
          МРС претерпела очередные изменения и теперь для получения отметки
          &laquo;удовлетворительно&raquo; достаточно набрать 15 баллов из 100,
          однако это плохо помогает школьным выпускникам 2033 года,
          безостановочно листающим ресницами набирающий популярность российский
          сервис Ток‑Тик;
        </li>
        <li>
          ректор, сославшись на передовой французский опыт, в очередной раз
          попросил &laquo;беречь контингент&raquo;, направив свое видеообращение
          напрямую в мозг всех преподавателей, включая совместителей
          (поговаривают, что несколько судебных заседаний в судах проверочных
          инстанций в итоге пришлось отложить из-за нервного срыва кого-то в
          тройке).
        </li>
      </ul>
      <p>
        Теперь &ndash; о вопросах, которые предлагается обсудить на предстоящем
        заседании:
      </p>
      <p>
        - первый вопрос &ndash; сугубо теоретический: если суд самостоятельно
        расширил предмет доказывания (например, вместо одного основания для
        расторжения договора попутно рассмотрел и какое-то другое), отразив
        соответствующие факты в решении, означает ли это, что истец лишен
        возможности повторно обратиться с тождественным требованием, ссылаясь на
        указанные основания?
      </p>
      <p>
        - вторая группа вопросов навеяна творческими рекомендациями Верховного
        Суда РФ:
      </p>
      <ul>
        <li>
          в п.20 постановления Пленума Верховного Суда РФ от 11 июня 2020 г. № 6
          &laquo;О некоторых вопросах применения положений Гражданского кодекса
          Российской Федерации о прекращении обязательств&raquo; предусмотрено,
          что &laquo;зачет требований является допустимым и после вступления в
          законную силу судебных актов, подтвердивших наличие и размер
          соответствующих обязательств сторон, но без возбуждения по одному или
          обоим судебным актам исполнительного производства, а также после
          вступления в законную силу судебного акта по одному требованию и при
          отсутствии возражений должника по другому требованию&raquo;;
        </li>
        <li>
          по первой ситуации (зачет производится после вступления в законную
          силу судебных актов, подтвердивших наличие и размер соответствующих
          обязательств сторон, но без возбуждения по одному или обоим судебным
          актам исполнительного производства) возникает следующий вопрос &ndash;
          действительно ли можно зачесть требование, если по активному
          требованию (требованию заявителя зачета):
        </li>
      </ul>
      <p>
        а) была предоставлена отсрочка (рассрочка) исполнения судебного акта;
      </p>
      <p>б) истек срок предъявления исполнительного листа к исполнению;</p>
      <p>в) имел место отказ взыскателя от взыскания;</p>
      <p>
        г) вынесено постановление о его аресте (например, в интересах какого-то
        третьего лица)?
      </p>
      <ul>
        <li>
          по второй ситуации (зачет является допустимым после вступления в
          законную силу судебного акта по одному требованию и при отсутствии
          возражений должника по другому требованию) получается вообще какая-то
          весьма странная последовательность:
        </li>
      </ul>
      <p>
        - по активному требованию есть судебный акт, который вступил в законную
        силу;
      </p>
      <p>- пассивное требование не прошло судебной проверки;</p>
      <p>
        - компенсант (заявитель зачета), являясь кредитором, направляет
        уведомление о зачете компенсату (должнику);
      </p>
      <p>
        - от компенсата (должника) требуется молчаливое согласие, чтобы зачет
        повлек правовые последствия в виде прекращения встречных обязательств.
      </p>
      <p>
        Кто-то вообще видит хоть какую-то логику в этом? Ведь в сухом остатке
        получается, что кредитор, имея возможность в исполнительном производстве
        получить с должника реальное взыскание, по сути, &laquo;разменял&raquo;
        это право на встречное требование, не подтвержденное судебным решением.
        К чему здесь вообще согласие или несогласие компенсата?
      </p>
      <p>
        Выскажу гипотезу: у тех, кто писал это разъяснение, был тяжелый рабочий
        день. Видимо, в действительности имелась в виду другая
        последовательность: скорее всего, речь идет о ситуации, когда по
        активному требованию нет вступившего в законную силу судебного акта, а
        по пассивному, наоборот, есть. Компенсант, являясь кредитором в активном
        обязательстве, направляет уведомление должнику, а последний как раз и
        должен как-то выразить свою волю по поводу встречного прекращения его
        требования. Такой подход может найти хоть какой-то намек на внутреннюю
        логику: компенсант как бы предлагает компенсату разменять свое не
        прошедшее судебную проверку активное требование на принадлежащее
        контрагенту &laquo;более ценное&raquo;, установленное судом. Но и при
        предложенной интерпретации остаются, в частности, следующие вопросы:
      </p>
      <p>а) почему вообще необходимо волеизъявление компенсата?</p>
      <p>б) по какой причине такое волеизъявление может быть молчаливым?</p>
      <p>
        в) допустим ли зачет требования, подтвержденного вступившим в законную
        силу судебным актом, но не обладающего свойством осуществимости (см.
        указанные выше четыре случая для первого вопроса)?
      </p>
      <p>
        г) в какой процедуре и кто (суд или судебный пристав-исполнитель) будет
        устанавливать &laquo;отсутствие возражений должника по другому
        требованию&raquo;?
      </p>
      <p>
        - третья группа вопросов вытекает из известного каждому цивилисту
        постановления Пленума Верховного Суда РФ № 10 и Пленума Высшего
        Арбитражного Суда РФ № 22 от 29 апреля 2010 г. &laquo;О&nbsp;некоторых
        вопросах, возникающих в судебной практике при разрешении споров,
        связанных с защитой права собственности и других вещных прав&raquo;:
      </p>
      <ul>
        <li>в п.32 указанного постановления читаем следующее:</li>
      </ul>
      <p>
        &laquo;Применяя статью 301 ГК РФ, судам следует иметь в виду, что
        собственник вправе истребовать свое имущество от лица, у которого оно
        фактически находится в незаконном владении. Иск об истребовании
        имущества, предъявленный к лицу, в незаконном владении которого это
        имущество находилось, но у которого оно к моменту рассмотрения дела в
        суде отсутствует, не может быть удовлетворен.
      </p>
      <p>
        Если во время судебного разбирательства по иску об истребовании
        имущества из чужого незаконного владения спорное имущество было передано
        ответчиком другому лицу во временное владение, суд по правилам абзаца
        второго части 3 статьи 40 ГПК РФ или части 2 статьи 46 АПК РФ привлекает
        такое лицо в качестве соответчика&raquo;;
      </p>
      <ul>
        <li>
          основной вопрос: почему тот, у кого имущество находится во временном
          владении, привлекается в качестве соответчика?
        </li>
      </ul>
      <p>
        Если этому есть удовлетворительное объяснение, то тогда еще несколько
        вопросов:
      </p>
      <p>
        а) если иск удовлетворен, то кто из двух соответчиков должен фактически
        исполнять решение?
      </p>
      <p>б) можно ли обе стороны &laquo;стимулировать&raquo; астрентом?</p>
      <p>в) можно ли заключить мировое соглашение с одним из соответчиков?</p>
      <p>
        г) насколько справедливо возлагать обязанность по возмещению судебных
        расходов на того, у кого в принципе нет вещи (имеется в виду второй
        соответчик)?
      </p>
      <p>д) что будет, если один из соответчиков признает иск?</p>
      <p>
        е) каковы последствия признания одним из соответчиков факта, положенного
        истцом в основание виндикационного иска?
      </p>
      <p>
        По сложившейся традиции наше мероприятие не обойдется без гостя. Но
        поскольку полной ясности с тем, как распространяется эпидемия до сих пор
        нет, я решил не рисковать &ndash; живого гостя в этот раз не ждите.
        Поэтому на заседании будет присутствовать в режиме онлайн широко
        известный в узких кругах далекий наш процессуальный собрат лектор Школы
        права Университета Роберта Гордона ...
      </p>
      <p>
        Очередное заседание группы состоится <u>11 сентября 2020 г. в 18-00</u>.
      </p>
      <p>
        Предварительно его проведение планируется в Гротт Баре на Ленина, 49.
        Правда, я пока вообще не знаю, открылся ли он. В любом случае необходима
        информация о количестве готовых рискнуть, так что прошу
        до&nbsp;6&nbsp;сентября сего года (включительно){' '}
        <u>подтвердить свое участие</u> в работе группы посредством короткого
        сообщения на мою электронную почту
        <RedactedText /> либо в мессенджер ВотсАп (только не в кафедральном чате
        &ndash; не будем его засорять).
      </p>
      <p>
        P.S. Да, кстати. В этом году четверть века, как я работаю на кафедре.
      </p>
      <div className={s.small_image}>
        <Image
          src="/images/Post_16/1.png"
          alt="/1_1.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
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

export default Post_17;
