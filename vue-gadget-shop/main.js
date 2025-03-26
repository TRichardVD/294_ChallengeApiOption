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
        };
    },
});
