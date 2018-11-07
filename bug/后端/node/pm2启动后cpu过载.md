bug 描述：项目配置 PM2 启动后 cpu 飙升 100%，控制台查看为 VMI Provider Host 占用 CPU 过高  
系统：win10,  
解决过程：

1. 打开 Event Viewer（事件查看器）
2. 在左侧菜单选择 应用程序和服务日至 -> Microsoft -> Windows -> WMI-Activity -> Operational，双击一条错误信息
3. 在弹出的 时间属性 窗口中，找到 ClientProcessId，这就是造成 VMI 错误而引发 CPU 占用过高的进程。
4. 在任务管理器的详细信息里找到对应的 PID，该进程就是造成问题的进程。我的情况是 wpscenter.exe。
5. 打开 wpscenter.exe 所在文件夹，新建文件命名为 wpscenter.exe,源文件备份，同级目录下 wpscloudlaunch.exe，wpscloudsvr.exe，父级兄弟目录 wtoolex 下 wpsnotify.exe，wpsupdate.exe 同样操作
