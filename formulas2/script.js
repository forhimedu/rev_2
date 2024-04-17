const question = document.querySelector('.question');
const answerBoard = document.querySelector('.answerBoard');
const inputValue = document.querySelector('.inputValue');
const switchBtn = document.querySelector('.switchBtn');
const submitBtn = document.querySelector('.submitBtn');
const nextBtn = document.querySelector('.nextBtn');
const revealAnswerBtn = document.querySelector('.revealAnswerBtn');
const points = document.querySelector('.pointValue')
const pointsContainer = document.querySelector('.points')

const data = [
  ["1000C-та CH\u2084 -> ? + H\u2082", "C"],
  ["1500C-та CH\u2084 -> ? + H\u2082", "C2H2"],
  ["Оттек жеткіліксіз жағдайда 850C-та 2CH\u2084 + O\u2082 -> ? + H\u2082", "CO"],
  ["Оттек жеткіліксіз жағдайда 850C-та 2CH\u2084 + O\u2082 -> CO + ?", "H2"],
  ["550-650С өршіткі қатысында CH\u2084 -> ? + H\u2082", "C2H4"],
  ["550C Ni катализатор қатысында CH\u2083-CH\u2083 -> ? + H\u2082", "C2H4"],
  ["Сәл тәтті дәмі бар түссіз газ. Ауадан аздап жеңіл, суда аз еритін алкен", "C2H4"],
  ["Жеміс-жидектердің пісіп жетілуін тездететін алкен", "C2H4"],
  ["Бұл галогентуынды газға оңай айналатын сұйықтық, тез ұшып кететіндіктен қатты суытады \
  Сондықтан медицинада анестезия ретінде қолданады.", "C2H5Cl"],
  ["Түссіз газ, ауаға қарағанда жеңіл. Химиялық таза түрінде әлсіз эфирдің иісіне ие. \
  Бұл газ көптеген сұйықтықтарда ериді. Оны болаттан жасалған баллондарда сақтайды. \
  Металдарды дәнекерлеуде қолданылады.", "C2H2"],
  ["CaC\u2082 + H\u2082O -> Ca(OH)\u2082 + ?", "C2H2"],
  ["Al\u2084C\u2083 + H\u2082O -> Al(OH)\u2083 + ?", "CH4"],
  ["Cu, ZnO қатысында 220-330C, 5-20МПа: CO + H\u2082 -> ?", "CH3OH"],
  ["Техникада өндірілу көлемі бойынша басқа органикалық заттардың ішінде бірінші орын алады. \
  Өндірудің маңыздысы - қантты заттарды ашыту жолмен алу. Осы зат атауы", "C2H5OH"],
  ["C\u2086H\u2081\u2082O\u2086 -> ? + CO\u2082", "C2H5OH"],
  ["C\u2086H\u2081\u2082O\u2086 -> C\u2082H\u2085OH + ?", "CO2"],
  ["Өте улы зат, азғана мөлшері адамды соқыр етуі немесе өлімге душар етуі мүмкін. \
  Өзіне тән иісі бар, мөлдір сұйықтық, қайнау температурасы 64.5.", "CH3OH"],
  ["H\u2082SO\u2084(конц) және (t>140C) 140C-тан жоғары температура: \
  CH\u2083CH\u2082OH -> ? + H\u2082O ", "C2H4"],
  ["Стреарин қышқылы формуласы", "C17H35COOH"],
  ["Олеин қышқылы формуласы", "C17H33COOH"],
  ["Линол қышқылы формуласы", "C17H31COOH"],
  ["Линолен қышқылы формуласы", "C17H29COOH"],
  ["Сәл ғана тәтті иісі бар, түссіз, ауадан аздап жеңіл, суда аз еритін газ", "C2H4"],
]

function App() { 
  let i = 0;
  let newArr = shuffleArray(data);
  let pickedQuestion = undefined;
  let answered = true;
  let pointsValue = 0;


  switchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValue.value) {
      answerBoard.innerHTML = "";
      answerBoard.innerHTML = switchToFormula(inputValue.value);
    }
  })

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (answered == true) {
    pointsContainer.classList.remove('red');
    pointsContainer.classList.remove('green');
      emptifyElement(question);    
    if (i == newArr.length){
      newArr = shuffleArray(data);
      i=0;
    } 
    pickedQuestion = newArr[i];
    i++;
    if  (pickedQuestion[0][0] == '.') {
      const photo = document.createElement('img');
      photo.setAttribute('src', `${pickedQuestion[2]}`);
      question.appendChild(photo);
    }
    else {
    const questText = document.createElement('h4');
    questText.innerHTML = pickedQuestion[0];
    question.appendChild(questText);
    }
    answered = false;
    inputValue.value = "";
  }
  })

  submitBtn.addEventListener('click', () => {
    console.log(inputValue.value, 'and', pickedQuestion[2]);
    if (inputValue.value == pickedQuestion[2]){
      pointsContainer.classList.remove('red');
      pointsContainer.classList.add('green');
      if (answered == false ) {
        pointsValue++;
        points.innerHTML = pointsValue;
      }
      answered = true;
      
    } else {
      pointsContainer.classList.remove('green');
      pointsContainer.classList.add('red');
      pointsValue--;
      points.innerHTML = pointsValue;
    }
  })

  revealAnswerBtn.addEventListener('click', () => {
    inputValue.value = pickedQuestion[2];
    if (answered == false) {
      pointsValue--;
      points.innerHTML = pointsValue;
    }
    answered = true;
    
  })





}
App();

function emptifyElement(a) {
  a.innerHTML = "";
}

function switchToFormula(compound) {
  let formula = "";
  for (let i = 0; i < compound.length; i++){
    if (isNumberChar(compound[i])) {
      formula+=`<sub>${compound[i]}</sub>`
    } else {
      formula+=compound[i];
    }
  }
  return formula;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function isNumberChar(a) {
  if (a<=9 && a>=0){
    return true;
  } else {
    return false;
  }
}
