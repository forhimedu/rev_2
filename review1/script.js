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
  ["Азот молекуласында неше байланыс бар? Санмен көрсетіңіз", "3"],
  ["Азот қышқылында азоттың тотығу дәрежесі +5 ке тең, ал валенттілігі нешеге тең? Санмен көрсетіңіз", "4"],
  ["Барлық нитраттар - термиялық тұрақсыз заттар. Қыздарғанда оттек бөліп ыдырайтындықтан нитраттар күшті тотықтырғыштар болып табылады. \
  Егер балқыған ?..-ға (нитраттар басқа атауы) көмірдің немесе күкірттің түйірлерін салса, олар тұтанып жанып кетеді.", ""],
  // ["Бұл элемент", ""],
  // ["", ""],
  // ["", ""],
  // ["", ""],

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