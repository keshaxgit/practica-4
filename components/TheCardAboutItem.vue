<template>
<div class="cardaboutall">
<div class="cardabout">
    <div class="cardabout__box">
<div class="cardabout__image">
<img src="../public/athetes.png" alt="">
</div>

<div class="cardabout__info">
    <div class="cardabout__btnsbox">
<p class="cardabout__btnopen">Набор открыт</p>
<p class="cardabout__btnfree">Бесплатно</p>
    </div>
<div class="cardabout__itembox">
<div class="cardabout__item"><img src="../public/age.svg" alt="" class="clock"> <p>10-18 лет</p></div>
<div class="cardabout__item"><img src="../public/street.svg" alt=""class="clock"> <p>г. Иркутск, Юбилейный мкр., стр. 49/1</p></div>
<div class="cardabout__item"><img src="../public/place.svg" alt="" class="clock"> <p>ФОК “Юбилейный”</p></div>
</div>

<div class="cardabout__btnactionbox">
<button class="cardabout__btnaction">Записаться</button>
</div>


</div>
    </div>
</div>


<div class="cardschedule">
    <div class="cardschedule__box">
    
    <div class="cardschedule__groups">
<h2 class="cardschedule__title">ГРУППЫ</h2>
<p class="cardschedule__text">Этап начальной подготовки</p>
<div class="cardschedule__desc">
<p class="cardschedule__descitem"><img src="../public/teacher.svg" alt="">Петрова Елена Александровна</p>
<p class="cardschedule__descitem"><img src="../public/people.svg" alt="">15 из 20</p>
<p class="cardschedule__descitem"><img src="../public/flag.svg" alt="">12 месяцев</p>
</div>
    </div>

    <div class="cardschedule__time">
        <h2 class="cardschedule__title">РАСПИСАНИЕ ЗАНЯТИЙ</h2>
        
        <p class="cardschedule__descitem"><img src="../public/time.svg" alt="">Пн, Вт, Чт, Сб</p>
        <div class="cardschedule__days">
        <p class="cardschedule__descitem"><img src="../public/time.svg" alt="">Пн, Вт, Чт, Сб</p>
        <p class="cardschedule__clocks">9:00 - 10:30</p>
        <p class="cardschedule__clocks">12:00 - 13:30</p>
        </div>
    </div>

    </div>
</div>

<div class="carddescription">

<div class="carddescription__box">
<h2 class="carddescription__title">Описание</h2>
<p class="carddescription__text">Легкая атлетика - олимпийский вид спорта, объединяющий беговые виды, спортивную ходьбу , технические виды (прыжки и метания), многоборья, пробеги (бег по шоссе), кроссы (бег по пересеченной местности).</p>
</div>

</div>

<div class="cardprograminfo">
    <div class="cardprograminfo__box">
        <h2 class="cardprograminfo__title">СОДЕРЖАНИЕ ПРОГРАММЫ</h2>
        <h3 class="cardprograminfo__header">Базовый уровень</h3>
        <div class="cardprograminfo__textes">
        <p class="cardprograminfo__text">Базовый уровень сложности первый-второй год обучения, 252 часа.</p>
        <ul class="cardprograminfo__ul">
            <li>Обязательные предметы области (количество часов – 15);</li>
            <li>Вариативные предметные области (количество часов−10);</li>
            <li>Теория (количество часов −5);</li>
            <li>Практика (количество часов − 216);</li>
            <li>Самостоятельная работа (количество часов −2);</li>
            <li>Аттестация (количество часов − 4).</li>
        </ul>
        <p class="cardprograminfo__text">Базовый уровень сложности третий-четвертый год обучения, 416 часов.
Обязательные предметы области (количество часов − 25);</p>
        <ul class="cardprograminfo__ul">
            <li>Вариативные предметные области (количество часов − 15);</li>
            <li>Теория (количество часов − 7);</li>
            <li>Практика (количество часов − 361);</li>
            <li>Самостоятельная работа (количество часов − 4);</li>
            <li>Аттестация (количество часов − 4).</li>
        </ul>
        <p class="cardprograminfo__text">Базовый уровень сложности пятый-шестой год обучения, 420 часов.</p>
        <ul class="cardprograminfo__ul">
            <li>Обязательные предметы области (количество часов − 27);</li>
            <li>Вариативные предметные области (количество часов − 15);</li>
            <li>Теория (количество часов − 8);</li>
            <li>Практика (количество часов − 360);</li>
            <li>Самостоятельная работа (количество часов − 6);</li>
            <li>Аттестация (количество часов − 4).</li>
        </ul>
        </div>
        <h3 class="cardprograminfo__header">Углубленный уровень</h3>
    </div>
</div>


</div>

</template>




<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.cardprograminfo{
ul{
    padding: 10px;
    margin: 0;
}
    ul li {
    list-style-type: none;
}
ul li:before {
    content: '\2022 ';
    color: #000;
    padding-right: 0.5em;
}
h3{
    margin: 0;
}

    display: flex;
    justify-content: center;
    &__box{
    background: #fff;
    border-top: 2px solid #70232f;
    border-radius: 5px;
    border-radius: 5px;
    padding: 20px;
    max-width: 1400px;  
    width: 100%;
    }
    &__title{
        margin: 0;
        padding-bottom: 25px;
        font-family: "Montserrat";
font-weight: 600;
font-size: 18px;
text-transform: uppercase;
color: #70232f;
    }
    &__textes{
        padding-top: 10px;
        padding-bottom: 20px;
    }
    &__header{
        font-family: "Montserrat";
font-weight: 600;
font-size: 16px;
color: #70232f;
    }
    &__text{
        margin: 0;
        font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
color: #000;
    }
    &__ul{
                font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
color: #000;
    }
}

.carddescription{
    display: flex;
    justify-content: center;
    &__box{
background: #fff;
border-top: 2px solid #70232f;
border-radius: 5px;
border-radius: 5px;
padding: 20px;
max-width: 1400px;
width: 100%;
    }
    &__title{
margin: 0;
padding-bottom: 10px;
font-family: "Montserrat";
font-weight: 600;
font-size: 18px;
text-transform: uppercase;
color: #70232f;
    }
    &__text{
        margin: 0;
font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
color: #333;
    }
}

.cardaboutall{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cardschedule{
p{
    margin: 0;
}
display: flex;
justify-content: center;
&__box{
background: #fff;
border-top: 2px solid #70232f;
border-radius: 5px;
display: flex;
gap: 20px;
border-radius: 5px;
padding: 20px;
max-width: 1400px;
width: 100%;
} 
&__clocks{
padding: 4px 10px;
border-radius: 5px;
font-family: "Montserrat";
background-color: #F7DAAB;
}
&__text{
font-family: "Montserrat";
font-weight: 500;
font-size: 16px;
color: #333;
}
&__title{
padding-bottom: 10px;
margin: 0;
font-family: "Montserrat";
font-weight: 600;
font-size: 18px;
text-transform: uppercase;
color: #70232f;
}
&__desc{
    padding-top: 10px;
display: flex;
flex-direction: column;
gap: 10px;
}
&__days{
padding-top:10px ;
display: flex;
gap: 10px;
}
&__descitem{
    display: flex;
    align-items: center;
    gap: 10px;
}
&__groups{
    max-width: 392px;
    width: 100%;
}
&__time{
    max-width: 430px;
    width: 100%;
}
}

.cardabout {
p{
    margin: 0;
}
display: flex;
justify-content: center;
&__box{
    background: #fff;
    border-top: 2px solid #70232f;
    border-radius: 5px;
    gap: 20px;
    padding: 20px;
    display: flex;
    max-width: 1400px;
    width: 100%;
}
&__btnsbox{
    display: flex;
    justify-content: space-between;
}
&__btnactionbox{
display: flex;
justify-content: flex-end;
}
&__btnaction{
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 16px;
        color: #fff;
        padding: 10px 20px;
        background-color: #70232F;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
}
&__info{
    display: flex;
    max-width: 1140px;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}
&__item{
     display: flex;
    align-items: center; 
    gap: 10px;
}
&__itembox{
    display: flex;
    gap: 10px;
    flex-direction: column;
}
&__btnopen{
    height: 25px;
    box-sizing: border-box;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 12px;
    color: #2f050f;
    border: 1px solid #d86b79;
    border-radius: 5px;
    max-width: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
&__btnfree{
    
        font-weight: 600;
        font-size: 12px;
        color: #fff;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 5px 15px;
        background-color: #D86B79;
        font-family: "Montserrat";
        border-radius: 5px;
}
}
</style>