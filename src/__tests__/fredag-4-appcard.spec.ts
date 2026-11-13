// src/__tests__/fredag-4-appcard.spec.ts
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppCard from '../App.vue'

describe('AppCard', () => {
  it('viser innholdet som sendes inn i slotten', () => {
    const wrapper = mount(AppCard, {
      slots: { default: '<p>Hei fra slotten</p>' },
    })
    expect(wrapper.text()).toContain('Hei fra slotten')
  })
})