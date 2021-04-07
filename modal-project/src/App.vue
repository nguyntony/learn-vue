<!-- this is the root component and you will import other components in this file, depending on what we want -->
<template>
  <h1>{{ title }}</h1>
  <p>welcome...</p>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal
      :header="header"
      :text="text"
      :data="data"
      theme="sale"
      @close="toggleModal"
    />
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal';
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'my first vue app?',
      header: 'this is my website',
      data: ['hello', 'there', 1, 2],
      text: `you're welcome`,
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
