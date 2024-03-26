$(document).ready(function() {
  // Находим элемент по классу
  var buyButton = $('.j-buy-button-add.btn.btn--small.btn--primary.btn--block');

  // Создаём новый элемент SVG
  var svgIcon = $('<svg class="icon icon--basket"><use xlink:href="#icon-basket"></use></svg>');

  // Очищаем содержимое кнопки
  buyButton.empty();

  // Добавляем SVG внутрь кнопки
  buyButton.append(svgIcon);
});
