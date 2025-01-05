import { Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop = () => (
  <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
)
export const Mobile = () => (
  <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}
