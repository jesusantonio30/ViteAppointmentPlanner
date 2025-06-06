import React from 'react';
import { render, screen } from '@testing-library/react'
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
})