<script setup lang="ts">
import { Document, Plus, Finished, More, User } from "@element-plus/icons-vue";
</script>

<template>
  <div style="display: flex;">
    <div style="width: 69%;height: 30%;">
      <el-tabs type="border-card" style="margin: 15px 10px;">
        <el-tab-pane label="业务办理中">
          <div style="height: 30px;display: flex;">
            <el-icon :size="25" class="el-icon-class">
              <document />
            </el-icon><span style="font-size: 20px;">论文</span>
            <el-divider direction="vertical" style="height: 30px;"></el-divider>
            <div style="margin:-5px 6px;">
              <span>科研管理系统论文</span><br>
              <span>2022-04-17 提交</span>
            </div>
          </div>
          <el-divider></el-divider>
          <div style="height: 30px;display: flex;">
            <el-icon :size="25" class="el-icon-class">
              <document />
            </el-icon><span style="font-size: 20px;">项目</span>
            <el-divider direction="vertical" style="height: 30px;"></el-divider>
            <div style="margin: -12px 6px;">
              <span>基于Springboot和vue的科研管理系统</span><br>
              <span>2022-04-17 项目申报</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="办理结果">Config</el-tab-pane>
      </el-tabs>

      <el-tabs style="margin: 30px 10px;">
        <el-tab-pane label="通知公告">
          <span style="margin: 20px;">关于征集基础与应用基础研究重大科学问题的通知</span><br>
          <span style="margin: 20px;">2022-04-18</span>
          <el-divider></el-divider>
          <span style="margin: 20px;">关于征集基础与应用基础研究重大科学问题的通知</span><br>
          <span style="margin: 20px;">2022-04-18</span>
          <el-divider></el-divider>
          <span style="margin: 20px;">关于征集基础与应用基础研究重大科学问题的通知</span><br>
          <span style="margin: 20px;">2022-04-18</span>
          <el-divider></el-divider>
          <span style="margin: 20px;">关于征集基础与应用基础研究重大科学问题的通知</span><br>
          <span style="margin: 20px;">2022-04-18</span>
          <el-divider></el-divider>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="width: 30%;height: 30%;" class="my-divider">
      <el-tabs type="border-card" style="margin-top: 15px;">
        <el-tab-pane label="快捷通道">
          <el-icon :size="20">
            <plus />
          </el-icon>
          <span style="position: relative;bottom: 5px;margin:0px 5px;">项目</span>
          <el-divider></el-divider>
          <span>普通项目</span>
          <span style="margin-left: 15px;">重点项目</span>
          <el-divider></el-divider>
          <el-icon :size="20">
            <finished />
          </el-icon>
          <span style="position: relative;bottom: 5px;margin:0px 5px;">成果</span>
          <el-divider></el-divider>
          <span>产品</span>
          <span style="margin-left: 15px;">论文</span>
          <el-divider></el-divider>
          <el-icon :size="20">
            <more />
          </el-icon>
          <span style="position: relative;bottom: 5px;margin:0px 5px;">其他</span>
          <el-divider></el-divider>
          <span>文档共享</span>
          <span style="margin-left: 15px;">科研详情</span>
          <el-divider></el-divider>
        </el-tab-pane>
      </el-tabs>

      <el-tabs type="border-card" style="margin-top: 20px;">
        <el-tab-pane label="业务办理中">
          <div style="height: 30px;display: flex;">
            <el-icon :size="25" class="el-icon-class">
              <user />
            </el-icon>
            <div style="margin:-5px 6px;">
              <span>科研管理员</span><br>
              <span>zhang</span>
            </div>
          </div>
          <el-divider></el-divider>
          <div style="height: 30px;display: flex;">
            <el-icon :size="25" class="el-icon-class">
              <user />
            </el-icon>
            <div style="margin: -5px 6px;">
              <span>财务管理员</span><br>
              <span>li</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.el-button {
  margin: 4px;
}

.el-icon-class {
  position: relative;
  top: 3px;
  margin-right: 5px;
}

/* el-divider 修改高度&虚线效果 */
.my-divider ::v-deep(.el-divider--horizontal) {
  margin: 8px 0;
  background: 0 0;
}
</style>
