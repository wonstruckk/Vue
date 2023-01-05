const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // data,computed property에 사용된 이름을 사용할 수 있다.
    // property에 있는 이름이 변경될 때마다 감시자 메서드가 실행되게 됨.(useEffect와 같아보임)
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     // vue에 의해 자동으로 마지막 value를 받아오게 된다.
    //     this.fullname = value + "" + "this.lastName";
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     // vue에 의해 자동으로 마지막 value를 받아오게 된다.
    //     this.fullname = this.name + "" + "value";
    //   }
    // },
  },
  // 성능면에서 computed를 사용하는게 좋다.
  // 의존성이 변경되는 경우에만 리랜더링 하기 때문에.
  computed: {
    fullname() {
      console.log("running");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + "this.lastName";
    },
  },
  methods: {
    outputFullname() {
      console.log("running");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "bae";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      // Js로도 작동을 할수 있다.
      document.querySelector("input").value = "";
      this.name = "";
    },
  },
});

app.mount("#events");
