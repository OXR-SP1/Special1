document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.product-card');

    // إعداد ظهور الكروت تدريجياً (Staggered Animation)
    cards.forEach((card, index) => {
        // إضافة الكلاس الأساسي
        card.classList.add('reveal-card');
        
        // تأخير ظهور كل كارت بناءً على ترتيبه
        setTimeout(() => {
            card.classList.add('active');
        }, 200 * index); // فرق 200 ملي ثانية بين كل كارت
    });

    // تأثير إضافي: لمعة عند الضغط على الزر
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});

// أضف هذا الكود في ملف script.js
const staffCards = document.querySelectorAll('.staff-card');

staffCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
        card.style.opacity = '1';
    }, 100);
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});