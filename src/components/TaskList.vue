<template>
  <div class="space-y-4">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="bg-white p-4 rounded-lg shadow flex justify-between items-center"
    >
      <div>
        <h4 class="font-bold text-lg">{{ task.title }}</h4>
        <p class="text-gray-600">{{ task.description || "Sem descrição" }}</p>
        <p class="text-sm text-gray-500">
          Vence: {{ formatDate(task.dueDate) }}
        </p>
        <p class="text-sm font-medium text-blue-600">
          {{ task.category?.name || "Sem categoria" }}
        </p>
        <span
          :class="task.isCompleted ? 'text-green-600' : 'text-red-600'"
          class="text-sm font-medium"
        >
          {{ task.isCompleted ? "Concluída" : "Pendente" }}
        </span>
      </div>
      <div class="space-x-2">
        <button
          @click="$emit('complete', task.id)"
          :disabled="task.isCompleted"
          class="px-3 py-1 text-sm rounded transition"
          :class="
            task.isCompleted
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          "
        >
          Concluir
        </button>
        <button
          @click="$emit('delete', task.id)"
          class="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700 transition"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return "Sem data";
      return new Date(date).toLocaleDateString("pt-BR");
    },
  },
};
</script>
