<template>
  <div class="editor">
    <div
      ref="editorRef"
      class="body"
    />
  </div>
</template>

<script setup lang="ts">
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material-palenight.css'
import 'codemirror/theme/material-darker.css'
import { computed, onMounted, ref, watch } from 'vue'
import type CodeMirror from '@types/codemirror'
import { useDark } from '../../composables'

interface Props {
  lang: string
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { isDark } = useDark()

const editorRef = ref()

let editor: CodeMirror.Editor

const theme = computed(() => {
  return isDark.value ? 'material-darker' : 'material-palenight'
})

const init = async () => {
  const { default: CodeMirror } = await import('codemirror')
  await import('codemirror/mode/css/css')
  await import('codemirror/mode/htmlmixed/htmlmixed')

  editor = CodeMirror(editorRef.value, {
    value: props.modelValue,
    mode: props.lang,
    theme: theme.value,
    lineNumbers: true,
    scrollbarStyle: 'null'
  })

  editor.on('change', () => {
    emit('update:modelValue', editor.getValue())
  })

  watch(isDark, () => {
    editor.setOption('theme', theme.value)
  })
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
.editor {
  overflow: hidden;
  border-radius: 8px;
}
</style>
