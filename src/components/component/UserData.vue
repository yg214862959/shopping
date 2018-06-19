<template>
    <Row>
        <Col span="24">
            <Button @click="modal5 = true" long>设置个人资料</Button>
            <Modal
                v-model="modal5"
                title="设置个人资料"
                width="300">
                <p>
                    <p>昵称：</p><Input v-model="user.name" placeholder="Enter something..." ></Input>
                </p>
                <p>
                    <p>邮件地址：</p><Input v-model="user.email" placeholder="Enter something..." ></Input>
                </p>
                <Row>
                    <Col span="12">
                        <p>性别：</p>
                        <ButtonGroup>
                            <Button 
                            v-for="(item,index) in iconval" 
                            type="ghost" 
                            :icon="item"
                            :class="{active: num==index}"
                            @click="btnclass(index)"
                            :key="(item,index).id"
                            >
                            </Button>
                        </ButtonGroup>
                    </Col>
                    <Col span="12">
                        <p>生日：</p>
                        <p>
                            <DatePicker type="date" placeholder="Select date" ></DatePicker>
                        </p>
                    </Col>
                </Row>
                
                <p>
                    <p>身份证号：</p>
                    <Input v-model="user.personid" placeholder="Enter something..." ></Input>
                </p>
                <p>
                    <p>签名：</p>
                    <Input v-model="user.autograph" type="textarea" placeholder="Enter something..."></Input>
                </p>
                <Button @click="addusername(user)" long>确认</Button>
            </Modal>
        </Col>
    </Row>
</template>

<script>
export default {
    name:"UserData",
    data(){
        return{
            modal5:false,
            user:{
                name:"",
                email:"",
                personid:"",
                autograph:"",
            },
           
            iconval:[
                "male",
                "female",
                "transgender"
            ],
            num:0
        }
    },
    methods:{
        btnclass(val){
            this.num=val
        },
        addusername(val){
            this.$store.commit("adduser",val)
        }
    },

        

}
</script>

<style lang="scss" scoped>
.active{
    background:#2b85e4;
    color: #fff
}
</style>

