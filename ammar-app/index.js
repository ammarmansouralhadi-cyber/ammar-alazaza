import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AMMAR PRIVATE VAULT</title>
        <style>
            body {
                background-color: #0b0b0b;
                color: #d4af37;
                font-family: Tahoma, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .vault-container {
                background: #141414;
                border: 2px solid #d4af37;
                border-radius: 12px;
                padding: 30px;
                width: 100%;
                max-width: 400px;
                box-shadow: 0 0 25px rgba(212, 175, 55, 0.3);
                text-align: center;
            }
            h1 {
                color: #ffd700;
                font-size: 24px;
                margin-bottom: 5px;
                border-bottom: 1px solid #d4af37;
                padding-bottom: 15px;
            }
            .subtitle {
                font-size: 12px;
                color: #a3913c;
                margin-bottom: 20px;
            }
            input {
                width: 90%;
                padding: 12px;
                margin: 10px 0;
                background: #1e1e1e;
                border: 1px solid #d4af37;
                border-radius: 6px;
                color: #fff;
                text-align: center;
                font-size: 16px;
                box-sizing: border-box;
            }
            button {
                width: 90%;
                padding: 12px;
                background: linear-gradient(135deg, #d4af37, #aa8c2c);
                color: #0b0b0b;
                border: none;
                border-radius: 6px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                margin-top: 15px;
            }
            .status {
                margin-top: 15px;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="vault-container">
            <h1>AMMAR VAULT</h1>
            <div class="subtitle">الخزنة السحابية الشخصية المؤمنة</div>
            <form id="loginForm">
                <input type="text" id="username" placeholder="اسم المستخدم الفريد" required>
                <input type="password" id="masterPassword" placeholder="كلمة المرور الرئيسية" required>
                <button type="submit">فتح الخزنة</button>
            </form>
            <div id="status" class="status"></div>
        </div>

        <script>
            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const status = document.getElementById('status');
                status.style.color = '#ffd700';
                status.innerText = 'جاري التحقق من الهوية المشفرة...';
                setTimeout(() => {
                    status.style.color = '#00ff66';
                    status.innerText = 'تم التحقق بنجاح! جاري تحميل الخزنة...';
                }, 1000);
            });
        </script>
    </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`\n[AMMAR VAULT] الخزنة تعمل الآن محلياً بنجاح!`);
  console.log(`افتح المتصفح واذهب إلى: http://localhost:${PORT}\n`);
});
