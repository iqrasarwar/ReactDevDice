import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { locals } from "./locls";
import messages from "./messages";

const Provider = ({ children, locale = locals.FRENCH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
