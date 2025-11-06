<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-xl font-bold mb-4">
      {{ editMode ? "Editar Tarefa" : "Nova Tarefa" }}
    </h3>
    <form @submit.prevent="submit" class="space-y-4">
      <input
        v-model="form.title"
        placeholder="Título"
        required
        class="w-full p-2 border rounded"
      />
      <textarea
        v-model="form.description"
        placeholder="Descrição"
        class="w-full p-2 border rounded"
      >
      </textarea>
      <input
        v-model="form.dueDate"
        type="date"
        class="w-full p-2 border rounded"
      />
      <select
        v-model="form.categoryId"
        required
        class="w-full p-2 border rounded"
      >
        <option value="">Selecione uma categoria</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {{ editMode ? "Atualizar" : "Criar" }}
      </button>
    </form>
  </div>
</template>

<script>
import { taskAPI } from "../services/api";

export default {
  props: ["categories", "taskToEdit"],
  data() {
    return {
      form: {
        title: "",
        description: "",
        dueDate: "",
        categoryId: "",
      },
      editMode: false,
    };
  },
  watch: {
    taskToEdit: {
      immediate: true,
      handler(val) {
        if (val) {
          this.form = { ...val, categoryId: val.category.id };
          this.editMode = true;
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    async submit() {
      try {
        if (this.editMode) {
          await taskAPI.complete(this.taskToEdit.id); // Simplificado
        } else {
          await taskAPI.create(this.form);
        }
        this.$emit("success");
        this.resetForm();
      } catch (err) {
        alert("Erro ao salvar tarefa");
      }
    },
    resetForm() {
      this.form = { title: "", description: "", dueDate: "", categoryId: "" };
      this.editMode = false;
    },
  },
};
</script>
