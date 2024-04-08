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
  ["Көмір(кокс) және құммен Ca\u2083(PO\u2084)\u2082 ті араластырып электр пешінде 1500С-те \
  Ca\u2083(PO\u2084)\u2082 + C + SiO\u2082 -> CaSiO\u2083 + P + ?", "CO"],
  ["Қызыл фосфор - сіріңке өндірісінің шикізаты. Оны шыны ұнтағы мен желімге араластырып, қорапшаның \
  бүйір бетіне жағады. Құрамында калий хлораты бар KClO\u2083 мен күкірті бар сіріңкенің басын фосфорға \
  үйкегенде, сіріңке тұтанады. P + KClO\u2083 -> KCl + ?", "P2O5"],
  ["Осы зат түссіз кристалды зат(балқу Т = 42С). Суда өте жақсы ериді. Бұл зат \
  үшнегізді қышқыл, орта дәрежелі электролит.", "H3PO4"],
  ["Фосфор қышқылын мен оның тұздарына сапалық реакция ретінде қолданылатын зат", 
  "Ag3PO4"],
  ["Бұл қышқылды тамақ өнеркәсібінде алкогольсіз сусындарға қосады. Органикалық синтезде \
  өршіткі рөлін атқарады. Минералды тыңайтқыш алу үшін қолданылады.", "H3PO4"],
  ["Бұл фосфор қосылысын үй жануарларына арналған дәрумендердің құрамына қосады. \
  Және де тіс пасталарының және тісті пломбалаушы материалдардың құрамына кіреді",
   "Ca3(PO4)2"],
  ["Жемірілуден қорғау үшін темір бұйымдарының бетін натрий фосфатымен өңдейді және \
  оны отқа төзімді бояуларының құрамына қосады. Бірінші топ фосфаты", "Na3PO4"],
  ["H\u2083PO3 + NaOH -> ? + H\u2082O", "NaH2PO4"],
  ["H\u2083POu2084 + 2NaOH -> ? + H\u2082O", "Na2HPO4"],
  ["H\u2083POu2084 + 3NaOH -> ? + H\u2082O", "Na3PO4"],
  ["Na\u2082HPO\u2084 + NaOH -> ? + H\u2082O", "Na3PO4"],
  ["NaH\u2082PO\u2084 -> Na\u2083PO\u2084 + ?", "H3PO4"],
  ["Кремний бос күйінде кездеспейді, ең кең тараған қосылысы  кремнезем(шақпақтас \
    кварц, құм,). Осы қосылыс формуласы","SiO2"],
  ["SiO\u2082 + Mg -> ? + Si", "MgO"],
  ["SiO\u2082 + C -> Si + ?", "CO"],
  ["SiCl\u2084 + Zn -> Si + ?", "ZnCl2"],
  ["Si + N\u2082 -> ?", "Si3N4"],
  ["Si + C-> ?", "SiC"],
  ["Si + KOH + H\u2082O -> K\u2082SiO\u2083 + ?", "H2"],
  ["Mg + Si -> ?", "Mg2Si"],
  ["Карборунд қырнауыш, отқа төзімді заттар алуда, радиотехникада, сондай-ақ \
  медицинада пломбалар мен платмасса протездерді егеу үшін пайдаланылады. Осы зат \
  формуласы", "SiC"],
  ["Осы зат, химиялық тұрақты, отқа төзімді иатериал ретінде қиын балқитын құймалар алуда, \
  жоғары температураға төзімді жартылай өткізгіштер жасауда қолданылады. Бұл \
  зат нитрид", "Si3N4"],
  ["SiO\u2082 + NaOH -> ? + H\u2082O", "Na2SiO3"],
  ["Силикаттардан тек натрий силикаты және осы силикат суда ериді. Бұл тұздар шыны тәріздес \
  массаларға ұқсас болғандықтан - ерімтал шыны, ал коцентрлі ерітінділері сұйық \
  шыны деп аталады. Суда еритін екішні силикат формуласы", "K2SiO3"],
  ["Еритін силикаттардан көп қолданылатыны. Оның сулы ерітіндісі силикат желімі, \
  ағаштар мен маталарды от пен су әсерінен қорғайтын зат ретінде қолданылады.", "Na2SiO3"],
  ["ағаш спирті формуласы", "CH3OH"],
  ["медициналық немесе шарап спирті формуласы", "C2H5OH"],
  ["Фосфорит және апатиттердің құрамына кіретін қосылыс. Формуласын көрсетіңіз", "Ca3(PO4)2"],
  

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
      photo.setAttribute('src', `${pickedQuestion[1]}`);
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
    console.log(inputValue.value, 'and', pickedQuestion[1]);
    if (inputValue.value == pickedQuestion[1]){
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
    inputValue.value = pickedQuestion[1];
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
