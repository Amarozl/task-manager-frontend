<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center text-green-700">
      Gerenciar Categorias
    </h1>
    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 class="text-xl font-bold mb-4">
        {{ editMode ? "Editar" : "Nova" }} Categoria
      </h3>
      <form @submit.prevent="saveCategory" class="space-y-4">
        <input
          v-model="form.name"
          placeholder="Nome"
          required
          class="w-full p-2 border rounded"
        />
        <textarea
          v-model="form.description"
          placeholder="Descrição"
          required
          class="w-full p-2 border rounded"
        >
        </textarea>
        <button
          type="submit"
          class="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {{ editMode ? "Atualizar" : "Criar" }}
        </button>
      </form>
    </div>
    <div class="space-y-4">
      <div
        v-for="cat in categories"
        :key="cat.id"
        class="bg-white p-4 rounded-lg shadow flex justify-between"
      >
        <div>
          <h4 class="font-bold">{{ cat.name }}</h4>
          <p class="text-gray-600">{{ cat.description }}</p>
        </div>
        <div class="space-x-2">
          <button
            @click="editCategory(cat)"
            class="text-blue-600 hover:underline"
          >
            Editar
          </button>
          <button
            @click="deleteCategory(cat.id)"
            class="text-red-600 hover:underline"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { categoryAPI } from "@/services/api";

export default {
  data() {
    return {
      categories: [],
      form: { name: "", description: "" },
      editMode: false,
      editingId: null,
    };
  },
  async created() {
    await this.loadCategories();
  },
  methods: {
    async loadCategories() {
      const res = await categoryAPI.getAll();
      this.categories = res.data;
    },
    async saveCategory() {
      if (this.editMode) {
        await categoryAPI.update(this.editingId, this.form);
      } else {
        await categoryAPI.create(this.form);
      }
      this.resetForm();
      this.loadCategories();
    },
    editCategory(cat) {
      this.form = { name: cat.name, description: cat.description };
      this.editMode = true;
      this.editingId = cat.id;
    },
    async deleteCategory(id) {
      if (confirm("Excluir categoria?")) {
        await categoryAPI.delete(id);
        this.loadCategories();
      }
    },
    resetForm() {
      this.form = { name: "", description: "" };
      this.editMode = false;
      this.editingId = null;
    },
  },
};
</script>
