<template>
    <div 
        :class="classes"
        v-bind="attrs"
        v-on="listeners">
        
        <div v-if="!active" class="menu-mood__header">
            <slot name="header"></slot>
        </div>
        
        <div v-else class="menu-mood__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuMood',

    data() {
        return {
            active: false,
            transition: false,
        }
    },

    computed: {
        attrs() {
            return {
                ...this.$attrs
            }
        },

        classes() {
            return {
                'menu-mood': true,

                '-is-transition': this.transition
            }
        },

        listeners() {
            return {
                mouseover: () => this.onMouseOver(),
                mouseout: () => this.onMouseOut(),
                click: () => this.onMouseOver(),
            }
        }
    },

    methods: {
        onMouseOut() {
            this.$debounce({
                callback: () => {
                    this.active = false;
                    this.transition = true;
                }, 
                timer:1 * 300
            });
        },

        onMouseOver() {
            this.$debounce({
                callback: () => {
                    this.active = true; 
                }, 
                timer:1 * 300
            });
        }   
    }
}
</script>

<style lang="scss" scoped>
    @import './style';
</style>
