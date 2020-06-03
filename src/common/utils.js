//封装防抖函数
//有两个参数 第一个是函数 表示防抖的函数  第二个是时间
export function debounce(func,delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      //清除值
      clearTimeout(timer)
    };
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }

}
