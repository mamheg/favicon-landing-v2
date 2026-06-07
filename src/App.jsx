import './App.css'

const A = '/assets/'

const advantages = [
  { title: '29 лет', text: 'опыт патентного поверенного', img: 'masked-p2-9.png' },
  { title: 'Бесплатная', text: 'проверка вашего знака перед заключением договора', img: 'masked-p2-8.png' },
  { title: 'Закрепим', text: 'право на знак в течение 1 рабочего дня', img: 'masked-p2-7.png' },
  { title: 'Fix', text: 'фиксированная цена без доплат и скрытых платежей', img: 'masked-p2-5.png' },
  { title: 'Под ключ', text: 'поиск, заявка, делопроизводство и свидетельство', img: 'masked-p2-3.png', dark: true },
  { title: 'Гарантии', text: 'фиксируем обещания и условия в договоре', img: 'masked-p2-4.png' },
]

const steps = [
  ['01', 'Вы оставляете заявку', 'Мы связываемся с вами и проводим бесплатную консультацию.'],
  ['02', 'Проверяем знак', 'Определяем шансы и риски регистрации до заключения договора.'],
  ['03', 'Заключаем договор', 'Фиксируем цену, гарантии и обещания письменно.'],
  ['04', 'Подаём заявку', 'Закрепляем право на знак в течение 1 рабочего дня.'],
  ['05', 'Ведём процесс', 'Отвечаем на уведомления и отстаиваем позицию в спорных моментах.'],
  ['06', 'Передаём свидетельство', 'Информируем о решении и передаём документы удобным способом.'],
]

const tariffItems = [
  'Патентный поиск по официальным базам Роспатента',
  'Подбор классов МКТУ',
  'Составление и подача заявки в Роспатент',
  'Делопроизводство по знаку',
  'Ответы на уведомления и оспаривание при необходимости',
  'Свидетельство лично в руки или отправка почтой',
  'Гарантия регистрации',
]

const guaranteeItems = [
  ['Фиксируем цену', 'Стоимость и объём работ прописаны в договоре до старта.'],
  ['Закрепляем право', 'Подаём заявку и закрепляем приоритет в течение 1 рабочего дня.'],
  ['Ведём до решения', 'Сопровождаем переписку с Роспатентом и отвечаем на уведомления.'],
]

const faq = [
  ['Что значит гарантия по договору?', 'Мы письменно фиксируем обещания, сроки действий и условия сопровождения — без устных договорённостей.'],
  ['Можно ли сначала проверить знак?', 'Да. Перед договором бесплатно проверим знак и покажем риски регистрации.'],
  ['От чего зависит срок?', 'От выбранного тарифа и процедуры Роспатента: ускоренный маршрут обычно занимает 2–3 месяца, стандартный — 6–10 месяцев.'],
]

function Logo({ compact = false }) {
  return (
    <a className={compact ? 'logo compact' : 'logo'} href="#top" aria-label="Favicon">
      <img src={`${A}masked-p1-2.png`} alt="Favicon" />
    </a>
  )
}

function App() {
  return (
    <main id="top">
      <nav className="nav" aria-label="Главная навигация">
        <Logo compact />
        <div className="nav-links">
          <a href="#advantages">Преимущества</a>
          <a href="#check">Проверка</a>
          <a href="#steps">Шаги</a>
          <a href="#tariffs">Тарифы</a>
        </div>
        <a className="nav-action" href="https://t.me/FaviconTM">@FaviconTM</a>
      </nav>

      <section className="hero section">
        <div className="hero-copy">
          <p className="kicker">регистрация товарного знака</p>
          <h1>Регистрация вашего товарного знака с гарантией по договору</h1>
          <div className="hero-points">
            <span>«Под ключ» без доплат и скрытых платежей</span>
            <span>Закрепим право на знак в течение 1 рабочего дня</span>
            <span>Бесплатно проверим знак и проконсультируем до договора</span>
          </div>
          <div className="hero-actions">
            <a className="button red" href="https://t.me/FaviconTM">Проверить знак</a>
            <a className="button light" href="#tariffs">Смотреть тарифы</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Гарантия закреплена в договоре">
          <img className="hero-stamp" src={`${A}asset-01-p1.jpeg`} alt="Штамп: гарантия закреплена в договоре" />
          <div className="red-plane" />

        </div>
      </section>

      <section className="section advantages" id="advantages">
        <div className="section-title wide">
          <p>Преимущества</p>
          <h2>
            6 причин работать с
            <img className="title-logo" src={`${A}masked-p1-2.png`} alt="Favicon" />
          </h2>
        </div>
        <div className="advantage-grid">
          {advantages.map((item) => (
            <article className={item.dark ? 'adv-card dark' : 'adv-card'} key={item.title}>
              <div className="icon-wrap"><img src={`${A}${item.img}`} alt="" /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section check" id="check">
        <div className="check-heading">
          <p>Проверим ваш знак на уникальность —</p>
          <h2>бесплатно!</h2>
        </div>
        <div className="check-grid">
          <article className="check-card muted">
            <span>Полная экспертная проверка по базам ФИПС</span>
            <strong>за 2 часа</strong>
          </article>
          <article className="check-card muted centered">
            <span>Ваш бренд проверяет специалист-патентовед</span>
            <strong>по регламенту Роспатента</strong>
          </article>
          <article className="check-card black">
            <img src={`${A}masked-p3-2.png`} alt="Отчёт с отметкой" />
            <span>По итогам направляем отчёт с однозначным выводом:</span>
            <strong>можно зарегистрировать знак или нет</strong>
          </article>
        </div>
      </section>

      <section className="section guarantee" id="guarantee">
        <div className="guarantee-panel">
          <div>
            <p className="guarantee-kicker">Гарантия</p>
            <h2>Что именно закрепляем в договоре?</h2>
          </div>
          <div className="guarantee-list">
            {guaranteeItems.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section steps" id="steps">
        <div className="steps-head">
          <img src={`${A}masked-p4-1.png`} alt="C" />
          <div>
            <p>Шаги</p>
            <h2>Как мы работаем?</h2>
          </div>
        </div>
        <div className="step-line">
          {steps.map(([num, title, text], index) => (
            <article className={index % 2 ? 'step below' : 'step above'} key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tariffs" id="tariffs">
        <div className="section-title tariffs-title">
          <h2>Тарифы</h2>
          <p>Оба тарифа включают полный юридический маршрут — от поиска до свидетельства.</p>
        </div>
        <div className="tariff-grid">
          <aside className="time-card accelerated"><b>2–3</b><span>месяца</span></aside>
          <article className="tariff-card dark">
            <img className="tariff-img rocket" src={`${A}masked-p5-2.png`} alt="Ускоренная регистрация" />
            <h3>Ускоренный</h3>
            <ul>{tariffItems.map((item) => <li key={`fast-${item}`}>{item}</li>)}</ul>
            <strong className="price red-price">75 000 ₽</strong>
          </article>
          <article className="tariff-card light-card">
            <img className="tariff-img scroll" src={`${A}masked-p5-3.png`} alt="Стандартная регистрация" />
            <h3>Стандартный</h3>
            <ul>{tariffItems.map((item) => <li key={`std-${item}`}>{item}</li>)}</ul>
            <strong className="price">35 000 ₽</strong>
          </article>
          <aside className="time-card standard"><b>6–10</b><span>месяцев</span></aside>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-title faq-title">
          <h2>Вопросы</h2>
          <p>Коротко о том, что обычно уточняют перед стартом.</p>
        </div>
        <div className="faq-grid">
          {faq.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section start">
        <div className="start-copy">
          <h2>Что нужно для начала работы?</h2>
          <p>Пришлите реквизиты вашей компании нам на почту или в мессенджер.</p>
          <p>Мы составим договор и пришлём вам на подпись.</p>
          <Logo compact />
        </div>
        <div className="person"><img src={`${A}masked-p6-2.png`} alt="Елена, консультирующий менеджер" /></div>
        <div className="contact-card">
          <h3>Елена</h3>
          <p>Консультирующий менеджер</p>
          <a href="tel:+79936158331"><img src={`${A}masked-p6-4.png`} alt="" />+7 993 615-83-31</a>
          <a href="https://t.me/FaviconTM"><img src={`${A}masked-p6-6.png`} alt="" />@FaviconTM</a>
          <a href="mailto:info@favicon24.ru"><img src={`${A}masked-p6-7.png`} alt="" />info@favicon24.ru</a>
        </div>
      </section>

      <footer>
        <Logo compact />
        <span>Регистрация товарных знаков · гарантия по договору</span>
        <a href="https://t.me/FaviconTM">Связаться</a>
      </footer>
    </main>
  )
}

export default App
