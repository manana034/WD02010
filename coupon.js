(function(window, document, Math, undefined){
    function $(selector){
      return document.querySelector(selector);
    }
    function addClass(ele, className){
      ele.setAttribute('class', ele.getAttribute('class') ? ele.getAttribute('class').replace(/^.*\w+.*$/, ' ' + className) : className);
    }
    function removeClass(ele, className){
      ele.getAttribute('class') && ele.setAttribute('class', ele.getAttribute('class').replace(new RegExp(' ' + className, 'g'), ''));
    }
  
    var $dice = $('#dice');
    var $diceResult = $('#dice-count');
    var dots = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];
  
    $('#btn-start').addEventListener('click', function(){
      $diceResult.innerHTML = '';
      addClass($dice, 'shuffling'); // start
      var countDown = Math.floor(Math.random() * 6) + 5;
      var dot = Math.floor(Math.random() * 6) % 6 + 1;
      var timer = setInterval(function(){
        if (countDown <= 0) {
          clearInterval(timer);
          setTimeout(function(){
            setDots(dot - 1);
            removeClass($dice, 'shuffling'); // end
  
          //   $diceResult.innerHTML = dot;
          // let add = `<div class="XX">
          //             <p>骰到${dot}點</p>
          //             <img src="./img/dice${dot}.png">
          //             </div>`
          let sale = Math.round(100-dot*100/16)/10;
          if(dot == 1 ){
              // $('#dice-count').append(add);
              $diceResult.innerHTML = `<div class="sale">想不到吧 還有<b>銘謝惠顧</b><br>
                                      運氣不好沒關係，你可以多骰幾次</div>`;
          }else if(dot == 6){
              $diceResult.innerHTML = `<div class="sale">折扣代碼 <b>sale${dot}00<br>
                                      天選之人！牛年你一定會過得很好</b>(大華是一隻牛)<br>
                                      恭喜你得到滿1000元折${dot}00元的優惠券，最高可享${sale}折<br>
                                      <a href="course.html">快點去選購課程吧</a></div>`;
          }else{
              $diceResult.innerHTML = `<div class="sale">折扣代碼 <b>sale${dot}00</b><br>
                                      恭喜你得到滿1500元折${dot}00元的優惠券，最高可享${sale}折<br>
                                      <a href="course.html">快點去選購課程吧</a><div>`;
          };
          }, 1000);
        }
        countDown--;
      }, 100);
      $('#btn-start').innerText="Play again";
    });
    
    function setDots(dot){
      addClass($dice, dots[dot]);
    }

    $('.close').click(function(){
        $('.full-screen').hide();
    });
  })(window, document, Math);
  