import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export const useDark = () => {
  const isDark = ref(false)

  const checkIsDark = () => {
    isDark.value = document.documentElement.classList.contains('dark')
  }

  onMounted(() => {
    checkIsDark()

    const observer = new MutationObserver(() => {
      checkIsDark()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    onBeforeUnmount(() => observer.disconnect())
  })

  return { isDark }
}

export const useDownloadAssets = () => {
  const isShowDialog = ref(false)
  const price = ref()
  const url = ref()
  const dialogButtonText = computed(() => price.value > 0 ? 'Donate' : 'Download')

  const onShowDialog = (e: Event) => {
    e.preventDefault()

    const target = e.target as HTMLAnchorElement

    url.value = target.href
    isShowDialog.value = true
  }

  const onDownloadAssets = () => {
    const a = document.createElement('a')

    if (price.value > 0) {
      a.href = `https://antonreshetov.gumroad.com/l/masscode?price=${price.value}`
    }
    else {
      a.href = url.value
      a.setAttribute('download', '')
    }

    a.click()
    isShowDialog.value = false
  }

  return {
    dialogButtonText,
    onShowDialog,
    onDownloadAssets,
    price,
    isShowDialog
  }
}

