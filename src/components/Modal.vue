<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useModalStore } from '../stores/modal'

const props = defineProps({
  modalId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})

const modalStore = useModalStore()

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    modalStore.closeLastModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})

const closeModal = () => {
  modalStore.closeModal(props.modalId)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modalStore.isModalOpen(modalId)"
      class="modal-overlay"
      :style="{ zIndex: modalStore.getModalZIndex(modalId) }"
      @click="closeModal"
    >
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;
  color: #213547;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  color: #666;
}

.close-button:hover {
  color: #000;
}

.modal-content {
  margin-top: 10px;
}
</style>