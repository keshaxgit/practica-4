<template>
    
        <div class="main__cardbox">
            <div class="card__content">
                <div class="card__image">
                    <img src="../public/img.png" alt="">
                </div>
                <div class="card__details">
                    <div class="main__header">
                        <div class="header__info">
                            <div class="header__title">
                                <h2 >{{ title }}</h2>
                                <h2>{{address}}</h2>
                            </div>
                            <div class="cost__button">
                                <p  v-if = "show" class="first__free" >{{free}}</p>
                                <p class="free">{{ cost }}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="main__info">
                        <h2 class="vesimeiy">{{ content }}</h2>
                        <div class="info__item"><img src="../public/age.svg" alt="" class="clock"> <p>{{ years }}</p></div>
                        <div class="info__item"><img src="../public/street.svg" alt=""class="clock"> <p>{{ home }}</p></div>
                        <div class="info__item"><img src="../public/place.svg" alt="" class="clock"> <p>{{ location }}</p></div>
                        
                            <div class="info__button">
                             <div class="about">
                             <img src="../public/time.svg" alt="" class="clock"> 
                            <p class="days">Пн,Ср,Пт,</p>
                            <p class="time">9:00 - 10:30</p>
                            <p class="time">12:00 - 13:30</p>
                            <p class="time">18:00 - 19:30</p>
                            </div>
                            <div>
                                <button class="detailed"><NuxtLink class="link" to="/about">Подробнее</NuxtLink></button> 
                            </div>
                            
                            </div>
                                
                         
                                
                          
                       
                       
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Заголовок по умолчанию'
    },
    address :{
    type: String,
    default:'Заголовок по умолчанию'
    },
    content: {
      type: String,
      default: 'Содержимое по умолчанию'
    },
    cost : {
       type: String,
       default: "Бесплатно"
    },
    free : {
        type: String,
        default: "Первое бесплатно"
    },
    show : {
        type : String,
        style : "display: none;",
        default :  ""
    },
    location : {
        type : String,
        default :"ФОК “Юбилейный”"
    },
    home : {
        type: String,
        default: "г. Иркутск, Юбилейный мкр., стр. 49/1"
    },
    years : {
        type : String,
        default : "10-18 лет"
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.link{
    text-decoration: none;
    color: #fff;
}

.main {
    display: flex;
    justify-content: center;
    font-family: "Montserrat";
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
    &__itemsbox{
        border: 1px solid rgb(30, 82, 133);
        width: 1030px;
        height: 2776px;
    }
    &__filter{
        border: 1px solid red;
        width: 330px;
        height: 1154px;
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
        display: flex;
        align-items: center;
    }
    &__nav {
        display: flex;
        justify-content: space-between;
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
        gap: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
        width: 241px;
        height: 40px;
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

    &__header{
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 0px;
    }
    &__cardbox{
        max-width: 1030px;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        border-top: 2px solid #70232f;
        background-color: white;
        border-radius: 5px;
        margin-top: 20px;
        
        font-family: "Montserrat";
    }
    .card__content{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
    }
    .card__image{
     display: flex;
    justify-content: center;
    align-items: center;
    }
    &__free{
        display: flex;
    }
    .card__details {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .header__info{
        display: flex;
        justify-content: space-between;
    }
    .header__title{
        display: flex;
        flex-direction: column;
    }
    .free{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 5px 15px;
        background-color: #D86B79;
        color: white;
        font-family: "Montserrat";
        font-size: 12px;
        border-radius: 5px;
    }
      .info__item {
        display: flex;
        align-items: center;
        
        margin-bottom: 8px;
        
    }
     .time {
        display: inline-block;
        margin-right: 8px;
        margin-left: 10px;
        font-family: "Montserrat";
        background-color: #F7DAAB;
        padding: 4px 18px;
        border-radius: 5px;
    }
        .detailed {
            font-family: "Montserrat";
        padding: 8px 16px;
        background-color: #70232F;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
    }
    .vesimeiy{
        padding-top: 10px;
        padding-bottom: 10px;
        color: #D86B79;
        font-family: "Montserrat";
        font-size: 14px;
    }
    .main__info{
        display: flex;
        flex-direction: column;
        margin: 0px;
    }
    h2{
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        font-family: "Montserrat";
    }
      .about{
        display: flex;
    }
    p{
        margin: 0px;
    }
   .info__button{
        display: flex;
    align-items: center;
    justify-content: space-between;
   }
   .clock{
    max-width: 18px;
    height: 18px;
    width: 100%;
    padding-right: 10px;
   }
   .first__free{
    border: 1px solid #d86b79;
    border-radius: 5px;
    padding: 5px 15px;
    width: 150px;
    height: 25px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2F050F;
   }
  .cost__button{
    display: flex;
    gap: 20px;
  }
}
</style>