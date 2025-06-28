<template>
<div class="card">
    <div class="card__box">
        <div class="card__nav">
            <div class="card__searchbox">
                <div class="card__searchbycat">
                    <ul class="card__searchlist">
                        <button class="card__listitem__active card__listitem"><img src="../public/arrowback.svg" alt=""> <NuxtLink class="link" to="/">Вернуться</NuxtLink></button>
                    </ul>
                </div>
            </div>
            <div class="card__btn">
                <button class="card__btnmap">
                    <img src="../public/pointer.svg" alt="">
                    На Карте
                </button>
            </div>
        </div>

        <div class="card__items">

        <div class="card__itemsbox">
            <h1 class="card__itemtitle">Лёгкая атлетика (в Юбилейном мкр.)</h1>
            <TheCardAboutItem/>
        </div>



        </div>

    </div>
</div>




</template>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.link{
    text-decoration: none;
   color: #333;
}

.card {


    display: flex;
    justify-content: center;
    &__items{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    &__title{
    margin: 0;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: #333;
    }
    &__itemtitle{
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: #2f050f;
    }
    &__titlesdown{
    padding-top: 20px;
    margin: 0;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: #333;
    }
    &__iteminfo{
        border: 2px solid rgb(44, 136, 123);
        max-width: 1400px;
        height: 240px;
    }
    &__itemsbox{
        max-width: 1480px;
        width: 100%;

    }
    &__filter{
        max-width: 330px;
        width: 100%;
        height: fit-content;
    }
    &__box {
        box-sizing: border-box;
        border-radius: 15px;
        padding: 40px;
        max-width: 1480px;
        width: 100%;
        background: #efefef;
    }
    &__searchbox {
        max-width: 547px;
        width: 100%;
        display: flex;
        align-items: center;
    }
    &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    &__searchlist {
        padding: 0;
        margin: 0;
        gap: 20px;
        display: flex;
    }
    &__listitem {
        cursor: pointer;
        border: none;
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 16px;
        color: #333;
        list-style-type: none;
        padding: 10px 20px;
        border-radius: 5px;
        background-color: transparent;
        transition: background-color 0.3s ease;
        &.card__listitem__active {
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: #ffffff;
        }
    }
    &__inputsearch {
        padding-right: 23.16px;
        border: none;
    }
    &__inputsearch:focus {
        outline: none;
    }
    &__inputsearch::placeholder{
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.01em;
        color: #d86b79;
    }
    &__search {
        padding: 9px 0px 9px 17.85px;
        gap: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
    }
    .icon-container { 
        position: relative;
        display: inline-block;
        width: 18px; 
    }
    .hidden { 
        opacity: 0;
        pointer-events: none;
    }
    &__imgsearch {
        max-width: 18px;
        width: 100%;
    }
    &__btnmap{
        cursor: pointer;
        gap: 10px;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 16px;
        color: #333;        
        background-color: #fff;
        border: none;   
        border-radius: 5px;
        padding: 10px 20px;
    }
}
</style>