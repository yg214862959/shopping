<template>
<div>
    <button >add</button>
    <ul>
        <li v-for="item in list1">
            <p>{{item}}</p>
        </li>
    </ul>
</div>
    
</template>

<script>
export default {
    name:'Person',
    data(){
        return{
            list:[
                {a:1,
                b:2},
                {a:1,
                b:2},
                {a:1,
                b:2},
                {a:1,
                b:2}
            ],
            list1:[]
        }
    },
    computed:{
        add(){
            let hash = {}; 
            this.list1 = this.list.reduce((item, next)=>{ 
            hash[next.a] ? '' : hash[next.a] = true && item.push(next); 
            return item 
            }, [])      
        }
    }
}
</script>

<style>

</style>

