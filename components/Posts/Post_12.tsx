import React from 'react';
import AccentedBlock from '../UI/AccentedParagraph/AccentedParagraph';
import AccentedText from '../UI/AccentedText/AccentedText';
import Footnote from '../UI/Footnote/Footnote';
import RedactedText from '../UI/RedactedText/RedactedText';
import Signature from '../UI/Signature/Signature';
import Image from 'next/image';
import s from './Post.module.scss';

const Post_12 = () => {
  return (
    <div className={s.container}>
      <p>Уважаемые преподаватели и аспиранты!</p>
      <p>
        Хорошо понимаю вашу усталость &ndash; в конце ноября, когда на носу уже
        неизбежные новогодние праздники, хочется немного отойти от дел насущных,
        отвлечься от набивших оскомину казусов и хотя бы на неделю перестать
        видеть родные студенческие лица. По этим соображениям я решил сделать
        это объявление максимально дистанцированным от какой-либо правовой и
        научной тематики.
      </p>
      <p>
        Но о чем же тогда писать? Что объединяет всех нас? Какая тема будет
        интересной и молодой аспирантке, и седовласому профессору? Долго я думал
        &ndash; примерно с конца сентября. И, как это обычно бывает, предмет
        обсуждения подсказала жизнь. Тема, конечно, все же оказалась связанной с
        преподаванием, но &hellip; с несколько иного ракурса. Все мы знаем, что
        периодически нас избирают на преподавательские должности. Для
        большинства это проходит совершенно незаметно &ndash; лично я за все
        свои 38 лет стажа ни разу не был на заседаниях конкурсной комиссии или
        собраниях каких-то иных компетентных органов. Собственно, и в этом году
        я был вновь переизбран. Сей факт, конечно, вообще не заслуживает
        никакого внимания. Но! Неожиданно в своем кафедральном кармашке я
        обнаружил крохотный листочек. Там была какая-то странная табличка, и
        первым делом я подумал, что мне нужно заполнить какую-то очередную
        анкету. Приглядевшись же, увидел, что все поля уже заполнены.
      </p>
      <p>
        Итак, что же так заинтересовало меня? Не поверите, но это опросник
        студентов! Да-да, именно студентов. Оказывается, перед избранием на
        должность специально обученные люди приходят в группу, в которой вы
        преподавали в прошлом году, и по определенному перечню вопросов выясняют
        отношение обучающихся к персоне преподавателя. Более того, результаты
        анкетирования даже каким-то образом в итоге учитываются! Понятно, что
        каждый из нас решил связать судьбу с вузом до конца дней своих, а потому
        &ndash; раз правила усложнились &ndash; надо быть готовым ко всему.
      </p>
      <div className={s.opros}>
        <Image src="/images/Post_12/opros.png" alt="bill1" layout="fill" />
      </div>
      <p>
        По этим соображениям выкладываю сам опросник и некоторые свои
        комментарии:
      </p>
      <p>&nbsp;</p>
      <table width="full">
        <tbody>
          <tr>
            <td width="5%">
              <p>
                <strong>№№</strong>
              </p>
            </td>
            <td width="15%">
              <p>
                <strong>Вопросы</strong>
              </p>
            </td>
            <td width="74%">
              <p>
                <strong>Комментарий</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>1.</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>Доступно ли преподаватель излагает материал?</p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Очень сложно перестраивать себя&hellip; Но чтобы получить
                положительные ответы студентов, увы, надо потихоньку отвыкать от
                сложной юридической терминологии.
              </p>
              <p>
                Начните с малого &ndash; договоритесь со своим другом (подругой,
                женой/мужем, ребенком, родителями), что за каждое употребление
                на семинаре или лекции слов типа &laquo;преюдиция&raquo;,
                &laquo;экзекватура&raquo; или &laquo;превентивный&raquo; вы
                будете выплачивать 1000 рублей (вариант: вне очереди гулять с
                собакой, мыть после себя посуду, не разбрасывать куда попало
                носки, совершать дополнительный визит к теще).
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>2.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Оказал ли преподаватель положительное влияние на формирование
                уважительного отношения к праву и закону?
              </p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Здесь просто придется наступить на горло собственной песне. К
                примеру, как объяснить принципиально разный подход законодателя
                к инстанционным границам реализации такого распорядительного
                полномочия, как отказ от иска в гражданском и арбитражном
                процессе? Не просто теоретически обосновать, а именно так, чтобы
                оказать &laquo;положительное влияние на формирование
                уважительного отношения к праву и закону&raquo;? Долго сам думал
                над этим&hellip; Предлагаю вот как излагать логику этого
                законодательного решения: &laquo;Понимаете, ребята, здесь все не
                так просто. Арбитражный процесс имеет свою специфику &ndash; для
                стабильности оборота важно, чтобы вступившее в законную силу
                решение сохраняло стабильность. Мы не можем допустить, чтобы
                недобросовестные истцы, которым было отказано в удовлетворении
                иска, после вступления решения суда в законную силу
                злоупотребляли правом на судебную защиту, отказываясь от иска. В
                гражданском же процессе законная сила судебного акта не имеет
                столь важного значения&nbsp;&ndash; обычно это касается частного
                спора, который не способен оказать существенного влияния на
                оборот. Вот поэтому здесь отказываться от иска можно на любой
                стадии&raquo;. Вроде бы чистой воды демагогия, но зато как
                влияет на формирование уважительного отношения к праву и закону!
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>3.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>Проявлял ли преподаватель уважение к мнению студентов?</p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                На самом деле, это вопрос с подвохом &ndash; в нем уже
                содержится утверждение, что студент может иметь свое мнение.
                Составители опросника &ndash; люди с большим чувством юмора.
                Мы-то с вами понимаем, что даже после годового курса общения
                большинство студентов остаются, мягко говоря, инертны, и
                добиться от них какого-то собственного мнения по правовому
                вопросу архисложно.
              </p>
              <p>
                Что же делать? Правильно &ndash; симуляция! Опытный
                преподаватель легко интерпретирует фразу типа
                &laquo;Э-э-э&hellip; Ну, типа, скорее всего, тут суд поступил
                неправильно&hellip; Вот&hellip;&raquo;, изложив ее смысл перед
                всей группой примерно так: &laquo;Как верно указал Василий
                Алибабаевич, действия суда в этой ситуации были неправомерны,
                поскольку императивный метод правового регулирования не
                допускает реализацию таких процессуальных полномочий, которые
                прямо законом не предусмотрены&raquo;.
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>4.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Выражал ли преподаватель недовольство работой руководства
                Университета?
              </p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Это явно провокационный вопрос. Понятно, что ни одному из членов
                кафедры не придет в голову усомниться в правильности принимаемых
                кадровых, организационных и финансовых решений руководства
                Университета. Но на всякий случай все же рекомендую действовать
                на опережение и хотя бы пару раз за семинар задумчиво
                произносить фразы типа &laquo;Кстати, какая все-таки прекрасная
                идея убрать стоянку машин перед зданием главного
                корпуса!&raquo;, &laquo;Не перестаю поражаться технологичности
                решения: как чудесно придумали &ndash; идешь по переходу, а тут
                тебе музей!&raquo;, &laquo;О, как бодрит запах, исходящий от
                кофе-машины, как стимулирует мозговую деятельность! Как же
                все-таки хорошо, что теперь на каждом этаже есть эти чудесные
                аппараты!&raquo;
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>5.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Допускал ли преподаватель некорректные высказывания в адрес
                других коллег?
              </p>
              <p>&nbsp;</p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Продолжение провокации. Хотя &ndash; в отличие от предыдущего
                вопроса &ndash; здесь все сложнее. Преподавая на старших курсах,
                мы поневоле вынуждены обращаться к знаниям студентов, полученным
                ими в иных отраслевых дисциплинах. И иногда, конечно, очень
                хочется узнать, кто же так блестяще поработал над студентами.
                Что ж, теперь остается лишь глубокомысленно закатывать глаза и
                произносить что-то типа &laquo;Жаль, конечно, что вексельное
                право не преподается как отдельная дисциплина&hellip; Я вот в
                свое время наизусть запомнил довольно простое правило - протест
                в неплатеже переводного векселя сроком на определенный день или
                во столько-то времени от составления или предъявления должен
                быть совершен в один из двух рабочих дней, которые следуют за
                днем, в который переводный вексель подлежит оплате. Да,
                жаль&hellip;&raquo;
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>6.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Позволял ли преподаватель некорректные высказывания в адрес
                студентов?
              </p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Да-да, теперь это карается! Никаких двусмысленных шуток о
                качестве подготовки к семинару, никаких обвинений в
                разгильдяйстве, никаких пророческих слов о будущей карьере
                конкретного студента. Только предельно корректные высказывания
                типа &laquo;Возможно, у Вас была слишком тяжелая учебная неделя,
                что привело к невозможности надлежащей подготовки к данному
                семинару&raquo;, &laquo;Не сомневаюсь, что столь основательные
                знания по предмету будущий работодатель расценит как
                дополнительное конкурентное преимущество&raquo;, &laquo;С такой
                тягой к знаниям Вы в скором времени вполне могли бы возглавить
                профильный комитет Государственной Думы&raquo;.
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>7.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Изучали ли Вы самостоятельно дополнительную литературу по
                преподаваемой дисциплине?
              </p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Еще один вопрос с подвохом &ndash; предполагается, что студент
                реально способен &laquo;изучить самостоятельно дополнительную
                литературу&raquo;. Какая еще дополнительная литература?!
                Уважаемые составители опросника, не надо так жестоко шутить!
                Преподаватель уже рад, если студент перед экзаменом компендиум
                открыл. А тут &ndash; до экзамена! самостоятельно! изучал!
                дополнительную литературу! А-а-а&hellip; Держите меня
                двое&hellip; Я под столом&hellip;
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td width="45">
              <p>8.&nbsp;&nbsp;&nbsp; &nbsp;</p>
            </td>
            <td width="126">
              <p>&nbsp;</p>
              <p>
                Использовал ли преподаватель аудиовизуальные и мультимедийные
                средства и технологии?
              </p>
            </td>
            <td width="471">
              <p>&nbsp;</p>
              <p>
                Да уж&hellip; Здесь уже придется рассчитывать на чувство юмора у
                студентов&nbsp;&ndash; можно же при желании расценить
                преподавательский телефон как &laquo;аудиовизуальное и
                мультимедийное средство&raquo;? Впрочем, опять же можно
                действовать на опережение &ndash; приучайте студентов с первого
                же семинара называть доску и кусок мела специальными терминами:
                &laquo;Итак, кто готов, используя визуальное средство и
                осадочную горную породу белого цвета органического
                происхождения, рассчитать подлежащую уплате государственную
                пошлину?&raquo; В итоге через пару месяцев общения с Вами они
                будут искренне убеждены, что Вы просто безостановочно
                использовали аудиовизуальные и мультимедийные средства и
                технологии.
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <p>Теперь &ndash; о теме для обсуждения.</p>
      <p>
        Предлагаю сконцентрироваться на <strong>судебной неустойке</strong>.
        Напомню, что ныне в ГК РФ имеется статья 308.3, которая в пункте первом
        содержит следующее правило: &laquo;В случае неисполнения должником
        обязательства кредитор вправе требовать по суду исполнения обязательства
        в натуре, если иное не предусмотрено настоящим Кодексом, иными законами
        или договором либо не вытекает из существа обязательства.{' '}
        <strong>
          Суд по требованию кредитора вправе присудить в его пользу денежную{' '}
        </strong>
        сумму (пункт 1 статьи 330)
        <strong>
          {' '}
          на случай неисполнения указанного судебного акта в размере,
          определяемом судом на основе принципов справедливости, соразмерности и
          недопустимости извлечения выгоды из незаконного или недобросовестного
          поведения
        </strong>{' '}
        (пункт 4 статьи 1)&raquo;.
      </p>
      <p>
        Мне представляется, что обсуждение этой нормы могло бы охватить
        следующие вопросы:
      </p>
      <ol>
        <li>
          Разумность отраслевого закрепления нормы исключительно в гражданском
          законодательстве.
        </li>
        <li>Предпосылки закрепления нормы:</li>
      </ol>
      <p>
        а) в каждом из базовых материально-правовых отраслевых законодательных
        актов;
      </p>
      <p>б) в процессуальном законодательстве;</p>
      <p>в) в законодательстве об исполнительном производстве.</p>
      <ol start={3}>
        <li>
          Частные судебные и внесудебные соглашения о судебной неустойке и
          легальная дискреция суда в определении ее размера.
        </li>
        <li>
          Применимость к судебной неустойке общих правил, содержащихся в &sect;
          2 гл. 23 ГК РФ.
        </li>
        <li>
          Процессуальный механизм уменьшения судебной неустойки по ст. 333 ГК
          РФ.
        </li>
        <li>
          Субъекты, уполномоченные обращаться с ходатайством о судебной
          неустойке.
        </li>
        <li>
          Возможность повторного обращения с ходатайством о судебной неустойке в
          случае отказа в удовлетворении аналогичного ходатайства ранее.
        </li>
        <li>
          Возможность обращения с ходатайством об увеличении размера судебной
          неустойки, если с момента вынесения соответствующего судебного акта
          изменились обстоятельства, исходя из которых был определен такой
          размер.
        </li>
        <li>
          Судебные акты, в которых может быть разрешено ходатайство о судебной
          неустойке.
        </li>
        <li>
          Судебная процедура, в рамках которой должно разрешаться ходатайство о
          судебной неустойке.
        </li>
        <li>
          Орган, уполномоченный произвести окончательный расчет суммы судебной
          неустойки, подлежащей взысканию с должника.
        </li>
        <li>
          Допустимость специальных оснований для снижения либо отмены судебной
          неустойки.
        </li>
        <li>
          Судебная процедура, в рамках которой должно разрешаться ходатайство
          должника о снижении либо отмене судебной неустойки.
        </li>
        <li>
          Допустимость использования судебной неустойки для обеспечения
          исполнения определения об утверждении мирового соглашения.
        </li>
        <li>
          Особенности исполнения иностранных решений и решений третейских судов,
          содержащих условие о судебной неустойке.
        </li>
        <li>Допустимость цессии судебной неустойки.</li>
        <li>
          Судьба судебной неустойки при заключении соглашения о переводе долга,
          не содержащего условия о том, что новый должник принимает на себя
          также и обеспечительное обязательство, вытекающее из судебной
          неустойки.
        </li>
        <li>
          Применимость общих правил о распределении судебных расходов в случае,
          когда суд проверочной инстанции изменил размер судебной неустойки.
        </li>
        <li>
          Разумность рекомендаций, содержащихся в постановлении Пленума
          Верховного Суда РФ от 24 марта 2016 г. N 7 &laquo;О применении судами
          некоторых положений Гражданского кодекса Российской Федерации об
          ответственности за нарушение обязательств&raquo;.
        </li>
        <li>
          Допустимость употребления вместо термина &laquo;судебная
          неустойка&raquo; известного французского аналога. И главное &ndash;
          как правильно пишется: &laquo;астрент&raquo; или
          &laquo;астрэнт&raquo;?
        </li>
      </ol>
      <p>Очередное заседание группы состоится 2 декабря 2016 г. в 18-00.</p>
      <p>
        Место, где будет проводиться наше мероприятие, видимо, останется
        неизменным &ndash; это пивной ресторан &laquo;РатсКеллер&raquo; (пр.
        Ленина, 24-А, здание Администрации города Екатеринбурга, вход с ул. 8‑е
        Марта). Как всегда, чтобы определиться с бронированием, мне необходимо
        знать общее число желающих посетить заседание, в связи с чем прошу в
        срок до 25 ноября 2016 г. (включительно) подтвердить свое участие в
        работе группы посредством сообщения лаборанту <RedactedText />
      </p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>
        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_12;
