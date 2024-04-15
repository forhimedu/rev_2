const data = [
  ["сутек", "Әлемде ең көп тараған элемент. Күннің және көптеген жұлдыздардың ең негізгі құрамбөлігі"],
  ["гелий", "Әлемде таралуы жағынан екінші орында"],
  ["сутек", "Түссіз, дәмсіз, және ең жеңіл газ"],
  ["озон", "ауа мен ауызсуды озондауға, өндірістің ағын суларын заласыздандыруға, зымыран отынын тотықтыруға және \
  ағартқыш ретінде қолданылады"],
  ["галогендер", "17, 7А, 7 негізгі топ атауы"],
  ["халькогендер", "16, 6А, 6 негізгі топ атауы"],
  ["электртерістілік", "химиялық элемент атомдарын қосылыстардағы басқа элемент атомдарынан байланыстырушы электрондарды өзіне \
  қарай тартуы не деп аталады"],
  ["фтор", "электртерістігі ең жоғары элемент"],
  ["фтор", "галогендердің ішіндегі атомдық радиусы ең кішісі"],
  ["7", "галогендерде валенттік электрон саны"],
  ["8", "хлорид ионында валенттік электрон саны"],
  ["коваленттік байланыс", "атомдардың сыртқы электрон қабатындағы жұптаспаған электрондарының ортақ жұбы арқылы түзілетін байланыс түрі \
  '... байланыс' деп жазыңыз"],
  ["3", "Азот молекуласында неше байланыс бар? Санмен көрсетіңіз"],
  ["4", "Азот қышқылында азоттың тотығу дәрежесі +5 ке тең, ал валенттілігі нешеге тең? Санмен көрсетіңіз"],
  ["селитра", "Барлық нитраттар - термиялық тұрақсыз заттар. Қыздарғанда оттек бөліп ыдырайтындықтан нитраттар күшті тотықтырғыштар болып табылады. \
  Егер балқыған ?..-ға (нитраттар басқа атауы) көмірдің немесе күкірттің түйірлерін салса, олар тұтанып жанып кетеді."],
  ["фосфор", "Қатты элемент. Бірнеше аллотропиялық түрөзгерісті белгілі: қызыл, қара, ақ және т.б."],
  ["3", "Фосфорда байланыс саны, әр фосфор неше фосформен байланысады"],
  ["фосфор", "Бұл элемент жасыл өсімдіктердің барлық бөлігінде, әсіресе жемісінде және тұқымында көп мөлшерде \
  кездеседі. Құрамында осы элемент бар нәруыздар бұлшық етте, ми ұлпаларында және жүйке жүйесінде болады. \
  Әсіресе бұл элемент ортофосфат түрінде сүйек пен тісте көп кездеседі. Ересек адам организмінде 1кг-нан \
  аса осы элемент болады" ],
  ["сарымсақ", "Ақ фосфор иісі"],
  ["этанол", "Ақ фосфор суда нашар ериді, бірақ CS\u2082(көміртек дисульфиді) және \
  осы затта жақсы ериді, осы зат атауын жазыңыз"],
  ["ақ", "Қай фосфор аллотропы улы"],
  [ "ақ", "Қай фосфор аллотропы жарырайды"],
  ["Фосфин", "Бұл зат аммиакқа ұқсас бірақ тұрақсыз зат. Түссіз, ауада өздігінен тұтанатын, \
  шіріген балық иісті, улы зат. Фосфор қосылысы. Осы заттың атын жазыңыз"],
  ["фосфор", "Осы 15 топ элементі жанғанда ақ түтін пайда болады. Сондықтан осы элементтің ақ аллотропын \
  түтінді шымылдық жасау үшін әскери қару-жарақтардың оқ дәрілерін дайындауда қолданады. Осы \
  элементтің көп мөлшері минералды тыңайтқыштар мен ...органикалық препараттар өндірісіне \
  жұмсалады. Осы заттар (...органикалық)қатарына зиянды жәндіктерді жоятын заттар жатады."],
  ["калий", "Өсімдіктердің өсуне ең маңызды химиялық элементтер азот, фосфор, және \
  осы элемент болып табылады"],
  ["Кремний", "Табиғатта таралуы жағынан оттектен кейінгі екінші элемент атауы."],
  ["Кремний", "Бұл элемент аморфты және кристалдық деп аталатын екі аллотроптық түрі бар. \
  Кристалдық түрі  металдық жылтыры бар, күмістей сұр түсті зат. Кристалдық торы \
  алмаздың кристалдық торына ұқсас, 1415С-та балқтитын жартылай өткізгіш. Аморфты \
  түрі сұр түсті ұнтақ. Элемент атауы"],
  ["фтор", "Бөлме температурасында кремний осы элементпен ғана әрекеттеседі."],
  ["кремний", "Бұл элемент жартылай өткізгіш материал. Ол электроникада, элекртехникада \
  диодтар, транзисторлар, фотоэлементтер жасауда қолданылады. Көп мөлшері \
  ыстық пен қышқыл әсеріне төзімді болат алуға жұмсалады."],
  ["винил", "CH\u2082=CH- атауы, этениллен басқасы"],
  ["аллил", "CH\u2082=CH-CH\u2082- атауы, пропенилден басқасы"],
  ["парафиндер", "Ашық тізбекті қаныққан көмірсутектерді алкандар немесе ... деп атайды"],
  ["метан", "түссіз, иіссіз газ, іс жүзінде суда ерімейді, -164С кезінде сұйылады. Бұл \
  табиғи газдың маңызды құрамбөлігі. Осы газдың атауын жазыңыз."],
  ["метан", "Ауасыз ортада өсімдіктер батпақтың бетіне газ көпіршіктері түрінде бөлініп \
  шығады. Сондықтан бұл газ батпақ газы деп аталады. Сондай ақ ол жер астында таскөмір \
  баяу ыдырағанда және көп мөлшерде шахталарда пайда болады."],
  ["CnH2n+1", "Алкил тобының жалпы формуласын жазыңыз(CnH2n+2 дегендей)"],
  ["орынбасу", "Алкандар галогендермен реакциясы түрі(элиминирлеу, орынбасу, қосылу, т.б.)"],
  ["фреондар", "Тоңазытқыш реагент ретінде қолданылатын, құрамында фтор немесе \
  полифторкөмірсутектер бар, құрамында хлор атомдары жиі, ал бром атомдары сирек кездеседі. \
  Озон ойығының пайда болуына себепкер. Жауапты көпше түрде жазыңыз."],
  ["1000", "CH\u2084 -> C + 2H\u2082 реакциясы неше температурада(цельсий С) жүреді? Тек санды жазыңыз"],
  ["ацетилен", "1500C та CH\u2084 -> ? + H\u2082. Бұл жерде зат формуласын емес атауын жазыңыз"],
  ["синтез газ", "CO + H\u2082 => газ қоспасының атауы"],
  ["Кучеров", "C\u2082H\u2082 + H\u2082O -> CH\u2083CHO [H+, Hg2+ қатысында]. Бұл реакция \
  .... реакциясы деп аталады"],
  ["бензол", "суда ерімейтін, бірақ көптеген органикалық қосылыстарда жақсы еритін, \
  өзіне тән иісі бар тұтанғыш сұйық, улы зат. Көп мөлшері жүректі айнытып, басты айналдырады."],
  ["бензол", "Бұл затпен және толуолмен созылмалы улану лейкемияны және қаназдықтытудырады. \
  Ол күшті канцероген, қатерлі ісіктің пайда болуына және өсуіне әкеледі. Кейбір ауыр жағдайларда \
  уланған адам өлімге де душар болуы мүмкін. Бұл зат буы тері арқылы денеге сіңе алады."],
  ["этанол", "Техникада өндірілу көлемі бойынша басқа органикалық заттардың ішінде бірінші орын алады. \
  Өндірудің маңыздысы - қантты заттарды ашыту жолмен алу. Осы зат атауы"],
  ["метанол", "Өте улы зат, азғана мөлшері адамды соқыр етуі немесе өлімге душар етуі мүмкін. \
  Өзіне тән иісі бар, мөлдір сұйықтық, қайнау температурасы 64.5."],
  ["этиленгликоль", "Түссіз, тәтті дәмі бар, қайнау температурасы 198 болатын қоаймалжың сұйықтық. Суда жақсы ериді және кез-келген қатынаста сумен араласады. \
  нәтижеде судың қату температурасын төмендетеді. Яғни антифриз қоспаларын жасауда қолданады. Өте улы зат!"],
  ["глицерин", "Түссіз, шырын тәріздес, тәтті дәмі бар, су мен этанолда жақсы еритін зат. 290С температурада қайнайды, кез келген қатынаста сумен араласады."],
  ["этиленгликоль", "Лавсан талшығы және автомобиль радиаторларына пайдаланатын антифриз алуға қолданылады"],
  ["глицерин", "Нитроглицерин және динамит алуға, антифриз жасауда, парфюмерия мен тамақ өнеркәсібінде маталарға жұмсақтық пен созылғыштық беретін зат \
  ретінде қолданылады"],
  ["нитроглицерин", "Бұл глицерин туындысының 1% ерітіндісі мен таблеткалары медицинада қантамырларын кеңейткіш ретінде пайдаланады"],
  ["құмырсқа қышқылы", "Жеңіл қайнайтын(100.8С) өзіне тән өткір иісі бар сұйықтық-қышқыл. Теріге тису күйдіреді, оның буы тыныс алу мүшелерін тітркендіреді. Суда жақсы ериді \
  карбон қышқылдарының арасында мейлінше күшті қышқыл. Қүмырсқаның улы бездерінде, қалақай өсімдігінде, қарағайдың қалқан жапырақтарында, \
  тер мен зәр қүрамында болады"],
  ["сірке қышқылы", "Суда жақсы еритін, өткір иісті, түссіз сұйықтық. Бұл қышқылдың (5-9%) ерітіндісі асханада сіркесу, (70-80%) ерітіндісі сірке эссенциясы \
  деген атпен бізге белгілі. Қүрамында спирті бар заттардың қышқылдық ашуы нәтижесінде түзіледі."],
  ["құмырсқа қышқылы", "Бұл зат тамақ, тері, фармацевтика, медицинада қолданылады. Бұл заттың сутек пероксидінің қоспасының заласыздандырғыш қасиеті бар. Тамақ, тері, фармацевтика, медицинада қолданылады."],
  ["сірке қышқылы", "Бұл затты пластмассалар және жасанды талшықтар алуда қолданылады. Тұрлі металл ацетаттарын маталарды бояуға пайдаланады. Сонымен қатар \
  сірке қышқылы тамақ өнеркәсібі мен тұрмыста кең қолдансықа ие. "],
  ["күрделі эфирлер", "Гүлдерге, жемістер мен жидектерге хош иіс беретін - олардың құрамындағы осы заттар."],
  ["этерификация", "Карбон қышқылдары мен спирттердің әрекеттесіп эфир түзу реакциясы не деп аталады"],
  ["майлар", "Глицерин мен жоғары карбон қышқылдарынан түзілген күрделі эфирлердің атауы(көпше түрде)"],
  ["4", "Алкандардың алғашқы нешеуі иіссіз газдар? Санмен көрсетіңіз"],
  ["15", "Алкандардың C\u2085 тен бастап нешінші алканға дейін өзіне тән иісі бар сұйықтықтар. Санмен көрсетіңіз"],
  ["метан", "Шалшық газы, кен газы, табиғи газ негізге құрам бөлігі"],
  ["газ", "Қалыпты жағдайда циклопропан және циклобутан күйі - жауапты жекеше түрде жазыңыз"],
  ["сұйық", "Қалыпты жағдайда циклопентан және циклогексан күйі - жауапты жекеше түрде жазыңыз(Негізі бұл циклогептан және де біразы осы күйді кітапта осы екеуінін \
  күйі ғана айтылған)"],
  ["циклопропан", "Осы циклоалканды наркоз ретінде қолданады."],
  ["газ", "Алкендердің алғашқы 3 мүшесі күйі(этилен, пропен, бутен)"],
  ["Марковников", "Реакцияда сутек атомдарының сутек атомдарының көп орналасатын көміртекке бару ережесі ... ережесі деп аталады"],
  ["этилен", "Бұл газ көкөніс және жемістердің пісуін тездетеді"],
  ["изопрен", "Табиғи көксағызды ыдыратқанда май тәрізді зат 2-метилбутадиен-1.3 алынады, басқа атауы"],
  ["сұйық", "Молекуласында 15-ке дейін көміртек атомдары болатын спирттер күйі, (кітап бойынша 15 ал негезі 12 ау) "],
  ["мақұл", "Спирттер индикатор түсін өзгертпейді. Мақұл деп жазыңыз"],
  ["бензой қышқылы", "Мүкжидек пен итбүлдіргенде болатын табиғи консервант. Сусындар, жеміс-жидек өнімдерін, балық өнімдерін дайындауда қолданады. \
  Е-210 консерванты"],
  ["формальдегид", "Түссіз, өткір иісті улы зат. Бұл заттың 35-40% ерітіндісі формалин деп аталады. Бұл зат құмырсқа альдегиді, екінші атауы ?"],
  // ["", ""],

]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const question = document.querySelector('.question');
const answerId = document.getElementById('answer');
const points = document.querySelector('.points');
const rightAnswers = document.querySelector('.rightAnswer');
const nextBtn = document.querySelector('.nextBtn')
const submitBtn = document.querySelector('.submitBtn');
const revealAnswerBtn = document.querySelector('.giveUpBtn');
const answer = document.getElementById('answer');
const result = document.querySelector('.result');
const giveUpBtn = document.querySelector('.giveUpBtn');


function emptifyElement(a) {
  a.innerHTML = "";
}

function App() {
  let i = 0;
  let newArr = shuffleArray(data);
  let pickedQuestion = undefined;
  let answered = true;
  let pointsValue = 0;

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (answered == true) {
    result.classList.remove('lightcoral');
    result.classList.remove('lightgreen');
    question.classList.remove('lightcoral');
    question.classList.remove('lightgreen');
      emptifyElement(question);    
    if (i == newArr.length){
      newArr = shuffleArray(data);
      i=0;
    } 
    pickedQuestion = newArr[i];
    i++;
    if  (pickedQuestion[1][0] == '.') {
      const photo = document.createElement('img');
      photo.setAttribute('src', `${pickedQuestion[1]}`);
      question.appendChild(photo);
    }
    else {
    const questText = document.createElement('h4');
    questText.innerHTML = pickedQuestion[1];
    question.appendChild(questText);
    }
    answered = false;
    answer.value = "";
  }
  })

  submitBtn.addEventListener('click', () => {
    if (answer.value.toLowerCase() == pickedQuestion[0]){
      question.classList.remove('lightcoral');
      question.classList.add('lightgreen');
      result.classList.remove('lightcoral');
      result.classList.add('lightgreen');
      if (answered == false ) {
        pointsValue++;
        points.innerHTML = pointsValue;
      }
      answered = true;
      
    } else {
      question.classList.remove('lightgreen');
      question.classList.add('lightcoral');
      result.classList.remove('lightgreen');
      result.classList.add('lightcoral');
      pointsValue--;
      points.innerHTML = pointsValue;
    }
  })

  giveUpBtn.addEventListener('click', () => {
    
    if (answered == false) {
      answer.value = pickedQuestion[0];
      pointsValue--;
      points.innerHTML = pointsValue;
    
    }
    answered = true;
    
  })


}

App();