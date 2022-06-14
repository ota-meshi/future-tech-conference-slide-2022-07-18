---
layout: center
class: text-center big-title
---

<!-- prettier-ignore-end -->

# &lt;script setup&gt;の書き方

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方

::left::

- &lt;script setup&gt; と記述します
- トップレベルの変数はテンプレートで直接使用できます

::right::

<!-- prettier-ignore-start -->

```vue {all|1|2,4,11-12}
<script setup>
const msg = "Hello!";

function handleClick() {
  console.log(msg);
}
</script>

<template>
  <button
    @click="handleClick">
    {{ msg }}
  </button>
</template>
```

<!-- prettier-ignore-end -->

<div v-if="$slidev.nav.clicks === 1">

`<script>` ブロックに `setup` 属性を記述します。

</div>
<div v-if="$slidev.nav.clicks === 2">

トップレベルの変数はテンプレートで直接使用できます。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方

以前はこのように書いていました。

::left::

### Composition API

```vue
<script>
export default {
  setup() {
    const msg = "Hello!";
    function handleClick() {
      console.log(msg);
    }
    return {
      msg,
      handleClick,
    };
  },
};
</script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
```

::right::

### Options API

```vue
<script>
export default {
  data() {
    return {
      msg: "Hello!",
    };
  },
  methods: {
    handleClick() {
      console.log(this.msg);
    },
  },
};
</script>

<template>
  <button @click="handleClick">
    {{ msg }}
  </button>
</template>
```

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方

::left::

- リアクティブな状態を管理するには[Reactivity API](https://vuejs.org/api/reactivity-core.html)を使用します
- コンポーネントは`import`するだけで使用できます  
  （トップレベルの変数と同じ扱いです）

::right::

```vue {all|2,5,8|3,13}
<script setup>
import { ref } from "vue";
import MyButton from "./MyButton.vue";

const count = ref(0);

function handleClick() {
  count.value++;
}
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

<div v-if="$slidev.nav.clicks === 1">

リアクティブな状態を管理するには[Reactivity API](https://vuejs.org/api/reactivity-core.html)を使用します。

</div>
<div v-if="$slidev.nav.clicks === 2">

コンポーネントは`import`するだけで使用できます。

</div>

<!-- prettier-ignore-start -->

---
layout: sub-two-cols
---

<!-- prettier-ignore-end -->

## &lt;script setup&gt;の書き方

以前はこのように書いていました。

::left::

### Composition API

```vue
<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  setup() {
    const count = ref(0);
    function handleClick() {
      count.value++;
    }
    return {
      count,
      handleClick,
    };
  },
};
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

::right::

### Options API

```vue
<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
</script>

<template>
  <MyButton @click="handleClick">
    {{ count }}
  </MyButton>
</template>
```

<style>
  .shiki-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
</style>
