<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
  >
    <!-- Navbar -->
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">Task Manager</h1>
          <div class="space-x-6">
            <router-link
              to="/"
              class="text-gray-700 hover:text-blue-600 font-medium"
              >Home</router-link
            >
            <router-link
              to="/tasks"
              class="text-gray-700 hover:text-blue-600 font-medium"
              >Tarefas</router-link
            >
            <router-link
              to="/categories"
              class="text-gray-700 hover:text-blue-600 font-medium"
              >Categorias</router-link
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Conteúdo dinâmico -->
    <router-view class="container mx-auto p-6" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
