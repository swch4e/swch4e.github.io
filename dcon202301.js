let studentsList = new Array();
studentsList = ['이혁호',	'이동욱',	'이동훈',	'이아림',	'이영호',	'이유진',	'이정우',	'이정화',	'이진혁',	'이채영',	'이현성',	'장지연',	'전현배',	'정석진',	'정유경',	'정은채',	'정지원',	'정헌웅',	'정후연',	'조경현',	'조민성',	'조수연',	'지소이',	'최관우',	'최바다',	'최소미',	'최지아',	'표혜민',	'하닌 무함메드 살라 압델무넴',	'하재윤',	'홍시현',	'황경민'];

function randomNum(min, max) {
    let randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}
function gogo(){
    let x = 0;
    let y = studentsList.length -1;
    let rn = randomNum(parseInt(x),parseInt(y));
    // console.log(x,y, rn)
    document.getElementById("rNumber").innerHTML = studentsList[parseInt(rn)] + " 학생!";
}