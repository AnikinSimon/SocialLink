<template>
  <v-app id="app">
    
    <!-- НАЧАЛО: Панель навигации -->
    <v-navigation-drawer
        color="green"
        dark
        expand-on-hover
        hide-overlay
        permanent
        right
        app
      >

        <!-- НАЧАЛО: Список ссылок, если юзер залогинен (v-if) -->
        <v-list
          nav 
          shaped
          dense
          v-if="myId != ''"
        >
          <!-- Аватарка и информация о текущем пользователе -->
          <v-list-item two-line>
            <v-list-item-avatar>
              <img :src="myPhoto">
            </v-list-item-avatar>

            <v-list-item-content class="text-left">
              <v-list-item-title class="font-weight-black">SocialLink</v-list-item-title>
              <v-list-item-subtitle>{{myName}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>


          <!-- Линия-разделитель -->
          <v-divider class="my-3"></v-divider>


          <!-- Ссылка на главную -->
          <v-list-item link to="/">
            <!-- Иконка -->
            <v-list-item-icon>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-icon>
            <!-- Текстовая часть -->
            <v-list-item-content>
              <v-list-item-title class="text-left">Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Ссылка "Моя страница" (myId берется из data) -->
          <v-list-item link :to="'/users/' + myId">
            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Ссылка "Все пользователи" -->
          <v-list-item link to="/users" exact>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Найти друзей</v-list-item-title>            
            </v-list-item-content>
          </v-list-item>


          <!-- Линия-разделитель -->
          <v-divider class="my-3"></v-divider>


          <!-- Кнопка выхода из аккаунта -->
          <v-list-item link @click="myId=''">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Выйти</v-list-item-title>            
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- КОНЕЦ: Список ссылок, если юзер залогинен (v-if) -->



        <!-- НАЧАЛО: Список ссылок, если юзер НЕ залогинен (v-else) -->
        <v-list
          nav 
          shaped
          dense
          v-else
        >
          <v-list-item link to="/login" exact>
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-left-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Войти</v-list-item-title>            
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/registration" exact>
            <v-list-item-icon>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Зарегистрироваться</v-list-item-title>            
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- КОНЕЦ: Список ссылок, если юзер НЕ залогинен (v-else) -->

      </v-navigation-drawer>    
      <!-- КОНЕЦ: Панель навигации -->



      <!-- КОНТЕНТ ТЕКУЩЕЙ СТРАНИЦЫ -->
      <v-content class="px-12 py-3">
        <v-container fluid>
          
          <!-- Сюда будет подставлен компонент из src/views -->
          <router-view v-on:login="setUser" :myId="myId"/>

        </v-container>
      </v-content>

  </v-app>
</template>




<script>
export default {
  name: 'App',
  data(){
    return {
      // Это данные для отображения в боковой панели
      // мы будем их фиксировать в момент аутентификации
      myName: '',
      myId: '',
      myPhoto: ''
    }
  },
  methods: {
    // Метод для обработки события аутентификации (пользователь вошел в аккаунт)
    // Событие возникает на router-view и генерируется в src/views/Login.vue при помощи $emit
    setUser(data){
      this.myId = data.id;
      this.myName = data.name;
      this.myPhoto = data.photo;
    }
  }
}
</script>




<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #99ffd3;
      text-decoration: underline;
    }
  }
}
</style>
