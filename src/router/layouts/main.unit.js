import MainLayout from './main'

describe('@layouts/main', () => {
  xit('renders its content', () => {
    const slotContent = '<p>Hello!</p>'
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
