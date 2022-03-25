//children toma todo lo que le pases al componente
export const Mensaje = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}>{children}</div>;
};
