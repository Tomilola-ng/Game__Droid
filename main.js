let qs = (e) => document.querySelector(e);
let qsa = (e) => document.querySelectorAll(e);

let wait = (a, b, c = '', d = '' ) => {
  setTimeout(function() {
    if (d != '') {
        b(c , d);
        return;
    } else if ( c != '') {
        b(c);
        return;
    }
    b();
  }, a);
}

let logo__holder = qs('.logo--holder');
let logo__text = qs('.logo--text');
logo__holder.style.top = '42%';

setTimeout(function() {
  logo__holder.style.top = '5%';
  logo__text.classList.replace('fwhite', 'fyellow');
  logo__text.classList.replace('whitestroke', 'yellowstroke');
  logo__text.classList.replace('f-black-shadow', 'f-white-shadow');
  qs('main').style.display = 'none';
}, 4500);


document.location.hash = 'home';

function playtile(e, b = 'X') {
  e.classList.replace('empty','filled');
  e.innerText = b;
  
  let empty = qsa('.empty');
  let filled = qsa('.filled');
  let boxes = qsa('.tile');
  
  boxes.forEach(box => {
      box.style.pointerEvents = 'auto';
  })
  
  let box1 = () => { return qs('#box1').innerText };
  let box2 = () => { return qs('#box2').innerText };
  let box3 = () => { return qs('#box3').innerText };
  let box4 = () => { return qs('#box4').innerText };
  let box5 = () => { return qs('#box5').innerText };
  let box6 = () => { return qs('#box6').innerText };
  let box7 = () => { return qs('#box7').innerText };
  let box8 = () => { return qs('#box8').innerText };
  let box9 = () => { return qs('#box9').innerText };

  function replay() {
    boxes.forEach(box => {
      box.style.pointerEvents = 'auto';
    });
    filled.forEach(f => {
       f.innerText = "";
       f.classList.remove('red');
       f.classList.remove('blue');
       f.classList.replace('filled','empty');
    });
    return;
  }
  
  function win(a,b,c) {
    let wins = qs(a).innerText
    boxes.forEach(box => {
      box.style.pointerEvents = 'none';
    })
    qs(a).classList.add('blue');
    qs(b).classList.add('blue');
    qs(c).classList.add('blue');
    setTimeout(function() {
      replay();
    }, 3000);
    if (wins == 'X') userset();
    if (wins == 'O') {
      botset();
      logo__holder.classList.add('laugh');
      setTimeout(function() { 
      logo__holder.classList.remove('laugh');
      }, 3000);
    }
    return;
  }

  if (box1() != "" && box1() == box2() && box2() == box3()) {
     win('#box1','#box2','#box3'); return;
    }
   else if (box4() == box5() && box5() == box6() && box4() != "") {
     win('#box4','#box5','#box6'); return;
   }
   else if (box7() == box8() && box8() == box9() && box7() != "") {
     win('#box7','#box8','#box9'); return;
     }
     
   else if (box1() == box5() && box5() == box9() && box1() != "") {
     win('#box1','#box5','#box9'); return;
     }
   else if (box3() == box5() && box5() == box7() && box3() != "") {
     win('#box3','#box5','#box7'); return;
     }
  
   else if (box1() == box4() && box4() == box7() && box1() != "") {
     win('#box1','#box4','#box7'); return;
      }
   else if (box2() == box5() && box5() == box8() && box2() != "") { 
     win('#box2','#box5','#box8'); return;
     }
   else if (box3() == box6() && box6() == box9() && box3() != "") { 
     win('#box3','#box6','#box9'); return;
     }
     
  if (b == 'O') return ;
  
  boxes.forEach(box => {
      box.style.pointerEvents = 'none';
  })
  
  setTimeout(function() { 
 
  if (box1() == box2() && box2() != "" && box3() == '') {playtile(qs('#box3'),'O') }
   else if (box1() == box3() && box3() != "" && box2() == '') {playtile(qs('#box2'),'O') }
  else if (box2() == box3() && box3() != "" && box1() == '') {playtile(qs('#box1'),'O') }
  
  else if (box1() == box4() && box4() != "" && box7() == '') {playtile(qs('#box7'),'O') }
  else if (box1() == box7() && box7() != "" && box4() == '') {playtile(qs('#box4'),'O') }
  else if (box4() == box7() && box7() != "" && box1() == '') {playtile(qs('#box1'),'O') }

  else if (box1() == box5() && box5() != "" && box9() == '') {playtile( qs('#box9'),'O') }
  else if (box1() == box9() && box9() != "" && box5() == '') {playtile( qs('#box5'),'O') }
  else if (box5() == box9() && box9() != "" && box1() == '') {playtile( qs('#box1'),'O') }

  else if (box5() == box7() && box7() != "" && box3() == '') {playtile( qs('#box3'),'O') }
  else if (box5() == box3() && box3() != "" && box7() == '') {playtile( qs('#box7'),'O') }
  else if (box7() == box3() && box3() != "" && box5() == '') {playtile( qs('#box5'),'O') }

  else if (box2() == box5() && box5() != "" && box8() == '') {playtile( qs('#box8'),'O') }
  else if (box2() == box8() && box8() != "" && box5() == '') {playtile( qs('#box5'),'O') }
  else if (box5() == box8() && box8() != "" && box2() == '') {playtile( qs('#box2'),'O') }

  else if (box3() == box6() && box6() != "" && box9() == '') {playtile( qs('#box9'),'O') }
  else if (box3() == box9() && box9() != "" && box6() == '') {playtile( qs('#box6'),'O') }
  else if (box6() == box9() && box9() != "" && box3() == '') {playtile( qs('#box3'),'O') }

  else if (box4() == box5() && box5() != "" && box6() == '') {playtile( qs('#box6'),'O') }
  else if (box5() == box6() && box5() != "" && box4() == '') {playtile( qs('#box4'),'O') }
  else if (box4() == box6() && box6() != "" && box5() == '') {playtile( qs('#box5'),'O') }

  else if (box7() == box8() && box8() != "" && box9() == '') {playtile( qs('#box9'),'O') }
  else if (box8() == box9() && box8() != "" && box7() == '') {playtile( qs('#box7'),'O') }
  else if (box7() == box9() && box9() != "" && box8() == '') {playtile( qs('#box8'),'O') }
  
  else if (filled.length == 9) {
    boxes.forEach(box => {
      box.classList.add('red');
    });
    setTimeout(function() { 
     replay()
    }, 3000);
  }
  else{
    if (box5() == '') {
      playtile( qs('#box5'),'O' );
    } else if (box5() == 'O' && box2() == '') {
      playtile( qs('#box2'),'O' );
    }
    else {
      let l = [];
      empty.forEach(m => {
        l.push(m.id);
      }) ;
      b = l.sort(() => Math.random() - 0.5);
      playtile( qs('#' + b[0]) ,'O' );
    }
  }
  
  }, 1000);
}

function genmath() {
    let question__tag = qs('.math--question');
    let question__cont = qs('.math--cont');
    let playBtn = qs('#play--math');
    
  function playagain(e = 'Wrong') {
    alert(e);
    if (e == 'Wrong') {
      botset();
      logo__holder.classList.add('laugh')
      setTimeout(function() { 
      logo__holder.classList.remove('laugh')
      }, 3000);
    } else {
      userset();
    }
    question__cont.classList.add("none");
    playBtn.classList.remove('none');
  }
  const smallnumbers = [
    2,3,4,5,6,7,8,9,10,11,12,13,14,15
    ];
  const hundrednum = [
    100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
    ];
  const bignumbers = [
    16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50
    ];
    
  const item__  = [
    'oranges', 'cookies', 'apples'
    ];
  const signs__  = [
    '$', '₦'
    ];
    
  let smallnum = smallnumbers.sort(() => Math.random() - Math.random());  
  let bignum = bignumbers.sort(() => Math.random() - Math.random());  
  let hunnum = hundrednum.sort(() => Math.random() - Math.random());  
  let item = item__.sort(() => Math.random() - Math.random());  
  let signs = signs__.sort(() => Math.random() - Math.random());  
  
  const questions__ = [
  
     {
    math_q : `if ${ smallnum[0] } men dig a hole in ${ bignum[0]} days how many days will it take ${ smallnum[1]} men to dig that same hole`,
    math_a : smallnum[0]  * bignum[0] / smallnum[1],
    math_b : smallnum[0]  + bignum[0] * smallnum[1],
    math_c : smallnum[1]  - bignum[0] / smallnum[0],
    math_d : smallnum[0]  * bignum[0] - smallnum[1]
      },
      
     {
    math_q : `In how many ways can ${ smallnum[0] } friends share ${ bignum[0]} ${item[0]}`,
    math_a :  bignum[0] / smallnum[0],
    math_b :  smallnum[0] / bignum[0],
    math_c :  bignum[0] + smallnum[0],
    math_d :  smallnum[0] / bignum[0] + 2
      },
      
     {
    math_q : `How much will I pay if their is a discount of ${ smallnum[0] }% for a product cost ${signs[0]}${hunnum[0]} `,
    math_a :  hunnum[0] - (smallnum[0] / 100 * hunnum[0]),
    math_b :  (hunnum[0] / smallnum[0]) + 100,
    math_c :  (smallnum[0] / 100 ) + hunnum[0],
    math_d :  hunnum[0] + (smallnum[0] / 100 * hunnum[0]),
      },
      
     {
    math_q : `What number must I multiply with ${ smallnum[0] } to give me ${ smallnum[0] * (bignum[0] + smallnum[1]) }`,
    math_a :  bignum[0] + smallnum[1] ,
    math_b :  bignum[0] + smallnum[0] ,
    math_c :  bignum[0] / smallnum[0],
    math_d :  (smallnum[0] / bignum[0]) + 10,
      },
      
     {
    math_q : `A trader bought ${ item[0] } for ${  smallnum[0] }${ signs[0] } and sold it for ${  bignum[0]  }${ signs[0] } how much did the trader gain `,
    math_a : bignum[0]  - smallnum[0],
    math_b : bignum[0]  + smallnum[0],
    math_c : smallnum[0]  + bignum[0] + smallnum[0],
    math_d : bignum[0]  - smallnum[0] + smallnum[0]
      }
    ];
    
    let questions = questions__.sort(() => Math.random() - Math.random());  
    
    let the__question = questions[0].math_q;
    let the__answer = questions[0].math_a;
    let the__answer1 = questions[0].math_b;
    let the__answer2 = questions[0].math_c;
    let the__answer3 = questions[0].math_d;
    
    let btns = [
      qs('#math--btn1'), qs('#math--btn2'), qs('#math--btn3'), qs('#math--btn4')
      ];
    
    let btn_random = btns.sort(() => Math.random() - Math.random());  
    
    question__cont.classList.remove("none");
    playBtn.classList.add('none');
    question__tag.innerHTML = the__question;
    btn_random[0].innerText = the__answer.toFixed(2);
    btn_random[1].innerText = the__answer1.toFixed(2);
    btn_random[2].innerText = the__answer2.toFixed(2);
    btn_random[3].innerText = the__answer3.toFixed(2);
    
    btn_random[0].onclick = () => playagain('Correct');
    btn_random[1].onclick = () => playagain();
    btn_random[2].onclick = () => playagain();
    btn_random[3].onclick = () => playagain();
    
}

function updateScore() {
  let botscore = botget();
  let userscore = userget();

  qs('#bot--tag').innerText = botscore;
  qs('#user--tag').innerText = userscore;
}

function botset() {
  e = botget() + 1;
  
  let score = localStorage.setItem('game--droid--point', JSON.stringify( e ))
  
  updateScore();
}

function userset() {
  e = userget() + 1;
  
  let score = localStorage.setItem('game--droid--user--point', JSON.stringify( e ))
  
  updateScore();
}

function botget() {
  let score = localStorage.getItem('game--droid--point');
  
  if (score) return JSON.parse(score);
  
  return score = 0
}

function userget() {
  let score = localStorage.getItem('game--droid--user--point');
  
  if (score) return JSON.parse(score);
  
  return score = 0
}

window.addEventListener('click', (e) => {

  let tag = e.target.classList;
  
  if (tag.contains('tile')) playtile(e.target);
  
  if (tag.contains('math--play')) genmath();

})

updateScore();