<template>
  <div id="app" >
    <!-- navigation pane -->
    <div id="main-window">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
    <Footer/>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./styles/App.scss"></style>
