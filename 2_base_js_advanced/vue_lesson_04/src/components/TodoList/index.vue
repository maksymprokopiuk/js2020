<template>
    <div>

        <div class="header">
          
          <div>  {{title}}</div>

          <div> 
              <label>
                  Filter:
                  <input type="text" v-model="seachText">
              </label>
          </div>

        </div>
        <div>
            <label>
                New task
                <input type="text" v-model="newTask" placeholder="Add new task here"> 
                <button @click="onAdd">
                    Add
                </button>
           </label>
        </div>
        <div :key="updateKey">
            <todo-item v-for="taskItem in list" :key="taskItem.id"
                :id="taskItem.id"
                :task="taskItem.task"
                :time="taskItem.time"
                :status='taskItem.status'
             @my-postponed="onPostponed(taskItem.id)"
             @plan="onPlan($event)"
             @done="onDone(taskItem.id)"
             />
        </div>
    </div>
</template>

<script>
import data from './settings'
import TodoItem from "./TodoItem";
import uniqid from "uniqid";
    export default {
        name:"TodoList",

        components: {
            TodoItem,
        },

        props: {
            title:{
                type:String,
                default:'no title'
            },
        },

        data() {
            return {
                data,
                newTask:null,
                seachText:null,
                updateKey:1
            }
        },

        computed: {
            storeData:{
                get:function () {
                    const stringValueFromStore=this.updateKey&& localStorage.getItem('tasks') //Читаємо значення з localStorage 
                    if(stringValueFromStore) //Якщо дані є
                      return JSON.parse(stringValueFromStore)  //Перетворюмєо string значення у JavaScript об"єкт
                    else
                      return [] //Якщо даних нема, то повертаємо порожній масив
                },
                set:function (val) {
                    const stringRepresentation=JSON.stringify(val) //Перетворюємо об"єкт у string
                    localStorage.setItem('tasks',stringRepresentation) //Зберігаємо дані у localStorage

                     this.updateKey++
                }

            },

            list() {                
                if(!this.seachText) return this.storeData //Автоматичо викликається сеттер (метод get)
                else
                {const text=this.seachText.toLowerCase()
                    return this.storeData.filter(item=>item.task.toLowerCase().includes(text)) }
            }
        },
        watch: {
            seachText(newValue, oldValue) {
                console.log(`${newValue} - ${oldValue}`);
            }
        },

        methods: {
            onPlan(id){
                this.changeStatus('IN-PROGRES',id)
            },
            onPostponed(id) {
                this.changeStatus('POSTPONED',id)
            },
            onDone(id){
                this.changeStatus('DONE',id)
            },
            changeStatus(status,id){
                const newArr=[...this.storeData]
                const task=newArr.find(item=>item.id===id)
                task.status=status
                this.storeData=newArr //автоматично викликається метод this.storeData.set(newArr)
            },

            onAdd(){

               const time=new Date()
               const newTaskOb={                    
                        id:uniqid(),
                        task:this.newTask,
                        time:`${time.getHours()}.${time.getMinutes()}`,
                        status:"NEW"                    
                }

                this.storeData=[...this.storeData,newTaskOb]
               

            }
        },
    }
</script>

<style lang="css" scoped>
.header{
    display: flex;
    justify-content: space-between;
}
</style>