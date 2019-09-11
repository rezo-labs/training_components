import React from 'react';
import PropsType from 'prop-types';
import { BreadcrumbItem, Separator, WrapBreadcrumb } from './style_Breadcrumb';

export default function Breadcrumb(props) {
    const {
        routes, variant, onExpand, isExpand, component, separator,
    } = props;
    /* Add span element in Breadcrum */
    function addSpanBreadcrum(text, separatorInput, href, active) {
        if (active) {
            return (
                <>
                    <BreadcrumbItem href={href} active variant={variant}>{text}</BreadcrumbItem>
                </>
            );
        }
        if (text === '...') {
            return (
                <>
                    <BreadcrumbItem onClick={onExpand} elipsic>{text}</BreadcrumbItem>
                    <Separator>{separatorInput}</Separator>
                </>
            );
        }
        return (
            <>
                <BreadcrumbItem href={href}>{text}</BreadcrumbItem>
                <Separator>{separatorInput}</Separator>
            </>
        );
    }
    let Arraya = [];
    /* Handle Component */
    if (component) {
        Arraya = routes.map((e, eindex) => component(e, eindex));
    }
    else if (!isExpand) { /* Expand Breadcrum */
        Arraya = routes.map((e, eindex) => {
            if (eindex === routes.length - 1) {
                return addSpanBreadcrum(e.name, separator, e.href, true);
            }
            return addSpanBreadcrum(e.name, separator, e.href);
        });
    }
    else { /* Render default Breadcrumb */
        Arraya = [addSpanBreadcrum(routes[0].name, separator, routes[0].href),
            addSpanBreadcrum('...', separator),
            addSpanBreadcrum(routes[routes.length - 1].name,
                separator, routes[routes.length - 1].href, true),
        ];
    }
    return (
        <WrapBreadcrumb>
            {Arraya}
        </WrapBreadcrumb>
    );
}
Breadcrumb.defaultProps = {
    separator: '/',
    isExpand: false,
    variant: 'default',
    onExpand: null,
    component: null,
};
Breadcrumb.propTypes = {
    /** The separator default is /, but user can also custom separator */
    separator: PropsType.node,
    /** Shorten breadcrumb */
    isExpand: PropsType.bool,
    /** Set color for breadcrumb */
    variant: PropsType.string,
    /** event onClick when user click Ellipsis */
    onExpand: PropsType.func,
    /** user can custom render for breadcrumb, new render element will replace old one */
    component: PropsType.func,
    /** Routes is Array of Objects(href, name) to render items for breadcrumbs */
    routes: PropsType.arrayOf(PropsType.shape({
        href: PropsType.string.isRequired,
        name: PropsType.string.isRequired,
    })).isRequired,
};
