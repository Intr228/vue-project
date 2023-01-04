<script>
export default {
    'name': 'i-button',
    'props': {
        'disabled': Boolean,
        'transparent': Boolean,
        'large': Boolean,
        'small': Boolean,
        'wide': Boolean
    },
    'emits': [
        'blur',
        'click',
        'focus'
    ],
    'methods': {
        'blur': function () {
            this.$el.blur();
        },
        'focus': function () {
            this.$el.focus();
        },
        'click': function () {
            this.$el.click();
        }
    }
};
</script>
<template>
<button
    :disabled="disabled"
    :class="[
        'ui-button',
        {
            'ui-button-transparent': transparent,
            'ui-button-large': large,
            'ui-button-small': small,
            'ui-button-wide': wide
        }
    ]"
    @blur="$emit('blur')"
    @click="$emit('click')"
    @focus="$emit('focus')"
>
    <slot/>
</button>
</template>