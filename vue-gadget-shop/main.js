const app = Vue.createApp({
    data() {
        return {
            title: 'Vue Gadget Shop',
            description:
                'Découvrez les derniers gadgets électroniques de haute technologie !',
            gadgets: [
                {
                    name: 'Smartphone XZ',
                    price: 799,
                    img: './assets/phone.jpg',
                    inStock: true,
                },
                {
                    name: 'Laptop pro',
                    price: 1299,
                    img: './assets/laptop.jpg',
                    inStock: false,
                },
                {
                    name: 'Ecouteurs bluetooth',
                    price: 199,
                    img: './assets/earbuds.jpg',
                    inStock: true,
                },
            ],
            cart: [],
        };
    },
    computed: {
        cartTotal() {
            let total = 0;
            this.cart.forEach((product) => {
                total += product.price;
            });
            return total;
        },
        discountedTotal() {
            const total = this.cartTotal;
            return total > 1000 ? total * 0.9 : total;
        },
    },
    methods: {
        addToCart(gadget) {
            this.cart.push(gadget);
        },
        removeFromCart(index) {
            if (isNaN(index)) return;
            this.cart.splice(index, 1);
        },
    },
});

const mountedApp = app.mount('#app');
