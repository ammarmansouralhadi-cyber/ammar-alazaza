const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// قاعدة بيانات مصغرة في الذاكرة
let users = {};

// مسار رئيسي للتأكد من عمل السيرفر
app.get('/', (req, res) => {
    res.json({ message: "سيرفر منصة عمار العزازه يعمل بنجاح! 🚀" });
});

// مسار تسجيل/دخول الزائر
app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "يرجى كتابة الاسم وكلمة المرور" });
    }

    if (!users[username]) {
        users[username] = { password, balance: 1000.00 };
    }

    res.json({
        message: "تم الدخول بنجاح",
        username,
        balance: users[username].balance
    });
});

// مسار الإيداع والسحب
app.post('/api/wallet', (req, res) => {
    const { username, action, amount } = req.body;
    if (!users[username]) return res.status(404).json({ error: "المستخدم غير موجود" });

    const numAmount = parseFloat(amount);
    if (action === 'deposit') {
        users[username].balance += numAmount;
    } else if (action === 'withdraw') {
        if (users[username].balance < numAmount) {
            return res.status(400).json({ error: "الرصيد غير كافٍ" });
        }
        users[username].balance -= numAmount;
    }

    res.json({ balance: users[username].balance });
});

app.listen(PORT, () => {
    console.log(`⚡ السيرفر شغال الآن على المنفذ: http://localhost:${PORT}`);
});
