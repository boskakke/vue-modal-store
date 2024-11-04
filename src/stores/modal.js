import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    modals: []
  }),
  actions: {
    openModal(modalId) {
      const baseZIndex = 1000
      this.modals.push({
        id: modalId,
        zIndex: baseZIndex + this.modals.length
      })
    },
    closeModal(modalId) {
      const index = this.modals.findIndex(modal => modal.id === modalId)
      if (index !== -1) {
        this.modals.splice(index, 1)
      }
    },
    closeLastModal() {
      if (this.modals.length > 0) {
        this.modals.pop()
      }
    },
    isModalOpen(modalId) {
      return this.modals.some(modal => modal.id === modalId)
    },
    getModalZIndex(modalId) {
      const modal = this.modals.find(m => m.id === modalId)
      return modal ? modal.zIndex : 0
    }
  }
})