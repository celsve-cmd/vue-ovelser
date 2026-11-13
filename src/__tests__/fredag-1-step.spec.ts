// src/__tests__/fredag-1-step.spec.ts
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppCounter from '../components/AppCounter.vue'

describe('AppCounter med step', () => {
  it('øker med step fra tallfeltet', async () => {
    const wrapper = mount(AppCounter)
    expect(wrapper.find('p').text()).toContain('Teller: 0')

    const felt = wrapper.find('input[type="number"]')
    expect(felt.exists(), 'Fant ikke noe tallfelt: <input type="number">').toBe(true)
    await felt.setValue('5')

    const knapper = wrapper.findAll('button')
    await knapper[0]!.trigger('click')
    expect(wrapper.find('p').text()).toContain('Teller: 1')

    await knapper[0]!.trigger('click')
    expect(wrapper.find('p').text()).toContain('Teller: 2')

    await knapper[1]!.trigger('click')
    expect(wrapper.find('p').text()).toContain('Teller: 1')

    await knapper[2]!.trigger('click')
    expect(wrapper.find('p').text()).toContain('Teller: 0')
  })
})