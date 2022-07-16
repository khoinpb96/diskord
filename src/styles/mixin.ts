export const showUp = () => {
  return ` 
    animation: showUp 500ms;

    @keyframes showUp {
      from {
        opacity: 0;
        transform: scale(1.05) translateY(-20%);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0px);
      }
    }
    `;
};
