/*
 * MyAbout Messages
 *
 * This contains all the text for the MyAbout component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MyAbout';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MyAbout component!',
  },
});
