import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
//components
import Link from 'carbon-react/lib/components/link/link'
import DropdownFilter from 'carbon-react/lib/components/dropdown-filter/dropdown-filter'
import ImmutableHelper from 'carbon-react/lib/utils/helpers/immutable/immutable'

function getOptions() {
  return ImmutableHelper.parseJSON([{
    id: "1", name: "Digite a empresa"
  }, {
    id: "2", name: "Empresa Modelo 2"
  }, {
    id: "3", name: "Demonstração"
  }]);
};
export default props => (
                <nav id="user-menu">
                <ul className="">
                    <li>
                      <DropdownFilter
                          options={ getOptions() }
                          value="1"
                          cacheVisibleValue={ false }
                          />
                    </li>
                    <li><div className="divider"></div></li>
                    <li>
                        <Link href="#" icon="phone" tooltipMessage={i18n.t('menu.lateral.contact')} tooltipPosition="bottom" tooltipAlign="center" />
                    </li>
                    <li>
                        <Link href="#" icon="alert" tabbable={ true } tooltipMessage={i18n.t('menu.lateral.alert')} tooltipPosition="bottom" tooltipAlign="center" />
                    </li>
                    <li>
                        <Link href="#" icon="settings" tooltipMessage={i18n.t('menu.lateral.conf')} tooltipPosition="bottom" tooltipAlign="center" />
                    </li>
                    <li>
                        <Link href="#" icon="logout" tooltipMessage={i18n.t('menu.lateral.logout')} tooltipPosition="bottom" tooltipAlign="center" />
                    </li>
                </ul>
            </nav>
        )
 