<template>
  <div class="about">
    <h1>Założenia projektu:</h1>
    <ul>
    <li>korzysta z publicznego API Githuba;</li>
    <li>pozwala wpisać id użytkownika;</li>
    <li>reaguje na błędne id;</li>
    <li>wyświetla maksymalnie 5 ostatnio zmienionych projektów (w raz z sublistą commitów) podanego użytkownika;</li>
    <li>wyświetla także założenia własne (tej rekrutacyjnej aplikacji) oraz autora;</li>
    <li>wyświetla co drugi element każdej listy wyróżnionym kolorem;</li>
    <li>korzysta z Less’a. Spełnia wymogi BEM. Jest też estetyczna;</li>
    <li>jest hostowana, a jej kod jest dostępny publicznie.</li>
    </ul>
    <button @click="$router.push({ name: 'Home'})">Powrót</button>
  </div>
</template>

<style scoped lang="less">
.about {
  font-family: 'Courier New', 'Lato', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    text-align: left;
  }
  button {
    background: #222831;
    color: #eeeeee;
    width: 75px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Courier New', 'Lato', serif;
    border: none;
    font-size: 19px;
  }
}
</style>
