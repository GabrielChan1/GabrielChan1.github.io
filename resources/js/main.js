let linuxHeadline = document.getElementById('headline-linux');
let twitterHeadline = document.getElementById('headline-twitter');
let trashHeadline = document.getElementById('headline-trash');
let portfolioHeadline = document.getElementById('headline-portfolio');

let linuxRightArrow = document.getElementById('arrow-right-linux');
let linuxDownArrow = document.getElementById('arrow-down-linux');
let twitterRightArrow = document.getElementById('arrow-right-twitter');
let twitterDownArrow = document.getElementById('arrow-down-twitter');
let trashRightArrow = document.getElementById('arrow-right-trash');
let trashDownArrow = document.getElementById('arrow-down-trash');
let portfolioRightArrow = document.getElementById('arrow-right-portfolio');
let portfolioDownArrow = document.getElementById('arrow-down-portfolio');

let linuxContent = document.getElementById('linux-cluster-monitor');
let twitterContent = document.getElementById('twitter-crud-application');
let trashContent = document.getElementById('trash-panda-video-game');
let portfolioContent = document.getElementById('portfolio-website');

let pythonLogo = document.getElementById('python-logo');
let javaLogo = document.getElementById('java-logo');
let htmlLogo = document.getElementById('html-logo');
let cssLogo = document.getElementById('css-logo');
let javascriptLogo = document.getElementById('javascript-logo');
let gitLogo = document.getElementById('git-logo');
let githubLogo = document.getElementById('github-logo');
let agileLogo = document.getElementById('agile-logo');
let sqlLogo = document.getElementById('sql-logo');
let cLogo = document.getElementById('c-logo');
let bashLogo = document.getElementById('bash-logo');
let dockerLogo = document.getElementById('docker-logo');
let mavenLogo = document.getElementById('maven-logo');
let unityLogo = document.getElementById('unity-logo');

let pythonOverlay = document.getElementById('python-overlay');
let javaOverlay = document.getElementById('java-overlay');
let htmlOverlay = document.getElementById('html-overlay');
let cssOverlay = document.getElementById('css-overlay');
let javascriptOverlay = document.getElementById('javascript-overlay');
let gitOverlay = document.getElementById('git-overlay');
let githubOverlay = document.getElementById('github-overlay');
let agileOverlay = document.getElementById('agile-overlay');
let sqlOverlay = document.getElementById('sql-overlay');
let cOverlay = document.getElementById('c-overlay');
let bashOverlay = document.getElementById('bash-overlay');
let dockerOverlay = document.getElementById('docker-overlay');
let mavenOverlay = document.getElementById('maven-overlay');
let unityOverlay = document.getElementById('unity-overlay');

linuxHeadline.addEventListener('click', () => {
    if (linuxRightArrow.style.display == 'none') {
        linuxContent.style.display = 'none';
        linuxDownArrow.style.display = 'none';
        linuxRightArrow.style.display = 'block';
    }
    else {
        linuxContent.style.display = 'block';
        linuxDownArrow.style.display = 'block';
        linuxRightArrow.style.display = 'none';
    }
});

twitterHeadline.addEventListener('click', () => {
    if (twitterRightArrow.style.display == 'none') {
        twitterContent.style.display = 'none';
        twitterDownArrow.style.display = 'none';
        twitterRightArrow.style.display = 'block';
    }
    else {
        twitterContent.style.display = 'block';
        twitterDownArrow.style.display = 'block';
        twitterRightArrow.style.display = 'none';
    }
});

trashHeadline.addEventListener('click', () => {
    if (trashRightArrow.style.display == 'none') {
        trashContent.style.display = 'none';
        trashDownArrow.style.display = 'none';
        trashRightArrow.style.display = 'block';
    }
    else {
        trashContent.style.display = 'block';
        trashDownArrow.style.display = 'block';
        trashRightArrow.style.display = 'none';
    }
});

portfolioHeadline.addEventListener('click', () => {
    if (portfolioRightArrow.style.display == 'none') {
        portfolioContent.style.display = 'none';
        portfolioDownArrow.style.display = 'none';
        portfolioRightArrow.style.display = 'block';
    }
    else {
        portfolioContent.style.display = 'block';
        portfolioDownArrow.style.display = 'block';
        portfolioRightArrow.style.display = 'none';
    }
});

pythonLogo.addEventListener('mouseover', () => {pythonOverlay.style.display = 'flex';});
pythonLogo.addEventListener('mouseout', () => {pythonOverlay.style.display = 'none';});
javaLogo.addEventListener('mouseover', () => {javaOverlay.style.display = 'flex';});
javaLogo.addEventListener('mouseout', () => {javaOverlay.style.display = 'none';});
htmlLogo.addEventListener('mouseover', () => {htmlOverlay.style.display = 'flex';});
htmlLogo.addEventListener('mouseout', () => {htmlOverlay.style.display = 'none';});
cssLogo.addEventListener('mouseover', () => {cssOverlay.style.display = 'flex';});
cssLogo.addEventListener('mouseout', () => {cssOverlay.style.display = 'none';});
javascriptLogo.addEventListener('mouseover', () => {javascriptOverlay.style.display = 'flex';});
javascriptLogo.addEventListener('mouseout', () => {javascriptOverlay.style.display = 'none';});
gitLogo.addEventListener('mouseover', () => {gitOverlay.style.display = 'flex';});
gitLogo.addEventListener('mouseout', () => {gitOverlay.style.display = 'none';});
githubLogo.addEventListener('mouseover', () => {githubOverlay.style.display = 'flex';});
githubLogo.addEventListener('mouseout', () => {githubOverlay.style.display = 'none';});
agileLogo.addEventListener('mouseover', () => {agileOverlay.style.display = 'flex';});
agileLogo.addEventListener('mouseout', () => {agileOverlay.style.display = 'none';});
sqlLogo.addEventListener('mouseover', () => {sqlOverlay.style.display = 'flex';});
sqlLogo.addEventListener('mouseout', () => {sqlOverlay.style.display = 'none';});
cLogo.addEventListener('mouseover', () => {cOverlay.style.display = 'flex';});
cLogo.addEventListener('mouseout', () => {cOverlay.style.display = 'none';});
bashLogo.addEventListener('mouseover', () => {bashOverlay.style.display = 'flex';});
bashLogo.addEventListener('mouseout', () => {bashOverlay.style.display = 'none';});
dockerLogo.addEventListener('mouseover', () => {dockerOverlay.style.display = 'flex';});
dockerLogo.addEventListener('mouseout', () => {dockerOverlay.style.display = 'none';});
mavenLogo.addEventListener('mouseover', () => {mavenOverlay.style.display = 'flex';});
mavenLogo.addEventListener('mouseout', () => {mavenOverlay.style.display = 'none';});
unityLogo.addEventListener('mouseover', () => {unityOverlay.style.display = 'flex';});
unityLogo.addEventListener('mouseout', () => {unityOverlay.style.display = 'none';});