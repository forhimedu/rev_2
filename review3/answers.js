const container = document.getElementById('container');

const data = [
  ["Арнайы легирленген ? жартылай өткізгіш аспаптарды дайындауда кең түрде қолданылады. ? — темір және түсті металдардың \
  көптеген құймаларының негізгі құрам бөлігі. Әдетте, ? құймалардың жемірілуге қарсы тұрақтылығын арттырады, олардың құйылу қасиетін жақсартады.", 
  "кремний"],
  ["Темір, мыс және алюминийдің ?-мен құймаларының маңызы (силумин) жоғары. ?-дің көп бөлігі кремний органикалық қосылыстармен силицидтерді \
  синтездеуге жұмсалады. Кремнезем және көптеген силикаттар шыны, цемент, қыш алу үшін, электротехникада және басқа өнеркәсіп салаларында қолданылады.", 
  "кремний"],
  ["? — заманауит ехникада бағалы жартылай өткізгіш материал. Ол диод, триод, кристалдық детекторлар жасау үшін қолданылады. ?-ді \
  қолданудың маңызды саласы — инфрақызыл сәуле шығаратын техниканы және инфрақызыл сәулелену детекторларын өндіру. Сондай-ақ көптеген құймалар мен \
  шыны алуда қолданылады.", "германий"],
  ["? — сирек кездесетін, шашырап орналасқан элемент. Жер қыртысында таралуы жөнінен 47-орыналады. Қалайының негізгі минералы — \
  касситерит(? тасы) SnO2, құрамында 78,8% ? бар. Табиғатта станнин (? колчеданы) Cu2FeSnS4 деп аталатын ? минералы \
  өте сирек кездеседі. Қазақстанда ?-ның бір ғана кен орны бар, ол Солтүстік Қазақстан облысының Айыртау ауданында орналасқан.", "қалайы"],
  ["Осы элементтің 40%-ы консерві қалбырын жасауға, қалғаны мойынтіректермен типографиялық құймалар өндірісіне жұмсалады. Элемент атауын жазыңыз", "қалайы"],
  ["Натрий станниті Na2SnO3·3H2O деп аталатын тұз маталарды бояу үшін пайдаланылады. 'Жаттадым' деп жазыңыз", "Жаттадым"],
  ["Қалайы оксиді SnO2 ыстыққа төзімді \
  эмальмен жылтыратпа дайындау үшін қолданылады. Жаттадым деп жазыңыз", "Жаттадым"],
  ["Кристалдық қалайы сульфиді SnS2 (“бекалтын”) алтын жалататын бояулардың құрамына кіреді. Жаттадым деп жазыңыз", "Жаттадым"],
  ["Жер қыртысында массасы бойынша 1,6·10–3% қорғасын бар. Қорғасынның 100-ден аса минералдары белгілі. Олардың негізгілері — галенит (қорғасынжылтыры) \
  PbS және оның химиялық туындылары — англезит (қорғасын купоросы, крокоит) PbSO4 және церуссит (“қорғасынның ақ кені”) PbCO3. Қорғасынға бай кен орындары\
   Риддер, Зыряновск және Алтай тауларында орналасқан. Полиметалл кен орындары: Текелі-Жоңғар Алатауы, Ащысай және Мырғалымсай, Қаратау жоталары. \
   Соңғы жылдары Орталық Қазақстанда қорғасынға бай кен орындары ашылды. Жаттадым деп жазыңыз", "Жаттадым"],
  ["Өнеркәсіпте кремнийді электр пештерде кремний оксидін кокспен тотықсыздандырып алады: \
    SiO<sub>2</sub>+2C=Si+2CO↑. Жаттадым", "Жаттадым"],
  ["Германий полиметалл, никель, вольфрам кендерінде және силикаттарда қоспа ретінде болады. Кенді байытудың күрделі және \
  қиын операциялары нәтижесінде германий оксидін бөліп алып, 600°С температурада сутекпен тотықсыздандырады:\
    GeO<sub>2</sub>+2H2Ge+2H<sub>2</sub>O  Жаттадым", "Жаттадым"],
  ["Алдымен кеннен қалайы диоксидін SnO2 бөліп алады. Содан кейін оны көмірмен немесе алюминиймен электр пешінде тотықсыздандырады\
  SnO<sub>2</sub>+2C -> Sn+2CO↑ \
   Жартылай өткізгіш ретінде қолданылатын өте таза қалайыны электрохимиялық әдіспен алады. Жаттадым", "Жаттадым"],
  ["Қорғасынды алу үшін қорғасын сульфидін PbS күйдіріп, соңынан алынған қорғасын(ІІ) оксидін РbО қорғасынға дейін тотықсыздандырады. \
  Содан кейін алынған қорғасынды тазартады. Қорғасын сульфидін өртегенде, негізінен, төмендегі реакцияжүреді:\
  2PbS+3O<sub>2</sub>=2PbO+2SO<sub>2</sub>↑  Жаттадым", "Жаттадым"],
  ["Қорғасын аккумуляторлар, зиянды газдар мен сұйықтықтарға төзімді зауыт аппаратураларын жасау үшін қолданылады. Қорғасын гамма-сәулелермен рентген \
  сәулелерін жақсы сіңіретіндіктен, радиоактивті заттарды сақтайтын контейнерлер, рентген кабинеттеріне қажетті аппаратура және т.б. жасау үшін қолданылады. \
  Қорғасынның көп бөлігі электр сымдарының сыртын жемірілуден және механикалық бүлінуден сақтау үшін қаптауға жұмсалады. \
  Қорғасыннан көптеген құймаларалады. Қорғасын(ІІ) оксидін РbО хрустальға және оптикалық шыныларға қосып, сыну бұрышы үлкен оптикалық аспаптар дайындайды.\
   Жаттадым", "Жаттадым"],
  ["Күкірт диоксиді — тағамдық қоспа. Халықаралық классификацияда күкірт диоксидіне E220 коды берілген, яғни ол азық-түлік қоспасы. \
  Бұл консервант бактериялармен зеңдердің өсіп-өнуін болдырмайды. Ол көкөністер мен жемістердің ферментативті қараюын тежейді, меланоидиндердің \
  түзілуін баяулатады. Тікелей тасымалдаудың алдында цитрус жемістердің барлық түрлері осы консервантпен өңделеді. Формуласы", "SO2"],

]

function App() {
  let i = 1;
  data.forEach(elem => {
    const a = document.createElement('p');
    a.classList.add('black');
    const text = `${i}. ${elem[0]} => [${elem[1]}]`
    a.innerHTML = text;
    container.appendChild(a);
    i++;
  })
}

App();
