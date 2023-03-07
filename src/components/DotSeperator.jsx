import '../assets/stylesheets/dot-seperator.css';

export default function DotSeperator({ style, children }) {
  return (
    <p className="dot-seperator" style={style}>
      {children}
    </p>
  );
}
