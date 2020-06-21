<template>
    <component 
        :is="component.is" 
        v-bind="component.attrs" 
        v-on="component.listener"
        :class="classes"
        v-if="!item.hidden">


        <component 
            class="primary-item__icon" 
            v-if="item.icon"
            :is="item.icon"
        />

        <span class="primary-item__label">
            {{ item.label }}
        </span>

        <span v-if="hasChildren" class="glyph arrow-down"></span>

        <ul class="primary-item__children" v-if="hasChildren">
            <menu-element
                v-for="c in item.children"
                :key="c.name"
                :item="c" />
        </ul>
    </component>
</template>

<script>
import * as SVGs from '@/components/svg'

export default {
    name: "MenuElement",

    props: {
        item: {
            type: Object,
            required: true,
            validator: (value) => {
                let ret = true;
                
                ret = value.hasOwnProperty('name');
                ret = value.hasOwnProperty('label');
                
                return ret;
            }
        }
    },

    components: {
        ...SVGs
    },

    computed: {
        attrs() {
            let ret = {};
            return ret;
        },

        classes() {
            let ret = {
                'primary-item': true,
                
                '-is-active': this.item.hasOwnProperty('active') && this.item.active,
                '-is-disabled': this.item.hasOwnProperty('disabled') && this.item.disabled,
                '-is-hidden': this.item.hasOwnProperty('hidden') && this.item.hidden,

                '-has-icon': this.item.hasOwnProperty('icon'),
                '-has-events': this.item.hasOwnProperty('events'),
            };

            return ret;
        },

        component() {
            let ret = {
                is: 'span',
                attrs: {},
                listeners: {}
            };

            if(this.item.route) {
                switch(typeof this.item.route) {
                    case 'object':
                        ret.is = 'router-link';
                        ret.attrs.to = this.item.route;
                        ret.attrs.class = 'primary-item__link';
                        break;
                    case 'string': 
                        ret.is = 'a';
                        ret.attrs.href = this.item.route;
                        ret.attrs.class = 'primary-item__link'
                        break;
                }
            }

            return ret;
        },

        hasChildren() {
            return this.item.hasOwnProperty('children');
        },

        listeners() {
            let ret = {};

            if(!this.item.disabled && this.item.hasOwnProperty('events')) {
                Object.keys(this.item.events).forEach(event => {
                    ret[event + '.stop.prevent'] = this.item.events[event];
                });
            }

            return ret;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import './style';
</style>
