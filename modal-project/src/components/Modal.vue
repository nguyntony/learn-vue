<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <!-- this only shows if we don't pass in a default slot -->
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'data', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style>
/* how does vue do this? vue adds a data attribute to the html elements and they also add it to the css selctors as well. this is how they scope out those styles. there is a slight performance hit if you do it alot because vue would have to inject this data attribute. */
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
/* you could instead make the selector more specific */
.modal h1 {
  color: coral;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background: rgb(255, 127, 80);
}
.modal.sale h1 {
  color: cornflowerblue;
}
.modal.sale .actions {
  color: black;
}
.modal.sale .actions a {
  color: white;
}
</style>
