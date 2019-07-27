import React, { Component } from 'react';
import './Badge.css';

function BadgeDefault({ brand, shadowCss, icon, style, children }) {
  return (
    <div className={`Badge badge-${brand} ${shadowCss}`} style={style}>
      <div className={`${icon} text-${brand}`}>{children}</div>
    </div>
  );
}

function BadgeLink({ brand, shadowCss, icon, style, href, children }) {
  return (
    <a className={`Badge Badge-link badge-${brand} ${shadowCss}`} style={style} href={href} >
      <div className={`${icon} text-${brand}`}>{children}</div>
    </a>
  );
}

export default class Badge extends Component {
  render() {
    const icon = this.props.icon;
    const brand = this.props.brand || 'default';
    const style = this.props.style;

    const hasShadow = Boolean(this.props.shadow);
    const shadowBrand = (typeof this.props.shadow === 'string') ? this.props.shadow : brand;
    const shadowCss = hasShadow ? `box-shadow-${shadowBrand}`: '';
    
    const hasHref = Boolean(this.props.href);
    const props = {
      ...this.props,
      brand, shadowCss, style, icon
    };
    
    return hasHref ? (
      <BadgeLink {...props} />
    ) : (
      <BadgeDefault {...props} />
    ) ;
  }
}
