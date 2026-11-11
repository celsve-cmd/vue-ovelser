import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../components/ToDoItem.vue'

describe('TodoItem', () => {
  const task = { id: 1, text: 'Kjøpe kaffe', done: false }

  it('viser teksten fra props', () => {
    const wrapper = mount(TodoItem, { props: { task } })
    expect(wrapper.text()).toContain('Kjøpe kaffe')
  })

  it('emitter toggle med id når den krysses av', async () => {
    const wrapper = mount(TodoItem, { props: { task } })
    await wrapper.get('input[type="checkbox"]').trigger('change')
    expect(wrapper.emitted('toggle')).toEqual([[1]])
  })

  it('emitter remove med id når Slett klikkes', async () => {
    const wrapper = mount(TodoItem, { props: { task } })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('remove')).toEqual([[1]])
  })
})