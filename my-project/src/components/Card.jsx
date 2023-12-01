
import React from 'react';

const Card = ({ title, content, src, alt, style, className, imgStyle, aStyle, href, text, subTitle, subStyle }) => {
  return (
    <div>
        <h4 className={subStyle}>{subTitle}</h4>
        <img className={imgStyle} src={src} alt={alt}/>
        <h2 className={style}>{title}</h2>
        <p className={className}>{content}</p>
        <a className={aStyle} href={href}>{text}</a>
      {/* */}
      
    </div>
  );
};

export default Card;
