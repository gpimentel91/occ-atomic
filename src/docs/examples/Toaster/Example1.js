/* Simple toast */
import React, { Fragment } from 'react';
import { Toaster, Button, toaster } from '@occmundial/occ-atomic';

export default function Example1() {
    const toast = {
        description: 'This toast will be automatically dismissed in 5 seconds'
    };
    return (
        <Fragment>
            <Button onClick={() => toaster.success(toast)}>Launch toast</Button>
            <Toaster container={document.body} />
        </Fragment>
    );
}
