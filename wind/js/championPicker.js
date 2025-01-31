const champions = [
    '가렌', '갈리오', '갱플랭크', '그라가스', '그레이브즈', '그웬', '나르', '나미', '나서스', '노틸러스',
    '녹턴', '누누와 윌럼프', '니달리', '니코', '닐라', '다리우스', '다이애나', '드레이븐', '라이즈', '라칸',
    '람머스', '럭스', '럼블', '레나타 글라스크', '레넥톤', '레오나', '렉사이', '렐', '렝가', '루시안',
    '룰루', '르블랑', '리 신', '리븐', '리산드라', '릴리아', '마스터 이', '마오카이', '말자하', '말파이트',
    '모데카이저', '모르가나', '문도 박사', '미스 포츈', '바드', '바루스', '바이', '베이가', '베인', '벨베스',
    '벨코즈', '볼리베어', '브라움', '브랜드', '블라디미르', '블리츠크랭크', '비에고', '빅토르', '뽀삐', '사미라',
    '사이온', '사일러스', '샤코', '세나', '세라핀', '세주아니', '세트', '소나', '소라카', '쉔',
    '쉬바나', '스웨인', '스카너', '시비르', '신 짜오', '신드라', '신지드', '쓰레쉬', '아리', '아무무',
    '아우렐리온 솔', '아이번', '아지르', '아칼리', '아크샨', '아트록스', '아펠리오스', '알리스타', '애니', '애니비아',
    '애쉬', '야스오', '에코', '엘리스', '오공', '오른', '오리아나', '올라프', '요네', '요릭',
    '우디르', '우르곳', '워윅', '유미', '이렐리아', '이블린', '이즈리얼', '일라오이', '자르반 4세', '자야',
    '자이라', '자크', '잔나', '잭스', '제드', '제라스', '제리', '제이스', '조이', '직스',
    '진', '질리언', '징크스', '초가스', '카르마', '카밀', '카사딘', '카시오페아', '카이사', '카직스',
    '카타리나', '칼리스타', '케넨', '케이틀린', '케인', '케일', '코그모', '코르키', '퀸', '클레드',
    '키아나', '킨드레드', '타릭', '탈론', '탈리야', '탐 켄치', '트런들', '트리스타나', '트린다미어', '트위스티드 페이트',
    '트위치', '티모', '파이크', '판테온', '피들스틱', '피오라', '피즈', '하이머딩거', '헤카림', '흐웨이' ,'크산테',
    '밀리오', '나피리', '브라이어', '스몰더', '오로라', '멜'
];

const championMapping = {
    '가렌': 'Garen', '갈리오': 'Galio', '갱플랭크': 'Gangplank', '그라가스': 'Gragas', '그레이브즈': 'Graves',
    '그웬': 'Gwen', '나르': 'Gnar', '나미': 'Nami', '나서스': 'Nasus', '노틸러스': 'Nautilus',
    '녹턴': 'Nocturne', '누누와 윌럼프': 'Nunu', '니달리': 'Nidalee', '니코': 'Neeko', '닐라': 'Nilah',
    '다리우스': 'Darius', '다이애나': 'Diana', '드레이븐': 'Draven', '라이즈': 'Ryze', '라칸': 'Rakan',
    '람머스': 'Rammus', '럭스': 'Lux', '럼블': 'Rumble', '레나타 글라스크': 'Renata', '레넥톤': 'Renekton',
    '레오나': 'Leona', '렉사이': 'RekSai', '렐': 'Rell', '렝가': 'Rengar', '루시안': 'Lucian',
    '룰루': 'Lulu', '르블랑': 'Leblanc', '리 신': 'LeeSin', '리븐': 'Riven', '리산드라': 'Lissandra',
    '릴리아': 'Lillia', '마스터 이': 'MasterYi', '마오카이': 'Maokai', '말자하': 'Malzahar', '말파이트': 'Malphite',
    '모데카이저': 'Mordekaiser', '모르가나': 'Morgana', '문도 박사': 'DrMundo', '미스 포츈': 'MissFortune', '바드': 'Bard',
    '바루스': 'Varus', '바이': 'Vi', '베이가': 'Veigar', '베인': 'Vayne', '벨베스': 'Belveth',
    '벨코즈': 'Velkoz', '볼리베어': 'Volibear', '브라움': 'Braum', '브랜드': 'Brand', '블라디미르': 'Vladimir',
    '블리츠크랭크': 'Blitzcrank', '비에고': 'Viego', '빅토르': 'Viktor', '뽀삐': 'Poppy', '사미라': 'Samira',
    '사이온': 'Sion', '사일러스': 'Sylas', '샤코': 'Shaco', '세나': 'Senna', '세라핀': 'Seraphine',
    '세주아니': 'Sejuani', '세트': 'Sett', '소나': 'Sona', '소라카': 'Soraka', '쉔': 'Shen',
    '쉬바나': 'Shyvana', '스웨인': 'Swain', '스카너': 'Skarner', '시비르': 'Sivir', '신 짜오': 'XinZhao',
    '신드라': 'Syndra', '신지드': 'Singed', '쓰레쉬': 'Thresh', '아리': 'Ahri', '아무무': 'Amumu',
    '아우렐리온 솔': 'AurelionSol', '아이번': 'Ivern', '아지르': 'Azir', '아칼리': 'Akali', '아크샨': 'Akshan',
    '아트록스': 'Aatrox', '아펠리오스': 'Aphelios', '알리스타': 'Alistar', '애니': 'Annie', '애니비아': 'Anivia',
    '애쉬': 'Ashe', '야스오': 'Yasuo', '에코': 'Ekko', '엘리스': 'Elise', '오공': 'MonkeyKing',
    '오른': 'Ornn', '오리아나': 'Orianna', '올라프': 'Olaf', '요네': 'Yone', '요릭': 'Yorick',
    '우디르': 'Udyr', '우르곳': 'Urgot', '워윅': 'Warwick', '유미': 'Yuumi', '이렐리아': 'Irelia',
    '이블린': 'Evelynn', '이즈리얼': 'Ezreal', '일라오이': 'Illaoi', '자르반 4세': 'JarvanIV', '자야': 'Xayah',
    '자이라': 'Zyra', '자크': 'Zac', '잔나': 'Janna', '잭스': 'Jax', '제드': 'Zed',
    '제라스': 'Xerath', '제리': 'Zeri', '제이스': 'Jayce', '조이': 'Zoe', '직스': 'Ziggs',
    '진': 'Jhin', '질리언': 'Zilean', '징크스': 'Jinx', '초가스': 'Chogath', '카르마': 'Karma',
    '카밀': 'Camille', '카사딘': 'Kassadin', '카시오페아': 'Cassiopeia', '카이사': 'Kaisa', '카직스': 'Khazix',
    '카타리나': 'Katarina', '칼리스타': 'Kalista', '케넨': 'Kennen', '케이틀린': 'Caitlyn', '케인': 'Kayn',
    '케일': 'Kayle', '코그모': 'KogMaw', '코르키': 'Corki', '퀸': 'Quinn', '클레드': 'Kled',
    '키아나': 'Qiyana', '킨드레드': 'Kindred', '타릭': 'Taric', '탈론': 'Talon', '탈리야': 'Taliyah',
    '탐 켄치': 'TahmKench', '트런들': 'Trundle', '트리스타나': 'Tristana', '트린다미어': 'Tryndamere', '트위스티드 페이트': 'TwistedFate',
    '트위치': 'Twitch', '티모': 'Teemo', '파이크': 'Pyke', '판테온': 'Pantheon', '피들스틱': 'Fiddlesticks',
    '피오라': 'Fiora', '피즈': 'Fizz', '하이머딩거': 'Heimerdinger', '헤카림': 'Hecarim', '흐웨이': 'Hwei',
    '크산테': 'KSante', '밀리오': 'Milio', '나피리': 'Naafiri', '브라이어': 'Briar', '스몰더': 'Smolder', '오로라' : 'Aurora', '암베사' : 'Ambessa','멜' : 'Mel'
};

let teamA = [];
let teamB = [];
let remainingSwaps = [];
let usedChampions = new Set();

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomChampion() {
    let champion;
    do {
        champion = champions[Math.floor(Math.random() * champions.length)];
    } while (usedChampions.has(champion));
    usedChampions.add(champion);
    return champion;
}

function initializeTeams() {
    teamA = [];
    teamB = [];
    usedChampions.clear();
    for (let i = 0; i < 10; i++) {
        teamA.push(getRandomChampion());
        teamB.push(getRandomChampion());
    }
    updateDisplay();
}

function updateDisplay() {
    updateTeamDisplay('A', teamA);
    updateTeamDisplay('B', teamB);
    document.getElementById('remainingSwapsA').textContent = remainingSwaps[0];
    document.getElementById('remainingSwapsB').textContent = remainingSwaps[1];
}

function updateTeamDisplay(team, champions) {
    const container = document.querySelector(`#team${team} .champions`);
    container.innerHTML = '';
    champions.forEach((champion, index) => {
        const championElement = document.createElement('div');
        championElement.className = 'champion';
        const englishName = championMapping[champion];
        championElement.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${englishName}_0.jpg" alt="${champion}">
            <div class="champion-info">
                <div class="champion-name">${champion}</div>
            </div>
        `;
        championElement.onclick = () => swapChampion(team, index);
        container.appendChild(championElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('drawButton').disabled = false;
});