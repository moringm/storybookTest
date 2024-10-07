import Button from '../components/Button'

export default {
    title: 'components/Button',
    component: Button,
    // label: 'Press Me',
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'lg',
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: 'green',
    label: 'Press Me',
    size: 'lg',
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'sm',
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: 'red',
    label: 'Press Me',
    size: 'lg',
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor: 'red',
    label: 'Press Meeeeeeeeeeeee',
    size: 'md',
}