<!-- this is the root component and you will import other components in this file, depending on what we want -->
<template>
  <h1>{{ title }}</h1>
  <p>welcome...</p>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal
      :header="header"
      :text="text"
      :data="data"
      theme="sale"
      @close="toggleModal"
    >
      <!-- slot area -->
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>learning somethig else, slot?</h1>
      <p>this is where I am doing some slot stuff</p>
    </Modal>
  </teleport>

  <div v-if="showModal2">
    <Modal @close="toggleModal2">
      <template v-slot:links>
        <a href="#">first btn</a>
        <a href="#">second btn</a>
      </template>
      <h1>this is the new modal that I created</h1>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModal2">open the new modal</button>
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
      showModal2: false,
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
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app,
.modals {
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
