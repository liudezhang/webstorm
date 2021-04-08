export default {
  template: `
    <div>
    <h1>{{ title }}</h1>
    <button @click="btnClick">{{ title }}</button>
    </div>
  `,
  data() {
    return {
      title: '刘德樟'
    }
  },
  methods: {
    btnClick() {
      // document.write('<div>刘德樟</div>')
      // alert(this.title)
      document.querySelector('.one').style.backgroundColor = 'red'
    }
  }
}