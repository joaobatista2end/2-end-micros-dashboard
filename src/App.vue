<template>
  <div class="max-w-screen-lg mx-auto py-8 px-4">
    <div>
      <h2 class="text-xl text-zinc-800 mb-4 font-bold">Catalogo de Produtos</h2>

      <div class="shadow-lg rounded-xl gap-4 p-4">
        <div class="border rounded-md p-4 inline-block" :key="i">
          <div class="flex relative gap-x-4 mb-4">
            <div
              class="bg-green-100 h-[112px] w-[112px] block rounded-md overflow-hidden"
            >
              <img src="./assets/images/planning-poker.webp" alt="" />
            </div>

            <div class="flex-1">
              <h3 class="text-lg text-zinc-800">Planning Poker</h3>
              <p class="text-xs text-zinc-500 mb-4">
                Aplicação focada na votação de histórias em conjunto.
              </p>

              <a
                class="text-white bg-green-400 font-semibold px-4 py-2 text-sm rounded-md"
                href="/planning-poker"
              >
                Entrar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { navigateToUrl } from 'single-spa';

export default {
  name: 'App',
};
</script>
