
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Link from '.'; 
import { LINK_REL, LINK_TARGET } from '@/utils/constants';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    target: {
      control: {
        type: 'select',
        options: Object.keys(LINK_TARGET),
      },
    },
    rel: { control: 'text' },
    className: { control: 'text' },
    styles: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Link>> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://example.com',
  children: 'Example Link',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: 'https://example.com',
  target: LINK_TARGET.Blank, 
  rel: 'noopener noreferrer',
  children: 'Open External Link',
  className: 'external-link',
  styles: { color: 'blue', textDecoration: 'underline' },
};

export const StyledLink = Template.bind({});
StyledLink.args = {
  href: 'https://example.com',
  children: 'Styled Link',
  className: 'styled-link',
  styles: { fontWeight: 'bold', color: 'red' },
};

export const CustomRelLink = Template.bind({});
CustomRelLink.args = {
  href: 'https://example.com',
  rel: 'nofollow',
  children: 'NoFollow Link',
};

export const SelfLink = Template.bind({});
SelfLink.args = {
  href: '/internal-page',
  target: LINK_TARGET.Self,
  children: 'Internal Link',
};
