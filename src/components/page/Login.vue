<template>
    <Row id="login">
        <Col span="24">
            <div id="loginbox">
                <p>登陆</p>
            <!--<Input v-model="account" placeholder="请输入账号" class="inputbox"></Input>
                <Input type="password" v-model="password" placeholder="请输入密码" class="inputbox"></Input>
                <p>
                    <Checkbox @on-change="check" id="rember">
                        <Icon type="playstation"></Icon>
                        <span>记住登陆</span>
                    </Checkbox>
                </p>                    
                <p> 
                    <Button type="primary" @click="login()" long>马上登陆</Button>
                </p> -->

                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="用户名">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="密码">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <p>
                        <Checkbox @on-change="check" id="rember">
                            <Icon type="playstation"></Icon>
                            <span>记住登陆</span>
                        </Checkbox>
                    </p>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')" long>登陆</Button>
                    </FormItem>
                </Form>
            </div>       
        </Col>  
    </Row>
</template>

<script>
export default {
    data(){
        return{
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码小于6位', trigger: 'blur' }
                ]
            }  
        }
    },
    methods:{
        //自动登陆状态更改
        check(data){
            if(data==true){
                localStorage.ms_username=this.formInline.user;
                this.$Message.success('下次自动登陆');
            }else if(data==false){
                localStorage.clear('ms_username')
                this.$Message.error('取消下次自动登陆');
            }
        },
        //登陆时临时记住登陆状态
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    if (this.formInline.password=='123456') { 
                        sessionStorage.ms_username=this.formInline.user;            
                        this.$Message.success('登陆成功');
                        this.$router.push('/');
                    } else {
                        this.$Message.error('密码错误');
                        return false;
                    }
                } else {
                    this.$Message.error('登陆失败');
                }
            })
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
    background: url("http://attachments.gfan.com/forum/attachments2/day_121102/121102005844bf2f67fc43dbcf.jpg") no-repeat;
    background-size:cover;
    
   #loginbox{
       margin: 30% auto;
       width: 80%;
       border-radius: 6px;
       text-align: center;
       background: rgba(255, 255, 255, 0.7); 
       padding: 12px;
       p{
           padding-bottom: 8px;
       }
       .inputbox{
           padding: 6px 0;
       }

   }
   
}
</style>

