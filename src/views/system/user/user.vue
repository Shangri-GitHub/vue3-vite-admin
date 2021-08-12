<template>
    <div>
        <el-button size="small" type="primary" @click="addUser">
            添加
        </el-button>
        用户列表
    </div>
</template>

<script>
    import router from '/src/router'
    import { reactive, ref,  } from 'vue'
    export default {
        name: "menu",
        setup() {

            console.log(1);

            function addUser() {
                router.push({
                    name: 'addUser',
                })
            }

            return {
                addUser
            }
        }
    }
</script>

<style scoped>

</style>