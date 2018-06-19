<template>
    <Row id="login">
        <Col span="24">
            <div id="loginbox">
                <p>登陆</p>
                <Input v-model="account" placeholder="请输入账号" class="inputbox"></Input>
                <Input type="password" v-model="password" placeholder="请输入密码" class="inputbox"></Input>
                <p>
                    <Checkbox @on-change="check" id="rember">
                        <Icon type="playstation"></Icon>
                        <span>记住登陆</span>
                    </Checkbox>
                </p>                    
                <p> 
                    <Button type="primary" @click="login()" long>马上登陆</Button>
                </p>        
            </div>       
        </Col>  
    </Row>
</template>

<script>
export default {
    data(){
        return{
            account:"",
            password:"",    
        }
    },
    methods:{
        check(data){
            if(data==true){
                localStorage.login=1
                this.$Message.success('下次自动登陆');
            }else if(data==false){
                localStorage.login=0
                this.$Message.error('取消下次自动登陆');
            }
        },
        login(){
            if(!this.account==""&&!this.password==""){
                this.$router.push({name:'home'    
                });
                this.$Message.success('登陆成功');
            }else{
                this.$Message.error('登陆失败');
            }
        }
    },
    created(){
        sessionStorage.index=6;
        this.$store.commit('nofoot');
        this.$store.commit('titlex');
    }
}
</script>

<style lang="scss" scoped>
#login{
    height: 90.1vh;
    background: url("https://www.sony.net/SonyInfo/img/pic-main_02.jpg") no-repeat;
    background-size:cover;
    
   #loginbox{
       margin: 30% auto;
       width: 80%;
       border-radius: 6px;
       text-align: center;
       background: rgba(255, 255, 255, 0.7); 
       padding: 12px;
       p{
           padding: 6px;
       }
       .inputbox{
           padding: 6px 0;
       }

   }
   
}
</style>

