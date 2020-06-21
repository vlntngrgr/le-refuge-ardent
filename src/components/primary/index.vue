<template>
    <nav ref="menu" class="menu-primary">
        <header @click.stop.prevent="onGoHome" class="menu-primary__header">
            <slot name="header">
                {{ header.label }}
            </slot>
        </header>

        <div class="menu-primary__content" v-click-outside="clickOutside">
            <div v-if="isMobile" @click.stop.prevent="onToggle" class="menu-primary__toggle">
                MENU
            </div>

            <ul v-if="displayed || !isMobile" class="menu-primary__items">
                <menu-element :key="m.name" v-for="m in menu" :item="m" />
            </ul>
        </div>
    </nav>
</template>

<script>
import MenuElement from './element'

export default {
    name: 'MenuPrimary',

    props: {
        header: {
            type: Object,
        },

        menu: {
            type: Array,
            required: true,
        },
    },

    components: {
        MenuElement
    },

    data() {
        return {
            displayed: false,
            windowWidth: window.innerWidth,
        }
    },

    computed: {
        isMobile() {
            return this.windowWidth <= 961;
        }
    },

    methods: {
        clickOutside(event) {
            this.displayed = false;
        },

        onGoHome() {
            this.$router.push({
                name: 'accueil'
            });
        },

        onToggle() {
            this.displayed = !this.displayed;
        },       
    },

    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    }
}

</script>

<style lang="scss" scoped>
    @import './style';
</style>
