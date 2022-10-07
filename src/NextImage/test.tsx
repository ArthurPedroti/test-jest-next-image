import { render, screen } from '@testing-library/react'

import NextImage from '.'

describe('<NextImage />', () => {
  it('should render the heading', () => {
    render(<NextImage />)

    expect(screen.getByRole('heading', { name: /NextImage/i })).toBeInTheDocument()
  })
})