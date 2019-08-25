import React from 'react';
import { Atext, Spanseparator, Mydiv } from './style_Breadcrumb';

export default function Breadcrumb(props) {
    const {
        routes, variant, onExpand, isExpand, component, separator,
    } = props;
    function addSpanBreadcrum(text, separatorInput, href, active) {
        if (active) {
            return (
                <>
                    <Atext href={href} active variant={variant}>{text}</Atext>
                </>
            );
        }
        if (text === '...') {
            return (
                <>
                    <Atext onClick={onExpand}>{text}</Atext>
                    <Spanseparator>{separatorInput}</Spanseparator>
                </>
            );
        }
        return (
            <>
                <Atext href={href}>{text}</Atext>
                <Spanseparator>{separatorInput}</Spanseparator>
            </>
        );
    }
    let Arraya = [];
    if (component) {
        Arraya = routes.map((e, eindex) => component(e, eindex));
    }
    else if (isExpand) {
        Arraya = [addSpanBreadcrum(routes[0].name, separator, routes[0].href),
            addSpanBreadcrum('...', separator),
            addSpanBreadcrum(routes[routes.length - 1].name,
                separator, routes[routes.length - 1].href, true),
        ];
    }
    else {
        Arraya = routes.map((e, eindex) => {
            if (eindex === routes.length - 1) {
                return addSpanBreadcrum(e.name, separator, e.href, true);
            }
            return addSpanBreadcrum(e.name, separator, e.href);
        });
    }
    return (
        <Mydiv>
            {Arraya}
        </Mydiv>
    );
}
Breadcrumb.defaultProps = {
    separator: '/',
    isExpand: false,
    variant: 'default',
};
