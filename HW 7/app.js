/* const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas];

const deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
}; */

const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('')
}