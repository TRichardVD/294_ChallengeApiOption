const app = Vue.createApp({
    data() {
        return {
            title: 'Vue Gadget Shop',
            description:
                'Découvrez les derniers gadgets électroniques de haute technologie !',
            gadgets: [
                {
                    id: 1,
                    name: 'Smartphone XZ',
                    price: 799,
                    img: './assets/phone.jpg',
                    inStock: true,
                },
                {
                    id: 2,
                    name: 'Laptop pro',
                    price: 1299,
                    img: './assets/laptop.jpg',
                    inStock: false,
                },
                {
                    id: 3,
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
                total += product.price * product.quantity;
            });
            return total.toFixed(2);
        },
        discountedTotal() {
            const total = this.cartTotal;
            return total > 1000 ? (total * 0.9).toFixed(2) : total;
        },
    },
    methods: {
        addToCart(gadget) {
            const item = this.cart.find((e) => e.id === gadget.id);
            if (!item) {
                this.cart.push({ ...gadget, quantity: 1 });
            } else {
                item.quantity += 1;
            }
        },
        decrFromCart(index) {
            const item = this.cart[index];
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    this.removeFromCart(index);
                }
            }
        },
        removeFromCart(index) {
            if (isNaN(index)) return;
            this.cart.splice(index, 1);
        },
    },
});
