<!-- src/views/TasksView.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">
      Gerenciar Tarefas
    </h1>

    <!-- Filtro por Categoria -->
    <div class="mb-6 bg-white p-4 rounded-lg shadow">
      <label class="block mb-2 font-medium">Filtrar por Categoria</label>
      <select
        v-model="filterCategory"
        @change="loadTasks"
        class="w-full p-2 border rounded"
      >
        <option value="">Todas as Categorias</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <!-- Formulário de Nova Tarefa -->
    <TaskForm :categories="categories" @success="loadTasks" class="mb-8" />

    <!-- Lista de Tarefas -->
    <div v-if="tasks.length === 0" class="text-center text-gray-500 py-8">
      Nenhuma tarefa encontrada.
    </div>
    <TaskList
      v-else
      :tasks="tasks"
      @complete="completeTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
import { taskAPI, categoryAPI } from "@/services/api";

export default {
  name: "TasksView",
  components: { TaskForm, TaskList },
  data() {
    return {
      tasks: [],
      categories: [],
      filterCategory: "",
    };
  },
  async created() {
    await this.loadCategories();
    await this.loadTasks();
  },
  methods: {
    async loadTasks() {
      try {
        const res = this.filterCategory
          ? await taskAPI.getByCategory(this.filterCategory)
          : await taskAPI.getAll();
        this.tasks = res.data;
      } catch (err) {
        console.error("Erro ao carregar tarefas:", err);
      }
    },
    async loadCategories() {
      try {
        const res = await categoryAPI.getAll();
        this.categories = res.data;
      } catch (err) {
        console.error("Erro ao carregar categorias:", err);
      }
    },
    async completeTask(id) {
      try {
        await taskAPI.complete(id);
        this.loadTasks();
      } catch (err) {
        alert("Erro ao concluir tarefa");
      }
    },
    async deleteTask(id) {
      if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
        try {
          await taskAPI.delete(id);
          this.loadTasks();
        } catch (err) {
          alert("Erro ao excluir tarefa");
        }
      }
    },
  },
};
</script>
