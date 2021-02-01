$(document).ready(function(){
    //愛心
    $('.heart').bind("click",function() {
        var src = ($(this).children().attr('src') === './img/heart.png')
            ? './img/heartc.png' 
            : './img/heart.png';
        $(this).children().attr('src', src);
    });

    //footer的電話
    $('#pho').click(function(e){
        event.preventDefault();
        alert('請使用行動裝置開啟');
    });
    //messenger跳出對話框
    $('.messenger').click(function(event){
        event.preventDefault();
        $('.box').fadeToggle(1000);
    });

    //對話
    $('button').click(function(){
        let guestTalkArea = $('.guest>p');
        let askArea = $('.ask>p');
        let str = $('#guestAsk').val();
        let add = `<div class="guest">
                            <p>${str}</p>
                            <img src="./img/comment02.jpg">
                            </div>`
        let adda = `<div class="ask">
                            <img src="./img/logoonly.jpg">
                            <p></p>
                            </div>`
        if( str == ''){
            $('.boxinner').append(adda).find('.ask:last p').text('請輸入問題喔');
        }else{
            $('.boxinner').append(add).find('.guest').css('justify-content', 'flex-end');
            if(str.includes('退') == true || str.includes('取消') == true || str.includes('改') == true){
                $('.boxinner').append(adda).find('.ask:last p').html(`這個要寫很長欸，建議你去<a href="coursecontent.html">課程內容的取消與更改</a>看詳細說明`);
            }else if(str.includes('電話') == true){
                $('.boxinner').append(adda).find('.ask:last p').html(`諮詢電話03-3211234<br>按左下角可直接撥打<br>教室電話可以到訂單內查詢`);
            }else if(str.includes('地址') == true || str.includes('交通') == true || str.includes('去') == true){
                $('.boxinner').append(adda).find('.ask:last p').html('教室地址和大眾運輸交通可以到<a href="classroom.html">教室資訊</a>查詢');
            }else if(str.includes('付') == true){
                $('.boxinner').append(adda).find('.ask:last p').text('我們提供"信用卡/ATM/Linepay"付款方式');
            }else if(str.includes('折') == true){
                $('.boxinner').append(adda).find('.ask:last p').html(`折扣碼可在結帳時使用<br>感謝您的提問，特別送您一組折扣碼滿1111折111的折扣碼<br>" sale111 "`);
            }else {
                $('.boxinner').append(adda).find('.ask:last p').text('謝謝您的提問，我們會在12小時內回覆');
            }
        }

        $('#guestAsk').val('').attr('placeholder','再問阿');
        //對話框卷軸到最下面
        $('.boxinner').delay(500).animate({
            scrollTop: $('.boxinner').prop('scrollHeight')
        },500)
        
    });
});