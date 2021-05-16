<template>
  <div class="full-size">
    <h1>Board Cost Calculator</h1>
    <div class="grid --mobile --col-2-even --c-gap-medium">
      <div>
        <div class="card grid --col-2-auto --c-gap-tiny --r-gap-tiny --full-center">
          <span class="h1 card__header --full-width">Add a board</span>
          <label class="error --full-width" v-if="errorMessage.trim() !== ''">{{ errorMessage }}</label>
          <label>Species</label>
          <input v-model="boardName" />
          <label>Cost per BF</label>
          <input v-model="boardCost" type="number" step=".01" />
          <label>Width (in.)</label>
          <input v-model="boardWidth" type="number" step=".01" />
          <label>Length (in.)</label>
          <input v-model="boardLength" type="number" step=".01" />
          <label>Thickness (in.)</label>
          <input v-model="boardThickness" type="number" step=".01" />
          <button class="--full-width" @click="AddBoardToCart()">Add</button>
        </div>
      </div>
      <div>
        <div class="grid --col-1-even --r-gap-medium">
          <span class="card h1">Total cost: {{ CalculateCartTotal }}$</span>
          <div class="card grid --col-2-squish --full-center"
            v-for="thisBoard in cart"
            v-bind:key="thisBoard.id"
          >
            <button @click="RemoveBoardFromCart(thisBoard)">X</button>
            <div class="grid --col-2-even --r-gap-small">
              <span><strong>{{ thisBoard.name }}</strong></span>
              <span>Width: {{ thisBoard.width }}in.</span>
              <span>Cost/BF: {{ thisBoard.cost }}$</span>
              <span>Length: {{ thisBoard.length }}in.</span>
              <span>Board Cost: {{ thisBoard.totalCost }}$</span>
              <span>Thickness: {{ thisBoard.thickness }}in.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>