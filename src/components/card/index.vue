<template>
    <div
        :class="classes"
        v-bind="attrs"
        v-on="listeners">

        <router-link 
            v-if="route" 
            tag="div" 
            :to="route" 
            class="ui-card__header ui-card__link" > 
            <slot name="header"></slot>
            <!-- <div class="icon">
                <slot name="icon">
                    <arrow-right />
                </slot>
            </div> -->
        </router-link>

        <div v-else class="ui-card__header">
            <slot name="header"></slot>
        </div>

        <div class="ui-card__body">
            <slot></slot>
        </div>

        <div class="ui-card__footer">    
            <div class="content">            
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// import ArrowRight from '@/components/svg/arrow-right'

export default {
    name: 'UiCard',

    // components: {
    //     ArrowRight
    // },

    props: {
        route: {
            type: String,
            default: null
        },

        size: {
            type: String,
            default: 'medium',
            validator: (value) => {
                return ['small', 'medium', 'large'].includes(value);
            }
        },
    },

    computed: {
        attrs() {

        },

        classes() {
            return {
                'ui-card': true,

                '-s': this.size === 'small',
                '-m': this.size === 'medium',
                '-l': this.size === 'large',

                '-has-global-action': this.hasAllAction,
                '-has-footer-action': this.hasFooterAction
            }
        },

       listeners() {
           return {
               ...this.$listeners
           }
       }
    },
}
</script>

<style lang="scss" scoped>
    @import './style';
</style>
