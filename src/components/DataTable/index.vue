<template>
    <div style=";padding: 0 20px;background: white">
        <el-table
                ref="dataTable"
                highlight-current-row
                :data="getTableData.data"
                :height="height"
                :border="tableBorder"
                :tree-props="treeProps"
                :row-key="rowKey"
                :expand-row-keys="expands"
                style="width: 100%"
        >
            <!--表格是否排序-->
            <el-table-column
                    type="index"
                    :label="indexLabel"
                    v-if="indexNo"
            ></el-table-column>

            <template v-for="col in columns">
                <!-- 格式化各种日期 - 名称自定义 type设置为formatTime 时生效-->
                <el-table-column
                        v-if="col.type === 'formatTime'"
                        :sortable="col.sort"
                        :align="col.align ? col.align : 'center'"
                        :prop="col.prop"
                        :label="col.label"
                        :width="col.width"
                ></el-table-column>
                <el-table-column
                        v-else
                        :width="col.width"
                        :fixed="col.fixed"
                        :sortable="col.sort"
                        show-overflow-tooltip
                        :align="col.align ? col.align : 'center'"
                        :prop="col.prop"
                        :label="col.label"
                ></el-table-column>
            </template>
            <!--表格按钮操作-->
            <el-table-column label="操作" v-if="buttonGroup.length > 0" :width="tableConfig.buttonWidth" align="center">
                <template #default="scope">
                    <el-button-group>
                        <!-- 控制显示隐藏 -->
                        <template v-for="(item, index) in buttonGroup">
                            <el-button
                                    :key="index"
                                    :icon="item.icon"
                                    :type="item.type"
                                    v-if="!item.hasOwnProperty('dropdownMenu')"
                                    size="mini"
                                    :disabled="item.disabled && item.disabled(scope.row)"
                                    @click="buttonHandler(item.eventName, scope.row)"
                            >
                                {{ item.label }}
                            </el-button>
                            <!--更多按钮 handleCommand()-->
                            <el-dropdown
                                    @command="handleCommand"
                                    v-if="item.hasOwnProperty('dropdownMenu')"
                            >
                                <el-button
                                        :type="item.type"
                                        :size="item.size ? item.size : 'mini'"
                                >
                                    {{ item.label }}
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item
                                                :command="{
                      eventName: dropItem.eventName,
                      scope: scope.row,
                    }"
                                                v-for="(dropItem, index) in item.dropdownMenu"
                                                :disabled="
                      dropItem.disabled && dropItem.disabled(scope.row)
                    "
                                                :key="index"
                                        >
                                            {{ dropItem.label }}
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </template>
                    </el-button-group>
                </template>
            </el-table-column>
        </el-table>
        <!--分页 hide-on-single-page-->
        <el-pagination
                style="display: flex; justify-content: center"
                small
                current-page="currentPage"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="getTableData.page.current"
                :page-sizes="[10, 20, 50, 100, 300]"
                :page-size="getTableData.page.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="getTableData.total"
        ></el-pagination>
    </div>

</template>

<script>
    import {ref, reactive, onMounted} from 'vue'

    export default {
        name: 'index',
        props: {
            indexLabel: {type: String, default: '序号'}, // 是否展示序号的label
            height: {type: String},
            columns: {type: Array}, //列
            buttonGroup: {type: Array, default: []}, // 操作按钮
            settingsFixed: {type: Boolean, default: false}, //操作按钮是否固定
            getTableData: {},
            buttonConfig: Object,
            default: {
                align: 'center',
                fixed: false,
            },
            indexNo: {type: Boolean, default: false}, // 是否展示序号
            tableBorder: {type: Boolean, default: false}, // 是否带有纵向边框
            rowKey: {type: String},
            treeProps: {type: Object},
            isExpand: {type: Boolean, default: false},
            expands: {type: Array},
        },
        setup(props, {emit}) {
            const currentPage = ref(1)
            const tableConfig = reactive({
                buttonWidth: 210
            })
            onMounted(() => {
                // 操作列的宽度
                if (props.buttonGroup.length === 1) {
                    tableConfig.buttonWidth = 95;
                } else if (props.buttonGroup.length === 2) {
                    tableConfig.buttonWidth = 174;
                } else {

                }
            })

            // 操作按钮
            function buttonHandler(eventName, scope) {
                emit(eventName, scope)
            }

            function handleCommand(drop) {
                emit(drop.eventName, drop.scope)
            }

            function handleSizeChange(val) {
                console.log(`每页 ${val} 条`)
                props.getTableData.page.size = val
                emit(props.getTableData.eventName, props.getTableData.page)
            }

            function handleCurrentChange(val) {
                console.log(`当前页: ${val}`)
                props.getTableData.page.current = val
                emit(props.getTableData.eventName, props.getTableData.page)
            }

            return {
                tableConfig,
                currentPage,
                buttonHandler,
                handleCommand,
                handleSizeChange,
                handleCurrentChange,
            }
        },
    }
</script>

<style scoped></style>
