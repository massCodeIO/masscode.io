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
import 'codemirror/theme/material.css'
import { onMounted, ref } from 'vue'

interface Props {
  lang: Language
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const editorRef = ref()

let editor: CodeMirror.Editor

const init = async () => {
  const { default: CodeMirror } = await import('codemirror')
  await import('codemirror/mode/css/css')
  await import('codemirror/mode/htmlmixed/htmlmixed')

  editor = CodeMirror(editorRef.value, {
    value: props.modelValue,
    mode: props.lang,
    theme: 'material',
    lineNumbers: true,
    scrollbarStyle: 'null'
  })

  editor.on('change', () => {
    emit('update:modelValue', editor.getValue())
  })
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
</style>
