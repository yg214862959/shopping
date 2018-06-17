<template>
    <Row>
        <Col span="24">
            <Button @click="modal5 = true">{{titles}}</Button>
            <Modal
                v-model="modal5"
                :title="titles"
                width="300">
                <label>姓名：<Input v-model="userdata.name" placeholder="输入你的姓名"></Input></label>
                <label>电话：<Input v-model="userdata.tel" placeholder="输入你的电话"></Input></label>
                <label>邮编：<Input v-model="userdata.code" placeholder="输入你的邮编"></Input></label>
                地址：<Cascader :data="getaddress" v-model="value" change-on-select></Cascader>
                <label>详细地址： <Input v-model="userdata.moreaddress" type="textarea" placeholder="街道/小区/单元/门牌号"></Input></label>
                <Button type="success" @click="adduser()" long>确认</Button>
            </Modal>
        </Col>
    </Row>        
</template>
<script>
export default {
    name: "iAddress",
    computed:{
        //全数据
        getaddress(){
            return this.$store.state.addressdata
        },
        titles(){
            if(this.$store.state.userdatas.length>1){
                console.log(this.userdata.length)
                return this.titlechange
            }else if(this.$store.state.userdatas.length=1){
                return this.titleadd
            }
        }   
    },
    methods:{       
        adduser(){
            if(this.userdata.name==""||this.userdata.tel==""||this.userdata.code==""||this.userdata.moreaddress==""||this.value==""){
                this.$Message.error('信息不完整');
            }else{
                this.$store.commit("addressval",this.value)
                this.$store.commit("adduserdata",this.userdata);
                this.$Message.success('成功')
            }         
        }
    },
    created(){
        this.$store.dispatch("getaddress")
    },
    data() {
        return {
            value:[],
            userdata:
                {
                    name:"",
                    tel:"",
                    code:"",
                    moreaddress:""
                },
            titlechange:"更改收件信息",
            titleadd:"新增收件信息",   
            modal5:false
        };
    }
};
</script>
