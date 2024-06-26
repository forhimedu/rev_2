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
  // 1-group usage 9th grade book
  ["Түсі ақ, өзі борпылдақ келетін бұл ұнтақ құрылыс марелиалы ретінде қолданылады. Осы зат өсімдік зиянкестері \
  мен ауруларына қарсы қолданылатын бордо қоспасын жасауға пайдаланады.", "Ca(OH)2"],
  ["мырыш гидроксохлориді формуласы", "Zn(OH)Cl"],
  ["алюминий дигидидроксонитраты", "Al(OH)2NO3"],
  ["Күйдіргіш натр, каутикалық сода - ақ түсті ылғал тартқыш қатты зат.", "NaOH"],
  ["Натрий карбонаты Na\u2082CO\u2083 және осы зат - химия өнеркәсібінің тонналап шығарылатын өнімдері, \
  химия өнеркәсібінін әртүрлі саласында, сабын жасауда, қағаз, тоқыма және тамақ \
  өнеркәсібінде паидаланылады(1-топ қосылысы)", "NaHCO3"],
  ["Осы зат тыңайтқыш ретінде, шыны өндірісінде және тамақ өнімдерінің \
  консерванты ретінде қолданылады(1-топ қосылысы)", "NaNO3"],
  ["Бұл зат тамақ өнімдеріне дәм беретін және оларды сақтайтын \
   өте ертеден қолданылып келе жаткан зат. Бұл зат концентрациясы әртүрлі \
   ерітінділері медицинада физиологиялық ерітінді ретінде, жарақаттарды жууда, \
   компресс жасауда қолданылады(1-топ қосылысы)", "NaCl"],
  ["Бұл зат тау жыныстарынан алтынды гидрометаллургиялық әдіспен \
  бөліп алу кезінде және гальванотехникада (күмістеу, алтындау) қолданады(1-топ қосылысы)", "NaCN"],
  ["Бұл қосылыс теміржол бойын зиянды өсімдіктерден сақтау үшін пайдаланылады.(1-топ қосылысы)", "NaClO3"],
  ["Бұл қосылыс сұйық сабьн алуда қолданылады(1-топ қосылысы)", "KOH"],
  ["Өндірілетін элемен түздарының 90%-ы минералды тьңайтқыш ретінде қолданылады. Осы \
  элемент өсімдіктердегі (фотосинтез процесін тездетіп, көмірсулардың жиналуына \
    көмектеседі(1-топ элементі)", "K"],
  ["Бұл қосылыс өсімдік күлінде кездеседі және жуғыш қабілеті болғандықтан сабынға қосады(1-топ қосылысы)",
  "K2CO3"],
  ["Калий хлораты KClO\u2083 және осы қосылыс (басқа калий тұзы) пиротехникада қолданылады. \
  Калий ионы жүрек пен жүйке жүйесінің қалыпты жүмысын қамтамасыз етеді(1-топ қосылысы)", "KNO3"],
  ["'Марганцовка' медицинада залалсыздандырғьпп зат ретінде қолданылса, химияда көптеген \
  химиялық реакцияларға қатысатын күшті тотықтырғыш(1-топ қосылысы)","KMnO4"],
  //2-group usage grade 9
  ["Бұл қосылыс ағартқыш және залалсыздандырғыш ретінде көп қолданылады(2-топ қосылысы)","CaOCl2"],

  ["Қатты қиын балқитын(2050С) ақ түсті зат. Алу үшін алюминий ұнтағын оттекте жағады","Al2O3"],
  ["Түссіз, өткір иісті, ауадан 1.26 есе ауыр газ. Суда жақсы \
  ериді (1 көлем суда 500 көлемі ериді).Галогенсутек. ","HCl"],
  ["Бұл қосылыс шіруден сақтау үшін ағаштарға сіңіріледі. Сондай-ақ металдарды \
  дәнекерлеу үшін пайдаланылады","ZnCl2"],
  ["Көксағызды осы элементпен вулканизациялап резеңке алады. Сондай-ақ сіріңке, пиротехникада, \
  қопарылғыш заттар алуда кеңінен қолданылады. Бояулар, пигменттер, жасанды талшықтар \
  дайындау үшін қолданылады. Медицинада тері ауруларын емдеу үшін пайдаланады","S"],
  ["Бұл газдың бактерияларды жоятын қасиеті бар. Сондықтан көкөніс қоймаларын \
  зарарсыздандырып, жеміс-жидектерді шіруден қорғау үшін қолданылады. Бұл газды \
  және күкіртті қышқылдыың тұздарын жүннен тоқылған маталарды, қағазды, сабанды ағарту \
  үшін пайдаланады.","SO2"],
  ["Түссіз сұйықтық, 17С-та ақ түсті кристал затқа айналады. Өті ылғал тартқыш зат, \
  суды белсенді түрде сіңіріп, көп мөлшерде жылу бөледі, нәтижесінде күшті қышқыл түзіледі","SO3"],
  ["Түссіз, жағымсыз иісті, улы газ. Табиғатта бұл қосылыс нәруызды заттар шірігенде түзіледі, \
  минералды сулардың құрамында кездеседі. Кәдімгі жағдайда 1 көлем суда 2.5 көлемі ери алады",
  "H2S"],
  ["Бұл заттың судағы ерітіндісі ревматизм мен тері ауруларын емдеуде медицинада \
  ұзақ уақыт қолданылып келеді. Таза күйінде шіріген жұмыртқа иісті","H2S"],
  ["Түссіз, май тәрізді, ұшпайтын, иіссіз сұйықтық. Судан шамамен 5.4 еседей ауыр. Сумен \
  кез-келген қатынаста араласады. Суда еріткенде көп мөлшерде жылу бөлінеді, соның әсерінен \
  жан-жаққа шашырайды. Осы заттың 70% көбі концентрлі, ал азы сұйылтылған", "H2SO4"],
  ["Бұл қосылыспен темір, алюминий және кейбір белсенді металдар кәдімгі жағдайда концентрлі ерітіндісімен \
  әрекеттеспейді(енжарланады). Сондықтан оны болаттан жасалған цистерналарда сақтайды және тасымалдайды. \
  Бұл зат қағазды көмірлендіреді, киім мен теріні зақымдайды", "H2SO4"],
  ["Бұл қышқыл металлургияда, мұнай өнімдерін тазартуда, аккумуляторда қышқыл электролит ретінде \
  қолданылады. Бұл қышөыл тұздары минералды тыңайтқыштар алуда, құрылыста, медицинада, \
  ауылшаруашылық зиянкестермен күресуде, сода мен шыны өндіруде қолданылады", "H2SO4"],
  ["Мыс купоросы (CuSO\u2084*5H\u2082O) және темір купоросы (FeSO\u2084*5H\u2082O) \
  ауылшаруышылықта, ағаштарға антисептик ретінде сіңіріледі, \
  Ащы немесе ағылшын тұзы (X\u2082SO\u2084*7H2O)медицинада іш жүргізетін дәрі ретінде және бояулар алуда \
  қолданылады. Ащы тұзындағы метал символы\
  (сонымен қатар тұз, сірке қышқылдары жуғыш заттар, қопарылғыш заттар алуда қолданылады)","Mg"],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],
  // ["",""],

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