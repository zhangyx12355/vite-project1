<template>
  <div>
    <span style="font-size: medium;">基本信息</span>
      <el-divider></el-divider>
      <el-form label-position="right" label-width="100px">
        <el-row>
          <el-col :span="10">
            <el-form-item label="批准号">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="项目名称">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="项目编号">
              纵20180064
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="负责人">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="负责人类型">
              <el-radio-group>
                <el-radio label="教师"></el-radio>
                <el-radio label="学生"></el-radio>
                <el-radio label="校外"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="所属单位">
              <el-select placeholder="请选择单位">
                <el-option label="单位一" value="college1" />
                <el-option label="单位二" value="college2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="所属系部">
              <el-select placeholder="请选择系部">
                <el-option label="系部一" value="department1" />
                <el-option label="系部二" value="department2" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="项目状态">
              <el-radio-group>
                <el-radio label="进行"></el-radio>
                <el-radio label="暂停"></el-radio>
                <el-radio label="完成"></el-radio>
                <el-radio label="撤销"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="立项日期">
              <el-date-picker v-model="value1" type="date" placeholder="选择一个日期" prefix-icon="prefix-icon-class"
                style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="开始日期">
              <el-date-picker v-model="value2" type="date" placeholder="选择一个日期" prefix-icon="prefix-icon-class"
                style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="计划结项日期">
              <el-date-picker v-model="value1" type="date" placeholder="选择一个日期" prefix-icon="prefix-icon-class"
                style="width: 100%;" />
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="实际结项日期">
              <el-date-picker v-model="value2" type="date" placeholder="选择一个日期" prefix-icon="prefix-icon-class"
                style="width: 100%;" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="批准经费">
              <el-input><template #append>万元</template></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="配套经费">
              <el-input><template #append>万元</template></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="外拨经费">
              <el-input><template #append>万元</template></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="4">
            <el-form-item label="成果形式">
              <el-select placeholder="请选择成果形式">
                <el-option label="论文" value="paper" />
                <el-option label="实体" value="entity" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
  </div>
</template>

<script setup lang="ts">


const value1 = ref('')
const value2 = ref('')
</script>

<style scoped>

</style>