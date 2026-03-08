# 部署指南

## Cloudflare Pages 部署

此项目配置为使用 Cloudflare Pages 进行部署。

### 前置要求

1. Cloudflare 账户
2. 域名已在 Cloudflare 托管
3. GitHub 仓库

### 自动部署设置

#### 1. 在 Cloudflare 中创建 Pages 项目

1. 登录 Cloudflare Dashboard
2. 选择 "Pages" > "Create a project"
3. 选择 "Connect to Git"
4. 连接你的 GitHub 仓库
5. 配置构建设置：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (如果仓库根目录就是项目目录)

#### 2. 配置 GitHub Secrets

在你的 GitHub 仓库中设置以下 Secrets (Settings > Secrets and variables > Actions):

- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
  - 创建方法：Cloudflare Dashboard > My Profile > API Tokens > Create Token
  - 使用 "Custom token" 模板
  - 权限：Account - Cloudflare Pages:Edit, Zone - Zone:Read
- `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare Account ID
  - 在 Cloudflare Dashboard 右侧栏可以找到

#### 3. 域名配置

1. 在 Cloudflare Pages 项目中，转到 "Custom domains"
2. 添加你的域名 `unireadinglist.com`
3. 按照指示配置 DNS 记录

### 手动部署

如果需要手动部署：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 使用 Wrangler CLI 部署
npx wrangler pages deploy dist --project-name unireadinglist
```

### 部署文件说明

- `_headers`: 设置 HTTP 头部，包括安全策略和缓存策略
- `_redirects`: URL 重定向规则
- `wrangler.toml`: Cloudflare Workers/Pages 配置
- `.github/workflows/deploy.yml`: GitHub Actions 自动部署工作流

### 本地预览

```bash
# 开发服务器
npm run dev

# 构建并预览
npm run build
npm run preview
```

### 故障排除

1. **构建失败**: 检查 Node.js 版本是否为 18+
2. **部署失败**: 验证 Cloudflare API Token 权限
3. **域名问题**: 确保 DNS 记录正确配置

### 注意事项

- 每次推送到 `main` 分支会触发自动部署
- Pull Request 会创建预览部署
- 构建产物会自动缓存在 Cloudflare CDN
