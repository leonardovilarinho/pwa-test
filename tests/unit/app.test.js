import { mount } from 'vue-test-utils'
import Hello from '../../src/components/Hello.vue'

describe('Hello', () => {
  test('é uma instância do Vue', () => {
    const wrapper = mount(Hello)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
