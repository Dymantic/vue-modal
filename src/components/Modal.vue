<template>
  <transition name="modal">
    <div class="dd-modal-mask" v-show="show">
      <div class="dd-modal-wrapper">
        <div class="dd-modal-body">
          <slot></slot>  
        </div>
      </div>
    </div>    
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  created() {
    window.addEventListener("keydown", this._closeOnEsc);
  },

  methods: {
    _closeOnEsc(ev) {
      if (ev.keyCode === 27) {
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="css" type="text/css">
.dd-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.dd-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.dd-modal-body {
  display: inline-block;
  max-width: 90vw;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  max-height: 95vh;
  color: #333;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>



