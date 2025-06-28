<template>
<div class="main">
    <div class="main__box">
        <div class="main__nav">
            <div class="main__searchbox">
                <div class="main__search">
                    <span :class="{ hidden: hasText }" class="icon-container">
                        <img class="main__imgsearch" src="../public/search 1.svg"/>
                    </span>
                    <input v-model="inputValue" class="main__inputsearch" type="text" placeholder="Поиск">
                </div>
                <div class="main__searchbycat">
                    <ul class="main__searchlist">
                        <button 
                            @click="activeButton = 'all'" 
                            :class="{ 'main__listitem__active': activeButton === 'all' }"
                            class="main__listitem"
                        >
                            Всё
                        </button>
                        <button 
                            @click="activeButton = 'paid'" 
                            :class="{ 'main__listitem__active': activeButton === 'paid' }"
                            class="main__listitem"
                        >
                            Платные
                        </button>
                        <button 
                            @click="activeButton = 'free'" 
                            :class="{ 'main__listitem__active': activeButton === 'free' }"
                            class="main__listitem"
                        >
                            Бесплатные
                        </button>
                    </ul>
                </div>
            </div>
            <div class="main__btn">
                <button class="main__btnmap">
                    <img src="../public/pointer.svg" alt="">
                    На Карте
                </button>
            </div>
        </div>

        <div class="main__items">

        <div class="main__itemsbox">
            <h1 class="main__title">Силовой спорт</h1>
        <TheCardItem title="Тяжелая атлетика " address="(в Юбилейном мкр.)" content="#Тяжелая атлетика"/>
        <TheCardItem title="Тяжелая атлетика " address="(на ул. Боткина)" content="#Тяжелая атлетика" show = true  cost="500 руб."  />
        <TheCardItem title="Тяжелая атлетика " address="(на ул. Норильской)" content="#Тяжелая атлетика"  show = true cost = "3200 руб. 8 занятий"/>
        <TheCardItem title="Пауэрлифтинг " address="(в Юбилейном мкр.)" content="#Пауэрлифтинг"   />

        <h1 class="main__titlesdown">Единоборства</h1>
        <TheCardItem title="Дзюдо"  content="#Дзюдо"   home="г Иркутск, ул Трудовая, д 115А" location="СК ''Вымпел''" years="6-18 лет"/>
        <TheCardItem title="Вольная Борьба " address="(на ул. Норильской)" content="#Дзюдо" home="г Иркутск, ул Трудовая, д 115А"   years="6-18 лет" location="СК ''Вымпел''" show = true  cost = "3200 руб. месяц"/>

        <h1 class="main__titlesdown">Единоборства</h1>
        <TheCardItem title="Дзюдо"  content="#Дзюдо"  years="6-18 лет"  home="г Иркутск, ул Трудовая, д 115А" location="СК ''Вымпел''"/>
        <TheCardItem title="Вольная Борьба " address="(на ул. Норильской)" content="#Дзюдо" home="г Иркутск, ул Трудовая, д 115А"  years="6-18 лет" location="СК ''Вымпел''" cost=" 3200 руб. месяц"/>
        <h1 class="main__titlesdown">Единоборства</h1>
        <TheCardItem title="Дзюдо"  content="#Дзюдо"   home="г Иркутск, ул Трудовая, д 115А"  years="6-18 лет" location="СК ''Вымпел''"/>
        <TheCardItem title="Вольная Борьба " address="(на ул. Норильской)" content="#Дзюдо" home="г Иркутск, ул Трудовая, д 115А"  years="6-18 лет" location="СК ''Вымпел''" show = true  cost = "3200 руб. месяц"/>

        </div>

        <div class="main__filter">
            <TheFilter/>
        </div>


        </div>

    </div>
</div>




</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            activeButton: 'all' 
        };
    },
    computed: {
        hasText() {
            return this.inputValue.trim().length > 0;
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.main {
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
    &__titlesdown{
    padding-top: 20px;
    margin: 0;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: #333;
    }
    &__itemsbox{
        max-width: 1030px;
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
        &.main__listitem__active {
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