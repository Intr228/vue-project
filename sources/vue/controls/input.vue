<script>
export default {
    'name': 'input-text',
    'props': {
        'modelModifiers': {
            'default': function () {
                return {};
            }
        },
        'modelValue': {
            'type': [String, Number],
            'default': ''
        },
        'title': {
            'type': [String, Number],
            'default': undefined
        },
        'placeholder': {
            'type': [String, Number],
            'default': undefined
        },
        'maxlength': {
            'type': [String, Number],
            'default': undefined
        },
        'minlength': {
            'type': [String, Number],
            'default': undefined
        },
        'readonly': Boolean,
        'required': Boolean
    },
    'methods': {
        'focus': function () {
            this.$refs.input.focus();
        },
        'select': function () {
            this.$refs.input.select();
        },
        'blur': function () {
            this.$refs.input.blur();
        }
    }
};
</script>
<template>
<div class="ui-input">
    <label
        v-if="title"
        v-text="required ? title + ' *' : title"
        @click="focus"
    />
    <input
        type="text"
        ref="input"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :minlength="minlength"
        :readonly="readonly"
        :required="required"
        :class="[
            'ui-input-text'
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="blur"
        @focus="focus"
    />
</div>
</template>