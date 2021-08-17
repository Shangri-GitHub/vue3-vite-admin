<template>
    <!--按钮+查询条件-->
    <div class="query">
        <div style="display: flex">
            <el-button type="primary" size="small" icon="el-icon-plus">添加用户</el-button>
            <el-button size="small" icon="el-icon-delete">删除</el-button>
        </div>
        <!--查询条件-->
        <div style="display: flex">
            <el-select class="select" v-model="query.selectValue" placeholder="请选择" size="small">
                <el-option
                        v-for="item in query.option"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-input class="input" size="small"
                      v-if="query.selectValue === 'username' || query.selectValue === 'nickname'"
                      v-model="query.inputValue"
                      placeholder="请输入"></el-input>
            <el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
        </div>
    </div>


    <!--表格-->
    <data-table
            v-bind="tableOption"
            @edit="edit"
            @selection="selection"
            @getTableData="getTableData"
            @test="test"
    ></data-table>

</template>

<script>
    import DataTable from '@/components/DataTable/index.vue'
    import {queryByCondition} from '@/api/sysUserService'
    import {onMounted, reactive, ref} from 'vue'

    export default {
        components: {DataTable},
        setup() {
            onMounted(() => {
                getTableData(tableOption.getTableData.page)


            })
            // 查询框
            const query = reactive({
                selectValue: "username",
                inputValue: "",
                option: [{
                    label: '登录名',
                    value: 'username'
                }, {
                    label: '昵称',
                    value: 'nickname'
                }]
            })

            // 表格配置属性
            const tableOption = reactive({
                indexNo: true,
                // 表头数据
                columns: [
                    {
                        label: '登录名',
                        prop: 'username',
                        fixed: true,
                        width: '180',
                        sort: true,
                    },
                    {
                        label: '昵称',
                        fixed: true,
                        prop: 'nickName',
                        sort: true,
                    },
                    {
                        label: '电话',
                        prop: 'phone',
                        sort: true,
                    },
                    {
                        label: '邮箱地址',
                        prop: 'email',
                        width: "140",
                        sort: true,
                    },
                    {
                        label: '状态',
                        prop: 'phone',
                        sort: true,
                    },
                    {
                        label: '创建时间',
                        prop: 'createTime',
                        sort: true,
                    },
                    {
                        label: '更新时间',
                        prop: 'updateTime',
                        sort: true,
                    },
                ],
                // 表格内容数据
                getTableData: {
                    eventName: 'getTableData',
                    page: {
                        current: 1,
                        size: 10,
                    },
                    total: 0,
                    data: [],
                },
                buttonGroup: [
                    {
                        label: '编辑', //复制
                        icon: '',
                        type: '',
                        eventName: 'edit',
                        disabled: function (item) {
                        },
                    },
                    {
                        label: '查看', //复制
                        icon: '',
                        type: '',
                        eventName: 'copy',
                        disabled: function (item) {
                            return item.date === '2016-05-03'
                        },
                    },
                    {
                        label: '更多',
                        type: 'primary',
                        icon: '',
                        dropdownMenu: [
                            {
                                label: '测试',
                                eventName: 'test',
                                disabled: function (item) {
                                    return item.date === '2016-05-03'
                                },
                            },
                            {
                                label: '连接',
                                command: 'connect',
                                disabled: function (item) {
                                },
                            },
                        ],
                    },
                ],
                // 多选功能
                selection: {
                    eventName: 'selection',
                    data: []
                }

            })

            function selection(val) {
                console.log(val);
            }

            function edit(scope) {
                console.log(scope)
            }

            function test(scope) {
                console.log(scope)
            }

            function getTableData(param) {
                param.username = ""
                queryByCondition(param).then(res => {
                    tableOption.getTableData.total = res.data.total
                    tableOption.getTableData.data = res.data.data
                    tableOption.getTableData.data = res.data.data
                })
            }

            return {
                query,
                edit,
                test,
                getTableData,
                tableOption,
                selection,
            }
        },
    }
</script>
