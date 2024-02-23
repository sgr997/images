------------------ Loon 配置 ------------------

[MITM]
hostname = auth.alipan.com,auth.aliyundrive.com


[Script]
http-request ^https:\/\/(auth|aliyundrive)\.alipan\.com\/v2\/account\/token script-path=https://gist.githubusercontent.com/Sliverkiss/33800a98dcd029ba09f8b6fc6f0f5162/raw/aliyun.js, requires-body=true, timeout=10, enabled=false, tag=阿里云盘获取cookie

cron "30 0,7,11 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/33800a98dcd029ba09f8b6fc6f0f5162/raw/aliyun.js, timeout=10, tag=阿里云盘
