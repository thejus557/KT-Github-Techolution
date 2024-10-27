import type { DirectiveBinding } from 'vue'

export const highlight = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value === 'on-going') {
      el.style.backgroundColor = 'yellow'
    } else if (binding.value === 'success') {
      el.style.backgroundColor = 'green'
    } else if (binding.value === 'error') {
      el.style.backgroundColor = 'red'
    }
  },
}
