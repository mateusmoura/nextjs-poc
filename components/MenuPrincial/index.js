import React from 'react';
import { useAmp } from 'next/amp';

import
{
  Menu,
  Dropdown,
  Container,
  Image as ImageSemantic,
} from 'semantic-ui-react'

export const config = { amp: 'hybrid' };

const MenuPrincial = () => {
  const isAmp = useAmp();

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header href="/">
          {
            isAmp ? (
              <amp-img
                width={48}
                height={48}
                src='/images/favicon/favicon-48x48.png'
                alt='Metrópoles Logo'
                layout='responsive'
              ></amp-img>
            ) : <ImageSemantic size='mini' src="/images/favicon/favicon-48x48.png" style={{ marginRight: '1.5em' }} />
          }
          Metropóles em NextJS
        </Menu.Item>
        <Menu.Item as='a' href="/">Home</Menu.Item>
        <Menu.Item as="a" href="/blog">Posts</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
};

export default MenuPrincial;