import { render, screen } from '@testing-library/react'
import SummaryForm from '../SummaryForm'
import userEvent from '@testing-library/user-event'

//inital condition test
test('Initial conditions', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    })
    expect(checkbox).not.toBeChecked()


    const confirmButton = screen.getByRole('button', {
        name: /Confirm order/i
    })

    expect(confirmButton).toBeDisabled()

})


//first click test
test('checkbox and button state after first clicked', async () => {
    const user = userEvent.setup()
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    })
    const confirmButton = screen.getByRole('button', {
        name: /Confirm order/i
    })

    await user.click(checkbox)
    expect(confirmButton).toBeEnabled()

    await user.click(checkbox)
    expect(confirmButton).toBeDisabled()

})

//popover test
test('popover responds to the hover', async () => {
    const user = userEvent.setup()

    render(<SummaryForm />)

    const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i)

    expect(nullPopover).not.toBeInTheDocument()

    const conditionText = screen.getByText(/terms and conditions/i)
    await user.hover(conditionText)

    const popoverText = screen.getByText(/No ice cream will actually be delivered/i)

    expect(popoverText).toBeInTheDocument()

    await user.unhover(conditionText)

    expect(popoverText).not.toBeInTheDocument()

})

