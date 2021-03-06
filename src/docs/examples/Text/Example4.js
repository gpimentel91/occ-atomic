/* Spacing */
import React from 'react';
import { Text } from '@occmundial/occ-atomic';

export default function Example4() {
    return (
        <div>
            <Text topXTiny bottomXTiny>X-Tiny</Text>
            <Text topTiny bottomTiny>Tiny</Text>
            <Text topSmall bottomSmall>Small</Text>
            <Text topBase bottomBase>Base</Text>
            <Text topMedium bottomMedium>Medium</Text>
            <Text topLarge bottomLarge>Large</Text>
            <Text topXLarge bottomXLarge>X-Large</Text>
        </div>
    );
}
