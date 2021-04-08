window.addEventListener('load', function () {
//  获取元素
  let lbt = document.querySelector('.lbt');
  console.log(lbt);
  let ol = lbt.children[0];
//  获取lbt的宽度
  let lbtW = lbt.offsetWidth;
  let ul = lbt.children[1];
  let lis = ul.querySelectorAll('li');
//  利用定时器自动轮播图片
  let index = 0;
  let timer = setInterval(function () {
    index++;
    let translatex = -index * lbtW;
    ol.style.transition = "all .3s";
    ol.style.transform = 'translateX(' + translatex + 'px)';
  }, 2000);
//  等着我们过度完后再去判断 监听过度完成的事件 transitionend
  ol.addEventListener('transitionend', function () {
    if (index >= 3) {
      // 无缝滚动
      index = 0;
      // 去掉过度效果，让ul快速跳到目标位置
      ol.style.transition = 'none';
      // 利用最新的索引号去乘以宽度  去滚动图片
      let translatex = -index * lbtW;
      ol.style.transform = 'translateX(' + translatex + 'px)';
    } else if (index < 0) {
      index = 2;
      ol.style.transition = 'none';
    }
    //  小圆点跟随变化
    //  把ul里面li带有checked类名的选出来去掉类名
    ul.querySelector('.checked').classList.remove('checked');
    // 让当前索引号的li 加上checked类名
    ul.children[index].classList.add('checked');
  });

//  手指滑动轮播图
//  触摸元素 touchstart ： 获取手指初始坐标
  let startX = 0;
  let moveX = 0;    /*  移动距离  */
  let flag = false;
  ol.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX;
    // 停止定时器
    clearInterval(timer);
  });
//   移动手指  touchmove：计算手指的滑动距离，并移动盒子
  ol.addEventListener('touchmove', function (e) {
    // 计算移动距离
    moveX = e.targetTouches[0].pageX - startX;
    //   移动盒子：  盒子原来的位置 + 手指移动的距离
    let translatex = -index * lbtW + moveX;
    //  手指拖动的时候不需要动画效果，取消过度
    ol.style.transition = 'none';
    ol.style.transform = 'translateX(' + translatex + 'px)';
    flag = true;  // 如果用户手指移动过我们在去判断否则不做判断
    e.preventDefault();   // 阻止屏幕滚动的行为
  });
  // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
  ol.addEventListener('touchend', function (e) {
    if (flag) {
      // 如果移动距离大于50像素就播放上一张或者下一张
      if (Math.abs(moveX) > 50) {
        // 如果是右滑就播放上一张  moveX是正值
        if (moveX > 0) {
          index--;
          //  如果是左滑就是播放下一张 moveX是负值
        } else {
          index++;
        }
        // 播放
        let translatex = -index * lbtW;
        ol.style.transition = 'all .3s';
        ol.style.transform = 'translateX(' + translatex + 'px)';
      } else {
        // 回弹
        let translatex = -index * lbtW;
        ol.style.transition = 'all .1s';
        ol.style.transform = 'translateX(' + translatex + 'px)';
      }
    }
    //  手指离开从新开启定时器
    clearInterval(timer);
    timer = setInterval(function () {
      index++;
      let translatex = -index * lbtW;
      ol.style.transition = 'all .3s';
      ol.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
  });

});