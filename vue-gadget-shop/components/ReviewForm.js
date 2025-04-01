app.component('review-form', {
    template:
        /* html */
        `
    <form class="review-form" @submit.prevent="onSumbit">
                <div class="field">
                    <label for="name-field">Nom</label>
                    <input type="text" id="name-field" name="name-field" v-model="name"/>
                </div>
                <div class="field">
                <label for="star-field">Note</label>
                <select name="star-field" id="star-field" v-model.number="star">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
                <div class="field">
                <label for="comment-field">Commentaire :</label>
                <textarea id="comment-field" name="comment-field" v-model="text"></textarea>
                    
                </div>
                <input type="submit" id="submit-button" value="Envoyer l'avis">
            </form>
    `,
    methods: {
        onSumbit() {
            if (
                !this.name ||
                !this.text ||
                !this.star ||
                this.text === '' ||
                this.name === ''
            ) {
                alert('Review is incomplete. Please fill out every field.');
                return;
            }

            const review = {
                name: this.name,
                text: this.text,
                star: this.star,
            };

            this.$emit('add-review', review);

            this.text = '';
            this.name = '';
            this.star = null;
        },
    },
    data() {
        return {
            name: '',
            star: 0,
            text: '',
        };
    },
});
