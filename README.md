# A minimalist Vue modal component

[![Build Status](https://travis-ci.org/Dymantic/vue-modal.svg?branch=master)](https://travis-ci.org/Dymantic/vue-modal)

A bare-bones, minimal approach to a reusable modal component.

- pass content in as default slot, caller has control over modal window structure
- simple, unobtrusive transition
- manage open/close by prop only
- emits "close" event on ESC keypress

### Example Usage

```
//in your own SFC
<template>
    <div>
        <button type="button" @click="showModal = true">Show the modal</button>
        <modal :show="showModal" @close="showModal = false">
            Wow, what an amazing modal!
            <button type="button" @click="showModal = false">Show the modal</button>
        </modal>
    </div>
</template>

<script>
import Modal from "@dymantic/modal"

export default {
    data() {
        return {showModal: false};
    }
}
</script>
```

### Installation

`npm install @dymantic/modal`
