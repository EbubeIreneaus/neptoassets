<script setup>
definePageMeta({
  layout: false
})
</script>
<template>
    <div>
    <h1>500</h1>
    <p>Internal Server Error</p>
    
  </div>
</template>

<style scoped>
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f3f4f6;
      margin: 0;
      font-family: Arial, sans-serif;
      color: #333;
    }
    .container {
      text-align: center;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
    }
    p {
      font-size: 1.5rem;
    }
    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1rem;
      color: #fff;
      background-color: #007bff;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    .btn:hover {
      background-color: #0056b3;
    }
</style>