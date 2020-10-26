import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { expect } from 'chai'

// Esto describe qué componente va a testear
describe('HelloWorld.vue', () => {

  // Describe qué es lo que debería hacer el test
  it('should render correct contents', () => {

    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')

  }),

  // Vrifica que la propiedad tenga el texto correcto
  it("should has the correct text", () => {

    // Llamo al componente, ejecuto su función data y miro el atributo que quiero testear
    expect(HelloWorld.data().msg)
      .to.equal("Welcome to Your Vue.js App");

  })

})
