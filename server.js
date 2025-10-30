// 引入 express
const express = require('express');
const app = express();

// 定义接口
app.get('/api/users', (req, res) => {
    console.log('✅ Received request for /api/users', process.env.API_PREX);
  res.json([{ name: 'xx' }]);
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
