new Vue({
  el: '#exercise',
  data: {
      small: true,
      color: 'green',
      classCustom: 'test',
      classBoolean:'false',
      customHeight: 100
  },
  methods: {
      switchEffect: function() {
        console.log('switching',{
            shrink: this.small,
            highlight: !this.small
        });
        return {
          shrink: this.small,
            highlight: !this.small
        };
      },
      startEffect:function () {
        var vm = this;
          setInterval(function () {
                  vm.small = !vm.small;
                  vm.switchEffect();
          },1000)
      },
      customClass:function () {

        var obj = {}

        obj[this.classCustom] = this.classBoolean == "false" ? false:true;

        return obj;

      }
  }
});
