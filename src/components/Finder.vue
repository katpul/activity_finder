<template>
  <div class="finder">
    <div class="finder_title">Znajdź ostatnie zmodyfikowane projekty</div>
  <div class="finder_search">
    <div>
      <label for="userId">Id użytkownika Github</label>
      <input id="userId" type="number" placeholder="Wpisz Id użytkownika Github" v-model="userId" />
    </div>
    <div><button class="finder_search--button" :disabled="!userId" v-on:click="findProjects()">Szukaj</button></div>
  </div>
  <div class="finder_table" v-if="showResults && $store.state.projects.length">
    <table>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Projekty</th>
          <th>Commits</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project,index) in $store.state.projects.slice(0, 5)" :key="index">
          <th>{{index+1}}.</th>
          <td class="finder_table--name"><b>{{project.repo.name}}</b></td> 
          <td><span v-for="(commit, i) in project.payload.commits" :key="i">{{i+1}}. {{commit.message ? commit.message : '--'}}<br></span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="error" v-else-if="showResults && !$store.state.projects.length">
    BRAK DANYCH
  </div>
  <div class="error" v-if="error">
    BŁĘDNE ID
  </div>
  <div class="footer">Autor: Katarzyna Puławska (<a @click="$router.push({ name: 'About'})">informacje o projecie</a>)</div>
</div>
</template>

<script>
export default {
  name: 'Finder',
  data(){
    return {
      userId: "",
      showResults: false,
      error: false
    }
  },
  methods:{
    async findProjects() {      
      this.$store.dispatch('getProjects', this.userId).then(() => {
        this.error = false
        this.showResults = true;
      }).catch(() => {
        this.error = true;
      })
    },
  },
}
</script>

<style scoped lang="less">
.finder {
  width: 100%;
  margin-bottom: 40px;
  font-family: 'Courier New', 'Lato', serif;
  &_title{
    font-size: 36px;
    margin-bottom: 40px;
  }
  &_search{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: flex-end;
    > :first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &--button{
      background: #222831;
      color: #eeeeee;
      width: 75px;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'Courier New', 'Lato', serif;
      border: none;
      font-size: 19px;
      &:disabled {
        background: #b5b5b5;
        border: none;
      }
    }
    label {
      font-size: 13px;
      margin-bottom: 5px;
    }
    input {
      width: 400px;
      border-radius: 5px;
      margin-right: 20px;
      padding: 5px;
      font-family: 'Courier New', 'Lato', serif;
    }
  }
  &_table{
    display: flex;
    justify-content: center;
    table {
      border: 1px solid #cccccc;
      border-radius: 4px;
    }
    &--name {
      font-size: 18px;
    }
    thead {
      background: #f2f2f2;
    }
    th {
      padding: 10px
    }
    tr {
      vertical-align: baseline;
      &:nth-child(even){
        background-color: #f2f2f2;
      }
    }
    td {
      text-align: left;
      padding: 10px
    }
  }
  .error {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #817f7f;
    color: white;
    text-align: center;
    padding: 10px;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
