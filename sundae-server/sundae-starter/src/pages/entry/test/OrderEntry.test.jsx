import { render, screen, logRoles } from '@testing-library/react'
import { server } from '../../../mocks/server'
import { http, HttpResponse } from "msw";
import OrderEntry from "../OrderEntry";

//reset handlers
test('handles error from server', async () => {
    server.resetHandlers(
        http.get('"http://localhost:3030/scoops', () => {
            return new HttpResponse(null, { status: 500 })
        })
    )
    const { container } = render(<OrderEntry />)
    const alerts = await screen.findAllByText('Error.')
    logRoles(container)
    expect(alerts).toHaveLength(2)

})
