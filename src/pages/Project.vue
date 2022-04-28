<template>
  <el-dialog width="60%" v-model="dialogProjectVisible" :destroy-on-close="true" @closed="close">
    <template #title>
      <span style="font-size: medium;">项目新增</span>
    </template>
    
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="立项信息" />
      <el-step title="项目成员" />
      <el-step title="项目预算" />
      <el-step title="项目文档" />
    </el-steps>
    <zongproject v-if="active == 0"></zongproject>
    <el-divider />
        <el-row>
          <el-col :offset="10">
              <el-button @click="next">下一步</el-button>
              <el-button @click="close">关闭</el-button>
          </el-col>
        </el-row>
  </el-dialog>


  <div style="display: flex;">
    <el-menu :default-openeds="['1', '2', '3', '4']" class="el-menu-left">
      <el-sub-menu index="1">
        <template #title>
          <span>项目性质</span>
        </template>
        <el-menu-item index="1-1">纵向</el-menu-item>
        <el-menu-item index="1-2">横向</el-menu-item>
        <el-menu-item index="1-3">校级</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span>参与形式</span>
        </template>
        <el-menu-item index="2-1">主持</el-menu-item>
        <el-menu-item index="2-2">参与</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>项目状态</span>
        </template>
        <el-menu-item index="3-1">进行</el-menu-item>
        <el-menu-item index="3-2">结束</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <span>年度分布</span>
        </template>
        <el-menu-item index="4-1">2018</el-menu-item>
        <el-menu-item index="4-2">2019</el-menu-item>
        <el-menu-item index="4-3">2020</el-menu-item>
      </el-sub-menu>
    </el-menu>

    <el-tabs type="border-card" class="tabs-right">
      <el-tab-pane label="项目列表">
        <div style="text-align: right;margin-bottom: 5px;">
          <el-button @click="dialogProjectVisible = true">新增纵向项目</el-button>
          <el-button>新增横向项目</el-button>
          <el-button>新增校级项目</el-button>
        </div>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="项目编号" width="180" />
            <el-table-column prop="projectName" label="项目名称" width="180" />
            <el-table-column prop="userName" label="负责人姓名" />
            <el-table-column prop="college" label="所属单位" />
            <el-table-column prop="fund" label="批准经费（万元）" />
            <el-table-column prop="date" label="立项日期" />
            <el-table-column prop="state" label="审核状态" />
            <el-table-column prop="operation" label="操作" />
          </el-table>
          <el-button type="primary" @click="test">测试</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="出账合同列表">出账合同列表</el-tab-pane>
    </el-tabs>


  </div>
</template>

<script setup lang="ts">
import http from '@/utils/axios';


const tableData = reactive([
  {
    id: '校11320',
    projectName: '校级项目',
    userName: '张迎雪',
    college: '信息科学与工程学院',
    fund: '10.0',
    date: '2019-01-01',
    state: '审核通过',
    operation: '查看'
  },
  {
    id: '纵1132',
    projectName: '纵向项目',
    userName: '张迎雪',
    college: '信息科学与工程学院',
    fund: '11.0',
    date: '2021-01-01',
    state: '审核通过',
    operation: '查看'
  },
])

const dialogProjectVisible = ref(false)
const active = ref(0)
const next = () => {
  active.value++
}
const close = () => {
  dialogProjectVisible.value = false
  active.value = 0
}

const test = () => {
  http.post("/user/login",{
    username: 'admin',
    password: '123456'
  }).then(res=> {
    console.log(res);
    sessionStorage.setItem('user', JSON.stringify(res.data));
  })

  http.get("/user/").then(res=>{
    console.log(res);
    
  })
}

</script>

<style scoped>
.tabs-right {
  margin: 10px;
  width: 100%;
  height: 80vh;
}

.el-menu-item {
  height: 30px;
}

.el-menu-left {
  margin: 10px;
  border: 1px solid var(--el-border-color);
  width: 41vh;
  height: 530px;
}

.el-menu-left ::v-deep(.el-sub-menu) {
  border-bottom: solid 1px var(--el-menu-border-color);
}

.el-divider--horizontal {
  margin: 10px 0;
}

.prefix-icon-class {
  display: none;
}
</style>