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
            <div class="avis">
                <h3>Avis</h3>
                <div v-if="gadget.reviews" class="review" v-for="comment of gadget.reviews">
                    {{comment.name}} - {{comment.star}} ⭐ {{comment.text}}
                </div>
                <p v-else>Aucun commentaire.</p>
            </div>
            
            <review-form @add-review="addReview"></review-form>
        </div>
    `,
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.gadget);
        },
        addReview(review) {
            this.$emit('add-review', this.gadget, review);
        },
    },
});
