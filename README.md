# <p align=center>蔚蓝档案国服反和谐</p>

<div align=center>

[![GitHub](https://img.shields.io/badge/主页-roundRekt-brightgreen?logo=github)](https://github.com/roundRekt)
[![GitHub](https://img.shields.io/badge/仓库-GitHub-blueviolet?logo=github)](https://github.com/roundRekt/bluearchive-cn-uncensor)
[![Platform](https://img.shields.io/badge/平台-Android_|_iOS_|_macOS-blue?logo=github)](https://github.com/roundRekt/bluearchive-cn-uncensor/blob/main/README.md)
[![GitHub license](https://img.shields.io/github/license/roundRekt/bluearchive-cn-uncensor?logo=github&label=许可证)](https://github.com/roundRekt/bluearchive-cn-uncensor/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/roundRekt/bluearchive-cn-uncensor?logo=github&label=上次提交)](https://github.com/roundRekt/bluearchive-cn-uncensor/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/roundRekt/bluearchive-cn-uncensor?logo=github&label=议题)](https://github.com/roundRekt/bluearchive-cn-uncensor/issues)
[![GitHub stars](https://img.shields.io/github/stars/roundRekt/bluearchive-cn-uncensor?logo=github&label=星标)](https://github.com/roundRekt/bluearchive-cn-uncensor/stargazers)

</div>

> [!NOTE]
> 本项目用于实现《蔚蓝档案》国服反和谐，适用于 `Android`、`iOS`、`macOS` 等主流平台

本项目用于还原国服以下部分的和谐内容：

  - 角色立绘 `(例：瞬、亚子、明日奈)`
  - 剧情对话 `(例：主人 → 先生)`
  - 界面文本 `(例：扫荡 → 快速战斗)`

## Android

> [!NOTE]
> Android 平台可直接通过编辑 `LocalizeConfig.txt` 实现反和谐

Android 平台的 `LocalizeConfig.txt` 位于 `/storage/emulated/0/Android/data/com.RoamingStar.BlueArchive/files/LocalizeConfig.txt`

### 修改配置方案

> [!TIP]
> 可使用文件管理器或 ADB 对 `LocalizeConfig.txt` 进行编辑或替换

#### 启用反和谐

修改 `LocalizeConfig.txt` 为以下内容，或下载修改后的配置文件并替换

```ini
Env=dev
IsLocalize=false
ResUrls=http://mx.jvav.net.cn/asdf;http://mx.jvav.net.cn/asdf;http://mx.jvav.net.cn/asdf
```

#### 停用反和谐

修改 `LocalizeConfig.txt` 为以下内容，或下载原版备份配置文件并替换

```ini
Env=dev
IsLocalize=false
ResUrls=https://static.bluearchive-cn.com/prodm39;https://static-qc.bluearchive-cn.com/prodm39;https://static-hs.bluearchive-cn.com/prodm39
```

<div align=center>

[![配置文件](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=+++配置文件&secondaryLabel=下载&primaryBGColor=%23359e4f&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=android&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://uncensor.roundrekt.io/download/config/LocalizeConfig.txt)
&nbsp;
[![原版文件](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=+++原版文件&secondaryLabel=下载&primaryBGColor=%23359e4f&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=android&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://uncensor.roundrekt.io/download/backup/LocalizeConfig.txt)

</div>

## iOS

> [!NOTE]
> iOS 平台因系统限制无法修改 `LocalizeConfig.txt`，需要通过 MitM 重写资源地址

本项目为 iOS 平台提供两种方案，适用于不同使用场景，可以并行启用以覆盖所有使用场景：

- [描述文件方案](#描述文件方案) `(适用于关闭代理工具时)`
- [代理工具方案](#代理工具方案) `(适用于使用代理工具时)`

### 描述文件方案

> [!NOTE]
> 此方案安装描述文件并信任根证书即可使用，但依赖于本项目的服务器进行路由，可能会对下载资源时的性能造成轻微影响

> [!WARNING]
> 此方案不能与绝大多数代理工具或加速器直接配合使用，否则会导致反和谐失效，如有代理需求，请参考[代理工具方案](#代理工具方案)

> [!TIP]
> 可以将此方案与[代理工具方案](#代理工具方案)方案并行启用，以覆盖所有使用场景

#### 启用反和谐

安装描述文件，并在 `设置 → 通用 → 关于本机 → 证书信任设置` 内信任根证书，并保持代理工具和加速器为关闭状态

#### 停用反和谐

在 `设置 → 通用 → VPN与设备管理 → DNS` 内将 DNS 改为 `自动`，或者 `移除描述文件`

<div align=center>

[![描述文件](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=+++描述文件&secondaryLabel=安装&primaryBGColor=%232d2d2d&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=apple&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://uncensor.roundrekt.io/download/profile/bluearchive-cn-uncensor.mobileconfig)

</div>

### 代理工具方案

> [!NOTE]
> 具备 MitM 及重写功能的代理工具均可用于此方案，对于主流代理工具，本项目提供一键安装配置，其他工具请自行配置重写规则

> [!WARNING]
> 使用此方案必须保证启动游戏时代理工具处于开启状态，否则会导致反和谐失效，如有直连需求，请参考[描述文件方案](#描述文件方案)

> [!TIP]
> 可以将此方案与[描述文件方案](#描述文件方案)并行启用，以覆盖所有使用场景

#### 启用反和谐

在所使用的代理工具内启用 MitM (HTTPS解密) 功能，并完成根证书的生成、安装与信任，然后安装并启用与代理工具对应的配置

#### 停用反和谐

在所使用的代理工具中 `停用` 对应的配置，或者 `删除` 对应的配置

<div align=center>

[![Shadowrocket](https://custom-icon-badges.demolab.com/badge/Shadowrocket-安装模块-blue.svg?logo=shadowrocket)](https://uncensor.roundrekt.io/install/shadowrocket)
[![Stash](https://custom-icon-badges.demolab.com/badge/Stash-安装覆写-blue.svg?logo=stash)](https://uncensor.roundrekt.io/install/stash)
[![Loon](https://custom-icon-badges.demolab.com/badge/Loon-安装插件-blue.svg?logo=loon)](https://uncensor.roundrekt.io/install/loon)
[![Quantumult X](https://custom-icon-badges.demolab.com/badge/Quantumult_X-安装重写-blue.svg?logo=quantumultx)](https://uncensor.roundrekt.io/install/quantumultx)
[![Surge](https://custom-icon-badges.demolab.com/badge/Surge-安装模块-blue.svg?logo=surge)](https://uncensor.roundrekt.io/install/surge)

</div>

## macOS

> [!NOTE]
> 搭载 Apple Silicon 的 macOS 设备可通过 PlayCover 或自签侧载 iOS 版国服客户端

macOS 平台的 `LocalizeConfig.txt` 位于 `~/Library/Containers/蔚蓝档案/Data/Documents/LocalizeConfig.txt`

### 修改配置方案

> [!TIP]
> 可使用访达或终端对 `LocalizeConfig.txt` 进行编辑或替换

#### 启用反和谐

修改 `LocalizeConfig.txt` 为以下内容，或下载修改后的配置文件并替换

```ini
Env=dev
IsLocalize=false
ResUrls=http://mx.jvav.net.cn/asdf;http://mx.jvav.net.cn/asdf;http://mx.jvav.net.cn/asdf
```

#### 停用反和谐

修改 `LocalizeConfig.txt` 为以下内容，或下载原版备份配置文件并替换

```ini
Env=dev
IsLocalize=false
ResUrls=https://static.bluearchive-cn.com/prodm39;https://static-qc.bluearchive-cn.com/prodm39;https://static-hs.bluearchive-cn.com/prodm39
```

<div align=center>

[![配置文件](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=+++配置文件&secondaryLabel=下载&primaryBGColor=%230e5cab&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=xcode&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://uncensor.roundrekt.io/download/config/LocalizeConfig.txt)
&nbsp;
[![原版文件](https://forthebadge.com/api/badges/generate?panels=2&primaryLabel=+++原版文件&secondaryLabel=下载&primaryBGColor=%230e5cab&primaryTextColor=%23ffffff&secondaryBGColor=%23f9f9fd&secondaryTextColor=%23000000&primaryFontSize=12&primaryFontWeight=600&primaryLetterSpacing=2&primaryFontFamily=Roboto&primaryTextTransform=uppercase&secondaryFontSize=12&secondaryFontWeight=900&secondaryLetterSpacing=2&secondaryFontFamily=Montserrat&secondaryTextTransform=uppercase&primaryIcon=xcode&primaryIconColor=%23ffffff&primaryIconSize=16&primaryIconPosition=left&borderRadius=10)](https://uncensor.roundrekt.io/download/backup/LocalizeConfig.txt)

</div>

## 免责声明

  - 本项目与游戏《[蔚蓝档案](https://bluearchive-cn.com)》及其版权所属公司 `上海星啸网络科技有限公司` 无任何官方关联
  - 本项目不托管和提供任何游戏资源，仅提供配置文件及服务器，所有游戏资源均来自于互联网公开资源
  - 本项目不会监控和收集用户个人隐私，未经授权不得将服务器资源用于与本项目无关的用途
  - 本项目不对因使用或无法使用本项目而直接或间接产生的的一切损失承担任何责任
