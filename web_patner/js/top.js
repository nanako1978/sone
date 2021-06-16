$(".header-gnav-item").hover(
  // ホバー時
  function(){ 
    // ホバーしているメニューの幅と左位置に変更
    $(".slide-line").css({
      "width": $(this).width(),
      "left": $(this).position().left
    });
  },
  // ホバーが外れたとき
  function(){
    // カレントメニューがある場合
    if (currentItem[0]) {
      // カレントメニューに下線を戻す
      $(".slide-line").css({
        "width": currentItem.width(),
        "left": currentItem.position().left
      });
    }
    // カレントメニューがない場合
    else {
      // 下線を消す
      $(".slide-line").width(0);
    }
  }
 );
