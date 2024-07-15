import { render, screen } from '@testing-library/react'
import Options from '../Options'

test("display images as  expected from server", async () => {
    render(<Options optionType="scoops" />)
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2)

    const imgText = scoopImages.map(item => item.alt)
    expect(imgText).toEqual(["Chocolate scoop", "Vanilla scoop"])
})