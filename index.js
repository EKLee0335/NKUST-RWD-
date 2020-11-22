$(document).ready(function(){
    { //廣告輪播 利用owlCarousel套件
        $('.owl-carousel').owlCarousel({
            loop:true,
            autoHeight:true,
            items:1, 
            dots: true,
            autoplay:true,  
            autoplayTimeout:3000,  /* 輪播速度 */
            autoplayHoverPause:true
        });
        $('.owl-nav').css({'display': 'none'});
        $('.owl-dot').css({'border':' none',
                        'background-color':'white',
                        'margin':'0px',
                        'padding-right':'0px',
                        'padding-left':'0px'});
        $('.owl-dot span').css({'border':'1px solid black'});
    }
    {//新聞滾輪
        var man = setInterval(lunbo,1000);
        function lunbo(){
            var ul=$('.lunbo');
            var liFirst=ul.find('li:first');
            ul.animate({'top':-50},'slow','linear').animate({"top":0},0,'linear',function(){
                                                                var clone=liFirst.clone();
                                                                ul.append(clone);
                                                                liFirst.remove();
                                                                });
        }
   
        $('ul').hover(
            function(){
                clearInterval(man);
            },
            function(){
                man = setInterval(lunbo,1000);
            }
        )
    }

    {//第一個footer
       let news1 = '<div class = "first__footer__news__set">\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                    <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  </div>';
        let news2 = '<div class = "first__footer__news__set">\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                  <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                </div>'; 
        let news3 = '<div class = "first__footer__news__set">\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
            </div>'; 
        let news4 = '<div class = "first__footer__news__set">\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
            </div>';   
        let news5 = '<div class = "first__footer__news__set">\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
            </div>';
        let news6 = '<div class = "first__footer__news__set">\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等學力認定標準第七條資格報名者適用)</a>\
                <a href="">109學年度第2學期推廣教育碩士學分班(以入學大學同等)</a>\
            </div>';
       let btn = $('.first__footer__nav--btn');
       let container = $('.first__footer__news');
       let first = $('.btn__active');
    //    first.css({'background-color':' rgb(194, 148, 78)'});
       container.html(news1);
       btn.on('click', function(){
           console.log(this);
           first.removeClass('btn__active');
           if(this == btn[0]){
                container.html(news1);
                $(this).addClass('btn__active');
                first = $(this);
           }
           else if(this == btn[1]){
               container.html(news2);
               $(this).addClass('btn__active');
               first = $(this);
           }
           else if(this == btn[2]){
               container.html(news3);
               $(this).addClass('btn__active');
               first = $(this);
           }
           else if(this == btn[3]){
            container.html(news4);
            $(this).addClass('btn__active');
            first = $(this);
           }
           else if(this == btn[4]){
                container.html(news5);
                $(this).addClass('btn__active');
                first = $(this);
           }
           else{
               container.html(news6);
               $(this).addClass('btn__active');
               first = $(this);
           }
       });
       
    }

    {//slide btn
        $('#secondTop__slide--1').hide();
        $('#secondTop__slide--2').hide();
        $('#conseal1').click(function(){
            $('#secondTop__slide--2').slideUp('fast');
            $('#secondTop__slide--1').slideToggle('fast');
        });
        $('#conseal2').click(function(){
            $('#secondTop__slide--1').slideUp('fast');
            $('#secondTop__slide--2').slideToggle('fast');
        });
    }

  










});
