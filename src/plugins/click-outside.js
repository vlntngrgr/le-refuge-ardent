
const clickOutside = {};

clickOutside.install = (Vue) => {
  Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his childrens
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](event);
        }
      };
      document.documentElement.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.documentElement.removeEventListener('click', el.clickOutsideEvent)
    },
  });
}

export default clickOutside
