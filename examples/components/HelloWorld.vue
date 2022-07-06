<script setup>
import { ref } from 'vue'

defineProps({
    msg: {
        type: String,
        default: ''
    }
})
const count = ref(0)
</script>

<template>
    <button
        type="button"
        @click="count++"
    >
        count is: {{ count }}
    </button>
</template>

<style scoped>
a {
    color: #42b983;
}
</style>
