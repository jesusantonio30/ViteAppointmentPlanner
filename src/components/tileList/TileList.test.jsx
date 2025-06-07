import React from 'react';
import { render, screen, within } from '@testing-library/react'
import { TileList } from './TileList';

describe('TileList component', () => {
    test('Render the correct number of Tile components', () => {
        const tiles = [
            {name: 'Tile 1', description: 'Obj1'},
            {name: 'Tile 2', description: 'Obj2'},
            {name: 'Tile 3', description: 'Obj3'},
        ]
        
        const { container } = render(<TileList tiles={tiles}/>);
        const tileElements = container.querySelectorAll(".tile-container");

        expect(tileElements.length).toBe(3);
    })

    test('Handles empty tiles', () => {
        const tiles = [];
        const { container } = render(<TileList tiles={tiles}/>);
        const tileElements = container.querySelectorAll(".tile-container");

        expect(tileElements.length).toBe(0);
    })

    test('Passes correct props for contacts', () => {
        const tiles = [
            {
                name: 'Jesus', 
                phone: '123-456-7890', 
                email: 'jesusm@example.com'
            },
            {
                name: 'John', 
                phone: '124-452-7810', 
                email: 'johnd@example.com'
            },
        ]

        const { container } = render(<TileList tiles={tiles}/>);
        const tileElements = container.querySelectorAll('.tile-container');

        const firstTile = tileElements[0];
        const secondTile = tileElements[1];

        expect(within(firstTile).getByText('Jesus')).toBeInTheDocument();
        expect(within(firstTile).getByText('123-456-7890')).toBeInTheDocument();
        expect(within(firstTile).getByText('jesusm@example.com')).toBeInTheDocument();

        expect(within(secondTile).getByText('John')).toBeInTheDocument();
        expect(within(secondTile).getByText('124-452-7810')).toBeInTheDocument();
        expect(within(secondTile).getByText('johnd@example.com')).toBeInTheDocument();
        
    })
})