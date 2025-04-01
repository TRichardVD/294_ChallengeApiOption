app.component('cart-display', {
    template:
        /*html*/
        `
    <div class="cart">
                <h2>🛒 Mon Panier ({{cart.length}})</h2>
                <ul v-for="(product, index) in cart">
                    <li>
                        {{product.name}} - {{product.price}}€
                        <button
                            @click="addToCart(product)"
                        >
                            ➕
                        </button>
                        {{product.quantity}}
                        <button
                            @click="decrFromCart(index)"
                        >
                            ➖
                        </button>
                        <button
                            class="remove-btn"
                            @click="removeFromCart(index)"
                        >
                            ❌
                        </button>
                    </li>
                </ul>
                <p v-show="cart.length === 0">Votre panier est vide.</p>
                <h3 style="color: #007bff">
                    💰 Total :
                    <span v-if="cartTotal < 1000">{{cartTotal}}&euro;</span>
                    <span v-else>
                        <s style="color: red">{{cartTotal}}&euro;</s> ➝
                        <strong style="color: green"
                            >{{discountedTotal}}&euro; (-10%)</strong
                        >
                    </span>
                </h3>
            </div>
    `,
    props: ['cart', 'cartTotal', 'discountedTotal'],
    methods: {
        removeFromCart(index) {
            this.$emit('remove-from-cart', index);
        },
        addToCart(gadget) {
            this.$emit('add-to-cart', gadget);
        },
        decrFromCart(index) {
            this.$emit('decr-from-cart', index);
        },
    },
});
