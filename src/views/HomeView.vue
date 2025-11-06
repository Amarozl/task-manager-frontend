<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-center p-6"
  >
    <h1 class="text-6xl font-bold text-white mb-6 drop-shadow-lg">
      Bem-vindo ao Task Manager
    </h1>
    <p class="text-xl text-white mb-10 max-w-2xl">
      Gerencie suas tarefas e categorias com uma interface moderna e intuitiva.
    </p>
    <div class="space-x-6">
      <router-link
        to="/tasks"
        class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg transform hover:scale-105 transition"
      >
        Ir para Tarefas
      </router-link>
      <router-link
        to="/categories"
        class="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 shadow-lg transform hover:scale-105 transition"
      >
        Ir para Categorias
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
