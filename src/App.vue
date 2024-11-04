<script setup>
import { useModalStore } from './stores/modal'
import Modal from './components/Modal.vue'

const modalStore = useModalStore()

const openFirstModal = () => {
  modalStore.openModal('modal1')
}

const openSecondModal = () => {
  modalStore.openModal('modal2')
}
</script>

<template>
  <div class="container">
    <h1>Modal Manager Demo</h1>
    <div class="buttons">
      <button @click="openFirstModal">Open First Modal</button>
      <button @click="openSecondModal">Open Second Modal</button>
    </div>

    <Modal modalId="modal1" title="First Modal">
      <p>This is the first modal content.</p>
      <button @click="openSecondModal">Open Second Modal</button>
    </Modal>

    <Modal modalId="modal2" title="Second Modal">
      <p>This is the second modal content.</p>
      <p>Press ESC to close the last opened modal!</p>
    </Modal>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 5px;
}
</style>