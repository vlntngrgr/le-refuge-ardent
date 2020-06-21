
const debounce = {};

debounce.install = (Vue) => {
  let debounce = null;

  Vue.prototype.$debounce = ({timer, callback}) => {
    clearTimeout(debounce);
    debounce = setTimeout(callback, timer);
  }
}

export default debounce
