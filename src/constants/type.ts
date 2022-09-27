export type ProgramSliderData = {
    intro: string;
    title: string;
    purpose: string;
    images: Image[];
}

type Image = {
    url: string;
    textContent: string;
}

export type Story = {
    imageUrl: string;
    title: string;
    subtitle: string;
    type: string;
}

export type Statistics = {
    imageUrl: string;
    text: string;
    stats: string;
}