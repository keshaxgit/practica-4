

<template>
    <div class="header">
        <div class="header__box">
            <header class="header__nav">
                <div class="header__logo">
                    <img class="header__logoimg" :src="currentLogo" alt="" />
                    <h1 class="header__name">KidsConnect</h1>
                </div>
            </header>
        </div>
    </div>
</template>

<script setup lang="ts">
 import imgSrc from '../public/LeavesPlay 2.svg'; 
 import imgSrc2 from '../public/LeavesPlay 1.svg'; 


import { useRoute } from 'vue-router';


const route = useRoute();


const currentLogo = computed(() => {
    if (route.path === '/about') {
        return imgSrc; 
    } else {
        return imgSrc2; 
    }
});
</script>







<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');

.header{
display: flex;
justify-content: center;
 &__box{
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 12px 40px;
    max-width: 1480px;
    width: 100%;
background: #70232f;
 }
 &__name{
    font-family: 'Montserrat Alternates', sans-serif;
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    color: #fff;
 }
 &__logo{
    display: flex;
    gap: 18px;
    align-items: center;
 }
 &__logoimg{
    width: 76px;
    height: 76px;
 }
}
</style>