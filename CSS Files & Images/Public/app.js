let openShopping = document.querySelector('.shopping img'); // Target the shopping image
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let body = document.querySelector('body');
        let total = document.querySelector('.total');
        let quantity = document.querySelector('.quantity');

        openShopping.addEventListener('click', () => {
            body.classList.add('active');
        })
        closeShopping.addEventListener('click', () => {
            body.classList.remove('active');
        })

        let cart = [];

        // Load cart from local storage
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            renderCart();
        }

        function addToCart(name, price, img) {
            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                let item = {
                    name: name,
                    price: price,
                    image:img,
                    quantity: 1
                };
                cart.push(item);
            }
            saveCart();
            renderCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCart();
            renderCart();
        }

        function increaseQuantity(index) {
            cart[index].quantity++;
            saveCart();
            renderCart();
        }

        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                saveCart();
                renderCart();
            }
        }

        function renderCart() {
            let listCard = document.querySelector('.listCard');
            listCard.innerHTML = '';
            let totalPrice = 0;
            cart.forEach((item, index) => {
                let li = document.createElement('li');
                let image = document.createElement('img');
                image.src = `/images/${item.image}`;
                image.alt = 'Product Image';
                li.appendChild(image);
                li.innerHTML += `${item.name} - Rs.${item.price}`;
                let quantitySpan = document.createElement('span');
                quantitySpan.textContent = item.quantity;
                let removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeFromCart(index);
                });
                let plusButton = document.createElement('button');
                plusButton.textContent = '+';
                plusButton.addEventListener('click', () => {
                    increaseQuantity(index);
                });
                let minusButton = document.createElement('button');
                minusButton.textContent = '-';
                minusButton.addEventListener('click', () => {
                    decreaseQuantity(index);
                });
                li.appendChild(minusButton);
                li.appendChild(quantitySpan);
                li.appendChild(plusButton);
                li.appendChild(removeButton);
                listCard.appendChild(li);
                totalPrice += parseInt(item.price) * item.quantity;
            });
            total.textContent = `Total: Rs.${totalPrice}`;
            quantity.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }