// 1.counter는 전역변수가 아니고, data property이기 때문에 html에서 사용불가.
// 2.접근할수 있다 하더라도 전역적으로 생성된 함수인 add는 vue에서 제어하는 html에 사용불가.
// vue app에 정의된 것만 사용이 가능하기 때문.
// function add(){
//   counter = counter +1;
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + "" + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
