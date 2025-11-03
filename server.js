// 引入 express
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user: "814262926@qq.com",
    pass: "btupvvhmwxenbbdj",
  },
});

// 定义接口
app.get("/api/users", (req, res) => {
  console.log("✅ Received request for /api/users", process.env.API_PREX);
  res.json([{ name: "xx" }]);
});
app.get("/api/send", (req, res) => {
  transporter.sendMail(
    {
      from: '<814262926@qq.com>',
      to: "weiw30471@gmail.com",
      subject: "测试邮件",
      text: "这是一封测试邮件",
      html: "<b>这是一封测试邮件</b><b>这是一封测试邮件</b><b>这是一封测试邮件</b>",
    },
    (err, info) => {
      if (err) {
        console.error("发送失败", err);
        res.status(500).json({ error: "发送失败" });
      } else {
        console.log("发送成功", info.response);
        res.json([{ code: "send success" }]);
      }
    }
  );
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
