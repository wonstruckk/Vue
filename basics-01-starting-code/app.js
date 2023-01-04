// vue는 선언형 접근 방식을 사용한다고 표현함.
// 개발자가 목표만 선언하면 중간단게는 신경 쓸 필요가 없기 때문이다.

//data이름 변경 불가능하다.
const app = Vue.createApp({
  // data는 함수를 옵션으로 가지고, 함수는 데이터를 포함한 '객체'를 반환하게 된다.'
  // 이 객체는 vue가 제어하는 html코드에서 사용가능하다.
  // this키워드를 활용해서 vue앱의 다른 부분에서도 엑세스 가능하다.

  data() {
    return {
      courseGoalA: "finish the course and learn Vue!",
      courseGoalB: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // this가 vue때문에 data내의 겍채를 참조할 수 있게 됨.
        // vue는 Data객체에서 반환하는 data전체를 가져옴.
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

//Vue App은 하나의 html요소에만 연결 할 수 있다.
// 자식요소도 제어하게 되지만, 외부의 요소는 제어 할 수 없다.
app.mount("#user-goal");
