console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  // Створюємо новий проміс.
  const promise = new Promise((resolve, reject) => {
    // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
    setImmediate(() => {
      // Генеруємо випадкове число від 0 до 1
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
        resolve(`Більше ніж 0.5`);
      } else {
        // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
        reject(`Менше ніж 0.5`);
      }
    });
  });
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо `Проміс зарезолвився з значенням: ${value}`.
  promise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо `Проміс відхилився з помилкою: ${error}`.
    .catch((error) => {
      console.log(`Проміс відхилився з помилкою: ${error}`);
    })
    // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо "Проміс завершено".
    .finally(() => {
      console.log(`Проміс завершено`);
    });
}

// Викликаємо функцію task6
task6();
