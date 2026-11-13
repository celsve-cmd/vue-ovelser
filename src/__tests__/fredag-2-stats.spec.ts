// src/__tests__/fredag-2-stats.spec.ts
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoStats from '../components/ToDoStats.vue'

describe('TodoStats med tre tilstander', () => {
  it('sier «Ingen oppgaver» når lista er tom', () => {
    const wrapper = mount(TodoStats, { props: { total: 0, done: 0 } })
    expect(wrapper.text()).toContain('Ingen oppgaver')
  })

  it('sier «Én oppgave» når det er nøyaktig én', () => {
    const wrapper = mount(TodoStats, { props: { total: 1, done: 0 } })
    expect(wrapper.text()).toContain('Én oppgave')
  })

  it('sier «5 oppgaver» når det er flere', () => {
    const wrapper = mount(TodoStats, { props: { total: 5, done: 2 } })
    expect(wrapper.text()).toContain('5 oppgaver')
  })
})