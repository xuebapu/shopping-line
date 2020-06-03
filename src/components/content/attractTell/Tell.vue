<template>
  <div class="tell">
      <div>
        <p> <slot name="shang">默认字</slot></p>
        <p> <slot name="xia">默认字段</slot></p>
      </div>
      <div>
        <div><slot name="pic">默认图片</slot></div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Tell"
    }
</script>

<style scoped>
 .tell{ display: flex}
 .tell>div:nth-child(1){ width: 60%}
 .tell>div:nth-child(2){ width: 40%}
 .tell>div>p:nth-child(1){font-size: 14px; font-weight: bold; margin-top: 6%}
 .tell>div>p:nth-child(2){ color: var(--color-height-text); font-size: 12px;margin-top: 15%}

</style>
