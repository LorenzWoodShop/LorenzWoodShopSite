<template>
    <div class="wood-calculator-app">
        <div class="input__window">
            <div class="window__inputs">
                <label class="error" v-if="errorMessage.trim() !== ''">{{errorMessage}}</label>
                <label class="input__label">Species</label>        <input v-model="boardName" /><div><!-- Spacer --></div>
                <label class="input__label">Cost per BF</label>    <input v-model="boardCost" type="number" step=".01"/><label class="input__descriptor">$ / BF</label>
                <label class="input__label">Width</label>          <input v-model="boardWidth" type="number" step=".01"/><label class="input__descriptor">in.</label>
                <label class="input__label">Length</label>         <input v-model="boardLength" type="number" step=".01"/><label class="input__descriptor">in.</label>
                <label class="input__label">Thickness</label>      <input v-model="boardThickness" type="number" step=".01"/><label class="input__descriptor">in.</label>
                <button @click="AddBoardToCart()">Add</button>
            </div>
            <div><!-- Spacer --></div>
        </div>
        <div class="cart__window">
            <div class="cart">
                <h1>Total cost: {{CalculateCartTotal}}$</h1>
                <div class="cart-item" v-for="thisBoard in cart" v-bind:key="thisBoard.id">
                    <button @click="RemoveBoardFromCart(thisBoard)">X</button>
                    <div class="item__details">
                        <span><strong>{{thisBoard.name}}</strong></span>
                        <span>Width: {{thisBoard.width}}in.</span>
                        <span>Length: {{thisBoard.length}}in.</span>
                        <span>Thickness: {{thisBoard.thickness}}in.</span>
                        <span>Cost/BF: {{thisBoard.cost}}$</span>
                        <span>Board Cost: {{thisBoard.totalCost}}$</span>
                    </div>
                </div>
            </div>
            <div><!-- Spacer --></div>
        </div>
    </div>
</template>
<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>