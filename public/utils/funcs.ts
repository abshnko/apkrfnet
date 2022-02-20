export const scroll = (ref: any) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smoth" });
  }
};
