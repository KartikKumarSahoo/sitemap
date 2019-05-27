export const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

export const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

export const smoothScroll = element => {
  const ele = document.querySelector(element);
  if (ele)
    ele.scrollIntoView({
      behavior: 'smooth',
    });
};

export const scrollTo = (element, offset = 0) => {
  const ele = document.querySelector(element);
  if (!ele) throw new Error('Element not found.');
  const position = ele.offsetTop;
  let isSmoothScrollSupported =
    'scrollBehavior' in document.documentElement.style;
  if (isSmoothScrollSupported && window.scroll) {
    window.scroll({
      top: position - offset,
      behavior: 'smooth',
    });
  } else if (window.scrollTo) window.scrollTo(0, position);
  else console.error('UPDATE THE BROWSER SCROLL NOT WORKING');
};
