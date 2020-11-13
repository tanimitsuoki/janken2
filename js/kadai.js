$(function () {
    $(".kekka_pic").hide ();
    // この中に書いていく

	  // http://pannyatto.firebird.jp/archives/1938

    $(".button_1").on("click", function () {
        console.log("グー")
        $(".kekka").html("<img src=img/gu.png width=300 height=300>");
        $(".kekka_pic").show ();
        var random2 = Math.floor(Math.random()*3);
        console.log(random2, "便利な機能を使ってランダムな数字が出ます");
        
        if(random2 == 0){
            console.log("グー");
            $(".kekka2").html("<img src=img/gu.png width=300 height=300>");
            $(".hantei").html("あいこ");
                // 0の時に実行したいことをかく
          }else if(random2 == 1){
            console.log("チョキ");
            $(".kekka2").html("<img src=img/tyoki.jpg width=300 height=300>");
            $(".hantei").html("勝ち");
            // 1の時に実行したいことをかく
          }else if(random2 == 2){
            console.log("パー");
            $(".kekka2").html("<img src=img/pa.jpg width=300 height=300>");
            $(".hantei").html("負け");
            // 2の時に実行したいことをかく
         }
    });

    $(".button_2").on("click", function () {
        console.log("チョキ");
        $(".kekka").html("<img src=img/tyoki.jpg width=300 height=300>");
        $(".kekka_pic").show ();
        var random2 = Math.floor(Math.random()*3);
        console.log(random2, "便利な機能を使ってランダムな数字が出ます");
        
        if(random2 == 0){
            console.log("グー");
            $(".kekka2").html("<img src=img/gu.png width=300 height=300>");
            $(".hantei").html("負け");
                // 0の時に実行したいことをかく
          }else if(random2 == 1){
            console.log("チョキ");
            $(".kekka2").html("<img src=img/tyoki.jpg width=300 height=300>");
            $(".hantei").html("あいこ");
            // 1の時に実行したいことをかく
          }else if(random2 == 2){
            console.log("パー");
            $(".kekka2").html("<img src=img/pa.jpg width=300 height=300>");
            $(".hantei").html("勝ち");
            // 2の時に実行したいことをかく
         }
    });

    $(".button_3").on("click", function () {
        console.log("パー");
        $(".kekka").html("<img src=img/pa.jpg width=300 height=300>");
        $(".kekka_pic").show ();
        var random2 = Math.floor(Math.random()*3);
        console.log(random2, "便利な機能を使ってランダムな数字が出ます");
        
        if(random2 == 0){
            console.log("グー");
            $(".kekka2").html("<img src=img/gu.png width=300 height=300>");
            $(".hantei").html("勝ち");
                // 0の時に実行したいことをかく
          }else if(random2 == 1){
            console.log("チョキ");
            $(".kekka2").html("<img src=img/tyoki.jpg width=300 height=300>");
            $(".hantei").html("負け");
            // 1の時に実行したいことをかく
          }else if(random2 == 2){
            console.log("パー");
            $(".kekka2").html("<img src=img/pa.jpg width=300 height=300>");
            $(".hantei").html("あいこ");
            // 2の時に実行したいことをかく
         }
    });




    $(".button").on("click", function () {

        // この下は消さない
        // $(".kekka").html("押されましたよ");

        var random = Math.floor(Math.random()*3);
        console.log(random, "便利な機能を使ってランダムな数字が出ます");
        
        if(random == 0){
            console.log("グー");
            $(".kekka").html("<img src=img/gu.png width=300 height=300> ");
                // 0の時に実行したいことをかく
          }else if(random == 1){
            console.log("チョキ");
            $(".kekka").html("<img src=img/tyoki.jpg width=300 height=300>");
            // 1の時に実行したいことをかく
          }else if(random == 2){
            console.log("パー");
            $(".kekka").html("<img src=img/pa.jpg width=300 height=300>");
            // 2の時に実行したいことをかく
         }
         var random2 = Math.floor(Math.random()*3);
         console.log(random2, "便利な機能を使ってランダムな数字が出ます");
         
         if(random2 == 0){
             console.log("グー");
             $(".kekka2").html("<img src=img/gu.png width=300 height=300>");
                 // 0の時に実行したいことをかく
           }else if(random2 == 1){
             console.log("チョキ");
             $(".kekka2").html("<img src=img/tyoki.jpg width=300 height=300>");
             // 1の時に実行したいことをかく
           }else if(random2 == 2){
             console.log("パー");
             $(".kekka2").html("<img src=img/pa.jpg width=300 height=300>");
             // 2の時に実行したいことをかく
          }
        
        if(random == 0&&random2 == 0){
            console.log("あいこ");
            $(".hantei").html("引き分け");
         }else if(random == 1&&random2 == 1){
            console.log("あいこ");
            $(".hantei").html("引き分け");
        }else if(random == 2&&random2 == 2){
            console.log("あいこ");
            $(".hantei").html("引き分け");
        }else if(random == 0&&random2 == 1){
            console.log("勝ち");
            $(".hantei").html("勝ち");
        }else if(random == 0&&random2 == 2){
            console.log("負け");
            $(".hantei").html("負け");
        }else if(random == 1&&random2 == 0){
            console.log("負け");
            $(".hantei").html("負け");
        }else if(random == 1&&random2 == 2){
            console.log("勝ち");
            $(".hantei").html("勝ち");
        }else if(random == 2&&random2 == 0){
            console.log("勝ち");
            $(".hantei").html("勝ち");
        }else if(random == 2&&random2 == 1){
            console.log("負け");
            $(".hantei").html("負け");
 
        }

      });

   
    // 下は消してはダメ
  });

//   if分の条件参考URL　https://techplay.jp/column/469
