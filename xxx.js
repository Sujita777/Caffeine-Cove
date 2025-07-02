document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    // เมื่อส่งฟอร์ม
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // ป้องกันไม่ให้หน้ารีเฟรช

        // รับค่าจากฟอร์ม
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // ตรวจสอบว่าฟอร์มกรอกครบแล้วหรือไม่
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); // รีเซ็ตฟอร์มหลังจากส่ง
        } else {
            alert("Please fill in all fields.");
        }
    });
});
