<template>
  <div class="filter">
    <h1 class="filter__title">Фильтры</h1>

  <div class="filter__container">
    
    
    <div class="filter__section">
      <h2 class="filter__subtitle">Возраст</h2>
      <select class="filter__choice"  id="age">
   <option class="filter__choiceopt" value="All">Любой</option>
   <option class="filter__choiceopt" value="from 7 to 17">c 7 до 17</option>
   <option class="filter__choiceopt" value="from 18 to 26">c 18 до 26</option>
   <option class="filter__choiceopt" value="from 26 to 36">с 26 до 36</option>
      </select>
    </div>
    
    <div class="filter__section">
      <h2 class="filter__subtitle">Пол</h2>
      <div class="filter__options">
        <div class="filter__checkboxes">
        <input id="M" class="filter__checkbox" type="checkbox" >
        <label for="M" class="filter__option">Мужской</label>
        </div>
        <div class="filter__checkboxes">
        <input id="W"  class="filter__checkbox" type="checkbox">
        <label for="W" class="filter__option">Женский</label> 
        </div>
      </div>
    </div>
    
    <div class="filter__section">
      <h2 class="filter__subtitle">Каталог</h2>
      <div class="filter__categories">
        <div class="filter__item">
          <div class="filter__categorymain">
            <div class="filter__categorymaintitle">
            <span>Силовой спорт</span>
            <span class="filter__categorycount">3</span>
            </div>
            <img  class="filter__imgarrowup"  src="../public/ctrelkavniz.svg" alt="">
          </div>
          <ul class="filter__subcategories">
            <li class="filter__subcategoryitem">
              <span>Тяжелая атлетика</span>
              <span class="filter__subcategorycount">3</span>
            </li>
            <li class="filter__subcategoryitem">
              <span>Пауэрлифтинг</span>
              <span class="filter__subcategorycount">1</span>
            </li>
          </ul>
        </div>
        
        <div class="filter__categoryitem">
          <div class="filter__categorymain">
            <div class="filter__categorymaintitle">
            <span>Единоборства</span>
            <span class="filter__categorycount">2</span>
            </div>
            <img  class="filter__categoryimgarrowup"  src="../public/ctrelkavniz.svg" alt="">
          </div>
          <ul class="filter__subcategories">
            <li class="filter__subcategoryitem">
              <span>Вольная борьба</span>
              <span class="filter__subcategorycount">1</span>
            </li>
            <li class="filter__subcategoryitem">
              <span>Дзюдо</span>
              <span class="filter__subcategorycount">1</span>
            </li>
          </ul>
        </div>
        
       


        
        <div class="filter__categoryitem" v-for="category in otherCategories" :key="category">
          <div class="filter__categorymain">
            <div class="filter__categorymaintitle">
            <span class="filter__categorymaintitle" >{{ category }}</span>
            </div>
            <img  class="filter__categoryimgarrowup"  src="../public/arrowdown.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      otherCategories: [
        'ДПИ и ремесла',
        'Техническое конструирование',
        'Словесность',
        'Иностранные языки',
        'Развитие интеллекта',
        'Информационные технологии',
        'История и Традиции',
        'Педагогика',
        'Музыка и звук',
        'Пение',
        'Хореография(танцы)',
        'Изобразительные искусства',
        'Мода и стиль',
        'Познавательные развлечения',
        'Туризм',
        'Естественные науки',
        'Люди и животные',
        'Эстетические виды спорта',
        'Технические виды спорта',
        'Командно-игровой спорт',
        'Индивидуально игровой спорт',
        'Водные виды спорта',
        'Лёгкая атлетика и гимнастика',
        'Физкультура'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.filter{
&__title{
    margin: 0 0 20px 0;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;
    color: #333;
}
&__choice{
margin-bottom: 15px;
font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
letter-spacing: -0.01em;
color: #333;
border: none;
border-bottom: 1px solid #70232f;
border-radius: 5px;
max-width: 290px;
width: 100%;
padding: 10px;
height: 40px;
}
&__choice:active{
  border: none;
}
&__choiceopt{
font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
letter-spacing: -0.01em;
color: #333;
}
&__checkboxes{
  gap: 5px;
display: flex;
align-items: center;
}
&__container {
  border-top: 2px solid #70232f;
    display: flex;
    flex-direction: column;
  padding: 10px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat";
}


&__maintitle {
  display: flex;
  gap: 10px;
}
&__main{
      display: flex;
    justify-content: space-between
}


&__subtitle {
  font-size: 14px;
  font-weight: bold;
  margin: 0px 0 15px 0;
  color: #333;
}

&__value {
  margin: 0 0 15px 0;
  font-size: 14px;
  color: #555;
  padding-left: 5px;
}

&__options {
  display: flex;
 gap: 20px;
 margin: 0 0 15px 0;
}

&__option {
  font-size: 14px;
  color: #555;
  cursor: pointer;
}
&__categories {
    display: flex;
    gap: 15px;
    flex-direction: column;
}
&__categorymain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  padding: 3px 0;
  

}
&__categorymaintitle{
  display: flex;
  gap: 10px;
}


&__categorycount {
font-family: "Montserrat";
font-weight: 400;
font-size: 14px;
letter-spacing: -0.01em;
color: #70232f;
}

&__subcategories {
  padding: 5px 0 0 0px;
  margin: 0;
}

&__subcategoryitem {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: #555;
  padding: 5px 0;
  cursor: pointer;
  
  
}
&__checkbox{
appearance: none;
border: 1px solid #70232f;
border-radius: 4px;
width: 16px;
height: 16px;
}

&__subcategorycount {
font-family: 'Montserrat';
font-weight: 400;
font-size: 14px;
letter-spacing: -0.01em;
color: #70232f;
}

.filter__categorymaintitle:hover {
    color: #70232f;
  }
.filter__subcategoryitem:hover {
    color: #D86B79;
  }
.filter__checkbox:checked{
  background: #70232f;
  background-image: url("../public/check.svg");
  background-repeat: no-repeat;
  background-position: center;
}

}







</style>