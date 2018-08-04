import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";

describe("HelloWorld.vue", () => {
  test("the default for the show prop is false", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.props().show).toBe(false);
  });

  test("the modal is hidden when show prop is false", () => {
    const wrapper = shallowMount(Modal);
    const mask = wrapper.find(".dd-modal-mask");
    wrapper.setProps({ show: false });

    expect(mask.element.style.display).toBe("none");
  });

  test("the modal is displayed when the show prop is true", () => {
    const wrapper = shallowMount(Modal);
    const mask = wrapper.find(".dd-modal-mask");
    wrapper.setProps({ show: true });

    expect(mask.element.style.display).toBe("");
  });

  test("the slot contents are correctly placed in the modal", () => {
    const wrapper = shallowMount(Modal, {
      slots: { default: "Test modal content" }
    });
    const mask = wrapper.find(".dd-modal-body");

    expect(mask.element.textContent).toBe("Test modal content");
  });

  test("it emits a close event on esc", () => {
    const wrapper = shallowMount(Modal, {
      attachToDocument: true,
      propsData: { show: true }
    });
    const mask = wrapper.find(".dd-modal-mask");

    expect(mask.element.style.display).toBe("");

    wrapper.trigger("keydown.esc");

    expect(wrapper.emitted().close).toBeDefined();
  });
});
