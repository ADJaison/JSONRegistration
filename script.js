// Инициализация Telegram Web App
Telegram.WebApp.ready();

// Функция для валидации и отправки формы
function validateForm(event) {
    event.preventDefault(); // Предотвращение перезагрузки страницы

    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const region = document.getElementById('region').value;
    const address = document.getElementById('address').value;
    const errorMessage = document.getElementById('error-message');

    // Проверка ФИО
    if (/[\d]/.test(fullname)) {
        errorMessage.textContent = "ФИО не может содержать цифры.";
        return;
    }

    // Проверка номера телефона
    if (!/^\d+$/.test(phone)) {
        errorMessage.textContent = "Номер телефона должен содержать только цифры.";
        return;
    }

    // Проверка региона
    if (!region) {
        errorMessage.textContent = "Выберите регион из списка.";
        return;
    }

    // Если ошибок нет
    errorMessage.textContent = "";

    // Формирование данных
    const formData = {
        fullname: fullname,
        phone: phone,
        region: region,
        address: address
    };

    // Отправка данных в Telegram Web App
    Telegram.WebApp.sendData(JSON.stringify(formData));

    // Отображение уведомления
    alert("Данные успешно отправлены!");
}

// Привязка обработчика к форме
document.getElementById('registration-form').addEventListener('submit', validateForm);
