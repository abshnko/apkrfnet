import React from "react";
import AccentedBlock from "../../UI/AccentedParagraph/AccentedParagraph";
import AccentedText from "../../UI/AccentedText/AccentedText";
import Footnote from "../../UI/Footnote/Footnote";
import RedactedText from "../../UI/RedactedText/RedactedText";
import Signature from "../../UI/Signature/Signature";
import Image from "next/image";
import s from "./Post.module.scss";

const Post_5 = () => {
  return (
    <div className={s.container}>
      <h2>Уважаемые супруги преподавателей и аспирантов!</h2>
      <p>
        Приношу вам глубочайшие извинения: я действительно не мог предположить,
        что в некоторых семьях общим является не только имущество, но и
        электронные почтовые ящики. Большинство из вас, прочитав первую страницу
        предыдущего объявления, в легком недоумении бросилось к своим любимым
        половинам выяснять подробности такого сомнительного мероприятия, как
        заседание учебно-методической группы по арбитражному процессу. И здесь
        возникла определенная неловкость&hellip;
      </p>
      <p>
        Еще раз приношу извинения: все, что было написано мною в предыдущем
        объявлении, лишь плод моей фантазии (грешен, люблю иногда пошутить). На
        самом деле если и случается на кафедре любовь, то она всегда взаимна,
        начинается светлой романтической фантазией, прогулками по улице
        Комсомольская от здания № 21 к зданию № 23 и целомудренным поцелуем в
        щечку, заканчивается же всегда браком и переездом на постоянное место
        жительства в Москву. Молодые аспирантки ни с кем на кафедре не
        заигрывают, в переписку не вступают, а с противоположным полом общаются
        только по поводу сканирования работ процессуальных классиков (по этой
        причине у нас уже ого-го какая библиотека!). Людмила Петрушевская
        &ndash; это известный писатель, сценарист, переводчик и художник, а Kill
        Bill &ndash; фильм о трудной судьбе одной молодой матери, волею судьбы
        разделенной с ребенком, но никак не песня об экс-президенте США Билле
        Клинтоне и его молоденькой пассии. Молодые преподаватели и аспиранты во
        время заседания учебно-методической группы пьют исключительно зеленый
        чай и расходятся не позднее 21‑00. Каждый на кафедре прекрасно владеет
        русским литературным языком, в устной и письменной речи не допускает
        ошибок, а обращаемся мы друг к другу словами &laquo;сударь&raquo; и
        &laquo;сударыня&raquo;. Лаборантка &hellip; присутствует на заседаниях
        группы только лишь для целей протоколирования и от танцев далека так же,
        как декабристы от народа. Кафедральные кармашки используются для всяких
        рабочих бумажек (контрольных студентов, процессуальных документов и
        подарочных экземпляров наших нетленных трудов). Заведующий кафедрой
        &ndash; человек исключительной доброты, никогда слова худого не скажет,
        а творческими планами интересуется только лишь по своей природной
        интеллигентности. Стихи на кафедре никто не пишет &ndash; мы люди
        серьезные, постоянно погружены в науку и преподавание, а потому нам
        некогда размениваться на всякие там формы изящные.
      </p>
      <p>
        Хотя нет, была в прошлом письме и малая толика правды &ndash; Майя
        Кристалинская действительно на юбилейном вечере А. Пахмутовой исполняла
        песню &laquo;Нежность&raquo;. Но было это тогда, когда нынешние
        аспиранты еще не родились (кстати, специально для проживающих в Кольцово
        &ndash; автору слов настойчиво предлагали заменить упоминавшегося в
        тексте песни Экзюпери на Бахчиванджи).
      </p>
      <p>
        Теперь пара слов для коллег. Подумалось мне, а почему процессуалисты не
        имеют своего морального кодекса? Понятно, что ему совсем не обязательно
        следовать, но ведь это не препятствует его появлению!
      </p>
      <p>
        Поразмышлял я немного и вот что хочу предложить. Рабочее название
        &ndash; &laquo;Двадцать заповедей процессуалиста&raquo;. Сами заповеди
        звучат следующим образом:
      </p>
      <ol>
        <li>
          Не сотвори себе процессуального кумира. Даже если это научный
          руководитель, ты не обязан следовать его идеям. Впрочем, как и идеям
          процессуальной школы или общепризнанным постулатам.
        </li>
        <li>
          Не пиши, если нечего сказать (даже если об этом сильно просит научный
          руководитель).
        </li>
        <li>
          Излагай чужую точку зрения так, чтобы ежу было понятно, что это не
          твои мысли. Помни, что излагая чужую мысль своими словами, ты не
          превращаешь ее в свою собственную.
        </li>
        <li>
          Не аргументируй свою позицию судебным актом, принятым по конкретному
          делу, ибо всегда найдется такой судебный акт, который исходит из
          противоположной точки зрения.
        </li>
        <li>
          Не пытайся понять логику законодателя. Его нет. Не пытайся понять
          логику Конституционного Суда РФ, Высшего Арбитражного Суда РФ и
          Верховного Суда РФ. Они есть, но их рекомендации довольно часто
          основаны на сиюминутном и казуистичном.
        </li>
        <li>
          Не думай, что если обнаружил в иностранном праве незнакомый
          процессуальный институт, то это само по себе уже потянет на новизну.
          Перед тем, как предлагать рецепцию из иностранного законодательства,
          попытайся понять, какие смежные институты обеспечат эффективную
          реализацию предлагаемой процессуальной конструкции. Мысли системно.
        </li>
        <li>
          Не выдергивай фразы из контекста (это удобно для критики, но
          недостойно по сути). Критикуя, не допускай выражений, которые были бы
          тебе самому неприятны, если бы ты прочитал их в отношении своих работ.
        </li>
        <li>
          Если изменил точку зрения на проблему &ndash; сразу же заяви об этом,
          представив те аргументы, которые явились причиной. Иначе эти аргументы
          отыщут другие и отхлестают тебя по процессуальным ланитам.
        </li>
        <AccentedBlock>
          <p>
            <li>
              Не пиши долго по одной теме &ndash; рано или поздно начнешь
              повторяться.
            </li>
          </p>
        </AccentedBlock>
        <li>
          Не пытайся искусственно увеличить объем произведения за счет нереально
          большого списка литературы, приложений либо неоправданного цитирования
          нормативных актов и судебной практики. Все всё понимают.
        </li>
        <li>
          Не вставляй в новые произведения куски из ранее опубликованных (можно
          просто ограничиться необходимой ссылкой). Не печатай одну статью под
          разными наименованиями (это неуважительно по отношению как к читателю,
          так и к издателю). Не рассказывай на разных конференциях одно и то же
          (сам подумай &ndash; кому приятно слушать бесконечные повторы?).
        </li>
        <li>
          Если в детстве и юношестве разминулся с хорошей литературой, то перед
          публикацией дай почитать работу опытным товарищам. Они гарантированно
          найдут стилистические ляпы и орфографические ошибки (про знаки
          препинания деликатно умолчим).
        </li>
        <li>
          Всегда перечитывай верстку статьи после редакторской правки. Не
          позволяй редактору навязывать то, что ты считаешь неправильным (его
          никто не знает, а ты таким образом увековечиваешь свои ошибки).
        </li>
        <li>
          Выступая кафедральным рецензентом по диссертации, помни, что твоя цель
          не в том, чтобы доставить приятное научному руководителю/консультанту
          автора, а исключить крайне неловкую ситуацию, которая может сложиться
          во время защиты или после нее. Даже если доверяешь человеку, никогда
          не подписывай подготовленные другими отзывы, рецензии, предисловия и
          т.п. (рано или поздно это аукнется).
        </li>
        <li>
          Не произноси банальности во время публичного выступления (это
          оскорбительно для чуткого процессуального уха). Если во время твоего
          гениального выступления слушатели уже на второй минуте массово
          начинают говорить друг с другом, то либо ты выступаешь на
          металлургическом комбинате, либо содержание доклада совсем никудышное.
        </li>
        <li>
          Помни, что наличие или отсутствие ученой степени/звания влияет только
          лишь на последовательность выступления на научном мероприятии. Всякий
          раз нужно доказывать свою научную состоятельность.
        </li>
        <li>
          Помни, что банкет &ndash; это часть конференции или иного научного
          мероприятия (как правило, основная). Когда дойдет очередь произносить
          тост &ndash; взвешивай каждое произнесенное слово, ибо здесь слушают
          гораздо более внимательно, чем на официальной части.
        </li>
        <li>
          Помни, что частная жизнь и межличностные отношения не должны влиять на
          содержание процессуально-правовой дискуссии. Оставь обиды и симпатии
          за пределами научной деятельности. Если чувствуешь, что это нереально
          &ndash; откажись под благовидным предлогом от оппонирования,
          рецензирования и т.п.
        </li>
        <li>
          Если в твой город приехал иногородний процессуалист &ndash; встреть,
          размести, накорми. Если надо &ndash; посели у себя дома и предложи
          собственную кровать. Не бросай его в прогулках по ночному городу, ибо
          процессуалисты как дети &ndash; могут заблудиться. Не пренебрегай
          этими правилами, даже если процессуалист противоположного пола.
        </li>
        <li>
          Береги процессуальную репутацию смолоду. Любой недостойный поступок
          останется в памяти коллег навсегда &ndash; утраченную процессуальную
          репутацию восстановить невозможно.
        </li>
      </ol>
      <p>
        Предлагаю каждую заповедь обсудить. Что-то явно невыполнимое можно
        убрать, где-то обязывающую конструкцию заменить на управомочивающую. Но
        общий дух, полагаю, надо сохранить, ибо представители других кафедр
        должны видеть нашу идейность, порядочность и безмерно высокую
        духовность. Мы смело смотрим в прошлое, нам нечего стыдиться, наши
        духовные скрепы не разомкнуть, а остальные должны понимать, что&nbsp;
        мужественная/элегантная процессуальная рука/ручка будет протянута не
        всем (а только тем, кто этого действительно заслуживает).
      </p>
      <p>
        Что касается нашего очередного заседания. Решил я совместить приятное с
        полезным. Наверное, Вы знаете, что 6 и 7 июня у нас в Академии будет
        проходить Евро-Азиатский правовой конгресс. На него собираются приехать
        несколько известных процессуалистов.
      </p>
      <p>
        Помятуя о том, что цель наших собраний состоит в обсуждении
        процессуальных проблем как с позиций теории, так и в практическом
        аспекте, на заседание приглашены:
      </p>
      <p>
        <RedactedText /> - д.ю.н., профессор
        <RedactedText /> &ndash; он будет солировать с позиций процессуальной
        доктрины;
      </p>
      <p>
        <RedactedText /> - к.ю.н., доценты <RedactedText />, Московский
        государственный университет имени М.В. Ломоносова, и <RedactedText />,
        Казанский (Приволжский) федеральный университет &ndash; эта пара задаст
        всем нам практического жару, обещаю.
      </p>
      <p>&nbsp;</p>
      <AccentedBlock>
        <p>
          На очередное заседание, которое состоится{" "}
          <strong>7 июня 2013 г. в 18-00</strong>, на обсуждение выносятся
          следующие темы:
        </p>
        <ol>
          <li>
            <span>Иск и возбуждение дела в арбитражном суде</span>
          </li>
          <li>Судебное разбирательство в арбитражном суде первой инстанции</li>
          <li>Судебные акты арбитражного суда первой инстанции</li>
          <li>Производство в апелляционной инстанции</li>
          <li>Производство в кассационной инстанции</li>
        </ol>
      </AccentedBlock>
      <p>
        Место, где будет проводиться наше мероприятие, определится традиционно
        &ndash; исходя из общего количества изъявивших желание узнать что-то
        новое и обсудить давно известное. В связи с чем прошу в срок{" "}
        <strong>до 30 мая 2013 г.</strong> (включительно){" "}
        <strong>
          подтвердить свое участие в работе группы посредством
          устного/письменного сообщения лаборанту ...
        </strong>{" "}
        Прошу учесть, что в последнее время она несколько обленилась (видимо,
        считает, что диплом у нее уже в кармане). Поэтому будьте настойчивы
        &ndash; используйте все доступные вам способы доведения информации (я на
        нее уже никак повлиять не могу &ndash; текущая сессия и ГОСы на вечернем
        факультете пройдут, увы, без моего участия).
      </p>
      <Signature>
        <p>Руководитель учебно-методической группы по арбитражному процессу</p>

        <p>Д. Б. Абушенко</p>
      </Signature>
    </div>
  );
};

export default Post_5;