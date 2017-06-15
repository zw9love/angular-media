

export function myScroll($, obj, num){
  $(window).on('scroll', () => {
    var sumHeight = $(document).height();
    var clientHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var n = (clientHeight + scrollTop) / sumHeight;
    if (n >= 0.95 && !obj.lock) {
      obj.lock = true
      if (obj.mainData.length > num) return
      obj.getData()
    }
  })
}

export function unScroll($){
  $(window).off()
}
