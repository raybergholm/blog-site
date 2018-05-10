export const Width = (size) => `w-${size}`;
export const Height = (size) => `h-${size}`;
export const MaxWidth = (size) => `mw-${size}`;
export const MaxHeight = (size) => `mh-${size}`;

export const generateSizeClasses = ({width, height, maxWidth, maxHeight}) => {
  const tokens = [];
  
  if(width){
    tokens.push(Width(width));
  }

  if(height){
    tokens.push(Height(height));
  }

  if(maxWidth){
    tokens.push(MaxWidth(maxWidth));
  }

  if(maxHeight){
    tokens.push(MaxHeight(maxHeight));
  }

  return tokens;
};