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

  

];

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