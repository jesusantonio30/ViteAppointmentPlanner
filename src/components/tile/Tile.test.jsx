import React from 'react';
import { render, screen } from '@testing-library/react'
import { Tile } from './Tile'

describe('Tile component', () => {
    test('Renders contact name and description correctly', () => {
        // Arrange
        const props = {
            name: 'Jesus Morales',
            description: {
                phone: '123-456-7890',
                email: 'jesusm@example.com'
            },
        };

        render(<Tile name={props.name} description={props.description} />);

        // Act
        const name = screen.getByText('Jesus Morales');
        const phone = screen.getByText('123-456-7890');
        const email = screen.getByText('jesusm@example.com');

        // Assert
        expect(name).toBeInTheDocument();
        expect(name).toHaveClass("tile-title");

        expect(phone).toBeInTheDocument();
        expect(phone).toHaveClass("tile");

        expect(email).toBeInTheDocument();
        expect(email).toHaveClass("tile");
    })

    test('Renders appointment title and description correctly', () => {
        const props = {
        name: 'Test',
        description: {
            contact: 'Jesus Morales',
            date: '2025-06-05',
            time: '23:00'
        },
      }

      render(<Tile name={props.name} description={props.description}/>);

      const title = screen.getByText('Test');
      const contact = screen.getByText('Jesus Morales');
      const date = screen.getByText('2025-06-05');
      const time = screen.getByText('23:00');

      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('tile-title');

      expect(contact).toBeInTheDocument();
      expect(contact).toHaveClass('tile');

      expect(date).toBeInTheDocument();
      expect(date).toHaveClass('tile');

      expect(time).toBeInTheDocument();
      expect(time).toHaveClass('tile');
    })
})