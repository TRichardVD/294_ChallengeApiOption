app.component('gadget-display', {
    props: ['gadget'], // Le gadget est passé en tant que prop depuis le parent
    template:
        /*html*/
        `
        <div class="gadget">
            <img :src="gadget.img" alt="Gadget" />
            <h2>{{ gadget.name }}</h2>
            <p>{{ gadget.price }}&euro;</p>
            <p v-if="gadget.inStock">✅ En stock</p>
            <p v-else>❌ En rupture de stock</p>
            <button
                :disabled="!gadget.inStock"
                @click="addToCart(gadget)"
            >
                Ajouter au panier
            </button>
        </div>
    `,
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.gadget);
        },
    },
});
