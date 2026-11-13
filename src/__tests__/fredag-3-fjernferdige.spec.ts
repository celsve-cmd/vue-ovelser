// src/__tests__/fredag-3-fjernferdige.spec.ts
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../components/ToDoList.vue'

describe('TodoList med «Fjern ferdige»', () => {
  it('fjerner bare de ferdige oppgavene', async () => {
    const wrapper = mount(TodoList)
    expect(wrapper.text()).toContain('Kjøpe kaffe')
    expect(wrapper.text()).toContain('Skrive tirsdagens kode')

    const knapp = wrapper.findAll('button').find((b) => b.text() === 'Fjern ferdige')
    expect(knapp, 'Fant ingen knapp med teksten «Fjern ferdige»').toBeTruthy()

    await knapp!.trigger('click')
    expect(wrapper.text()).toContain('Kjøpe kaffe')
    expect(wrapper.text()).not.toContain('Skrive tirsdagens kode')
  })
})