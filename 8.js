console.log("Завдання: 8 ==============================");

function task8() {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  function fetchFakeData() {
    // Створюємо fakeData константу з данними { name: "John",age: 30}
    const fakeData = {
      name: "John",
      age: 30,
    };
    // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
    return Promise.resolve(fakeData);
  }
  // Викликаємо функцію fetchFakeData
  fetchFakeData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає

  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();
